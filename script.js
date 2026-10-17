/* Small touches of interactivity; the site works without a backend. */
(function () {
  'use strict';

  function updateClock() {
    var clock = document.getElementById('system-clock');
    if (!clock) return;
    var now = new Date();
    var time = [now.getHours(), now.getMinutes(), now.getSeconds()]
      .map(function (part) { return String(part).padStart(2, '0'); })
      .join(':');
    clock.textContent = 'SYSTEM TIME: ' + time;
  }
  updateClock();
  window.setInterval(updateClock, 1000);

  // This is a count stored only in this browser, not a global visitor count.
  var counter = document.getElementById('visit-counter');
  if (counter) {
    try {
      var key = 'field-notes-local-visits';
      var visits = Number(window.localStorage.getItem(key) || '0');
      visits = Number.isFinite(visits) && visits >= 0 ? visits + 1 : 1;
      window.localStorage.setItem(key, String(visits));
      counter.textContent = String(visits).padStart(6, '0').slice(-6);
    } catch (error) {
      counter.textContent = '000001';
    }
  }

  // Placeholder photography tiles open a small detail window until real images are added.
  var photoDialog = document.getElementById('photo-dialog');
  var dialogTitle = document.getElementById('dialog-title');
  var dialogImage = document.getElementById('dialog-image');
  var dialogDescription = document.getElementById('dialog-description');
  var dialogKicker = document.getElementById('dialog-kicker');
  var photoTiles = document.querySelectorAll('[data-placeholder]');
  photoTiles.forEach(function (tile) {
    tile.addEventListener('click', function () {
      if (!photoDialog || typeof photoDialog.showModal !== 'function') return;
      if (dialogTitle) dialogTitle.textContent = tile.getAttribute('data-placeholder') || 'Frame details';
      var image = tile.querySelector('img.real-photo');
      var caption = tile.querySelector('.photo-tile-info span');
      if (image && dialogImage) {
        dialogImage.src = image.src;
        dialogImage.alt = image.alt || '';
        dialogImage.hidden = false;
        if (dialogKicker) dialogKicker.textContent = 'IMAGE RECORD';
        if (dialogDescription) dialogDescription.textContent = caption ? caption.textContent : (image.alt || 'Photograph from the archive.');
      } else {
        if (dialogImage) { dialogImage.removeAttribute('src'); dialogImage.hidden = true; }
        if (dialogKicker) dialogKicker.textContent = 'IMAGE RECORD / PLACEHOLDER';
        if (dialogDescription) dialogDescription.textContent = 'This tile is a placeholder. Follow the README instructions to add one of your photographs here.';
      }
      photoDialog.showModal();
    });
  });
})();
