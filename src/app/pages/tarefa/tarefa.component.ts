import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { Tarefa, TarefaService } from '../../services/tarefa.service';

import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarefa',
  imports: [MatInputModule, MatFormFieldModule, MatRadioModule, FormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss',
})
export class TarefaComponent {
  titulo: string = '';
  descricao: string = '';
  concluido: boolean = false;
  id:string = '';

  constructor(private tarefaService: TarefaService, route: ActivatedRoute) {
     route.paramMap.subscribe( (pars) => {
      this.id =  pars.get('id') ?? '' ;
      console.log('chegou:', this.id);
      if(this.id != ''){
        // carregar a tarefa do banco
        this.tarefaService.buscar(this.id).subscribe( (dados ) =>{
            console.log('data:', dados);

        } );
      }
    } );
  }


  gravar() {
    console.log(this.titulo, this.descricao, this.concluido);
    this.tarefaService.addTarefa({
      titulo: this.titulo,
      descricao: this.descricao,
      concluida: this.concluido,
      id: this.id
    }).then( (novoID) =>{
      // pega id do item salvo
       this.id = novoID;
       Swal.fire({
        icon: 'success',
        title: 'Sucesso!'+novoID,
        text: 'Tarefa salva com sucesso!',
      });
    } )  ;
    
   
  }
}
