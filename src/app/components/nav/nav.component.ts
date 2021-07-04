import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnDestroy {
  constructor(private elementRef: ElementRef) { }
  @ViewChild('nav') navbar!: ElementRef;
  isMenuOpen = false;

  openMenu(): void{
    this.isMenuOpen = true;
    disableBodyScroll(this.navbar.nativeElement);
  }

  closeMenu(): void{
    this.isMenuOpen = false;
    enableBodyScroll(this.navbar.nativeElement);
  }

  ngOnDestroy(): void {
    clearAllBodyScrollLocks();
  }
}
