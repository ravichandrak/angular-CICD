import { Component, OnInit } from '@angular/core';
import { SimpleAuthorService } from '../service/simple-author-service'; 
import {ActivatedRoute, Router} from '@angular/router';
import { Author } from '../service/author';
 
@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})

export class AuthorEditComponent implements OnInit {
 
  public author: Author;
  public errors;

  constructor(
    private activatedRoute : ActivatedRoute , 
    private router:Router,
    private authorService: SimpleAuthorService
  ) {
      this.author = null;
  }
 
  ngOnInit(): void {
    let authorId = this.activatedRoute.snapshot.params.authorId;
 
    let author = this.authorService.getAuthor(authorId);
    console.log(author);

    if(author)
      this.author = author;
    else
      this.router.navigateByUrl(`/404?error=No Such Author&id=${authorId}`);
 
  }

  onEditAuthor() {
    this.errors = [];
 
    if(!this.author.name)
      this.errors.push('Author name is missing');
 
    if(!this.author.biography)
      this.errors.push('Biography is missing');
 
    if(!this.author.email)
      this.errors.push('email is missing');
 
    if(this.errors.length > 0)
      console.log('invalid input');
    else{
      this.authorService.updateAuthor(this.author);     
      console.log('total authors ', this.authorService.getAuthors()) ;
      this.router.navigateByUrl('/author/list');
    }
  }

}
