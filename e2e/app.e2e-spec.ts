import { OngeraWebPage } from './app.po';

describe('ongera-web App', () => {
  let page: OngeraWebPage;

  beforeEach(() => {
    page = new OngeraWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
