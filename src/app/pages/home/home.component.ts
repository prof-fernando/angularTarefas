import { Component } from '@angular/core';
import { Tarefa, TarefaService } from '../../services/tarefa.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
