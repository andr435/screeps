var utilits = {

    clear_memory: function(){
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
    },

    respawn: function(settings) {
        if(Game.spawns['Spawn1'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1,
                Game.spawns['Spawn1'].pos.y,
                {align: 'left', opacity: 0.8});
        } else {
            for (var key in settings['creep']) {
                //var crps = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
                var crps = _.filter(Game.creeps, (creep) => creep.memory.role == settings.creep[key].role);
                console.log('total of creeps with role ' + settings.creep[key].role + ': ' + crps.length);
    
    
                if (crps.length < settings.creep[key].amount_on_map) {
                    var newName = this.capitalize(settings.creep[key].role) + Game.time;
                    var newBody = this.body(settings.creep[key]);
                    
                    if(Game.spawns['Spawn1'].spawnCreep(newBody, newName,
                        {memory: {role: settings.creep[key].role}}) === 0){
                            console.log('Spawning new ' + settings.creep[key].role + ': ' + newName);
                        }
                    break;
                }
            }
        }
    },

    capitalize: function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
    },
    
    body: function (set) {
        var energy = Room.energyAvailable;
        var body = [];
        if (energy >= set.type_by_energy.expert)
            body = set.body.expert;
        else if (energy >= set.type_by_energy.advanced)
            body = set.body.advanced;
        else
            body = set.body.simple;

        return body
    }
};

module.exports = utilits;
