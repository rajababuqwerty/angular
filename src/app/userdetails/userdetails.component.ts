import { AccountDetails } from '../Accountdetails';
import {User} from '../User';
import {UserService} from '../user.service';
import {UserDetails} from '../userDetails';
import {Component, OnInit, Input} from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule, FormGroup , FormBuilder, FormControlName} from '@angular/forms';
import {Router} from '@angular/router';
import {Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  users: User[];
  userDetails = new UserDetails();
  accountDetails: AccountDetails[];
  success : String;
  error: String;
 form: FormGroup;

  constructor(private router: Router, private userService: UserService , private formBuilder: FormBuilder , public dialog: MatDialog) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      amount:new FormControl (['' , [Validators.pattern('[0-9]+'), Validators.required]]),
      userControl: new FormControl (['' , [Validators.required]]),
      userControl1:new FormControl ( ['' , [Validators.required]]),
      remarks :new FormControl (),
    });
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
      });
  }


  submitUser(): void {
    if (this.userDetails.fromAccountNumber === this.userDetails.toAccountNumber) {
      this.error = 'ERROR :  FROM ACCOUNT NUMBER AND TO ACCOUNT NUMBER IS SAME';
      this.openDialog(this.error);
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
    this.dialog.open(UserdetailsComponentDialog, {
     data : {
       message : message
     }
    });
  }
}

  @Component({
    selector: 'app-userdetails-dialog',
    templateUrl: './userdetails.component.dialog.html',
  })
  export class UserdetailsComponentDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  }


