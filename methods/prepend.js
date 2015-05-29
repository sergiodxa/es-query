function prepend (el) {
  this.insertBefore(el, this.firstChild);
  return this;
}

export default prepend;
