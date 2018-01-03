import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    return args + value;
  }

}
