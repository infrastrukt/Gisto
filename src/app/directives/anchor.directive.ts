import { Directive, HostListener, Input } from '@angular/core';
import { ElectronService } from 'ngx-electron';

/**
 * @Usage: <a external href="https://www.gistoapp.com">link</a>
 */

@Directive({
  selector: '[external]'
})
export class AnchorDirective {

  constructor(private electronService: ElectronService) {}

  @Input('href') href: string;

  @HostListener('click') onClick() {
    if (this.electronService.isElectronApp) {
      this.electronService.shell.openExternal(this.href);
      return false;
    } else {
      window.location.href = this.href;
      return false;
    }
  }
}
