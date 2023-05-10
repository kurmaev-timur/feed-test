import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { ShortNumberPipe } from './feed/short-numbers.pipe';

@NgModule({
  declarations: [FeedComponent, ShortNumberPipe],
  imports: [CommonModule, FeedRoutingModule],
})
export class FeedModule {}
