import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline, search, heartOutline, heart, personOutline, person, homeOutline, home } from 'ionicons/icons';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class AppLayoutComponent {

  constructor() {
    addIcons({
      'search': search,
      'heart': heart,
      'person': person,
      'home': home,
      'search-outline': searchOutline,
      'heart-outline': heartOutline,
      'person-outline': personOutline,
      'home-outline': homeOutline
    });
  }

}

