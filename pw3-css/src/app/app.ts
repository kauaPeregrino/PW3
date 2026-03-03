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
          //Para sortear algo em vetor use .random, o resto é coisa de chamar e editar variavel
          let indice = Math.floor(Math.random()*this.frases.length);
          this.mensagem = this.frases[indice];

        }
      }

      fechar(){
        if(!this.fechado ){ //(this = chama a variavel(java)/ (this.fechado == false))
          this.fechado = true;
          this.imagem = "biscoito.png" 
        }
      }
}


