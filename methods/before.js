function before (htmlString) {
  this.insertAdjacentHTML('beforebegin', htmlString);
  return this;
}

export default before;
