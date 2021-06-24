import { PostService } from 'src/app/servicios/post.service';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentarios:any = [];
  @Input() set id( newValue: number){
    if(newValue != undefined){
      this.getComments(newValue);
      console.log("valor",this.id, newValue );
    }
  }; 
  @Output() clickFechaComentario = new EventEmitter<any>();

  fecha =  new Date();  
  fechaComentario() {
    this.clickFechaComentario.emit(this.fecha);
  }

  constructor(
    private _postService: PostService) { 
        
    }


    getComments(id:number) { this._postService.getComentario(id).subscribe( data => {
      this.comentarios = data
      console.log(this.comentarios, this.id);
    })
      
  }
  
  ngOnInit(): void {
    
   
}
}