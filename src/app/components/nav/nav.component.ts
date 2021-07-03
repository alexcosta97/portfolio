import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }
  @ViewChild('nav') navbar!: ElementRef;
  isMenuOpen = false;

  ngAfterViewInit(): void {
  }

  openMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if(this.isMenuOpen) disableBodyScroll(this.navbar.nativeElement);
    else enableBodyScroll(this.navbar.nativeElement);
  }
}
