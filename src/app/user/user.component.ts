import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() name = 'Srujan';
  @Input() image =
    'https://i.pinimg.com/236x/f0/a5/69/f0a5695283fa588c815fc59a03715b15.jpg';
}
