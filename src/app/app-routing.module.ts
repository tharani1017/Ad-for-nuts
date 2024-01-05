import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"home",component:HomeComponent},
  {path:"menu",component:MenuComponent},
  {path:"contact",component:ContactComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"login",component:LoginComponent},
  {path:"order",component:OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
