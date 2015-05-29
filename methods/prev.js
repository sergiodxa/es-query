function previousElementSibling (el) {
  let prevEl = el;

  do {
    prevEl = prevEl.previousSibling;
  } while (prevEl && prevEl.nodeType !== 1);

  return prevEl;
}

function prev () {
  return this.previousElementSibling || previousElementSibling(this);
}

export default prev;
