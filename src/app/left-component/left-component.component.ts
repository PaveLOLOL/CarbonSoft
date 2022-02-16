import {Component, OnInit} from '@angular/core';
import {NotesService} from "../service/notes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrls: ['./left-component.component.scss']
})
export class LeftComponentComponent implements OnInit {

  id: number | undefined;

  private subscription: Subscription;

  constructor(public noteService: NotesService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe((params)=> this.id = params['id']);
  }

  ngOnInit(): void {
    this.noteService.subject.subscribe((id)=> this)
  }

  openNote() {
    this.router.navigate(['/id']);
  }

}
