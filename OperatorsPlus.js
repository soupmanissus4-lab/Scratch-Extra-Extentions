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
                    opcode: 'SinAndCosStuff',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[OPERATION] of [NUMBER]',
                    arguments: {
                        NUMBER: { type: Scratch.ArgumentType.NUMBER},
                        OPERATION: { type: Scratch.ArgumentType.STRING, menu: 'signsOfCosAndSinAndsoOn' }
                    }
                }
            ],
            menus: {
                signsOfCosAndSinAndsoOn: {
                    acceptReporters: false,
                    items: ['cos', 'sin', 'tan', 'sqrt']
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
            default:
                return NaN;
        }
    }
}

Scratch.extensions.register(new OperatorsPlus());
