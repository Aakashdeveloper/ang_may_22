import { Component } from '@angular/core';
import {IUser} from './forms.model';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './forms.component.html'
})

export class FormsComponent {

    myEmployee = new IUser('Amit','Sharma','','','')

}