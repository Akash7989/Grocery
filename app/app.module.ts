import { NgModule } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { StorekeeperComponent } from './storekeeper/storekeeper.component';
import { LoginComponent } from './login/login.component';
import { RecordService } from './record.service';
import {HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { HeroComponent } from './hero/hero.component';
import { FruitsAndVegetablesComponent } from './fruits-and-vegetables/fruits-and-vegetables.component';
import { FoodGrainsAndMasalaComponent } from './food-grains-and-masala/food-grains-and-masala.component';
import { CartComponent } from './cart/cart.component';
// import { FilterPipe } from './share/filter.pipe';
// import { AdminComponent } from './admin/admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
import { ProfitComponent } from './profit/profit.component';
import { MeComponent } from './me/me.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UsermeComponent } from './userme/userme.component';
import { UserchangepasswordComponent } from './userchangepassword/userchangepassword.component';
import { UserupdatepasswordComponent } from './userupdatepassword/userupdatepassword.component';
// import { AdminUpdateProductsComponent } from './admin-update-products/admin-update-products.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FruitsAndVegetables1Component } from './fruits-and-vegetables1/fruits-and-vegetables1.component';
import { AfterCartComponent } from './after-cart/after-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminGotListComponent } from './admin-got-list/admin-got-list.component';
import { CanDeactivatedGurardService } from './can-deactivated-gurard.service';
import { CanDeactivatedGuradAdminService } from './can-deactivated-gurad-admin.service';
import { AboutComponent } from './about/about.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CanDeactivatedGuardSignupService } from './can-deactivated-guard-signup.service';
import { FruitsAndVegetables2Component } from './fruits-and-vegetables2/fruits-and-vegetables2.component';
import { AdminPaymentVerificationComponent } from './admin-payment-verification/admin-payment-verification.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { FruitsAndVegetablesAdminComponent } from './fruits-and-vegetables-admin/fruits-and-vegetables-admin.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
// import { RegisteredUserComponent } from './registered-user/registered-user.component';



//import { RegisterComponent } from './storekeeper/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
  
    StorekeeperComponent,
       LoginComponent,
       NavigationComponent,
       FooterComponent,
       SignupComponent,
       HeroComponent,
      
       FruitsAndVegetablesComponent,
       FoodGrainsAndMasalaComponent,
      
       CartComponent,
      //  FilterPipe,
      //  AdminComponent,
       AdminloginComponent,
       AdminComponent,
       ProfitComponent,
       MeComponent,
       ChangepasswordComponent,
       UpdatepasswordComponent,
       UsermeComponent,
       UserchangepasswordComponent,
       UserupdatepasswordComponent,
      //  AdminUpdateProductsComponent,
       LogoutComponent,
       NavbarComponent,
       FruitsAndVegetables1Component,
       AfterCartComponent,
       PaymentComponent,
       AdminGotListComponent,
       AboutComponent,
       CustomerDetailsComponent,
       FruitsAndVegetables2Component,
       AdminPaymentVerificationComponent,
       AdminUpdateComponent,
       FruitsAndVegetablesAdminComponent,
       AdminnavbarComponent,
      
      //  RegisteredUserComponent
      
       
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    
  


    
  ],
  providers: [RecordService,CanDeactivatedGurardService,CanDeactivatedGuradAdminService,CanDeactivatedGuardSignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
