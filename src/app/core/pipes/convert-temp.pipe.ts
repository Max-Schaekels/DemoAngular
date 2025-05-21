import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp'
})
export class ConvertTempPipe implements PipeTransform {

  //value contien la valeur à transformer (celle qui se trouve à gauche du |)
  // en deuxième paramètre de la fonction transforme, on met les éventuels paramètres de notre pipe (ce qui sera à droite du nom du pipe)
  //Le type de retour de la fonction transform devra correcpondre à ce que votre pipe renvoie
  transform(value: number, temp : string ): number {
    switch(temp){
          case 'c-f' :
            return value * 9/5 + 32;
          case 'f-c' :
            return (value - 32) * 5/9;
          case 'c-k':
            return value + 273.15;
          case 'k-c' :
            return value - 273.75;
          case 'f-k':
            return ((value - 32) * 5/9) + 273.15;
          case 'k-f':
            return (value - 273.15) * 9/5 + 32;
          default :
            return value; //Si on s'est trompé dans l'écriture du paramètre, on renvoie la valeur inchangée
      
      }
  }

}
