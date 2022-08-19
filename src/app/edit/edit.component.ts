import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    @Input() edit = {};

    constructor() { }

    ngOnInit(): void {
    }

}
