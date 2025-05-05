import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../../services/tarefa.service';

import Swal from 'sweetalert2';

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

  constructor(private tarefaService: TarefaService) {}

  gravar() {
    console.log(this.titulo, this.descricao, this.concluido);
    this.tarefaService.addTarefa({
      titulo: this.titulo,
      descricao: this.descricao,
      concluida: this.concluido,
    });
    this.titulo = '';
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Tarefa salva com sucesso!',
    });
  }
}
