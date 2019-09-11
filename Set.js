class Set {
    constructor(list = []) {
      this.values = [];
      list.forEach(a => this.insert(a));
    
  
    // Create a `values` property and set it equal to an empty array
    // Accept a `list` parameter (default to an empty array). Loop
    // through the array and insert each item into the set
  }

  length() {
    this.length = this.values.length
    return this.values.length;
    // return the length of the values property
  }

  insert(val) {
    if (!this.values.includes(val)) {
      this.values.push(val);
    }
  }
    // if `val` is not in the `values` property, then push it in
  

  remove(val) {
    if (this.values.includes(val)) {
      this.values.splice(this.values.indexOf(val), 1);
    }
  }
    // if `val` is in the `values` property, then remove it
  

  has(val) {
    return this.values.includes(val);
  
    // return true if `val` is in `values`, false if it isn't
  }

  union(set) {
    return new Set([...this.values, ...set.values]);
    // return a new Set with the values from this Set and the
    // Set passed in as a parameter
  }

  intersect(set) {
    return new Set(this.values.filter(x => set.has(x)));
    // return a new Set of the values that appear in both this
    // Set and the Set passed in
  }

  difference(set) {
    let set1 = this.values.filter(x => !set.has(x));
    let set2 = set.values.filter(x => !this.has(x));
    return new Set([...set1, ...set2]);

    // return a new Set of the values that only appear in one of
    // the two sets
  }
}

module.exports = {
  Set
};
