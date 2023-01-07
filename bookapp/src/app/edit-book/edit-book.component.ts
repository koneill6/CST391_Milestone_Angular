import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MusicServiceService} from '../service/music-service.service';
import {Router} from '@angular/router';
import { Book } from '../models/Book';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-book.component.html',
})
export class EditBookComponent implements OnInit
{
  book:Book = null;

  constructor(private route: ActivatedRoute, private service: MusicServiceService, private location: Location, private router:Router) { }

  ngOnInit()
  {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getBook(Number.parseInt(id), (book:Book) =>
    {
      this.book = book;
    });
  }

  public onCancel()
  {
    console.log("I am going back");
    this.location.back();
  }

  public onSubmit()
  {
    this.service.updateBook(this.book, (status:any) =>
    {
      console.log("The return from updateBook() was " + status);
    });
    this.router.navigate(['/list-books']);
  }
}
