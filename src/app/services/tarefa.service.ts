import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  deleteDoc,
  updateDoc,
  doc
  
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Tarefa {
  titulo: string;
  descricao?: string;
  concluida: boolean;
  id?:string;
}

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  tarefas: Tarefa[] = [];
  constructor(private firestore: Firestore) {}

  async addTarefa(novaTarefa: Tarefa) : Promise<string> {
    //this.tarefas.push(novaTarefa);
    const ref = collection(this.firestore, 'tarefas');
    
    if(novaTarefa.id){
      // atualizacao
      // pega a tarefa especifica aseada em sua chave
      const tarefa = doc( ref, novaTarefa.id );
      updateDoc(tarefa,{ novaTarefa});
      return Promise.resolve(novaTarefa.id);
    }else{
      // inserção / inclusão
      const novo = 
      await addDoc(ref, novaTarefa).catch((erro) => {
        console.log('erro:', erro);
        return Promise.reject(null);
      });

      return Promise.resolve(novo.id);
    }
    
    
  }

  listar(): Observable<Tarefa[]> {
    const ref = collection(this.firestore, 'tarefas');
    return collectionData(ref, { 'idField': 'id' }) as Observable<Tarefa[]>;
    // return this.tarefas;
  }

  apagar(chave:string){
    // pega a referencia da colecao
    const ref = collection( this.firestore, 'tarefas');
    // pega a tarefa especifica aseada em sua chave
    const tarefa = doc( ref, chave );
    // apaga o item
    deleteDoc(tarefa);
  }

}
