import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone:false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}
  logout(): void {
    this.authService.logout();
  }
}