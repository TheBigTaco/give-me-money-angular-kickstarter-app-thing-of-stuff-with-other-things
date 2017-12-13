import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from './../post.model';
import { CategoryService } from './../category.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [CategoryService]
})
export class PostComponent implements OnInit {
  public categoryId: string;
  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = urlParameters['cid'];
    })
  }

  submitForm(name: string, desc: string, money: number, date: Date) {
    var newPost = new Post(name, desc, money, date, this.categoryId);
    this.categoryService.addPost(newPost, this.categoryId);
  }
  goToCategoryDetails() {
    this.router.navigate(['categories/' + this.categoryId]);
  }
}
