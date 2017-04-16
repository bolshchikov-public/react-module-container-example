import {start} from './test/fakes/fake-server';

export const config = {
  baseUrl: 'http://localhost:3100/',
  onPrepare() {
    browser.ignoreSynchronization = true;
    start(3100);
  }
};
