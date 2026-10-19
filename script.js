// Local visitor counter plus rotating homepage features.
(function () {
  // Use the browser's secure random generator when available, with an unbiased integer pick.
  function randomIndex(max) {
    if (window.crypto && window.crypto.getRandomValues && max > 0) {
      var range = 0x100000000;
      var limit = Math.floor(range / max) * max;
      var values = new Uint32Array(1);
      do {
        window.crypto.getRandomValues(values);
      } while (values[0] >= limit);
      return values[0] % max;
    }
    return Math.floor(Math.random() * max);
  }

  var counter = document.getElementById('counter');
  if (counter) {
    try {
      var key = 'my-digital-home-visits';
      var count = Number(localStorage.getItem(key) || '0') + 1;
      localStorage.setItem(key, String(count));
      counter.textContent = String(count).padStart(6, '0').slice(-6);
    } catch (e) {
      counter.textContent = '000001';
    }
  }

  var photos = [
    { src: 'assets/photos/img_0612.webp', alt: 'People and horses on a wide beach beside the water.' },
    { src: 'assets/photos/img_0620.webp', alt: 'A small heart-shaped note hanging on a chain-link fence.' },
    { src: 'assets/photos/img_0636.webp', alt: 'A Ferris wheel and boardwalk rides near the beach.' },
    { src: 'assets/photos/img_0652.webp', alt: 'A person sitting on the beach facing the ocean.' },
    { src: 'assets/photos/img_0663.webp', alt: 'A squirrel climbing the trunk of a tree.' },
    { src: 'assets/photos/img_0669.webp', alt: 'A water bird swimming across a calm gray surface.' },
    { src: 'assets/photos/img_0688.webp', alt: 'A cat peeking through a screened window.' },
    { src: 'assets/photos/img_0692.webp', alt: 'A raccoon resting beneath a raised wooden deck.' },
    { src: 'assets/photos/img_0714.webp', alt: 'Picnic tables under trees in warm late-day sunlight.' },
    { src: 'assets/photos/img_0740.webp', alt: 'A small animal crossing a driveway beside a hedge.' },
    { src: 'assets/photos/img_0760.webp', alt: 'A wasp perched among green leaves.' },
    { src: 'assets/photos/img_0761.webp', alt: 'A small insect resting on a plant stem.' },
    { src: 'assets/photos/img_0764.webp', alt: 'A rabbit sitting beside a path in lush greenery.' },
    { src: 'assets/photos/img_0765.webp', alt: 'A butterfly resting on a pale green leaf.' },
    { src: 'assets/photos/img_0777.webp', alt: 'A patterned butterfly resting among green leaves.' },
    { src: 'assets/photos/img_0778.webp', alt: 'A spider on dark stones.' },
    { src: 'assets/photos/img_0892.webp', alt: 'A bumblebee on a green leaf.' },
    { src: 'assets/photos/img_0935.webp', alt: 'A bee gathering pollen from a bright yellow flower.' },
    { src: 'assets/photos/img_0947.webp', alt: 'A coastal cliff above the ocean.' },
    { src: 'assets/photos/img_0969.webp', alt: 'Green coastal vegetation above the sea.' },
    { src: 'assets/photos/img_1056.webp', alt: 'A sloping autumn street beneath a speed-limit sign.' },
    { src: 'assets/photos/img_1066.webp', alt: 'A close-up of a seed head in a field.' },
    { src: 'assets/photos/img_1074.webp', alt: 'Large rocks in a shallow woodland stream.' },
    { src: 'assets/photos/img_1081.webp', alt: 'A leaf-covered path winding through autumn woods.' },
    { src: 'assets/photos/img_1094.webp', alt: 'A distant view across calm water toward houses.' },
    { src: 'assets/photos/img_1120.webp', alt: 'A small animal standing near a wooden waterfront dock.' },
    { src: 'assets/photos/img_1122.webp', alt: 'A distant animal on the open water beneath a hazy horizon.' },
    { src: 'assets/photos/img_1128.webp', alt: 'A squirrel among dark tree branches.' },
    { src: 'assets/photos/img_1157.webp', alt: 'A black-and-white dog resting in the grass.' },
    { src: 'assets/photos/img_1161.webp', alt: 'A dog resting in the shade of a tree in a park.' }
  ];
  var homePhoto = document.getElementById('random-home-photo');
  var homePhotoLink = document.getElementById('random-home-photo-link');
  if (homePhoto && photos.length) {
    var photoIndex = 0;
    try {
      var previousPhoto = Number(localStorage.getItem('my-digital-home-random-photo') || '-1');
      var photoChoices = photos.map(function (_, index) { return index; }).filter(function (index) { return index !== previousPhoto; });
      photoIndex = photoChoices[randomIndex(photoChoices.length)];
      localStorage.setItem('my-digital-home-random-photo', String(photoIndex));
    } catch (e) {
      photoIndex = randomIndex(photos.length);
    }
    homePhoto.src = photos[photoIndex].src;
    homePhoto.alt = photos[photoIndex].alt;
    if (homePhotoLink) {
      homePhotoLink.href = photos[photoIndex].src;
      homePhotoLink.setAttribute('aria-label', 'Open larger view: ' + photos[photoIndex].alt);
    }
  }

  var stanzaTicker = document.getElementById('random-poem-stanza');
  if (stanzaTicker) {
    var stanzas = [
      'two crows flitter away · from barren branches · since the scheming caterpillar · devoured all the leaves',
      'and deer stomp their hooves · at squirrels who are terrified · to share their treasure',
      'what chimerical creature etches · its name upon our land · or dresses as a stately man in disguise · defending lions from their prey',
      'and what belly beast of hate · stands in wait · just itching to be born',
      'early morning drive · pale blue sky kisses · sad gray pavement · trees tower above · guard their own tiny houses',
      'squirrel scurries gently · brakes slam jarringly · people begin to honk · squirrel gets away',
      'could have kept going · chose to stop anyway',
      'On a warm March night I sit on the steps; · The stone cool on my hands. · I sit and watch the world around me, · As the soft breeze blows through my hair.',
      'I see dark, leafless trees looming above · Against a backdrop of white, glowing dots in the sky. · Dogs bark in the distance— · I like to think they’re laughing. · The air smells of clean, peaceful spring grass, · Warm and damp beneath the cold moon.',
      'Then appears a man before me. · So familiar yet still a stranger. · He asks if he may sit here too.',
      'I scoot right over and let him sit. · He remarks that “Spring has come early,” · Then inquires if I’m excited. · I reply, simply, yes.',
      'He sits and stares down toward the grass. · We sit in silence for a minute we wished would last forever.',
      'He stands and takes a few measured steps, · Then turns to face me. · “Why are you afraid of death?” he asks. · Then I look to the stars, · And tell him— · “That is why.”'
    ];
    var stanzaIndex = 0;
    try {
      var previousStanza = Number(localStorage.getItem('my-digital-home-random-stanza') || '-1');
      var stanzaChoices = stanzas.map(function (_, index) { return index; }).filter(function (index) { return index !== previousStanza; });
      stanzaIndex = stanzaChoices[randomIndex(stanzaChoices.length)];
      localStorage.setItem('my-digital-home-random-stanza', String(stanzaIndex));
    } catch (e) {
      stanzaIndex = randomIndex(stanzas.length);
    }
    stanzaTicker.textContent = stanzas[stanzaIndex];
  }
})();
