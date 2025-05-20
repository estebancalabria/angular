import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-status',
  imports: [CommonModule],
  templateUrl: './online-status.component.html',
  styleUrl: './online-status.component.css'
})
export class OnlineStatusComponent implements OnInit, OnDestroy {

  isOnline: boolean = navigator.onLine;

  private updateOnlineStatus() {
    this.isOnline = navigator.onLine;
  }

  ngOnInit(): void {
     window.addEventListener('online', this.updateOnlineStatus.bind(this));
     window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }
  ngOnDestroy(): void {
    window.removeEventListener('online', this.updateOnlineStatus.bind(this));
    window.removeEventListener('offline', this.updateOnlineStatus.bind(this));
  }  

}
