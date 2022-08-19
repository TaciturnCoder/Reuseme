import { Component } from '@angular/core';

import root from '../assets/sample.json'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ngReuseme';

    edit = root;
}
