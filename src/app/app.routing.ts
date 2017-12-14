import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

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
  },
  {
    path: 'categories/:cid/post/:pid',
    component: PostDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
