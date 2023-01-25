import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'message-validation',
  templateUrl: './message-validation.component.html'
})
export class MessageValidationComponent implements OnInit {

  @Input() message: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
