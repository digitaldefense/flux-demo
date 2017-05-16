import { FluxDemoPage } from './app.po';

describe('flux-demo App', () => {
  let page: FluxDemoPage;

  beforeEach(() => {
    page = new FluxDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fl works!');
  });
});
