function trigger (eventName) {
  if (document.createEvent) {
    let event = document.createEvent('HTMLEvents');
    event.initEvent(eventName.toLowerCase, true, false);
    this.dispatchEvent(event);
  } else {
    this.fireEvent(`on${eventName.toLowerCase}`);
  }

  return this;
}

export default trigger;
