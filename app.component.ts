import { Component } from '@angular/core';

type Person = {
  fullName: string;
  mobilePhone: string;
  city: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person: Person = {
    fullName: "Петров Иван Васильевич",
    mobilePhone: "8-955-445-22-35",
    city: "Ижевск",
  };
}
