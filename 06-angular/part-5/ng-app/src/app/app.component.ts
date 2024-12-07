import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';
import { ProductService } from './products/product.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers: [ProductService],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
