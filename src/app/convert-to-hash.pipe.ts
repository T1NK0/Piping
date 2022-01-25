import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Md5 } from 'ts-md5';

@Pipe({
  name: 'convertToHash'
})
export class ConvertToHashPipe implements PipeTransform {
  transform(userInput: string, args?: any): string {
    if(userInput != "") {
      return Md5.hashStr(userInput);
    }
    else{
      return "";
    }
    
  }
}