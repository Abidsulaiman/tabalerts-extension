let hidden,
  visibilityChange,
  backupTitle = document.title,
  newTitle = "${form.firstEmoji} ${form.firstTitle}",
  secondaryTitle = "${form.secondEmoji} ${form.secondTitle}",
  configInterval = "${form.timeInterval}",
  configDelay = "${form.timeDelay}",
  configActive = 0;
(configInterval = parseInt(configInterval)),
  (configDelay = parseInt(configDelay)),
  void 0 !== document.hidden
    ? ((hidden = "hidden"), (visibilityChange = "visibilitychange"))
    : void 0 !== document.mozHidden
    ? ((hidden = "mozHidden"), (visibilityChange = "mozvisibilitychange"))
    : void 0 !== document.msHidden
    ? ((hidden = "msHidden"), (visibilityChange = "msvisibilitychange"))
    : void 0 !== document.webkitHidden &&
      ((hidden = "webkitHidden"),
      (visibilityChange = "webkitvisibilitychange"));
let now = new Date(),
  configLastSwitch = now.getTime();

function cron() {
  if (0 === configActive) return;
  let i = new Date();
  if ((i = i.getTime()) - 1e3 * configInterval > configLastSwitch)
    return change(1, 1e3 * configInterval), void (configLastSwitch = i);
  setTimeout(function () {
    cron();
  }, 100);
}
var sound = new Audio(audio);

function restore() {
  (document.title = backupTitle), cron(), sound.pause();
}

function change(i, e) {
  sound.play();
  0 !== i
    ? ((document.title = newTitle),
      setTimeout(function () {
        document.title = secondaryTitle;
      }, e),
      setTimeout(function () {
        change(i - 1, e), sound.play();
      }, 2 * e))
    : restore();
}

function handleVisibilityChange() {
  document[hidden]
    ? ((document.title = newTitle),
      setTimeout(function () {
        (configActive = 1), cron();
      }, 1e3 * configDelay))
    : ((configActive = 0), (document.title = backupTitle));
}
document.addEventListener(visibilityChange, handleVisibilityChange, !1), cron();
