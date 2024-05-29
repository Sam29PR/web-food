import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../services/kitchen.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  orders: Order[] = [];

  constructor(private kitchenService: KitchenService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.kitchenService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }
}
