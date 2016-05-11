/*
 * Script to generate a random splash text every refresh.
 */
(function() {
  var splash = [
    'moonlightradio.xyz',
    'Yet another community on the internet.',
    'Like memes? Join MOONLIGHT!',
    'Home of the dankest memes and the angriest sergals.',
    'Better a hole in your moon, than a moon in your hole.',
    'Where were you, when STARLIGHT is kill?',
    'Held together with duct tape.',
    'We cook on ion drives.',
    'We excel at crashing into asteroids.',
    'We welcome everyone (even sergals!)',
    'The dark side of STARLIGHT.',
    'God is dead, we have killed him with vaporwave.',
    'Sergals. That is all.',
    'Everything is possible!',
    'Nothing is sacred.',
  ];
  var rand = splash[Math.floor(Math.random() * splash.length)];
  document.getElementById('splash').innerText = rand;
})();
