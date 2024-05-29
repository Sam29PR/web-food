import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Product } from '../models/product.model';
import { Order } from '../models/order.model';
import { TPVService } from '../services/tpv.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products: Product[] = [];
  selectedProducts: Product[] = [];
  customerName: string = '';
  orderStatus: string = '';
  showPaymentMethods: boolean = false;

  constructor(private menuService: MenuService, private tpvService: TPVService) { }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu(): void {
    this.menuService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  addToOrder(product: Product): void {
    this.selectedProducts.push(product);
  }

  removeFromOrder(product: Product): void {
    this.selectedProducts = this.selectedProducts.filter(p => p !== product);
  }

  placeOrder(): void {
    const order: Order = {
      id: 0,
      customer_name: this.customerName,
      item: this.selectedProducts.map(p => p.name).join(', '),
      status: 'Pending'
    };

    this.tpvService.addOrder(order).subscribe((newOrder: Order) => {
      this.orderStatus = newOrder.status;
      this.showPaymentMethods = true;
      this.selectedProducts = [];
      this.customerName = '';
    });
  }
}
