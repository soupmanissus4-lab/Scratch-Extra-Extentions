class OperatorsPlus {
  getInfo() {
    return {
      id: 'operatorsplus',
      name: 'Operators+',
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
          opcode: 'xyCheck',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is x [inequality] [xMin] or y [inequalityTwo] [yMin]?',
          arguments: {
            inequality: { type: Scratch.ArgumentType.STRING, menu: 'inequalitySigns' },
            xMin: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            inequalityTwo: { type: Scratch.ArgumentType.STRING, menu: 'inequalitySigns' },
            yMin: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
          }
        }
      ],
      menus: {
        signsOfCosAndSinAndsoOn: {
          acceptReporters: false,
          items: ['cos', 'sin', 'tan', 'sqrt', 'abs']
        },
        inequalitySigns: {
          acceptReporters: false,
          items: ['>', '<', '=', '>=', '<=']
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
      case 'cos': return Math.cos(num);
      case 'sin': return Math.sin(num);
      case 'tan': return Math.tan(num);
      case 'sqrt': return Math.sqrt(num);
      case 'abs': return Math.abs(num);
      default: return 0;
    }
  }

  xyCheck(args) {
    const compare = (val, op) => {
      if (op === '>') return val > 0;
      if (op === '<') return val < 0;
      if (op === '=') return val === 0;
      if (op === '>=') return val >= 0;
      if (op === '<=') return val <= 0;
      return false;
    };
    return compare(args.xMin, args.inequality) || compare(args.yMin, args.inequalityTwo);
  }
}

Scratch.extensions.register(new OperatorsPlus());
