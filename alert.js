// Name: Alert
// ID: alert
// Description: Pop-up messages with JS functions.
// By: SoupManIsSus_5
// License: MPL-2.0

if (!Scratch.extensions.unsandboxed) {
  throw new Error('This extension must run unsandboxed to use alert');
}

var response = "";

class Alert {
    getInfo() {
        return {
            id: 'alert',
            name: 'Alert',
            blocks: [
              {
                opcode: 'alerting',
                blockType: Scratch.BlockType.COMMAND,
                text: 'alert [alertText]',
                arguments: {
                  alertText: {
                    type: Scratch.ArgumentType.STRING, defaultValue: 'Hello world!'
                  }
                }
              },
              {
                opcode: 'confirming',
                blockType: Scratch.BlockType.COMMAND,
                text: 'confirm [alertText]',
                arguments: {
                  alertText: {
                    type: Scratch.ArgumentType.STRING, defaultValue: 'Hello world!'
                  }
                }
              },
              {
                opcode: 'prompt',
                blockType: Scratch.BlockType.COMMAND,
                text: 'ask [alertText]',
                arguments: {
                  alertText: {
                    type: Scratch.ArgumentType.STRING, defaultValue: 'Hello world!'
                  }
                }
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
  alerting(args){
    const alerttext = args.alertText;
    window.alert(alerttext);
  }
  confirming(args){
    const alerttext = args.alertText;
    response = window.confirm(alerttext);
  }
  prompt(args){
    const alerttext = args.alertText;
    response = window.prompt(alerttext);
  }
  response(args){
    return response;
  }
}

Scratch.extensions.register(new Alert());
