import { Component, OnInit } from '@angular/core';
import { TPVService } from '../services/tpv.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-tpv',
  templateUrl: './tpv.component.html',
  styleUrls: ['./tpv.component.css']
})
export class TPVComponent implements OnInit {
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  newOrder: Order = { id: 0, customer_name: '', item: '', status: 'Pending' };
  searchQuery: string = '';

  constructor(private tpvService: TPVService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.tpvService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
      this.filteredOrders = data;
    });
  }

  addOrder(): void {
    this.tpvService.addOrder(this.newOrder).subscribe(order => {
      this.orders.push(order);
      this.filteredOrders.push(order);
      this.newOrder = { id: 0, customer_name: '', item: '', status: 'Pending' };
    });
  }

  updateOrder(order: Order): void {
    this.tpvService.updateOrder(order).subscribe(updatedOrder => {
      const index = this.orders.findIndex(o => o.id === updatedOrder.id);
      if (index !== -1) {
        this.orders[index] = updatedOrder;
        this.filteredOrders[index] = updatedOrder;
      }
    });
  }

  deleteOrder(order: Order): void {
    this.tpvService.deleteOrder(order.id).subscribe(() => {
      this.orders = this.orders.filter(o => o.id !== order.id);
      this.filteredOrders = this.filteredOrders.filter(o => o.id !== order.id);
    });
  }

  filterOrders(): void {
    this.filteredOrders = this.orders.filter(order =>
      order.customer_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      order.item.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
