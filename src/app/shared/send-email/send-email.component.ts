import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
  standalone:true,
  imports:[
    FormsModule,
    CommonModule
  ]
})
export class SendEmailComponent {
  @Input() email: string = '';
  sended = false;

  sendMail(){
    this.sended = true;
  }
}
