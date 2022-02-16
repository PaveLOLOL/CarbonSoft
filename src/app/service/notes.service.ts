import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface Note {
  id: number;
  topic: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = [ // создание списка заметок с текстом
    {
      id: 1,
      topic: 'Тема заметки 1',
      text: 'Заметка 1'
    },
    {
      id: 2,
      topic: 'Тема заметки 2',
      text: 'Заметка 2'
    },
    {
      id: 3,
      topic: 'Тема заметки 3',
      text: 'Заметка 3'
    },
    {
      id: 4,
      topic: 'Тема заметки 4',
      text: 'Заметка 4'
    },
  ];

  subject = new BehaviorSubject(0);

  createNote(): void { // создание новой заметки
    const newCreatedNote = {
      id: this.notes.length + 1,
      topic: `Тема заметки`,
      text: 'Новая заметка',
    }
    this.notes.push(newCreatedNote);
  }

  getById(id: number) { // доступ к заметке по id
    return this.notes.find((n) => n.id === id); // behaviorSubject note
  }
}

// todo routerLink он есть но кривой (по ID сделать)
// todo переход по URL
// todo behaviorSubject это ID заметки
// todo behaviorSubject при создании новой заметки



