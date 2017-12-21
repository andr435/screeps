var settings = {
    'creep': {
        'harvester': {
            'amount_on_map': 5,
            'body': {
                'simple': [WORK, CARRY, MOVE],
                'advanced': [WORK, WORK, CARRY, CARRY, MOVE, MOVE],
                'expert': [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
                'type_by_energy': {
                    'advanced': 700,
                    'expert': 2000
                },
                'role': 'harvester'
            },
            'upgrader': {
                'amount_on_map': 3,
                'body': {
                    'simple': [WORK, CARRY, MOVE],
                    'advanced': [WORK, WORK, CARRY, CARRY, MOVE, MOVE],
                    'expert': [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
                    'type_by_energy': {
                        'advanced': 700,
                        'expert': 2000
                    },
                    'role': 'upgrader'
                }
            },
            'builder': {
                'amount_on_map': 3,
                'body': {
                    'simple': [WORK, CARRY, MOVE],
                    'advanced': [WORK, WORK, CARRY, CARRY, MOVE, MOVE],
                    'expert': [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
                    'type_by_energy': {
                        'advanced': 700,
                        'expert': 2000
                    },
                    'role': 'upgrader'
                }
            }
        }
    }
};

module.exports = settings;
