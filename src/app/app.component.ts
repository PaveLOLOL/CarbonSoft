import {Component} from '@angular/core';
import {NotesService} from "./service/notes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarbonSoft';

  constructor(private readonly notesService: NotesService) {
  }



}
