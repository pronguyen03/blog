import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from 'src/app/models';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent {
  @Input() post: Post
}
