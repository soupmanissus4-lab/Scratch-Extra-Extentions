class ScratchFetch {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Math",
            "name": "Math",
            "blocks": [
                 "opcode": "pi",
                 "blockType": "reporter",
                 "text": "pi",
                 "arguments": {}   
            ]
        }
    }
    pi(){
        return 3.14159265357
    }
  
}

Scratch.extensions.register(new ScratchFetch())