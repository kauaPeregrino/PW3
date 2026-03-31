import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  @Input() src: string = '';  // @Input serve para passar uma informação de pai para o filho      

}
