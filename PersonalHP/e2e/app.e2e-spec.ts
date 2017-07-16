import { PersonalHPPage } from './app.po';

describe('personal-hp App', () => {
  let page: PersonalHPPage;

  beforeEach(() => {
    page = new PersonalHPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to php!!');
  });
});
