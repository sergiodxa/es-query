function each (fn) {
  for (let i = 0, len = this.length; i < len; i++) {
    fn(this[i], i);
  }

  return this;
}

export default each;
