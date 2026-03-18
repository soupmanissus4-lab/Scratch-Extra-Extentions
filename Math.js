class math {
    getInfo() {
        return {
            "id": "Math",
            "name": "Math",
            "blocks": [
                {
                     opcode: "pi",
                     blockType: "reporter",
                     text: "pi",
                     arguments: {}
                },
                {
                    opcode: "whenIsEqual",
                    blockType: "boolean",
                    text: "is [number] [operation] [numberTwo] is equal to [answer]",
                    arguments: {
                        number: { type:"number", defaultValue:2},
                        operation: { type:"string", menu: 'operation'},
                        numberTwo: { type:"number", defaultValue:3},
                        answer: { type:"number", defaultValue:6},
                    }
                }
            ],
            menus: {
                operations: {acceptReporters: false, items: ['x','/','-','+']}
            }
            
        }
    }
    pi(args){
        return 3.14159265357
    }

    whenIsEqual(args){
        const num = args.number;
        const operation = args.operation;
        const otherNum = args.numberTwo;
        const answer = args.answer;
        switch(operation){
            case "x": {return num*otherNum==answer}
            case "/": {return num/otherNum==answer}
            case "-": {return num-otherNum==answer}
            case "+": {return num+otherNum==answer}
        }
        return false;
    }
}

Scratch.extensions.register(new math())
