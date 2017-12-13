import { Component, OnInit } from '@angular/core';
import { Category } from './../category.model';
import { CategoryService } from './../category.service';
import { Post } from './../post.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [CategoryService]
})
export class AdminComponent implements OnInit {
  public date: Date = new Date(12,12,2012);
  public post:Post[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  submitForm(name: string, description: string) {
    var newCategory: Category = new Category(name, description, this.post);
    this.categoryService.addCategory(newCategory);
  }
}
