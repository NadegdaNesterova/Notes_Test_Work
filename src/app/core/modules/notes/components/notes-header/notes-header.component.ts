import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-header',
  templateUrl: './notes-header.component.html',
  styleUrls: ['./notes-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesHeaderComponent implements OnInit {

  title = 'Мои заметки';

  constructor() { }

  ngOnInit() {
  }

}
