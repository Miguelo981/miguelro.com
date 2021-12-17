import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactMeForm } from '../models/forms/contact-me.model';
import { Location } from '@angular/common';

@Component({
    selector: 'contact-dialog',
    styleUrls: ['./contact.dialog.scss'],
    templateUrl: './contact.dialog.html',
})
export class ContactDialog implements OnInit {
    public contactForm: FormGroup;
    isLoading = false;

    constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string },
        public dialogRef: MatDialogRef<ContactDialog>,
        private location: Location) { }

    ngOnInit() {
        this.contactForm = new FormGroup({
            fullname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            message: new FormControl('', [Validators.required, Validators.maxLength(1000)])
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    public hasError = (controlName: string, errorName: string) =>{
        return this.contactForm.controls[controlName].hasError(errorName);
    }

    public onCancel = () => {
        this.location.back();
    }

    public reset() {
        this.contactForm.reset();
    }

    public createContact = (contactFormValue: ContactMeForm) => {
        if (!this.contactForm.valid) return;
        
        this.executeContactFormCreation(contactFormValue);
    }

    private executeContactFormCreation = (contactFormValue: ContactMeForm) => {
        const contactForm: ContactMeForm = {
          fullname: contactFormValue.fullname,
          email: contactFormValue.email,
          message: contactFormValue.message
        }

        this.isLoading = true;

        // TODO Make API call here
     
        /* let apiUrl = 'api/owner';
        this.repository.create(apiUrl, owner)
          .subscribe(res => {
            //this is temporary, until we create our dialogs
            this.location.back();
          },
          (error => {
            //temporary as well
            this.location.back();
          })
        ) */
    }
}