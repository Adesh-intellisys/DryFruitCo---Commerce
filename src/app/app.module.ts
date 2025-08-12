import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsRequestComponent } from './pages/products-request/products-request.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
// import { ProductService } from './services/product.service.ts/product.service.ts.component';
//  import { ProductCategoryComponent } from './components/product-category/product-category.component';
 import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ProductsRequestComponent,
    AboutUsComponent,
    ContactComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
