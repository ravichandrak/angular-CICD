import {Route} from '@angular/router'; 
import {AddAuthorComponent} from './add-author/add-author.component';
import {AuthorListComponent} from './author-list/author-list.component';
import {AuthorDetailsComponent} from './author-details/author-details.component';
import {AuthorEditComponent} from './author-edit/author-edit.component';

export const appRoutes:Route[]=[
    
    {path: '', pathMatch:'full', component:AuthorListComponent},

    {path: 'author/add' , component: AddAuthorComponent},

    {path: 'author/list', component :AuthorListComponent },

    {path: 'author/details/:authorId', component:AuthorDetailsComponent},
    
    {path: 'author/edit/:authorId', component:AuthorEditComponent},
   //define a catch all route. must be your last route
   //no other routes would be processed after this one
    
];