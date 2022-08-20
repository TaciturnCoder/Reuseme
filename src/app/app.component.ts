import { Component, HostBinding } from '@angular/core';

import { Comp } from "../types"
import sample from '../assets/sample.json'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ngReuseme';

    root: Comp = sample;
    edit = {
        root: <Comp>this.root,
        set: function (r: Comp, $event: any) {
            $event.stopPropagation();
            this.root = r;
        }
    }

    @HostBinding("style.--primary") get primary() {
        return this.root.conf["primary"]?.value;
    }

    debug = {
        state: false,
        toggle: function () {
            this.state = !this.state;
        }
    }
}
