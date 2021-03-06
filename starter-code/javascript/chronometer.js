// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}
Chronometer.prototype.timerHandler =function() {
    this.currentTime+=1;
    this.setTime();
};

Chronometer.prototype.startClick = function () {
   this.intervalId = setInterval(this.timerHandler.bind(this), 1000);
};

Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(this.currentTime/60);
  return minutes ;
};

Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime%60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (time) {
  if (time < 10) {
      return "0"+time;
  }
  return String(time);
};

Chronometer.prototype.setTime = function () {
    this.minutes=this.twoDigitsNumber(this.setMinutes());
    this.seconds=this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

Chronometer.prototype.splitClick = function () {

};
