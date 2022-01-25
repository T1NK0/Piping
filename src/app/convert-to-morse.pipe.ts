import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToMorse'
})
export class ConvertToMorsePipe implements PipeTransform {

  transform(userInput: string, args?: any): string {
    let userInputKeys = userInput.toLocaleLowerCase().split('');
    let morseCode = "";

    for (let character of userInputKeys){
      switch(character) {
        case 'a':
          // code block
          morseCode += '.-';
          break;
        case 'b':
          // code block
          morseCode +=  '-...';
          break;
        case 'c':
          // code block
          morseCode +=  '-.-.';
          break;
        case 'd':
          // code block
          morseCode +=  '-..';
          break;
        case 'e':
          // code block
          morseCode +=  '.';
          break;
        case 'f':
          // code block
          morseCode +=  '..-.';
          break;
        case 'g':
          // code block
          morseCode +=  '--.';
          break;
        case 'h':
          // code block
          morseCode +=  '....';
          break;
        case 'i':
          // code block
          morseCode +=  '..';
          break;
        case 'j':
          // code block
          morseCode +=  '.---';
          break;
        case 'k':
          // code block
          morseCode +=  '-.-';
          break;
        case 'l':
          // code block
          morseCode +=  '.-..';
          break;
        case 'm':
          // code block
          morseCode +=  '--';
          break;
        case 'n':
          // code block
          morseCode +=  '-.';
          break;
        case 'o':
          // code block
          morseCode +=  '---';
          break;
        case 'p':
          // code block
          morseCode +=  '.--.';
          break;
        case 'q':
          // code block
          morseCode +=  '--.-';
          break;
        case 'r':
          // code block
          morseCode +=  '.-.';
          break;
        case 's':
          // code block
          morseCode +=  '...';
          break;
        case 't':
          // code block
          morseCode +=  '-';
          break;
        case 'u':
          // code block
          morseCode +=  '..-';
          break;
        case 'v':
          // code block
          morseCode +=  '...-';
          break;
        case 'w':
          // code block
          morseCode +=  '.--';
          break;
        case 'x':
          // code block
          morseCode +=  '-..-';
          break;
        case 'y':
          // code block
          morseCode +=  '-.--';
          break;
        case 'z':
          // code block
          morseCode +=  '--..';
          break;
        case 'æ,ä':
          // code block
          morseCode +=  '.-.-';
          break;
        case 'ø, ó, ö':
          // code block
          morseCode +=  '---.';
          break;
        case 'å':
          // code block
          morseCode +=  '.--.-';
          break;
        case '1':
          // code block
          morseCode +=  '.----';
          break;
        case '2':
          // code block
          morseCode +=  '..---';
          break;
        case '3':
          // code block
          morseCode +=  '...--';
          break;
        case '4':
          // code block
          morseCode +=  '....-';
          break;
        case '5':
          // code block
          morseCode +=  '.....';
          break;
        case '6':
          // code block
          morseCode +=  '-....';
          break;
        case '7':
          // code block
          morseCode +=  '--...';
          break;
        case '8':
          // code block
          morseCode +=  '---..';
          break;
        case '9':
          // code block
          morseCode +=  '----.';
          break;
        case '0':
          // code block
          morseCode +=  '-----';
          break;
        case '.':
          // code block
          morseCode +=  '.-.-.-';
          break;
        case ',':
          // code block
          morseCode +=  '--..--';
          break;
        case ':':
          // code block
          morseCode +=  '---...';
          break;
        case '?':
          // code block
          morseCode +=  '..--..';
          break;
      }
    }
    return morseCode;
  }
}
