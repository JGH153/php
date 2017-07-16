import { browser, by, element } from 'protractor';

export class PersonalHPPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('php-root h1')).getText();
  }
}
