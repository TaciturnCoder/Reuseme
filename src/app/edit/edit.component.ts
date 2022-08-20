import { style } from '@angular/animations';
import { NONE_TYPE, R3Identifiers } from '@angular/compiler';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Comp, Conf, Flow, Leaf, Chips, Section } from "../../types"

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    @Input() edit!: {
        root: Comp,
        set: (r: Comp, $event: any) => void
    }
    @Input() debug!: {
        state: boolean,
        toggle: () => void
    }

    originalOrder = (a: any, b: any): number => {
        return 0;
    }

    flow = Flow

    adder = {
        name: "",
        cat: "",
        add: (name: string, cat: string) => {
            if (cat == "")
                return;

            let id = Math.random().toString();

            switch (cat) {
                case "Leaf":
                    this.edit.root.comp[id] = new Leaf(name || id);
                    break;
                case "Chips":
                    this.edit.root.comp[id] = new Chips(name || id);
                    break;
                case "Section":
                    this.edit.root.comp[id] = new Section(name || id);
                    break;
            }

            this.adder.cat = ""
            this.adder.name = ""
            this.edit.root = this.edit.root.comp[id];
        }
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
