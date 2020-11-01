import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FlopService } from './flop.service';

@Component({
  selector: 'my-flop-list',
  templateUrl: './flop-list.component.html',
  styleUrls: [ './flop-list.component.css'
  ]
})
export class FlopListComponent  {
  flops;

  constructor(private flopService: FlopService) {}


  ngOnInit() {
    this.flopService.getFlops()
    .subscribe(flops => {
      this.flops = flops;
    })
  }
}
