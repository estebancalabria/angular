import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListaCancionesComponent } from './lista-canciones/lista-canciones.component';

//Ojo, las rutas no empiezan con una / adelante
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'about',
        component: AboutComponent
        
    },
    {
        path: 'canciones',
        component: ListaCancionesComponent
        
    },
    {
        path: 'contacto',
        component: ContactComponent
        
    }
];
