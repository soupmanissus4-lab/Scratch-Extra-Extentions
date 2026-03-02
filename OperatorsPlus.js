class OperatorsPlus {
    getInfo() {
        return {
            id: 'operatorsplus', 
            name: 'Operators+', 
            blocks: [
                {
                    opcode: 'pi', 
                    blockType: Scratch.BlockType.REPORTER, 
                    text: 'π'
                }, // Added missing comma
                {
                    opcode: 'power', 
                    blockType: Scratch.BlockType.REPORTER, 
                    text: '[NUMBER] ^ [POWER]', 
                    arguments: {
                        NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }, 
                        POWER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
                    }
                }, // Added missing comma
                {
                    opcode: 'SinAndCosStuff', 
                    blockType: Scratch.BlockType.REPORTER, 
                    text: '[OPERATION] of [NUMBER]', 
                    arguments: {
                        NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, 
                        OPERATION: { type: Scratch.ArgumentType.STRING, menu: 'signsOfCosAndSinAndsoOn' }
                    }
                }, // Added missing comma
                {
                    opcode: 'IsBetween', 
                    blockType: Scratch.BlockType.BOOLEAN, 
                    text: 'is [num] inbetween [min] and [max]', 
                    arguments: {
                        num: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }, 
                        min: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }, 
                        max: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
                    }
                },
                {
                    opcode: 'directionOfXY', blockType: Scratch.BlockType.REPORTER, text: 'the direction of x: [wantedX] and y: [wantedY] from me', arguments: {
                        wantedX: {
                            type: Scratch.ArgumentType.NUMBER, defaultValue: 0
                        }, wantedY: {
                            type: Scratch.ArgumentType.NUMBER, defaultValue: 0
                        }
                    }
                },

            ], 
            menus: {
                signsOfCosAndSinAndsoOn: {
                    acceptReporters: false, 
                    items: ['cos', 'sin', 'tan', 'sqrt', 'abs'] // Added missing commas
                }, 
                inequalitySigns: {
                    acceptReporters: false, 
                    items: ['>', '<', '=', '>=', '<='] // Added missing commas
                }
            }
        };
    }

    pi() {
        return Math.PI;
    }

    power(args) {
        return Math.pow(args.NUMBER, args.POWER);
    }

    SinAndCosStuff(args) {
        const num = parseFloat(args.NUMBER);
        switch (args.OPERATION) {
            case 'cos': return Math.cos(num);
            case 'sin': return Math.sin(num);
            case 'tan': return Math.tan(num);
            case 'sqrt': return Math.sqrt(num);
            case 'abs': return Math.abs(num); // Completed missing case
            default: return 0;
        }
    }

    IsBetween(args) {
        const num = parseFloat(args.num);
        const min = parseFloat(args.min);
        const max = parseFloat(args.max);
        if(min<=max){
            return num >= min && num <= max; 
        }
        else if(min>=max){
            return num <= min && num >= max; 
        }
    }
    directionOfXY(args, util) {
        const x_position = this.runtime.getTargetForStage().x; 
        const y_position = this.runtime.getTargetForStage().y; 
        return Math.abs(y_position / x_position);
    }


}

// Register the extension with Scratch/TurboWarp
Scratch.extensions.register(new OperatorsPlus());
