class OperatorsPlus {
  getInfo() {
    return {
      id: 'operatorsplus', // Added quotes
      name: 'Operators+', // Added quotes
      blocks: [
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'π'
        },
        {
          opcode: 'power',
          blockType: Scratch.BlockType.REPORTER,
          text: '[NUMBER] ^ [POWER]',
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
            NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            OPERATION: { type: Scratch.ArgumentType.STRING, menu: 'signsOfCosAndSinAndsoOn' }
          }
        },
        {
          opcode: 'IsBetween',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is [num] inbetween [min] and [max]',
          arguments: {
            num: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
            min: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            max: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
          }
        },
      ],
      menus: {
        signsOfCosAndSinAndsoOn: {
          // Added quotes to items
          items: ['sin', 'cos', 'tan', 'asin', 'acos', 'atan']
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
    const num = parseFloat(args.NUMBER);
    // Convert degrees to radians for standard Scratch behavior
    const rad = num * (Math.PI / 180); 

    switch (args.OPERATION) {
      case 'sin': return Math.sin(rad);
      case 'cos': return Math.cos(rad);
      case 'tan': return Math.tan(rad);
      case 'asin': return Math.asin(num) * (180 / Math.PI);
      case 'acos': return Math.acos(num) * (180 / Math.PI);
      case 'atan': return Math.atan(num) * (180 / Math.PI);
      default: return 0;
    }
  }

  IsBetween(args) {
    return args.num >= args.min && args.num <= args.max;
  }
}

// Register the extension
Scratch.extensions.register(new OperatorsPlus());
