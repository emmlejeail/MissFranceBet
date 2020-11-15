import { Component, OnInit } from '@angular/core';
import { CrudService } from "../shared/crud.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
  }

}
