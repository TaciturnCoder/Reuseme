import { Component, OnInit, Input } from '@angular/core';
import { Cont } from 'src/types';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    @Input() root!: Cont;

    constructor() { }

    ngOnInit(): void {
    }

}
