import { Component } from '@angular/core';

@Component({
  selector: 'app-record-content',
  templateUrl: './record-content.component.html',
  styleUrls: ['./record-content.component.scss']
})
export class RecordContentComponent {
    public rounds: Array<any> = [
      {id: 1, intentos: 1,palabra: "abeto", ganada: true},
      {id: 2, intentos: 2,palabra: "queso", ganada: true},
      {id: 3, intentos: 5,palabra: "agudo", ganada: false},
      {id: 4, intentos: 4,palabra: "actor", ganada: true},
      {id: 5, intentos: 5,palabra: "aguas", ganada: false},
      {id: 6, intentos: 5,palabra:"alado", ganada: false},
      {id: 7, intentos: 1,palabra:"avión", ganada: true},
      {id: 8, intentos: 5,palabra:"cabra", ganada: false},
      {id: 9, intentos: 5,palabra:"campo", ganada: false},
      {id: 10, intentos: 3,palabra:"cantos", ganada: true},
    ];

    
}
