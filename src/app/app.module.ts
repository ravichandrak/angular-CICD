//imports from angular framework
import { NgModule } from "@angular/core";
import { BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router'; 
import {FormsModule} from '@angular/forms'; 

//imports from my own code
import { BooksWebAppComponent} from "./books-web-app.component";
import {BooksWebHeaderComponent} from './books-web-header-component/books-web-header.component';
import {BooksWebFooterComponent} from './books-web-footer.component'; 

import {AddAuthorComponent} from './add-author/add-author.component';

import { AltvaluePipe } from './altvalue.pipe';
import { PrefixPipe } from './prefix.pipe';

//get the route details
import {appRoutes} from './routes';

import{ SimpleAuthorService } from './service/simple-author-service';
import{AuthorDetailsComponent} from './author-details/author-details.component';
import{AuthorListComponent} from './author-list/author-list.component';
import{AuthorEditComponent} from './author-edit/author-edit.component';


import {AuthorInfoComponent} from './author-info/author-info.component';

import{AuthorCompositeComponent} from './author-composite/author-composite.component';

@NgModule({

    imports:[
        BrowserModule,  //most important angular module to enable component rendering
        FormsModule,
        //responsible for angular Single Page Routing design
        //You must load the RouterModule and supply the route information to be used
        
        RouterModule.forRoot(appRoutes) 
    ],

    declarations:[ //list all the components and other elements related to current module
        BooksWebAppComponent,
        BooksWebHeaderComponent,
        BooksWebFooterComponent,
        
        AltvaluePipe,
        
        PrefixPipe,
        
        AddAuthorComponent,
        AuthorDetailsComponent,
        AuthorEditComponent,
        AuthorListComponent,
        AuthorInfoComponent,
        AuthorCompositeComponent,        
    ],    
    
    //set of services for dependency injection
    providers:[
        SimpleAuthorService
    ],

    bootstrap:[  //startup compoent for the module
        BooksWebAppComponent   //only root component should be in bootstrap
    ]
})
export class AppModule{

}