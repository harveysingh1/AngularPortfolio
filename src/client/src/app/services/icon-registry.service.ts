import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {

  constructor(private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  registerIcons(): void {
    this.iconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/github.svg'));
    this.iconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/linkedin.svg'));
  }
}
