function hasClass (className) {
  if (this.classList) {
    return this.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(this.className);
  }
}

export default hasClass;
