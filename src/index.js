const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let paragraph = expr.split('**********');
    let text = ''
  
    paragraph.map( itemPar => {
      
      let word = []
      for (let i = 0, j = itemPar.length; i < j; i += 10) { word.push(itemPar.slice(i, i + 10)) }
      
      word.map( itemWord => {
        let letter = []
        let res = []
        for (let i = 0, j = itemWord.length; i < j; i += 2) { letter.push(itemWord.slice(i, i + 2)) }
        
        letter.map( itemLetter => { (itemLetter === '00') ? ( res.push(' ') ) : ( (itemLetter === '10') ? res.push('.') : res.push('-')) })
        res = res.join('').split(' ').filter( i => i !== '')
        
        res.map( item => { 
          if (item.length > 5) {
            for (let i = 0, j = item.length; i < j; i += 5) { 
              text += MORSE_TABLE[(item.slice(i, i + 5))] }
          }
        text += ((MORSE_TABLE[item] != undefined) ? (MORSE_TABLE[item]) : (' '))
        })
      })
      text += ' '
      })
      return (text.trim())
}

module.exports = {
    decode
}