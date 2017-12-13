import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../category.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  categories: FirebaseListObservable<any[]>;

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  goToCategoryDetails(clickedCategory) {
    this.router.navigate(['categories', clickedCategory.$key]);
  }
}
