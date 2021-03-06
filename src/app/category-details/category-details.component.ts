import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from './../category.model';
import { CategoryService } from './../category.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Post } from './../post.model';

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
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = urlParameters['cid'];
    });
    this.categoryToDisplay = this.categoryService.getCategoryById(this.categoryId);
    this.postArray = this.categoryService.getPosts(this.categoryId)
  }

  showPostDetails(post) {
    this.router.navigate(['categories', this.categoryId, 'post', post.$key]);
  }

}
