import { Component, OnInit, Input } from '@angular/core';
import { Conf } from "../../../types"

@Component({
    selector: 'type-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
    @Input() data!: Conf;
    @Input() id!: string;

    constructor() { }

    ngOnInit(): void {
    }

}
