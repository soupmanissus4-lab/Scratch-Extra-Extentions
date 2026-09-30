class MathExtension {
    getInfo() {
        return {
            id: 'mathextension',
            name: 'Math',
            blocks: [
            {
                opcode: 'pi',
                blockType: Scratch.BlockType.REPORTER,
                text: 'pi',
                arguments: {}
            },
            {
                opcode: 'e',
                blockType: Scratch.BlockType.REPORTER,
                text: 'e',
                arguments: {}
            },
            {
                opcode: 'evenOrOdd',
                blockType: Scratch.BlockType.REPORTER,
                text: 'is [NUM] even or odd?',
                arguments: {
                    NUM: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1
                    }
                }
            },
            {
                opcode: 'whenIsEqual',
                blockType: Scratch.BlockType.BOOLEAN,
                text: 'is [number] [operation] [numberTwo] = [answer]?',
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
            },
            {
                opcode: 'lcm',
                blockType: Scratch.blockType.REPORTER,
                text: "lcm of [a] and [b]",
                arguments: {
                    a: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 5
                    },
                    b: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 6
                    }
                }
            }
            ],
            menus: {
                operations: {
                    acceptReporters: false,
                    items: ['*', '/', '-', '+']
                },
            }
        };
    }
    e(args){
        return Math.E
    }

    pi(args){
        return Math.PI;
    }
    
    evenOrOdd(args){
        const num = Math.round(args.NUM);
        if(num % 2 == 1){
            return 'odd';
        };
        else{
            return 'even';
        };
        return 'none'
    }
    
    whenIsEqual(args){
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
        };
        return 'none';
    }

    lcm(args){
        const A = args.a;
        const B = args.b;
        const gcd = (x, y) => (!y ? x : gcd(y, x % y));
        return A === 0 || B === 0 ? 0 : Math.abs(A * B) / gcd(A, B);
    }
}

Scratch.extensions.register(new MathExtension());
