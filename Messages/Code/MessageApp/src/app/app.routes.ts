import { Routes } from '@angular/router';
import { AddMessageFormComponent } from './add-message-form/add-message-form.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MessageMainComponent } from './message-main/message-main.component';

export const routes: Routes = [
    { path : '', component: MessageMainComponent },
    { path : 'add', component: AddMessageFormComponent },
    { path : '**', component: NotFoundComponent }
];
