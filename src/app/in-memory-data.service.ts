import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { defaultPhotoUrl } from './mock-users'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const publications = [
      {
        id: 3, userId: 1,
        textContent: 'default text content', imageUrl: "http://www.swisspan.ua/wp-content/uploads/2018/03/%D0%91%D1%96%D1%80%D1%8E%D0%B7%D0%BE%D0%B2%D0%B8%D0%B9-0075-1.jpg"
      },
      {
        id: 2, userId: 1,
        textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ultricies elit, non gravida mi. Cras imperdiet velit eu pharetra euismod. Donec ut ultricies sem, vel tincidunt ex. Aliquam in fermentum libero. Sed rutrum viverra eros, sed dapibus diam semper eu. In hac habitasse platea dictumst. Pellentesque porttitor libero vel erat vulputate, vitae pulvinar felis placerat. Nullam tincidunt mauris tortor, id vestibulum erat dapibus sed. In eu nulla non ipsum iaculis blandit ut et neque.',
        imageUrl: 'https://prof-mk.ru/wp-content/uploads/2020/12/lorem-ipsum-tekst-ryba.png'
      },
      {
        id: 1, userId: 2,
        textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ultricies elit, non gravida mi. Cras imperdiet velit eu pharetra euismod. Donec ut ultricies sem, vel tincidunt ex. Aliquam in fermentum libero. Sed rutrum viverra eros, sed dapibus diam semper eu. In hac habitasse platea dictumst. Pellentesque porttitor libero vel erat vulputate, vitae pulvinar felis placerat. Nullam tincidunt mauris tortor, id vestibulum erat dapibus sed. In eu nulla non ipsum iaculis blandit ut et neque.',
        imageUrl: ''
      }
    ];

    const users = [
      {
        id: 1, name: 'superuser', password: 'qwerty',
        profilePhotoUrl: defaultPhotoUrl,
        isAdmin: true
      },
      {
        id: 2, name: 'simpleuser2', password: 'qwerty',
        profilePhotoUrl: defaultPhotoUrl,
        isAdmin: false
      },
      {
        id: 3, name: 'simpleuser3', password: 'qwerty',
        profilePhotoUrl: defaultPhotoUrl,
        isAdmin: false
      },
      {
        id: 4, name: 'simpleuser4', password: 'qwerty',
        profilePhotoUrl: defaultPhotoUrl,
        isAdmin: false
      },
      {
        id: 5, name: 'simpleuser5', password: 'qwerty',
        profilePhotoUrl: defaultPhotoUrl,
        isAdmin: false
      },
      {
        id: 6, name: 'simpleuser6', password: 'qwerty',
        profilePhotoUrl: defaultPhotoUrl,
        isAdmin: false
      }
    ];
    return { publications, users };
  }
}
