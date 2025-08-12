import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsRequestComponent} from './pages/products-request/products-request.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent} from './pages/cart/cart.component';

const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path:'',component:FooterComponent},
    { path: 'products', component: ProductsComponent },
     { path: 'products-request', component: ProductsRequestComponent },
     { path: 'about-us', component:AboutUsComponent },
     { path: 'contact', component:ContactComponent},
     {path: '', redirectTo: 'home', pathMatch: 'full'},
     {path:'cart', component:CartComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
