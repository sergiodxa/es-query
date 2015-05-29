function after (htmlString) {
  this.insertAdjacentHTML('afterend', htmlString);
  return this;
}

export default after();
