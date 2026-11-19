/* Audio-Player für die Projektseiten (kleiner oranger Play-Button).
   Benutzung auf einer Seite:
   1) einmal ganz unten vor </body>:   <script src="sound.js" defer></script>
   2) dort, wo der Player erscheinen soll, innerhalb von <div class="gallery">:
      <figure class="wide sound" data-src="audio/dateiname.mp3"></figure>            */
(function () {
  var css =
    '.sound{display:flex;align-items:center;gap:14px}' +
    '.sound .play{width:30px;height:30px;padding:0;border:0;border-radius:50%;background:#ff6a00;color:#fff;cursor:pointer;display:grid;place-items:center;transition:transform .2s ease}' +
    '.sound .play svg{width:22px;height:22px;fill:currentColor}' +
    '.sound .i-pause{display:none}' +
    '.sound.is-playing .i-play{display:none}' +
    '.sound.is-playing .i-pause{display:block}' +
    '.sound .play:hover,.sound .play:focus-visible{transform:scale(1.15)}' +
    '.sound .play:focus-visible{outline:2px solid #000;outline-offset:3px}' +
    '.sound .time{font-size:14px;color:#6b6b6b;font-variant-numeric:tabular-nums}' +
    '@media (prefers-reduced-motion:reduce){.sound .play{transition:none}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var NS = 'http://www.w3.org/2000/svg';
  function fmt(s) { s = Math.floor(s || 0); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }

  Array.prototype.forEach.call(document.querySelectorAll('.sound[data-src]'), function (box) {
    var audio = document.createElement('audio');
    audio.preload = 'none';
    audio.src = box.getAttribute('data-src');

    var btn = document.createElement('button');
    btn.className = 'play';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Abspielen');
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="i-play" d="M9 7l9 5-9 5z"/><path class="i-pause" d="M8 7h3v10H8zM13 7h3v10h-3z"/></svg>';

    var time = document.createElement('span');
    time.className = 'time';
    time.textContent = '0:00';

    box.appendChild(btn); box.appendChild(time); box.appendChild(audio);

    var failed = false;
    function show() { if (failed) return; time.textContent = fmt(audio.currentTime) + (isFinite(audio.duration) ? ' / ' + fmt(audio.duration) : ''); }

    btn.addEventListener('click', function () {
      failed = false;
      if (audio.paused) {
        Array.prototype.forEach.call(document.querySelectorAll('.sound audio'), function (a) { if (a !== audio) a.pause(); });
        audio.play().catch(function () {});
      } else {
        audio.pause();
      }
    });
    audio.addEventListener('play', function () { box.classList.add('is-playing'); btn.setAttribute('aria-label', 'Pause'); });
    audio.addEventListener('pause', function () { box.classList.remove('is-playing'); btn.setAttribute('aria-label', 'Abspielen'); });
    audio.addEventListener('ended', function () { audio.currentTime = 0; show(); });
    audio.addEventListener('timeupdate', show);
    audio.addEventListener('loadedmetadata', show);
    audio.addEventListener('error', function () { failed = true; time.textContent = 'Datei nicht gefunden'; });
  });
})();
