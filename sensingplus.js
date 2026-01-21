class SensingPlus {
    constructor() {
    }

getInfo() {
        return {
            "id": "SensingPlus",
            "name": "Sensing Plus",
            "blocks": [{
                        "opcode": "buttonPressedReleased",
                        "blockType": "hat",
                        "text": "when key [letter] [action]",
                        "arguments": {
                            "letter": {
                                "type": "string",
                                "menu": "keysOnKeyBoard"
                            },
                            "action": {
                                "type": "string",
                                "menu": "pressReleaseMenu"
                            },
                        },
                    },
            ],
            "menus": {
                "pressReleaseMenu": [{text:"press",value:1}, {text:"release",value:0}],
                "keysOnKeyBoard": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "", "|", ";", ":", "'", """, ",", "<", ".", ">", "/", "?", "`", "~", "Esc", "Tab", "Caps Lock", "Shift", "Ctrl", "Fn", "Windows", "Alt", "Space", "Backspace", "Enter", "Delete", "Insert"]
            }  
        };
    }
  }

Scratch.extensions.register(new SensingPlus())
