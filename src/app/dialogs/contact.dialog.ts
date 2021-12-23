import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactMeForm } from '../models/forms/contact-me.model';
import { Location } from '@angular/common';
import { ContactFormService } from '../services/contact-form/contact-form.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

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
        private location: Location,
        private contactFormService: ContactFormService,
        private _snackBar: MatSnackBar,
        private translateService: TranslateService) { }

    ngOnInit() {
        this.contactForm = new FormGroup({
            full_name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            message: new FormControl('', [Validators.required, Validators.maxLength(1000)])
        });
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, 'X', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
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
            full_name: contactFormValue.full_name,
            email: contactFormValue.email,
            message: contactFormValue.message
        }

        this.isLoading = true;

        this.contactFormService.createForm(contactForm)
            .subscribe(response => {
                this.translateService.get(response.i18n)
                    .subscribe(lang => {
                        this.openSnackBar(lang)
                    })
                this.isLoading = false;
            });

     
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