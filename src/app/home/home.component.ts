import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  imgs = [
    {
      id: 1,
      url: 'https://scontent.fbog16-1.fna.fbcdn.net/v/t39.30808-6/340920906_582767127151911_1898304366105179678_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=I9pYfv1g9PsAX9C03kV&_nc_ht=scontent.fbog16-1.fna&oh=00_AfBE-WgytdIUV4xXv0vQWbiZISoguowiYPMOHw6hevzsFg&oe=65599208',
    },
    {
      id: 2,
      url: 'https://scontent.fbog16-2.fna.fbcdn.net/v/t39.30808-6/384562457_1500708277349618_4384232707573934823_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JUbeIac7Ik4AX_7QFwR&_nc_ht=scontent.fbog16-2.fna&oh=00_AfAESDphx36AFZPnsZBz3s5WeQbPhTc_MnYUqDmxJYhiuQ&oe=655ADC26',
    },
    {
      id: 3,
      url: 'https://scontent.fbog16-2.fna.fbcdn.net/v/t39.30808-6/319981111_1139285870125316_6081446878948633904_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DE_E3wriTQYAX-5pTEx&_nc_ht=scontent.fbog16-2.fna&oh=00_AfCHC4Et2o0Vje-nHMyBdcM5KhDlLfUkZ3EDGx9jRGr8ow&oe=655B40EB',
    },
  ];
  goToImg(id: number) {
    this.router.navigate(['/img', id]);
  }
}
