import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
  constructor(private firestore: Firestore) {}

  addTarefa(novaTarefa: Tarefa) {
    //this.tarefas.push(novaTarefa);
    const ref = collection(this.firestore, 'tarefas');
    addDoc(ref, novaTarefa).catch((erro) => {
      console.log('erro:', erro);
    });
  }

  add(tituloTarefa: string) {
    this.tarefas.push({
      titulo: tituloTarefa,
      concluida: false,
    });
  }
  listar(): Observable<Tarefa[]> {
    const ref = collection(this.firestore, 'tarefas');
    return collectionData(ref) as Observable<Tarefa[]>;
    // return this.tarefas;
  }
}
