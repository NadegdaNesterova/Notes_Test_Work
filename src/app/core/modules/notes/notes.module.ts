import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NoteComponent } from './components/note/note.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesHeaderComponent } from './components/notes-header/notes-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule
  ],
  declarations: [NotesComponent, NoteComponent, NotesListComponent, NotesHeaderComponent]
})
export class NotesModule { }
