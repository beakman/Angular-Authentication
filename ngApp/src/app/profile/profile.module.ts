// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// app
import { ProfileComponent } from './components/profile.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        ProfileComponent
    ],
    exports: [
        ProfileComponent
    ],
    providers: [ ]
})

export class ProfileModule { }
