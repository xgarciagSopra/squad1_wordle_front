import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent {

firstKeyBoardRow = ["Q","W","E","R","T","Y","U","I","O","P"];
secondKeyBoardRow = ["A","S","D","F","G","H","J","K","L","Ñ"];
thirdKeyBoardRow = ["DELETE","Z","X","C","V","B","N","M","ENVIAR"];

}
