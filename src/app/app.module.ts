import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { TextComponent } from './type/text/text.component';
import { ColorComponent } from './type/color/color.component';
import { LeafComponent } from './cat/leaf/leaf.component';
import { ChipsComponent } from './cat/chips/chips.component';

@NgModule({
    declarations: [
        AppComponent,
        EditComponent,
        ViewComponent,
        TextComponent,
        ColorComponent,
        LeafComponent,
        ChipsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
