import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animals';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent {
  @Input() animal: Animal;
}
