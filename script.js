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
    { src: 'assets/photos/img_0612.webp', alt: 'people and horses on a wide beach beside the water.' },
    { src: 'assets/photos/img_0620.webp', alt: 'a small heart-shaped note hanging on a chain-link fence.' },
    { src: 'assets/photos/img_0636.webp', alt: 'a ferris wheel and boardwalk rides near the beach.' },
    { src: 'assets/photos/img_0652.webp', alt: 'a person sitting on the beach facing the ocean.' },
    { src: 'assets/photos/img_0663.webp', alt: 'a squirrel climbing the trunk of a tree.' },
    { src: 'assets/photos/img_0669.webp', alt: 'a water bird swimming across a calm gray surface.' },
    { src: 'assets/photos/img_0688.webp', alt: 'a cat peeking through a screened window.' },
    { src: 'assets/photos/img_0692.webp', alt: 'a raccoon resting beneath a raised wooden deck.' },
    { src: 'assets/photos/img_0714.webp', alt: 'picnic tables under trees in warm late-day sunlight.' },
    { src: 'assets/photos/img_0740.webp', alt: 'a small animal crossing a driveway beside a hedge.' },
    { src: 'assets/photos/img_0760.webp', alt: 'a wasp perched among green leaves.' },
    { src: 'assets/photos/img_0761.webp', alt: 'a small insect resting on a plant stem.' },
    { src: 'assets/photos/img_0764.webp', alt: 'a rabbit sitting beside a path in lush greenery.' },
    { src: 'assets/photos/img_0765.webp', alt: 'a butterfly resting on a pale green leaf.' },
    { src: 'assets/photos/img_0777.webp', alt: 'a patterned butterfly resting among green leaves.' },
    { src: 'assets/photos/img_0778.webp', alt: 'a spider on dark stones.' },
    { src: 'assets/photos/img_0892.webp', alt: 'a bumblebee on a green leaf.' },
    { src: 'assets/photos/img_0935.webp', alt: 'a bee gathering pollen from a bright yellow flower.' },
    { src: 'assets/photos/img_0947.webp', alt: 'a coastal cliff above the ocean.' },
    { src: 'assets/photos/img_0969.webp', alt: 'green coastal vegetation above the sea.' },
    { src: 'assets/photos/img_1056.webp', alt: 'a sloping autumn street beneath a speed-limit sign.' },
    { src: 'assets/photos/img_1066.webp', alt: 'a close-up of a seed head in a field.' },
    { src: 'assets/photos/img_1074.webp', alt: 'large rocks in a shallow woodland stream.' },
    { src: 'assets/photos/img_1081.webp', alt: 'a leaf-covered path winding through autumn woods.' },
    { src: 'assets/photos/img_1094.webp', alt: 'a distant view across calm water toward houses.' },
    { src: 'assets/photos/img_1120.webp', alt: 'a small animal standing near a wooden waterfront dock.' },
    { src: 'assets/photos/img_1122.webp', alt: 'a distant animal on the open water beneath a hazy horizon.' },
    { src: 'assets/photos/img_1128.webp', alt: 'a squirrel among dark tree branches.' },
    { src: 'assets/photos/img_1157.webp', alt: 'a black-and-white dog resting in the grass.' },
    { src: 'assets/photos/img_1161.webp', alt: 'a dog resting in the shade of a tree in a park.' }
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
      homePhotoLink.setAttribute('aria-label', 'open larger view: ' + photos[photoIndex].alt);
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
      'on a warm march night i sit on the steps; · the stone cool on my hands. · i sit and watch the world around me, · as the soft breeze blows through my hair.',
      'i see dark, leafless trees looming above · against a backdrop of white, glowing dots in the sky. · dogs bark in the distance— · i like to think they’re laughing. · the air smells of clean, peaceful spring grass, · warm and damp beneath the cold moon.',
      'then appears a man before me. · so familiar yet still a stranger. · he asks if he may sit here too.',
      'i scoot right over and let him sit. · he remarks that “spring has come early,” · then inquires if i’m excited. · i reply, simply, yes.',
      'he sits and stares down toward the grass. · we sit in silence for a minute we wished would last forever.',
      'he stands and takes a few measured steps, · then turns to face me. · “why are you afraid of death?” he asks. · then i look to the stars, · and tell him— · “that is why.”'
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
