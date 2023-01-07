import { Component, OnInit} from '@angular/core';
import { MusicServiceService} from '../service/music-service.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class ListBooksComponent implements OnInit
{
  books:Book[] = [];
  selectedBook: Book = null;

  constructor(private service: MusicServiceService) { }

  ngOnInit()
  {
    this.service.getBooks( (books:Book[]) =>
    {
        this.books = books;
    });

  }

  ionViewWillEnter(){
    this.service.getBooks( (books:Book[]) =>
    {
        this.books = books;
    });
  }

  public deleteBook(b:Book){
    this.service.deleteBook(b.Id, (status:any) =>
    {
      console.log("The return from deleteBook() was " + status);
    });
    window.location.reload();
  }
}
