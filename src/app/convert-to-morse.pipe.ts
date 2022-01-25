import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToMorse'
})
export class ConvertToMorsePipe implements PipeTransform {

  transform(userInput: string, args?: any): string {

    let userInputKeys = userInput.split('');
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
        default:
          // code block
          return '';
      }
    }
    return morseCode;
  }
}
