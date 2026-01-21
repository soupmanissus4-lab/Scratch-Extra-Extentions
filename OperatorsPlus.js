class OperatorsPlus {
    getInfo() {
        return {
            id: 'operatorsplus',
            name: 'Operators+',
            blocks: [
                {
                    opcode: 'pi',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'π',
                },
                {
                    opcode: 'power',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[NUMBER] ^ of [POWER]',
                    arguments: {
                        NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
                        POWER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
                    }
                },
                {
                    opcode: 'OperationsWith',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[OPERATION] of [NUMBER]',
                    arguments: {
                        NUMBER: { type: Scratch.ArgumentType.NUMBER},
                        OPERATION: { type: Scratch.ArgumentType.STRING, menu: 'signsOfCosAndSinAndsoOn' }
                    }
                }
                {
                    opcode: 'xyCheck',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'is x [inequality] than [xMin] or y [inequalityTwo] than [yMin]?',
                    arguments: {
                        inequality: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'inequalitySigns'
                        },
                        xMin:{
                            type: Scratch.ArgumentType.NUMBER
                        },
                        inequalityTwo: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'inequalitySigns'
                        },
                        yMin:{
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                }
            ],
            menus: {
                signsOfCosAndSinAndsoOn: {
                    acceptReporters: false,
                    items: ['cos', 'sin', 'tan', 'sqrt','abs']
                }
                inequalitySigns: {
                    acceptReporters: false,
                    items: ['>','<','=','>=','<=']    
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
        const num = args.NUMBER;
        const operation = args.OPERATION;

        switch (operation) {
            case 'cos':
                return Math.cos(num);
            case 'sin':
                return Math.sin(num);
            case 'tan':
                return Math.tan(num);
            case 'sqrt':
                return Math.sqrt(num);
            case 'abs':
                return Math.abs(num)
            default:
                return NaN;
        }
    }
    xyCheck(args) {
    const xMin = args.xMin;
    const inequality = args.inequality;
    const yMin = args.yMin;
    const inequalityTwo = args.inequalityTwo;

    let conditionOne = false;
    switch (inequality) {
        case '>':  conditionOne = xMin > 0; break;
        case '<':  conditionOne = xMin < 0; break;
        case '=':  conditionOne = xMin === 0; break;
        case '>=': conditionOne = xMin >= 0; break;
        case '<=': conditionOne = xMin <= 0; break;
        default:   conditionOne = false;
    }
    let conditionTwo = false;
    switch (inequalityTwo) {
        case '>':  conditionTwo = yMin > 0; break;
        case '<':  conditionTwo = yMin < 0; break;
        case '=':  conditionTwo = yMin === 0; break;
        case '>=': conditionTwo = yMin >= 0; break;
        case '<=': conditionTwo = yMin <= 0; break;
        default:   conditionTwo = false;
    }
    return conditionOne && conditionTwo;
}

    }
}

Scratch.extensions.register(new OperatorsPlus());
