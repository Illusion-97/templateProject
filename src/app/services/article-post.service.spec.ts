import { TestBed } from '@angular/core/testing';

import { ArticlePostService } from './article-post.service';

describe('ArticlePostService', () => {
  let service: ArticlePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
