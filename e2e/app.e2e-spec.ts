import { GiweMeaMuhnieyPage } from './app.po';

describe('giwe-mea-muhniey App', () => {
  let page: GiweMeaMuhnieyPage;

  beforeEach(() => {
    page = new GiweMeaMuhnieyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
