function nextElementSibling (el) {
  let nextEl = el;

  do {
    nextEl = nextEl.nextSibling;
  } while (nextEl && nextEl.nodeType !== 1);

  return nextEl;
}

function next () {
  return this.nextElementSibling || nextElementSibling(this);
}

export default next;
