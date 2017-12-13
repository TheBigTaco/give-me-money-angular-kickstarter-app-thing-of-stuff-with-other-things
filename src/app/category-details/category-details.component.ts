import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from './../category.model';
import { CategoryService } from './../category.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
  providers: [CategoryService]
})
export class CategoryDetailsComponent implements OnInit {
  categoryId: string;
  categoryToDisplay;
  postArray;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = urlParameters['cid'];
    });
    this.categoryToDisplay = this.categoryService.getCategoryById(this.categoryId);
    this.postArray = this.categoryService.getPosts(this.categoryId)
  }

}
