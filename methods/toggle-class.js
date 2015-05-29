function toggleClass (className) {
  if (this.classList) {
    this.classList.toggle(className);
  } else {
      let classes = this.className.split(' ');
      let existingIndex = -1;

      for (let i = 0, len = classes.length; i < len; i++) {
        if (classes[i] === className) {
          existingIndex = i;
        }
      }

      if (existingIndex >= 0) {
        classes.splice(existingIndex, 1);
      } else {
        classes.push(className);
      }

    this.className = classes.join(' ');
  }

  return this;
}

export default toggleClass;
