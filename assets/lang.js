(function () {
  var KEY = 'calcuverse-lang';
  var lang = null;

  function apply(next) {
    lang = next;
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

    document.querySelectorAll('[data-zh]').forEach(function (el) {
      var text = el.getAttribute(lang === 'en' ? 'data-en' : 'data-zh');
      if (text) el.textContent = text;
    });

    document.querySelectorAll('[data-zh-href]').forEach(function (el) {
      var href = el.getAttribute(lang === 'en' ? 'data-en-href' : 'data-zh-href');
      if (href) el.setAttribute('href', href);
    });

    document.querySelectorAll('[data-zh-src]').forEach(function (el) {
      var src = el.getAttribute(lang === 'en' ? 'data-en-src' : 'data-zh-src');
      if (src) el.setAttribute('src', src);
    });

    var btn = document.getElementById('langBtn');
    if (btn) btn.textContent = lang === 'en' ? '中文' : 'EN';

    var root = document.documentElement;
    var title = root.getAttribute(lang === 'en' ? 'data-title-en' : 'data-title-zh');
    if (title) document.title = title;

    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  function initial() {
    var saved = localStorage.getItem(KEY);
    if (saved === 'en' || saved === 'zh') return saved;
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'en' || q === 'zh') return q;
    var nav = navigator.language || '';
    return nav.toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function start() {
    apply(initial());
    document.addEventListener('click', function (e) {
      if (e.target && e.target.id === 'langBtn') {
        var next = lang === 'en' ? 'zh' : 'en';
        localStorage.setItem(KEY, next);
        apply(next);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
