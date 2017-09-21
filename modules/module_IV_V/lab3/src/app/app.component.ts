import { Component } from '@angular/core';

export class Person {
 id: number;
 age: number;
  name: string;
 lastname: string;
 constructor(id: number, age: number, name: string, lastname: string) {
 	this.id = id;
 	this.age = age;
  	this.name = name;
 	this.lastname = lastname;
 }
}

export class Student extends Person {
	constructor(id: number, age: number, name: string, lastname: string) {
		super(id, age, name, lastname);
	}

	public setName(name: string): void {
		this.name = name;
	}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public student: Student = new Student(12444, 12, 'Alejandro', 'Romero');
}
