import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-add.company',
  templateUrl: './add.company.component.html',
  styleUrls: ['./add.company.component.css']
})
export class AddCompanyDialog {

  constructor(
    public dialogRef: MatDialogRef<AddCompanyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
