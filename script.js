// A tiny local visitor counter. It is stored in this browser only, not shared globally.
(function () {
  var counter = document.getElementById('counter');
  if (!counter) return;
  try {
    var key = 'little-corner-visits';
    var count = Number(localStorage.getItem(key) || '0') + 1;
    localStorage.setItem(key, String(count));
    counter.textContent = String(count).padStart(6, '0').slice(-6);
  } catch (e) {
    counter.textContent = '000001';
  }
})();
