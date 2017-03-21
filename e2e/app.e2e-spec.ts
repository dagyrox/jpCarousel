import { JpCarouselPage } from './app.po';

describe('jp-carousel App', function() {
  let page: JpCarouselPage;

  beforeEach(() => {
    page = new JpCarouselPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
