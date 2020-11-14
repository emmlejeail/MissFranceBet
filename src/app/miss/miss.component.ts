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
    { id: 6, name: 'Miss Provence' },
    { id: 7, name: 'Miss Mayotte' },
    { id: 8, name: 'Miss Réunion' },
    { id: 9, name: 'Miss Corse' },
    { id: 10, name: 'Miss Lorraine' },
    { id: 11, name: 'Miss Alsace' },
    { id: 12, name: 'Miss Centre Val-de-Loire' },
    { id: 13, name: 'Miss Nouvelle-Calédonie' },
    { id: 14, name: 'Miss Bourgogne' },
    { id: 15, name: 'Miss Ile-de-France' },
    { id: 18, name: 'Miss Bretagne' },
    { id: 19, name: 'Miss Poitou-Charentes' },
    { id: 20, name: 'Miss Martinique' },
    { id: 21, name: 'Miss Aquitaine' },
    { id: 22, name: 'Miss Guyane' },
    { id: 23, name: 'Miss Nord-Pas-de-Calais' },
    { id: 24, name: 'Miss Normandie' },
    { id: 25, name: 'Miss Picardie' },
    { id: 26, name: 'Miss Champagne-Ardenne' },
    { id: 27, name: 'Miss Rhône-Alpes' },
    { id: 28, name: 'Miss Franche-Comté' },
    { id: 29, name: 'Miss Auvergne' },
    { id: 30, name: 'Miss Pays de la Loire' }
  ];
  missesNextRound = []
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
