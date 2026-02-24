import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pw3-data-binding');
    frases: any = [
                    "Siga suas boas amizades",
                    "Você terá boa sorte",
                    "Você sofrerá um acidente no trabalho",
                    "Acredite nos seus instintos",
                    "Você terá má sorte"
    ]

    mensagem = ""; // interpolação - data Binding
    imagem = "biscoito.png";
  
    fechado: boolean = true;

    //Function
      abrir(){
        if(this.fechado ){ //(this = chama a variavel(java)/ (this.fechado == true))
          this.fechado = false;
          this.imagem = "quebrado.png" 
        }
      }

      fechar(){
        if(!this.fechado ){ //(this = chama a variavel(java)/ (this.fechado == false))
          this.fechado = true;
          this.imagem = "biscoito.png" 
        }
      }

      sortear(){
        for(this.frases = 5; ){}
          
        
      }
}


