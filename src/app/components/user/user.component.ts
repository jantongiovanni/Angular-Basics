import {Component, OnInit} from '@angular/core';

import {SquaddataService} from '../../services/squaddata.service';

import {SquadMember} from '../../models/squad-member';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  address: Address;
  hobbies: string[];
  isEditOn: boolean;
  squadMembers: SquadMember[];

  constructor(private squadService: SquaddataService) {
    console.log('constructor works');
  }

  ngOnInit() {
    console.log('onInit works');
    this.name = 'Joe';
    this.age = 21;
    this.address = {
      street: '400 8th St',
      city: 'Marina',
      state: 'CA'
    };
    this.hobbies = ['hobby1', 'hobby2', 'hobby3'];
  }
  addHobby() {
    this.name = 'Joe Antongiovanni';
    this.hobbies.push('new hobby');
  }
  addMyHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
  toggleEditUser() {
    this.isEditOn = !this.isEditOn;
  }
  getSquadMembers() {
    this.squadService.getSquad().subscribe(
      data => this.squadMembers = data
    );
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}
