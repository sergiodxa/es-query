function children () {
  let childrenElements = [];

  for (let i = 0, len = this.children.length; i < len; i++) {
    if (this.children[i].nodeType !== 8) {
      childrenElements.unshift(this.children[i]);
    }
  }
  return childrenElements;
}

export default children;
