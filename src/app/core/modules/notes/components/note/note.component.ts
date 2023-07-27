import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { NotesService } from 'src/app/core/services/notes.service';
import { INote } from '../../interfaces/note';
import { Subscription } from 'rxjs';
import { IParams } from '../../interfaces/params';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit, OnDestroy {

  note: INote;

  private subscription = new Subscription();

  constructor(private route: ActivatedRoute, private notesService: NotesService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription.add(this.route.queryParams.subscribe((params: IParams) => {
      if (params.index) {
        this.note = this.notesService.getNote(Number(params.index));
        this.cdr.markForCheck();
      }
    }))

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
