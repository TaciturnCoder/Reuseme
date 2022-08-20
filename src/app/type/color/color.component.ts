import { Component, OnInit, Input } from '@angular/core';
import { Conf } from "../../../types"

@Component({
    selector: 'type-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
    @Input() data!: Conf;

    constructor() { }

    ngOnInit(): void {
    }

}
