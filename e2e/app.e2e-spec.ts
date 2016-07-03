import { Angular2DemoAppPage } from './app.po';

describe('angular2-demo-app App', function() {
  let page: Angular2DemoAppPage;

  beforeEach(() => {
    page = new Angular2DemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
