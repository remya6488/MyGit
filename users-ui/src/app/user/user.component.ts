import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: string;
  user: User = new User('','','','', null,null);
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log("user id " + this.id)
    if (this.id != "#"){
      this.userService.getUserById(this.id).subscribe(
        response => {console.log(response);this.user = response;}
      );
    }
  }

}
