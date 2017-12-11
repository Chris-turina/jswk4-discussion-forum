import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model'

@Component({
  selector: 'app-new-dog-post',
  templateUrl: './new-dog-post.component.html',
  styleUrls: ['./new-dog-post.component.css']
})
export class NewDogPostComponent {
@Output() newDogSender = new EventEmitter();
@Output() closeDogFormSender = new EventEmitter();
@Input() showChildDogForm;

  submitDogForm(title: string, content: string) {
    let newDogPostToAdd: Post = new Post(title, content)
    console.log(newDogPostToAdd)
    this.newDogSender.emit(newDogPostToAdd)
  }

  closeDogForm() {
    this.closeDogFormSender.emit();
  }

}
