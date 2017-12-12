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
  selectedDogPost = null;



  addNewDogForm(){
    this.newDogPostForm = !null;
  }

  nullNewDogForm(){
    this.newDogPostForm = null;
  }

  addDogPost(newDogPostFromChild: Post){
    this.dogPostList.push(newDogPostFromChild)
  }

  deleteDogPost(currentDogPost){
    var indexOf = this.dogPostList.indexOf(currentDogPost);
    this.dogPostList.splice(indexOf,1)
  }

  showEditForm(currentDogPost) {
    if(currentDogPost.edit){
      currentDogPost.edit = false;
    } else {
      currentDogPost.edit = true;
    }
  }


  showContent(currentDogPost) {
    if(currentDogPost.active){
      console.log("X-mas Tree")
      currentDogPost.active = false;
    } else {
      console.log("devil Tree")
      currentDogPost.active = true;
    }
  }

}
