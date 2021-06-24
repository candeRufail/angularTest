import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from 'src/app/servicios/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post:any = [];
  id:any;
  date:any;

  verFecha (fecha:any){
      this.date = fecha;
  }

  constructor( private route: ActivatedRoute,
     private _postService: PostService) {

     this.route.params.subscribe(params => {
      this._postService.getDetail(params['id']).subscribe( data  => {
      this.id = params['id'];
      this.post = data;
      });
      
    })
   }



  ngOnInit(): void {   
    
    }

}
