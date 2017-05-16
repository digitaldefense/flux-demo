import { browser, by, element } from 'protractor';

export class FluxDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fl-root h1')).getText();
  }
}
