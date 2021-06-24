import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';




const routes: Routes = [
  {path: '', component:  PostListComponent},
  {path: '404', component: ErrorComponent},
  {path: 'post/:id', component: PostDetailComponent},
  {path: 'posts', component: PostListComponent},
  
  {path: '**', redirectTo:'404', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



