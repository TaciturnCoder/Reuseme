import { Component, OnInit, Input } from '@angular/core';
import { Comp } from 'src/types';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    @Input() comp!: Comp;
    @Input() edit!: {
        root: Comp,
        set: (r: Comp, $event: any) => void
    }
    originalOrder = (a: any, b: any): number => {
        return 0;
    }

    constructor() { }

    ngOnInit(): void {
    }

}
