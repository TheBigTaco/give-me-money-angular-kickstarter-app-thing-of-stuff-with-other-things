import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: 'categories/:cid',
    component: CategoryDetailsComponent
  },
  {
    path: 'categories/:cid/post',
    component: PostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
