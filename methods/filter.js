function filter (fn) {
  let newElements = [];

  for (let i = 0, len = this.length; i < len; i++) {
    if (fn(this[i])) {
      newElements.unshift(this[i]);
    }
  }

  return newElements;
}

export default filter;
