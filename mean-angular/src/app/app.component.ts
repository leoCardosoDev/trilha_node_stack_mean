import { Component } from '@angular/core';

import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-angular';
  constructor(private appService: AppService){}

  ngOnInit(){
    this.appService.fetchServer().subscribe(data => console.log(data));
  }
}
