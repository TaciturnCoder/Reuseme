import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Comp } from "../../../types"

@Component({
    selector: 'cat-leaf',
    templateUrl: './leaf.component.html',
    styleUrls: ['./leaf.component.css']
})
export class LeafComponent implements OnInit {
    @Input() data!: Comp;

    @HostBinding("style.color") get color() {
        return this.data.conf["color"]?.value;
    }
    @HostBinding("style.background-color") get background() {
        return this.data.conf["background"]?.value;
    }
    @HostBinding("style.font-size") get size() {
        return this.data.conf["size"]?.value + "px";
    }
    @HostBinding("style.padding") get padding() {
        return this.data.conf["padding"]?.value + "px";
    }
    @HostBinding("style.grid-row") get row() {
        return "auto / span " + this.data.conf["row"]?.value;
    }
    @HostBinding("style.grid-column") get col() {
        return "auto / span " + this.data.conf["col"]?.value;
    }


    constructor() { }

    ngOnInit(): void {
    }

}
