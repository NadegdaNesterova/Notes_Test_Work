import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotesService } from 'src/app/core/services/notes.service';
import { INote } from '../../interfaces/note';
import { IParams } from '../../interfaces/params';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent implements OnInit, OnDestroy {

  notes: INote[] = [];

  currentIndex!: number;

  isAdd = false;

  text = '';
  header = '';

  private subscription = new Subscription();

  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription.add(this.notesService.getNotes().subscribe(notes => {
      this.notes = notes;
    }));
    this.subscription.add(this.route.queryParams.subscribe((params: IParams) => {
      if (params.index) {
        this.currentIndex = Number(params.index)
        this.cdr.markForCheck();
      }
    }))

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setNote(i) {
    this.router.navigate([], { queryParams: { index: i }, queryParamsHandling: 'merge' })
  }

  addNote() {
    if (this.header && this.text) {
      this.notesService.addNote(this.header, this.text);
      this.isAdd = false;
      this.text = '';
      this.header = '';
    }
  }

}
