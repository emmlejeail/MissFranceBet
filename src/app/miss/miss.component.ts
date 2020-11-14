import { Component, OnInit } from '@angular/core';
import { CrudService } from "../shared/crud.service";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
