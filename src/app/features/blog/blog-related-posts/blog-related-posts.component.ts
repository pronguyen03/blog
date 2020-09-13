import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models';

@Component({
  selector: 'app-blog-related-posts',
  templateUrl: './blog-related-posts.component.html',
  styleUrls: ['./blog-related-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogRelatedPostsComponent {

  @Input() relatedPosts: Post[]

}
