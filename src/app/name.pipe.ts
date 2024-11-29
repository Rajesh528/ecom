import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  pure:true,
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string): string {

    return value + "test";
  }

}
