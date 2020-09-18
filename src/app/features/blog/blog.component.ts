import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { PostService } from '../../services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(
    public postService: PostService,
    public globalService: GlobalService
  ) {}

}
