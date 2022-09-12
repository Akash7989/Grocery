import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { FoodGrainsAndMasalaComponent } from './food-grains-and-masala/food-grains-and-masala.component';
import { FruitsAndVegetablesComponent } from './fruits-and-vegetables/fruits-and-vegetables.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StorekeeperComponent } from './storekeeper/storekeeper.component';
import { CartComponent } from './cart/cart.component';

// import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
import { MeComponent } from './me/me.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UsermeComponent } from './userme/userme.component';
import { UserchangepasswordComponent } from './userchangepassword/userchangepassword.component';
import { UserupdatepasswordComponent } from './userupdatepassword/userupdatepassword.component';
// import { AdminUpdateProductsComponent } from './admin-update-products/admin-update-products.component';
import { LogoutComponent } from './logout/logout.component';
import { AfterCartComponent } from './after-cart/after-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminGotListComponent } from './admin-got-list/admin-got-list.component';
import { CanDeactivatedGurardService } from './can-deactivated-gurard.service';
import { CanDeactivatedGuradAdminService } from './can-deactivated-gurad-admin.service';
import { AboutComponent } from './about/about.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { FruitsAndVegetables2Component } from './fruits-and-vegetables2/fruits-and-vegetables2.component';
import { AdminPaymentVerificationComponent } from './admin-payment-verification/admin-payment-verification.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { FruitsAndVegetablesAdminComponent } from './fruits-and-vegetables-admin/fruits-and-vegetables-admin.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';


const routes: Routes = [
  {path:'customer',component:CustomerComponent}
,{path:'fruits-and-vegetables',component:FruitsAndVegetablesComponent},
  {path:'storekeeper', component:StorekeeperComponent},
  {path:'login',component:LoginComponent
  ,canDeactivate:[CanDeactivatedGurardService]
},
  {path:'signup',component:SignupComponent,canDeactivate:[CanDeactivatedGuradAdminService]},
  {path:'food-grains-and-masala',component:FoodGrainsAndMasalaComponent},
  {path:'cart',component:CartComponent},
   {path:'adminlogin',component:AdminloginComponent
   ,canDeactivate:[CanDeactivatedGuradAdminService]
  },
  {path:'navigation',component:NavigationComponent},
  {path:'adminnavbar',component:AdminnavbarComponent},
  {path:'admin',component:AdminComponent},
  {path:'me',component:MeComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'updatepassword',component:UpdatepasswordComponent},
  {path:'userme',component:UsermeComponent},
  {path:'userchangepassword',component:UserchangepasswordComponent},
  {path:'userupdatepassword',component:UserupdatepasswordComponent},
  // {path:'adminUpdateProducts',component:AdminUpdateProductsComponent},
  {path:'logout',component:LogoutComponent},
  {path:'fruits-and-vegetables1',component:FruitsAndVegetablesComponent},
  {path:'after-cart',component:AfterCartComponent},
  {path:'payment',component:PaymentComponent},
  {path:'adminGotList',component:AdminGotListComponent},
  {path:'about',component:AboutComponent},
  {path:'customerDetails',component:CustomerDetailsComponent},
  {path:'fruits-and-vegetables2',component:FruitsAndVegetables2Component},
  {path:'adminPaymentVerification',component:AdminPaymentVerificationComponent},
  {path:'adminUpdate',component:AdminUpdateComponent},
  {path:'fruits-and-vegetables-admin',component:FruitsAndVegetablesAdminComponent}
  
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
