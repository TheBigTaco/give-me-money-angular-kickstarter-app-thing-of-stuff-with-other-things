import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Post } from './post.model';

@Injectable()
export class CategoryService {
  categories: FirebaseListObservable<any[]>;
  posts: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.categories = database.list('categories');
  }

  getCategories() {
    return this.categories;
  }

  addCategory(newCategory: Category) {
    this.categories.push(newCategory);
  }

  getCategoryById(categoryId: string) {
    return this.database.object('categories/' + categoryId);
  }

  getPosts(categoryId: string) {
    this.posts = this.database.list('categories/'+ categoryId +'/post/');
    return this.posts;
  }

  addPost(newPost: Post, categoryId: string) {
    this.getPosts(categoryId);
    this.posts.push(newPost);
  }

  getPostById(categoryId: string, postId: string) {
    return this.database.object('categories/'+categoryId+'/post/'+postId);
  }
}
