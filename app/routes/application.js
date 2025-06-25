import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service
  intl;

  beforeModel() {
    let locales = this.intl.locales;
    let language;
    console.log(navigator.languages);
    if (navigator.languages) {
      language = navigator.languages[0];
    } else {
      language = navigator.language || navigator.userLanguage;
    }
    language = locales.includes(language.toLowerCase()) ? language : 'en';

    this.intl.setLocale(language);
  }
}
