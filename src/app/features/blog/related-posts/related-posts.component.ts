import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models';

@Component({
  selector: 'app-related-posts',
  templateUrl: './related-posts.component.html',
  styleUrls: ['./related-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatedPostsComponent {

  @Input() relatedPosts: Post[]

}
