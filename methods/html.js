function html (value = null) {
  if (!value) {
    return this.innerHTML;
  }

  this.innerHTML = value;

  return this;
}

export default html;
