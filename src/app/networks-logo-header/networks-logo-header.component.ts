import { Component, Input } from '@angular/core';
import { SocialNetwork } from '../models/socialNetworks.model';

@Component({
  selector: 'app-networks-logo-header',
  templateUrl: './networks-logo-header.component.html',
  styleUrls: ['./networks-logo-header.component.css'],
})
export class NetworksLogoHeaderComponent {
  @Input() socialNetwork!: SocialNetwork;
}
