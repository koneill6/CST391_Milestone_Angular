import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { MusicServiceService} from '../service/music-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
})
export class CreateBookComponent implements OnInit
{
  
  book:Book = new Book(-1, "", "", "", 0, 0);
  constructor(private service: MusicServiceService) { }


  ngOnInit()
  {
  }

  public onSubmit()
  {
    console.log(this.book.Author+" "+this.book.Title+" "+this.book.Genre+" "+this.book.Cost+" "+this.book.Stock);
    this.service.createBook(this.book, (status:any) => {
      console.log("Return from createBook() was" + status);
    });
  }
}
