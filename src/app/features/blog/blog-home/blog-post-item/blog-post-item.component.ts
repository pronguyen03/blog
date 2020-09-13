import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from 'src/app/models';

@Component({
  selector: 'app-blog-post-item',
  templateUrl: './blog-post-item.component.html',
  styleUrls: ['./blog-post-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostItemComponent {
  @Input() post: Post
}
