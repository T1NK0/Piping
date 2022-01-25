import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToHash'
})
export class ConvertToHashPipe implements PipeTransform {
  transform(userInput: string, args?: any): string {

    let userInputKeys = userInput.split('');
    let hash = "";

    for (let character of userInputKeys){
      switch(character) {
        case 'a':
          // code block
          hash += '';
          break;
        case 'b':
          // code block
          hash +=  '';
          break;
        case 'c':
          // code block
          hash +=  '';
          break;
        case 'd':
          // code block
          hash +=  '';
          break;
        default:
          // code block
          return '';
      }
    }
    return hash;
  }
}