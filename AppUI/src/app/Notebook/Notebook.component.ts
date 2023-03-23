import { Component, OnInit } from '@angular/core';
import { NotebookService } from './Notebook.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NotebookCreateUpdateDto } from '../Models/Notebook';
import { NoteBookType } from '../Models/CommonModels';

@Component({
  selector: 'app-Notebook',
  templateUrl: './Notebook.component.html',
  styleUrls: ['./Notebook.component.css']
})
export class NotebookComponent implements OnInit {

  noteBook: NotebookCreateUpdateDto = {
    id: '',
    text: ''
  };

  constructor(
    private noteBookService: NotebookService,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
  ) { }

  ngOnInit() {

    switch (this.config.data.type) {
      case NoteBookType.industry:
        this.noteBookService.getIndustryNotebook(this.config.data.noteBookId).subscribe((res) => {
          this.noteBook.id = res.id;
          this.noteBook.text = res.text
        });
        break;

      case NoteBookType.stock:
        this.noteBookService.getStockNotebook(this.config.data.noteBookId).subscribe((res) => {
          this.noteBook.id = res.id;
          this.noteBook.text = res.text
        });
        break;
    }
  }

  saveNotebook() {

    switch (this.config.data.type) {
      case NoteBookType.industry:
        this.noteBookService.putIndustryNoteBook(this.noteBook.id, this.noteBook).subscribe((res) => { this.ref.close(res) });
        break;

      case NoteBookType.stock:
        this.noteBookService.putStockNoteBook(this.noteBook.id, this.noteBook).subscribe((res) => { this.ref.close(res) });
        break;
    }

  }
}
