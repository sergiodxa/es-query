function siblings () {
  let sib = Array.prototype.slice.call(this.parentNode.children);

  for (let i = 0, len = sib.length; i < len; i++) {
    if (sib[i] === this) {
      sib.splice(i, 1);
      break;
    }
  }

  return sib;
}

export default siblings;
