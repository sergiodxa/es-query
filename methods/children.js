function children () {
  let children = [];
  for (let i = this.children.length; i--;) {
    // Skip comment nodes on IE8
    if (this.children[i].nodeType != 8) {
      children.unshift(this.children[i]);
    }
  }
  return children;
}

export default children;
