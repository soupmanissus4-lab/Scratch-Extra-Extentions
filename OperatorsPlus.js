class OperatorsPlus {
  getInfo() {
    return {
      id: 'operatorsplus',
      name: 'Operators+',
      color1: '#00BFFF',
      color2: '#0099CC',
      color3: '#007A99',
      blocks: [
        { opcode: 'pi', blockType: Scratch.BlockType.REPORTER, disableMonitor: true, text: 'pi' },
        { opcode: 'power', blockType: Scratch.BlockType.REPORTER, text: '[NUMBER] ^ [POWER]', arguments: { NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }, POWER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 } } },
        { opcode: 'SinAndCosStuff', blockType: Scratch.BlockType.REPORTER, text: '[OPERATION] of [NUMBER]', arguments: { NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, OPERATION: { type: Scratch.ArgumentType.STRING, menu: 'signsOfCosAndSinAndsoOn' } } },
        { opcode: 'strictEquality', blockType: Scratch.BlockType.BOOLEAN, text: '[text] strictly equals [strictText]', arguments: { text: { type: Scratch.ArgumentType.STRING, defaultValue: 'apple' }, strictText: { type: Scratch.ArgumentType.STRING, defaultValue: 'APPLE' } } },
        { opcode: 'replaceAll', blockType: Scratch.BlockType.REPORTER, text: 'replace all [text] in [original] with [replacementText]', arguments: { text: { type: Scratch.ArgumentType.STRING, defaultValue: 'apple' }, original: { type: Scratch.ArgumentType.STRING, defaultValue: 'apple banana apple' }, replacementText: { type: Scratch.ArgumentType.STRING, defaultValue: 'orange' } } },
        { opcode: 'replace', blockType: Scratch.BlockType.REPORTER, text: 'replace [text] in [original] with [replacementText]', arguments: { text: { type: Scratch.ArgumentType.STRING, defaultValue: 'apple' }, original: { type: Scratch.ArgumentType.STRING, defaultValue: 'apple banana' }, replacementText: { type: Scratch.ArgumentType.STRING, defaultValue: 'banana' } } },
        { opcode: 'convertCase', blockType: Scratch.BlockType.REPORTER, text: 'convert [TEXT] to [CASE]', arguments: { TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello World' }, CASE: { type: Scratch.ArgumentType.STRING, menu: 'caseMenu' } } },
        { opcode: 'nthRoot', blockType: Scratch.BlockType.REPORTER, text: '[ROOT] root of [VALUE]', arguments: { ROOT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }, VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 9 } } },
        { opcode: 'nearestDot', blockType: Scratch.BlockType.REPORTER, text: 'round [number] to the nearest [decimal]', arguments: { number: { type: Scratch.ArgumentType.NUMBER }, decimal: { type: Scratch.ArgumentType.STRING, menu: 'decimalPlaces' } } },
        { opcode: 'pointTowardsXY', blockType: Scratch.BlockType.COMMAND, text: 'point towards x: [X] y: [Y]', arguments: { X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } } },
        { opcode: 'Isbetween', blockType: Scratch.BlockType.BOOLEAN, text: 'is [num] inbetween [min] and [max]?', arguments: { num: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }, min: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }, max: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 } } },
        { opcode: 'equalities', blockType: Scratch.BlockType.BOOLEAN, text: 'is [num] [sign] [otherNum]', arguments: { num: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, otherNum: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, sign: { type: Scratch.ArgumentType.STRING, menu: 'inequalitys' } } }
      ],
      menus: {
        signsOfCosAndSinAndsoOn: { acceptReporters: false, items: ['cos', 'sin', 'tan', 'sqrt'] },
        caseMenu: { acceptReporters: false, items: ['uppercase', 'lowercase'] },
        decimalPlaces: { acceptReporters: true, items: ['1', '0.1', '0.01', '0.001', '0.0001'] },
        inequalitys: { acceptReporters: false, items: ['equal to', 'greater than', 'less than', 'greater than or equal to', 'less than or equal to'] }
      }
    };
  }

  pi() { return Math.PI; }
  power(args) { return Math.pow(args.NUMBER, args.POWER); }

  SinAndCosStuff(args) {
    const val = args.NUMBER;
    const operation = args.OPERATION;
    if (operation === 'sqrt') return Math.sqrt(val);
    const rad = val * (Math.PI / 180);
    switch (operation) {
      case 'cos': return Math.cos(rad);
      case 'sin': return Math.sin(rad);
      case 'tan': return Math.tan(rad);
      default: return 0;
    }
  }

  strictEquality(args) { return String(args.text) === String(args.strictText); }
  
  replaceAll(args) {
    return String(args.original).split(String(args.text)).join(String(args.replacementText));
  }

  replace(args) {
    return String(args.original).replace(String(args.text), String(args.replacementText));
  }

  convertCase(args) {
    const text = String(args.TEXT);
    return args.CASE === 'uppercase' ? text.toUpperCase() : text.toLowerCase();
  }

  nthRoot(args) {
    const root = args.ROOT;
    const value = args.VALUE;
    if (root === 0) return 0;
    return Math.pow(value, 1 / root);
  }

  nearestDot(args) {
    const n = args.number;
    const d = parseFloat(args.decimal);
    if (d === 0 || isNaN(d)) return Math.round(n);
    return Math.round(n / d) * d;
  }

  pointTowardsXY(args, util) {
    const dx = args.X - util.target.x;
    const dy = args.Y - util.target.y;
    const radians = Math.atan2(dx, dy);
    util.target.setDirection(radians * (180 / Math.PI));
  }

  Isbetween(args) {
    const num = Number(args.num);
    const min = Number(args.min);
    const max = Number(args.max);
    return (num >= min && num <= max) || (num <= min && num >= max);
  }

  equalities(args) {
    const num = Number(args.num);
    const otherNum = Number(args.otherNum);
    switch (args.sign) {
      case 'equal to': return num === otherNum;
      case 'greater than': return num > otherNum;
      case 'less than': return num < otherNum;
      case 'greater than or equal to': return num >= otherNum;
      case 'less than or equal to': return num <= otherNum;
      default: return false;
    }
  }
}

Scratch.extensions.register(new OperatorsPlus());
