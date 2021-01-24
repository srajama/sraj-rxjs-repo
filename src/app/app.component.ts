import { Component, VERSION } from '@angular/core';
import {of, from } from 'rxjs';
  
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {

    of(2, 4, 6, 8)
    .pipe(
      tap(item => console.log(item)),
      map(item => item * 2),
      tap(item => console.log(item)),
    ).subscribe();
    
 

  from([20, 15, 10, 8]).subscribe(
item => console.log(`resulting item .. ${item}`),
err => console.error(`error occurred ${err}`),
() => console.log('complete')
);
  }

}






