function contains (child) {
  return this !== child && this.contains(child);
}

export default contains;
