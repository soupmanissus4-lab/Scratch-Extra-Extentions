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
                },
                {
                    opcode: 'power',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[NUMBER] ^ [POWER]',
                    arguments: {
                        NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
                        POWER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
                    }
                },
                {
                    opcode: 'SinAndCosStuff',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[OPERATION] of [NUMBER]',
                    arguments: {
                        NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        OPERATION: { type: Scratch.ArgumentType.STRING, menu: 'signsOfCosAndSinAndsoOn' }
                    }
                },
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
                    opcode: 'directionOfXY',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'the direction of x: [wantedX] and y: [wantedY] from me',
                    arguments: {
                        wantedX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        wantedY: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
                    }
                }
            ],
            menus: {
                signsOfCosAndSinAndsoOn: {
                    acceptReporters: false,
                    items: ['cos', 'sin', 'tan', 'sqrt', 'abs']
                },
                inequalitySigns: {
                    acceptReporters: false,
                    items: ['>', '<', '=', '>=', '<=']
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
            case 'abs': return Math.abs(num);
            default: return 0;
        }
    }

    IsBetween(args) {
        const num = parseFloat(args.num);
        const min = parseFloat(args.min);
        const max = parseFloat(args.max);
        // Corrected logic to handle min > max automatically
        return (num >= Math.min(min, max) && num <= Math.max(min, max));
    }

    directionOfXY(args, util) {
        // Renamed from directionofXY to match opcode
        const target = util.target; // Cleaner way to get target
        if (target) {
            const x_position = target.x;
            const y_position = target.y;
            // atan2 is better for direction than atan
            return (Math.atan2(args.wantedY - y_position, args.wantedX - x_position) * 180 / Math.PI) + 90;
        } else {
            return 0;
        }
    }
}

// Register the extension with Scratch/TurboWarp
Scratch.extensions.register(new OperatorsPlus());
