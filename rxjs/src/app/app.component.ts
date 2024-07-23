import { Component, OnInit } from '@angular/core';
import { from, iif, interval, of, partition, pipe , merge , zip, concat } from 'rxjs';
import { filter, switchMap , take , map, concatMap  } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'rxjs';

  ngOnInit(): void {
    // interval(10).pipe(
    //   take(5),
    //   switchMap((x)=>iif(()=> x % 2 == 0 , of('x') , of('y')))
    // ).subscribe((res)=>{
    //   console.log(res)
    // })

    const source = of(1,3,2,5,4)
    const [odd , even] = partition(source, res => res%2===0)

    // using merge
    // merge(

    //   odd, 
    //   even
    // ).subscribe(val => console.log(val));

    // using zip
    zip(
      odd.pipe(map(val => val)), 
      even.pipe(map(val => val)) 
    ).pipe(
      concatMap(x => x)
    )
    .subscribe(val => console.log(val))


  }

  


  
  
}
