(function () {
  var STORAGE_KEY = 'gauchofilms-lang';
  var MANUAL_KEY = 'gauchofilms-lang-manual';
  var SUPPORTED = { es: true, en: true, pt: true };
  var DEFAULT_LANG = 'en';
  var GEO_TIMEOUT_MS = 4500;

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

  var pathname = location.pathname.replace(/\/+$/, '') || '/';
  if (/\/(es|en|pt)(?:\/index\.html)?$/i.test(pathname)) return;

  function isRootEntry() {
    if (pathname === '/' || pathname === '' || pathname === '/index.html') return true;
    if (location.protocol === 'file:') {
      return /(?:^|\/)index\.html$/i.test(pathname) &&
        !/\/(es|en|pt)\/index\.html$/i.test(pathname);
    }
    return false;
  }

  if (!isRootEntry()) return;

  function langFromCountry(code) {
    var country = String(code || '').toUpperCase();
    if (PORTUGUESE[country]) return 'pt';
    if (SPANISH[country]) return 'es';
    if (ENGLISH[country]) return 'en';
    return null;
  }

  function langFromTag(tag) {
    var parts = String(tag || '').split('-');
    var base = (parts[0] || '').toLowerCase();
    var region = (parts[1] || '').toUpperCase();
    if (region && ENGLISH[region]) return 'en';
    if (region && SPANISH[region]) return 'es';
    if (region && PORTUGUESE[region]) return 'pt';
    if (SUPPORTED[base]) return base;
    return null;
  }

  function browserLang() {
    try {
      var tags = navigator.languages && navigator.languages.length
        ? navigator.languages.slice()
        : [navigator.language || navigator.userLanguage];
      for (var i = 0; i < tags.length; i++) {
        var fromTag = langFromTag(tags[i]);
        if (fromTag) return fromTag;
      }
    } catch (err) {
      /* ignore */
    }
    return null;
  }

  function go(lang) {
    var next = SUPPORTED[lang] ? lang : DEFAULT_LANG;
    if (location.protocol === 'file:') {
      location.replace(next + '/index.html');
      return;
    }
    location.replace(next + '/');
  }

  var settled = false;
  function finish(lang) {
    if (settled) return;
    settled = true;
    go(lang || browserLang() || DEFAULT_LANG);
  }

  try {
    if (localStorage.getItem(MANUAL_KEY) === '1') {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED[saved]) {
        finish(saved);
        return;
      }
    }
  } catch (err) {
    /* ignore localStorage error */
  }

  var timer = setTimeout(function () {
    finish(null);
  }, GEO_TIMEOUT_MS);

  function fromCountryApi() {
    return fetch('https://api.country.is/', { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('country.is failed');
        return res.json();
      })
      .then(function (data) { return data && data.country; });
  }

  function fromIpwho() {
    return fetch('https://ipwho.is/', { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('ipwho failed');
        return res.json();
      })
      .then(function (data) {
        if (!data || data.success === false) throw new Error('ipwho rejected');
        return data.country_code;
      });
  }

  function fromIpapi() {
    return fetch('https://ipapi.co/country_code/', { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('ipapi failed');
        return res.text();
      })
      .then(function (code) {
        var trimmed = code && code.trim();
        if (!trimmed || trimmed.length !== 2) throw new Error('ipapi invalid');
        return trimmed;
      });
  }

  function detectCountryCode() {
    var providers = [fromCountryApi, fromIpwho, fromIpapi];
    return new Promise(function (resolve, reject) {
      var pending = providers.length;
      var resolved = false;
      var lastError = null;

      function done(code) {
        if (resolved) return;
        resolved = true;
        resolve(code);
      }

      function fail(err) {
        lastError = err;
        pending -= 1;
        if (pending === 0 && !resolved) {
          reject(lastError || new Error('geo failed'));
        }
      }

      providers.forEach(function (provider) {
        provider()
          .then(function (code) {
            if (code) done(code);
            else fail(new Error('empty country'));
          })
          .catch(fail);
      });
    });
  }

  detectCountryCode()
    .then(function (country) {
      clearTimeout(timer);
      var lang = langFromCountry(country);
      finish(lang || browserLang() || DEFAULT_LANG);
    })
    .catch(function () {
      clearTimeout(timer);
      finish(null);
    });
})();
