import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-morse-code',
  templateUrl: './morse-code.component.html',
  styleUrls: ['./morse-code.component.css']
})
export class MorseCodeComponent implements OnInit {

  userInput: string;

  constructor() { 
    this.userInput = "";
  }

  ngOnInit(): void {
  }

  convertInput(userInput: NgModule): void {
    
  }

}
