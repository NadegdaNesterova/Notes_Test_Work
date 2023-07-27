import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INote } from '../modules/notes/interfaces/note';

const MOCK_NOTES_DATA = [{ header: 'Заметка 1', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel facilis tempora voluptate, repellat suscipit magnam aperiam accusantium temporibus veritatis quidem amet, aut illum consequuntur dignissimos. Consequuntur autem aperiam similique beatae?' },
{ header: 'Заметка 2', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel facilis tempora voluptate, repellat suscipit magnam aperiam accusantium temporibus veritatis quidem amet, aut illum consequuntur dignissimos. Consequuntur autem aperiam similique beatae?' },
{ header: 'Заметка 3', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel facilis tempora voluptate, repellat suscipit magnam aperiam accusantium temporibus veritatis quidem amet, aut illum consequuntur dignissimos. Consequuntur autem aperiam similique beatae?' },
{ header: 'Заметка 4', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel facilis tempora voluptate, repellat suscipit magnam aperiam accusantium temporibus veritatis quidem amet, aut illum consequuntur dignissimos. Consequuntur autem aperiam similique beatae?' }];

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes$ = new BehaviorSubject<INote[]>(MOCK_NOTES_DATA);

  constructor() {

  }

  getNotes() {
    return this.notes$.asObservable();
  }

  getNote(i: number) {
    const notes = this.notes$.getValue();
    return notes.find(note => notes.indexOf(note) === i);
  }

  addNote(header: string, text: string) {
    this.notes$.next([...this.notes$.getValue(), { header, text }])
  }

}
