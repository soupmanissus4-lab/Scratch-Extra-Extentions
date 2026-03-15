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
                        NUMBER: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        POWER: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 2
                        }
                    }
                },
                {
                    opcode: 'SinAndCosStuff',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[OPERATION] of [NUMBER]',
                    arguments: {
                        NUMBER: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        OPERATION: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'signsOfCosAndSinAndsoOn'
                        }
                    }
                },
                {
                    opcode: 'IsBetween',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'is [num] inbetween [min] and [max]',
                    arguments: {
                        num: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 3
                        },
                        min: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        max: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    }
                },
            ],
            menus: {
                signsOfCosAndSinAndsoOn: {
                    items: ['sin', 'cos', 'tan', 'asin', 'acos', 'atan']
                }
            }
        };
    }

    // --- Block Functions ---
    pi() {
        return Math.PI;
    }

    power(args) {
        return Math.pow(args.NUMBER, args.POWER);
    }

    SinAndCosStuff(args) {
        const num = parseFloat(args.NUMBER);
        switch (args.OPERATION) {
            case 'sin': return Math.sin(num);
            case 'cos': return Math.cos(num);
            case 'tan': return Math.tan(num);
            case 'asin': return Math.asin(num);
            case 'acos': return Math.acos(num);
            case 'atan': return Math.atan(num);
            default: return 0;
        }
    }

    IsBetween(args) {
        return args.num >= args.min && args.num <= args.max;
    }
}
