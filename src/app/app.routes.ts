import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Titulos } from './pages/titulos/titulos';  
import { Historia } from './pages/historia/historia';
import { Barras } from './pages/barras/barras';
import { Idolos } from './pages/idolos/idolos';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
   {path: '', component: Home},
   {path: 'titulos', component: Titulos },
   {path: 'header', component: Header},
   {path: 'footer', component: Footer},
   {path: 'historia', component: Historia},
   {path: 'barras', component: Barras},
   {path: 'idolos', component: Idolos},
   {path: 'contacto', component: Contacto},
   {path: '**', redirectTo: '' }
];
