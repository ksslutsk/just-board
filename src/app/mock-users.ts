import { User } from './user';

export let defaultPhotoUrl: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
export const USERS: User[] = [
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
