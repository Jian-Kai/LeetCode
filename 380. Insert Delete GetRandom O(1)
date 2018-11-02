/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.array = new Map()
    this.index = new Map()
    this.count = 0
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.index.has(val)){
        return false
    }
    
    this.array.set(this.count, val) //save val
    this.index.set(val, this.count) //save index of val
    this.count++ //index
    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    
    if(!this.index.has(val))
        return false;
    
    if(this.array.get(this.count-1) === val){
        this.index.delete(val)
        this.array.delete(this.count-1)
    }
    else{
        var lastval = this.array.get(this.count - 1)
        var valindex = this.index.get(val)
        
        this.array.set(valindex, lastval)
        this.array.delete(this.count - 1)
        
        this.index.set(lastval, valindex)
        this.index.delete(val)
        
    }
    
    this.count--;
    return true;
    
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.array.get(random(this.count));
    
    function random(l){
        return Math.floor((Math.random() * l));
    }
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
