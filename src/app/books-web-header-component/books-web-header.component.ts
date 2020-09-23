import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-booksweb-header',
    styleUrls:[
        'books-web-header.component.css'
    ],
    templateUrl:'books-web-header.component.html'    
})
export class BooksWebHeaderComponent {
    
    @Input() public title = 'Web App - Production';
    
    public selectedIndex;

    constructor() {
        this.selectedIndex = 0;
        
    }
    addActiveStyle(menuIndex) {
        this.selectedIndex = menuIndex;
    }
}