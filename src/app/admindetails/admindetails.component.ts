import {AccountDetails} from '../Accountdetails';
import {User} from '../User';
import {UserService} from '../user.service';
import {UserDetails} from '../userDetails';
import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, Form, FormGroup, FormBuilder ,ReactiveFormsModule,FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {

  constructor(private router: Router, private userService: UserService  , private formBuilder: FormBuilder , public dialog: MatDialog) {}
  users: User[];
 form: FormGroup;
 success : String;
 error: String;
  userDetails = new UserDetails();
  accountDetails: AccountDetails[];
  ngOnInit() {
     this.form = new FormGroup({
      amount:new FormControl (['' , [Validators.pattern('[0-9]+'), Validators.required]]),
      userControl: new FormControl (['' , [Validators.required]]),
      userControl1:new FormControl ( ['' , [Validators.required]]),
      remarks :new FormControl (),
    });
    this.userService.getAdminUsers()
      .subscribe(data => {
        this.users = data;
      });
  }

  submitUser(): void {
    if (this.userDetails.fromAccountNumber === this.userDetails.toAccountNumber) {
      this.error = 'ERROR :  FROM ACCOUNT NUMBER AND TO ACCOUNT NUMBER IS SAME';
      this.openDialog(this.error);
      //alert('Form accountnumber and to account number are same');
    } else {
      this.userService.submitUser(this.userDetails)
        .subscribe(data => {
          this.accountDetails = data;
          this.success = 'Success : Money Succesfully transferred';
          this.openDialog(this.success);
        });
    }
  }

  openDialog(message) {
    this.dialog.open(AdmindetailsComponentDialog, {
     data : {
       message : message
     }
    });
  }
}

@Component({
  selector: 'app-admindetails-dialog',
  templateUrl: './admindetails.component.dialog.html',
})
export class AdmindetailsComponentDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

