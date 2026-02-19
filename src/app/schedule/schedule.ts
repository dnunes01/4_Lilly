import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-schedule',
  imports: [FormsModule, NgIf],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css',
})
export class Schedule {
  submitted = false;
  formData: any = null;

  submitForm(form: any) {
    this.submitted = true;
    this.formData = form.value;
    form.reset();
  }
}