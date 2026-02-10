import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonContent,
  IonBadge,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  star,
  heart,
  schoolOutline,
  walletOutline,
  peopleOutline,
  femaleOutline,
  searchOutline,
  optionsOutline
} from 'ionicons/icons';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Room {
  id: string;
  title: string;
  location: string;
  distance: string;
  dates: string;
  price: string;
  rating: number;
  imageUrl: string;
  isVerified: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonContent,
    IonBadge,
    IonIcon
  ],
})
export class HomePage {
  categories = signal<Category[]>([
    { id: '1', name: 'Cerca de Uni', icon: 'school-outline' },
    { id: '2', name: 'Económicos', icon: 'wallet-outline' },
    { id: '3', name: 'Con Roomies', icon: 'people-outline' },
    { id: '4', name: 'Solo Mujeres', icon: 'female-outline' },
  ]);

  rooms = signal<Room[]>([
    {
      id: '1',
      title: 'Studio Minimalista',
      location: 'Coyoacán, CDMX',
      distance: 'A 500m de la Facultad de Arquitectura',
      dates: 'Disponible ahora',
      price: '$4,500 MXN',
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
      isVerified: true
    },
    {
      id: '2',
      title: 'Depa Moderno',
      location: 'Copilco, CDMX',
      distance: 'A 300m de Medicina',
      dates: 'Próximo semestre',
      price: '$5,200 MXN',
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
      isVerified: true
    },
    {
      id: '3',
      title: 'Habitación Amplia',
      location: 'Roma Norte, CDMX',
      distance: 'A 15 min de CU en Metro',
      dates: 'Feb 20 - Ago 20',
      price: '$3,800 MXN',
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800',
      isVerified: false
    }
  ]);

  constructor() {
    addIcons({
      star,
      heart,
      'school-outline': schoolOutline,
      'wallet-outline': walletOutline,
      'people-outline': peopleOutline,
      'female-outline': femaleOutline,
      'search-outline': searchOutline,
      'options-outline': optionsOutline
    });
  }

}

