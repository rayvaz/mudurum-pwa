import { MudurumPwaPage } from './app.po';

describe('mudurum-pwa App', () => {
  let page: MudurumPwaPage;

  beforeEach(() => {
    page = new MudurumPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
