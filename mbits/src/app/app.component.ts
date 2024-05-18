import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonToggle, MatRadioButton, MatRadioGroup],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
