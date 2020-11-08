import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  ngOnInit(): void {
    this.loadUsers();
    //console.log("array length : " + this.users);
  }  
  
  title = 'user-app';
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  loadUsers(){
    this.userService.getUsers().subscribe(
      response => {console.log(response);
        this.users = response;}
    )
  }
  deleteUser(id: string){
    let response = confirm("Are you sure you want to continue?");
    if (response)
    this.userService.deleteUser(id).subscribe(
      response => {console.log("User deleted successfully.");this.loadUsers();}
    )
  }
  editUser(id: string){
    console.log("edit " + id);
    this.router.navigate([`users/${id}`]);
    console.log("after edit");
  }
  addUser(){
    console.log("create new user");
    this.router.navigate([`users/#`])
    console.log("after create");
  }

}
