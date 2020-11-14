import { Component, OnInit } from '@angular/core';
import { CrudService } from "../shared/crud.service";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-miss',
  templateUrl: './miss.component.html',
  styleUrls: ['./miss.component.css']
})
export class MissComponent implements OnInit {

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getMisses()
  }

  form = new FormGroup({        
    userName: new FormControl(''),
    roundNumber: new FormControl(''),
    gameId: new FormControl('')
  })

  misses: any[] = [];

  missesNextRound: any[] = [];

  getMisses = () =>
      this.crudService
      .getMisses()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.misses.push(doc.data());
        });
      });
  

  onSubmit(){
    this.form.value.missesNextRound = this.missesNextRound;
    let data = this.form.value;
    console.log(data)
    this.crudService.createBet(data)
    .then(res => {
      console.log(res);
      this.form.reset();
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

  }
}
