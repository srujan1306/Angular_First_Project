import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @Input() Students = [
    {
      id: 1,
      name: 'Srujan',
      image:
        'https://i.pinimg.com/236x/f0/a5/69/f0a5695283fa588c815fc59a03715b15.jpg',
    },
    {
      id: 2,
      name: 'Neha',
      image: 'https://scx2.b-cdn.net/gfx/news/hires/2023/faces.jpg',
    },
    {
      id: 3,
      name: 'Phani',
      image:
        'https://images.nightcafe.studio//assets/man-in-suit.jpg?tr=w-1600,c-at_max',
    },
  ];
}
