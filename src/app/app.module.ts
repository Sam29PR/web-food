import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule ,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { TPVComponent } from './tpv/tpv.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';

const appRoutes : Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    KitchenComponent,
    TPVComponent,
    MenuComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
