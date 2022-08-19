import { Component, OnInit, Input } from '@angular/core';
import { Cont } from "../../types"

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    @Input() edit!: Cont;

    constructor() { }

    ngOnInit(): void {
    }

}
