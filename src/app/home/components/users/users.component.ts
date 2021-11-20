import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
  public searchFilter: any = '';
  addUserModal: boolean = false;

  addUserForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    title: null,
    gender: null,
    email: [''],
    username: [''],
    password: [''],
    dob: [''],
    phone: ['']
  });

  constructor(private userService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data['results'];
      console.log(this.users)
    });
  }

  addUser() {
    let user = {
      user: {
        name: {
          title: this.addUserForm.value.title,
          first: this.addUserForm.value.firstName,
          last: this.addUserForm.value.lastName
        },
        gender: this.addUserForm.value.gender,
        email: this.addUserForm.value.email,
        username: this.addUserForm.value.uername,
        password: this.addUserForm.value.password,
        dob: this.addUserForm.value.dob,
        phone: this.addUserForm.value.phone,
        picture: {
          medium: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        }
      }
    }
    this.users.push(user);
    this.addUserModal = false;
  }

  openUserModal() {
    this.addUserModal = true;
  }

  cancelUserModal() {
    this.addUserModal = false;
  }

}
