import { Component, OnInit } from '@angular/core';
import { Nave } from './nave';
import { dataNaves } from './dataNaves';
import { NaveService } from './nave.service';
import { TestNavesService } from './test-naves.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  selected: boolean = false;
  selectedNave!: Nave;

  naves: Array<Nave> = [];
  constructor(private naveService: TestNavesService) { }

  getNaves() {
    this.naveService.getNaves().subscribe(naves => { 
      console.log(naves);
      this.naves = naves;
    });
  }


  onSelected(nave: Nave): void {
    this.selectedNave = nave;
    this.selected = true;
  }

  ngOnInit() {
    this.getNaves();
  }

}