import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

  touch: Object = {
    startPosition: {
      x: 0
    },
    endPosition: {
      x: 0
    }
  };

  getTouchEvent(event: TouchEvent) {
    return event.touches[0];
  }

  @HostListener('document:touchstart', ['$event'])
  handleTouchStart(event: TouchEvent) {
    const touch = this.getTouchEvent(event);
    this.touch['startPosition'].x = touch.clientX;
    return;
  }

  @HostListener('document:touchmove', ['$event'])
  handleTouchMove(event: TouchEvent) {
    if (!this.touch['startPosition'].x) {
      return;
    }

    this.touch['endPosition'].x = event.touches[0].clientX;

    const xDiff = this.touch['startPosition'].x - this.touch['endPosition'].x;

    if (xDiff > 10) {
      /* left swipe - move right */
      this.goToTargetRouteFromCurrentRouteAndDirection(this.router.url, 'right');
    } else if (xDiff < -10) {
      /* right swipe - move left */
      this.goToTargetRouteFromCurrentRouteAndDirection(this.router.url, 'left');
    }

    this.touch['startPosition'].x = 0;
    this.touch['startPosition'].y = 0;
  }

  goToTargetRouteFromCurrentRouteAndDirection(route: string, direction: string) {
    switch (route) {
      case '/':
        if (direction === 'right') {
          return this.router.navigateByUrl('/about');
        }

        if (direction === 'left') {
          return;
        }

        break;
      case '/about':
        if (direction === 'right') {
          return this.router.navigateByUrl('/experiences');
        }

        if (direction === 'left') {
          return this.router.navigateByUrl('/');
        }

        break;
      case '/experiences':
        if (direction === 'right') {
          return this.router.navigateByUrl('/skills');
        }

        if (direction === 'left') {
          return this.router.navigateByUrl('/about');
        }

        break;
      case '/skills':
        if (direction === 'right') {
          return this.router.navigateByUrl('/projects');
        }

        if (direction === 'left') {
          return this.router.navigateByUrl('/experiences');
        }

        break;
      case '/projects':
        if (direction === 'right') {
          return this.router.navigateByUrl('/contact');
        }

        if (direction === 'left') {
          return this.router.navigateByUrl('/skills');
        }

        break;
      case '/contact':
        if (direction === 'right') {
          return;
        }

        if (direction === 'left') {
          return this.router.navigateByUrl('/projects');
        }

        break;
      default:
        return this.router.navigateByUrl('/');
    }
  }
}
