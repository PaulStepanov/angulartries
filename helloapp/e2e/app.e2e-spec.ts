import { HelloappPage } from './app.po';

describe('helloapp App', function() {
  let page: HelloappPage;

  beforeEach(() => {
    page = new HelloappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
