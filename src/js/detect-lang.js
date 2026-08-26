(function () {
  var STORAGE_KEY = 'gauchofilms-lang';
  var SUPPORTED = { es: true, en: true, pt: true };
  var SPANISH = {
    AR: 1, BO: 1, CL: 1, CO: 1, CR: 1, CU: 1, DO: 1, EC: 1, SV: 1,
    GQ: 1, GT: 1, HN: 1, MX: 1, NI: 1, PA: 1, PY: 1, PE: 1, PR: 1,
    ES: 1, UY: 1, VE: 1,
  };
  var PORTUGUESE = { BR: 1, PT: 1, AO: 1, MZ: 1, CV: 1, GW: 1, ST: 1, TL: 1 };
  var ENGLISH = {
    US: 1, GB: 1, UK: 1, CA: 1, AU: 1, NZ: 1, IE: 1, ZA: 1, SG: 1,
    NG: 1, KE: 1, GH: 1, JM: 1, TT: 1, BZ: 1, GY: 1, PH: 1, IN: 1,
    PK: 1, MY: 1, HK: 1,
  };

  var path = location.pathname.replace(/\/+$/, '') || '/';
  if (/\/(es|en|pt)(?:\/index\.html)?$/i.test(path)) return;

  function langFromCountry(code) {
    var country = String(code || '').toUpperCase();
    if (PORTUGUESE[country]) return 'pt';
    if (SPANISH[country]) return 'es';
    if (ENGLISH[country]) return 'en';
    return null;
  }

  function browserLang() {
    try {
      var browserLangs = navigator.languages || [navigator.language || navigator.userLanguage];
      for (var i = 0; i < browserLangs.length; i++) {
        var langCode = String(browserLangs[i] || '').split('-')[0].toLowerCase();
        if (SUPPORTED[langCode]) return langCode;
      }
    } catch (err) {
      /* ignore */
    }
    return null;
  }

  function go(lang) {
    var next = SUPPORTED[lang] ? lang : 'es';
    var isFile = location.protocol === 'file:';
    var currentPath = location.pathname.replace(/\/+$/, '');
    var isRoot = isFile
      ? (currentPath.endsWith('/index.html') && !currentPath.match(/\/(en|es|pt)\/index\.html$/i))
      : (currentPath === '' || currentPath === '/');
    if (!isRoot) return;
    if (isFile) {
      location.replace(next + '/index.html');
      return;
    }
    location.replace(next + '/');
  }

  var settled = false;
  function finish(lang) {
    if (settled) return;
    settled = true;
    go(lang || 'es');
  }

  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED[saved]) {
      finish(saved);
      return;
    }
  } catch (err) {
    /* ignore localStorage error */
  }

  var timer = setTimeout(function () {
    finish(browserLang());
  }, 1200);

  function fromCountryApi() {
    return fetch('https://api.country.is/', { cache: 'no-store' })
      .then(function (res) { return res.json(); })
      .then(function (data) { return data && data.country; });
  }

  function fromIpwho() {
    return fetch('https://ipwho.is/', { cache: 'no-store' })
      .then(function (res) { return res.json(); })
      .then(function (data) { return data && data.country_code; });
  }

  fromCountryApi()
    .then(function (country) {
      var lang = langFromCountry(country);
      if (lang) {
        clearTimeout(timer);
        finish(lang);
        return;
      }
      throw new Error('no country match');
    })
    .catch(function () {
      return fromIpwho().then(function (country) {
        var lang = langFromCountry(country);
        if (lang) {
          clearTimeout(timer);
          finish(lang);
          return;
        }
        throw new Error('no country match 2');
      });
    })
    .catch(function () {
      clearTimeout(timer);
      finish(browserLang());
    });
})();
