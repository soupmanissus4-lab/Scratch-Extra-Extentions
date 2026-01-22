class math {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Math",
            "name": "Math",
            "blocks": [
                {
                 "opcode": "pi",
                 "blockType": "reporter",
                 "text": "pi",
                 "arguments": {}
                }
                {
                    "opcode": "whenIsEqual",
                    "blockType": "boolean",
                    "text": "is [number] [operation] [numberTwo] is equal to [answer]"
                }
            ]
            
        }
    }
    pi(){
        return 3.14159265357
    }
  
}

Scratch.extensions.register(new math())
