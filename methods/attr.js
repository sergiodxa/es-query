function attr (name, value = null) {
  if (!value) {
    return this.getAttribute(name);
  }
  this.setAttribute(name, value);
  return this;
}

export default attr;
