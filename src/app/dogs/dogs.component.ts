import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  @Input() childDogList: Post[];

  public dogPostList: Post[] = [
    new Post('Yellow Lab', 'All dogs love Christmas very very much!'),
    new Post('Black Lab', 'All dogs love Christmas very very much!'),
    new Post('White Lab', 'All dogs love Christmas very very much!')
  ]

  newDogPostForm = null;

  addNewDogForm(){
    this.newDogPostForm = !null;
  }

  nullNewDogForm(){
    this.newDogPostForm = null;
  }

  addDogPost(newDogPostFromChild: Post){
    console.log("Hello")
    this.dogPostList.push(newDogPostFromChild)
  }


}
