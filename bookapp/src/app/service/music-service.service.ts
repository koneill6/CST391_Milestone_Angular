import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/Album';
import { Book } from '../models/Book';

@Injectable({providedIn: 'root'})
export class MusicServiceService
{
  hostname:string = "https://localhost:7028/api/BookstoreApi";

  constructor(private http: HttpClient) { }

  public getBooks(callback:any)
  {
    // Call the Get Albums API using a HTTP GET
    this.http.get<Book[]>(this.hostname + "/getAllBooks")
      .subscribe((data) =>
      {
        let books:Book[] = [];
        for(let x =0;x < data.length;++x)
        {
            books.push(new Book(data[x]['id'], data[x]['author'], data[x]['title'], data[x]['genre'],data[x]['cost'],data[x]['stock']));
        }
        callback(books);
       });
  }

  public getBook(id:number, callback:any)
  {
    this.http.get<Book>(this.hostname + "/getBooks/id/" + id)
      .subscribe((data) =>
      {
        let book:Book = new Book(data['id'], data['author'], data['title'], data['genre'],data['cost'],data['stock']);
        callback(book);
    });
  }

  public createBook(book:Book, callback:any){
    this.http.post<Book>(this.hostname + "/addBook", book)
    .subscribe((data) =>
    {
      callback(data);
    });
  }

  public updateAlbum(album:Album, callback:any)
  {
    this.http.put<Album>(this.hostname + "/albums", album)
    .subscribe((data) =>
    {
      callback(data);
    });
  }

  public updateBook(book:Book, callback:any)
  {
    this.http.put<Album>(this.hostname + "/updateBook", book)
    .subscribe((data) =>
    {
      callback(data);
    });
  }

  public deleteBook(id:number, callback:any)
  {
    this.http.delete(this.hostname + "/deleteBook/" + id)
    .subscribe((data) =>
    {
      callback(data);
    });
  }
}
function callback(data: Book) {
  throw new Error('Function not implemented.');
}

