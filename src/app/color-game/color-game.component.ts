import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorBoxComponent } from '../color-box/color-box.component';

@Component({
  selector: 'app-color-game',
  standalone: true,
  imports: [FormsModule, ColorBoxComponent],
  templateUrl: './color-game.component.html',
  styleUrl: './color-game.component.scss',
})
export class ColorGameComponent {
  value = false;
  color = '';
  // colorList = ['pink', 'red', 'blue', 'orange'];
  colorList = [''];

  colorchange() {
    this.value = true;
    this.colorList.push(this.color);
  }
}
