function addClass (className) {
  if (this.classList) {
    this.classList.add(className);
  } else {
    this.className += ' ' + className;
  }

  return this;
}

export default addClass;
