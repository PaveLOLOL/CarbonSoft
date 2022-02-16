import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from "@angular/router";

import {NotesService} from "../service/notes.service";



@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.scss']
})
export class RightComponentComponent implements OnInit {



  constructor(public noteService: NotesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('Params', params);
      this.noteService.getById(+params.id);
    })
  }

}
