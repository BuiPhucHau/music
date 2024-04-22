import { Component } from '@angular/core';
import { TaigaModule } from '../../shared/taiga.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaigaModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
