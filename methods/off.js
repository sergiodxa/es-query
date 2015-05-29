function off (eventName, handler) {
  if (this.removeEventListener) {
    this.removeEventListener(eventName, handler);
  } else {
    this.detachEvent('on' + eventName, handler);
  }

  return this;
}

export default off;
