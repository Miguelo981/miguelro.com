import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialog } from '../dialogs/contact.dialog';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  @Input('btnClass') btnClass: string;
  @Input('txtClass') txtClass: string;

  constructor(public contactDialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  contactMe() {
    //this.contactDialogRef.close()
    this.contactDialogRef.open(ContactDialog, {
      data: {},
      backdropClass: 'bg-contact-backdrop'
    });
  }

}
