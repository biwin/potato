import { PotatoPage } from './app.po';

describe('potato App', () => {
  let page: PotatoPage;

  beforeEach(() => {
    page = new PotatoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
