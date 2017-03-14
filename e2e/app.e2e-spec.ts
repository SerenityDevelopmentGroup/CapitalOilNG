import { CapitalOilNGPage } from './app.po';

describe('capital-oil-ng App', function() {
  let page: CapitalOilNGPage;

  beforeEach(() => {
    page = new CapitalOilNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
