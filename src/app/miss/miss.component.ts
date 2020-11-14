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

  misses = {};

  missesPreviousRound = [
    { id: 1, name: 'Miss Tahiti' },
    { id: 2, name: 'Miss Saint-Martin et Saint-Barthélémy' },
    { id: 3, name: 'Miss Côte d\'Azur' },
    { id: 4, name: 'Miss Guadeloupe' },
    { id: 5, name: 'Miss Languedoc-Roussillon' },
    { id: 6, name: 'Miss Provence' }
  ];

  missesNextRound = [];

  getMisses = () =>
      this.crudService
      .getMisses()
      .subscribe(res =>(this.misses = res));

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
