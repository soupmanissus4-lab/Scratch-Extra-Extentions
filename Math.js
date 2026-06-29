class MathExtension {
    getInfo() {
        return {
            id: 'mathextension',
            name: 'Math',
            blocks: [{
                opcode: 'pi',
                blockType: Scratch.BlockType.REPORTER,
                text: 'pi',
                arguments: {}
            }, {
                opcode: 'whenIsEqual',
                blockType: Scratch.BlockType.BOOLEAN,
                text: 'is [number] [operation] [numberTwo] = [answer] ?',
                arguments: {
                    number: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 2
                    },
                    operation: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'operations'
                    },
                    numberTwo: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 3
                    },
                    answer: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 6
                    },
                }
            }],
            menus: {
                operations: {
                    acceptReporters: false,
                    items: ['*', '/', '-', '+']
                }
            }
        };
    }

    pi(args) {
        return Math.PI();
    }

    whenIsEqual(args) {
        const num = parseFloat(args.number);
        const operation = args.operation;
        const otherNum = parseFloat(args.numberTwo);
        const answer = parseFloat(args.answer);

        switch (operation) {
            case '*':
                return (num * otherNum) === answer;
            case '/':
                return (num / otherNum) === answer;
            case '-':
                return (num - otherNum) === answer;
            case '+':
                return (num + otherNum) === answer;
        }
        return false;
    }
}

Scratch.extensions.register(new MathExtension());
