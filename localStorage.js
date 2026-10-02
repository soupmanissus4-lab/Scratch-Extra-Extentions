// Name: Local Storage
// ID: localstorage
// Description: Have a local storage
// By: SoupManIsSus_5
// License: MPL-2.0

var response = "";

class localstorage {
    getInfo() {
        return {
            id: 'localstorage',
            name: 'Local Storage',
            blocks: [
              {
                opcode: 'add',
                blockType: Scratch.BlockType.COMMAND,
                text: 'add [alertText] to local storage',
                arguments: {
                  alertText: {
                    type: Scratch.ArgumentType.STRING, defaultValue: 'Hello world!'
                  }
                }
              },
              {
                opcode: 'clear',
                blockType: Scratch.BlockType.COMMAND,
                text: 'clear local storage',
                arguments: {}
              },
              {
                opcode: 'response',
                blockType: Scratch.BlockType.REPORTER,
                text: 'response',
                arguments: {
                }
              }
            ],
            menus: {
                
            }
        };
    }
  add(args){
    localStorage.setItem()
  }
  clear(args){
    { ...localStorage } = {};
  }
  response(args){
    return { ...localStorage };
  }
}

Scratch.extensions.register(new localstorage());
