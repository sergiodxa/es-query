function on (eventName, handler) {
  if (this.addEventListener) {
    this.addEventListener(eventName, handler);
  } else {
    this.attachEvent('on' + eventName, function () {
      handler.call(this);
    });
  }

  return this;
}

export default on;
