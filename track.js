/* AMC lead tracking (GA4 G-5QX8WHKMVQ).
   - Keeps the first UTM tags a visitor arrived with (e.g. utm_campaign=gbp_profile)
     for the whole visit, so a lead can be traced back to the Google Business Profile.
   - Passes those tags on to Calendly, so bookings show where the person came from.
   - Copies them into hidden fields on the bid form, so they arrive with the email.
   - Sends GA4 events: calendly_click, phone_click, email_click, form_submit,
     and generate_lead (fired on the thank-you page after a form goes through). */
(function () {
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var STORE = 'amc_utm';

  function readStored() {
    try { return JSON.parse(sessionStorage.getItem(STORE) || 'null'); } catch (e) { return null; }
  }
  function saveStored(v) {
    try { sessionStorage.setItem(STORE, JSON.stringify(v)); } catch (e) {}
  }

  var params = new URLSearchParams(location.search);
  var fromUrl = {};
  KEYS.forEach(function (k) { var v = params.get(k); if (v) fromUrl[k] = v.slice(0, 100); });
  var utm = Object.keys(fromUrl).length ? fromUrl : (readStored() || {});
  if (Object.keys(fromUrl).length) saveStored(fromUrl);

  function track(name, extra) {
    if (typeof window.gtag !== 'function') return;
    var p = {};
    KEYS.forEach(function (k) { if (utm[k]) p[k] = utm[k]; });
    for (var x in extra || {}) p[x] = extra[x];
    window.gtag('event', name, p);
  }
  window.amcTrack = track;

  function withUtm(href) {
    try {
      var u = new URL(href);
      KEYS.forEach(function (k) { if (utm[k] && !u.searchParams.has(k)) u.searchParams.set(k, utm[k]); });
      return u.toString();
    } catch (e) { return href; }
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    // Calendly links carry the visit's UTM tags.
    document.querySelectorAll('a[href*="calendly.com"]').forEach(function (a) {
      a.href = withUtm(a.href);
    });

    // Clicks on bid, phone and email links.
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a) return;
      var h = a.getAttribute('href') || '';
      if (h.indexOf('calendly.com') !== -1) track('calendly_click', { link_text: (a.textContent || '').trim().slice(0, 60) });
      else if (h.indexOf('tel:') === 0) track('phone_click');
      else if (h.indexOf('mailto:') === 0) track('email_click');
    });

    // Bid form: hidden UTM fields + a submit event.
    document.querySelectorAll('form[data-lead]').forEach(function (f) {
      KEYS.forEach(function (k) {
        if (!utm[k]) return;
        var i = document.createElement('input');
        i.type = 'hidden'; i.name = k; i.value = utm[k];
        f.appendChild(i);
      });
      f.addEventListener('submit', function () {
        var src = f.querySelector('[name="heard_from"]');
        track('form_submit', { heard_from: src ? src.value : '' });
        try { sessionStorage.setItem('amc_lead_pending', '1'); } catch (e) {}
      });
    });

    // Thank-you page: count the lead once per submission.
    if (/\/thank-you(\.html)?$/.test(location.pathname)) {
      var pending = false;
      try { pending = sessionStorage.getItem('amc_lead_pending') === '1'; sessionStorage.removeItem('amc_lead_pending'); } catch (e) {}
      if (pending) track('generate_lead', { method: 'bid_form' });
    }
  });
})();
