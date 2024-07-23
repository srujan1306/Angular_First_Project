import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  Student = {
    name: 'Srujan',
    image:
      'https://i.pinimg.com/236x/f0/a5/69/f0a5695283fa588c815fc59a03715b15.jpg',
  };
}
