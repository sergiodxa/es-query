function empty () {
  while (this.firstChild) {
    this.removeChild(this.firstChild);
  }

  return this;
}

export default empty;
