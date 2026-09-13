/* Template Factory claim/change overlay — client-side only, no backend. */
(function () {
  'use strict';

  var billingToggle = document.querySelector('[data-billing-toggle]');
  var billingPanel = document.querySelector('[data-billing-panel]');
  var modal = document.querySelector('[data-change-modal]');
  var openBtn = document.querySelector('[data-change-open]');
  var form = document.querySelector('[data-change-form]');
  var thanks = document.querySelector('[data-change-thanks]');
  var closeBtns = document.querySelectorAll('[data-change-close]');

  if (billingToggle && billingPanel) {
    billingToggle.addEventListener('click', function () {
      var open = billingPanel.hasAttribute('hidden');
      if (open) {
        billingPanel.removeAttribute('hidden');
        billingToggle.setAttribute('aria-expanded', 'true');
      } else {
        billingPanel.setAttribute('hidden', '');
        billingToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function openModal() {
    if (!modal) return;
    modal.dataset.done = 'false';
    if (thanks) thanks.hidden = true;
    if (form) form.reset();
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
    var msg = document.getElementById('change-message');
    if (msg) msg.focus();
  }

  function closeModal() {
    if (!modal) return;
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  });

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nameEl = document.getElementById('change-name');
      var emailEl = document.getElementById('change-email');
      var messageEl = document.getElementById('change-message');
      var name = nameEl ? nameEl.value.trim() : '';
      var email = emailEl ? emailEl.value.trim() : '';
      var message = messageEl ? messageEl.value.trim() : '';

      if (!message) {
        if (messageEl) messageEl.focus();
        return;
      }

      var payload = {
        site: 'RJP General Contracting',
        build: 'hs-006-rjp',
        name: name || null,
        email: email || null,
        message: message,
        at: new Date().toISOString()
      };

      try {
        var key = 'tf-change-requests';
        var prev = JSON.parse(localStorage.getItem(key) || '[]');
        if (!Array.isArray(prev)) prev = [];
        prev.push(payload);
        localStorage.setItem(key, JSON.stringify(prev));
      } catch (err) {
        /* ignore storage errors */
      }

      console.log('[Template Factory] change request', payload);

      var subject = encodeURIComponent('Change request · RJP General Contracting preview');
      var body = encodeURIComponent(
        'Site: RJP General Contracting (hs-006-rjp)\n' +
        'Name: ' + (name || '(not given)') + '\n' +
        'Email: ' + (email || '(not given)') + '\n\n' +
        'Change request:\n' + message + '\n'
      );
      /* Optional mailto — opens only if user agent allows; non-blocking. */
      try {
        var mail = document.createElement('a');
        mail.href = 'mailto:support@satisfieduser.com?subject=' + subject + '&body=' + body;
        mail.rel = 'noopener';
        /* Do not auto-click; keep console + localStorage as primary store. */
        console.log('[Template Factory] mailto draft ready', mail.href);
      } catch (err2) { /* noop */ }

      if (thanks) thanks.hidden = false;
      if (modal) modal.dataset.done = 'true';

      window.setTimeout(closeModal, 2200);
    });
  }
})();
