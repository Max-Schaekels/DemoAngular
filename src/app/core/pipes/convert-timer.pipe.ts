import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTimer'
})
export class ConvertTimerPipe implements PipeTransform {

  transform(value: number, format: string): string {
    const minute = Math.floor(value / 60);;
    const seconde = value % 60 ;
    switch(format){
      case 'long' :
        return `${minute} minutes et ${seconde} secondes`
      case 'court' :
        return `${minute.toString().padStart(2, '0')} : ${seconde.toString().padStart(2, '0')}`;
      default :
        return `${minute.toString().padStart(2, '0')} : ${seconde.toString().padStart(2, '0')}`;
         
    }
  }

}
