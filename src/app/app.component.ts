import { Component } from '@angular/core';

import { Cont } from "../types"
import sample from '../assets/sample.json'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ngReuseme';

    root: Cont = sample;
    edit: Cont = this.root;
}
