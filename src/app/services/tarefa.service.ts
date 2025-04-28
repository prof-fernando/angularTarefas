import { Injectable } from '@angular/core';

export interface Tarefa {
  titulo: string;
  descricao?: string;
  concluida: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  tarefas: Tarefa[] = [];
  constructor() {}

  addTarefa(novaTarefa: Tarefa) {
    this.tarefas.push(novaTarefa);
  }

  add(tituloTarefa: string) {
    this.tarefas.push({
      titulo: tituloTarefa,
      concluida: false,
    });
  }
  listar(): Tarefa[] {
    return this.tarefas;
  }
}
