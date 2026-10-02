class BrowserModels{
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
      id: 'browserModels',
      name: 'Browser Models',
      color1: '#4a90e2',
      color2: '#357abd',
      blocks: [
        {
          opcode: 'showAlert',
          blockType: 'command',
          text: 'trigger browser alert [MSG]',
          arguments: {
            MSG: {
              type: 'string',
              defaultValue: 'Hello World!'
            }
          }
        },
        {
          opcode: 'showConfirm',
          blockType: 'boolean',
          text: 'browser confirm [QUESTION]?',
          arguments: {
            QUESTION: {
              type: 'string',
              defaultValue: 'Do you want to continue?'
            }
          }
        },
        {
          opcode: 'showPrompt',
          blockType: 'reporter',
          text: 'browser prompt [QUESTION] with default [DEFAULT]',
          arguments: {
            QUESTION: {
              type: 'string',
              defaultValue: 'What is your name?'
            },
            DEFAULT: {
              type: 'string',
              defaultValue: 'Scratcher'
            }
          }
        }
      ]
    };
  }

  showAlert(args) {
    const message = String(args.MSG);
    window.alert(message);
  }

  showConfirm(args) {
    const question = String(args.QUESTION);
    return window.confirm(question);
  }

  showPrompt(args) {
    const question = String(args.QUESTION);
    const defaultValue = String(args.DEFAULT);
    const result = window.prompt(question, defaultValue);
    return result === null ? '' : result;
  }
}

Scratch.extensions.register(new BrowserModels());
