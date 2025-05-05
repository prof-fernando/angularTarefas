import { Component } from '@angular/core';
import { Tarefa, TarefaService } from '../../services/tarefa.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tarefas: Tarefa[] = [];

  constructor(private servico: TarefaService) {
    //this.tarefas = servico.listar();
    this.servico.listar().subscribe((dados) => {
      this.tarefas = dados;
    });
  }

  excluirTarefa(id:string){
    Swal.fire({
      title: 'Excluir tarefa?',
      text: 'Tem certeza que deseja excluir a tarefa ?',
      icon: 'question',
      showCancelButton: true
    }).then( (resposta) => {
      if(resposta.isConfirmed){
        // certeza que ele concordou com a exclusao
        this.servico.apagar(id);
      }
    } ) ;
  }


  // ngAfterViewInit() {

  // }

  // criar() {
  //   //this.servico.add('FAzer um café');
  //   this.servico.addTarefa({
  //     titulo: 'Novo Modelo',
  //     concluida: true,
  //   });
  // }
}
