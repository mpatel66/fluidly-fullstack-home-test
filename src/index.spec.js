const assertEquals = require('./index')

var complexObject1 = {
  propA: 1,
  propB: {
    propA: [1, { propA: 'a', propB: 'b' }, 3],
    propB: 1,
    propC: 2
  }
};
var complexObject1Copy = {
  propA: 1,
  propB: {
    propA: [1, { propA: 'a', propB: 'b' }, 3],
    propB: 1,
    propC: 2
  }
};
var complexObject2 = {
  propA: 1,
  propB: {
    propB: 1,
    propA: [1, { propA: 'a', propB: 'c' }, 3],
    propC: 2
  }
};

var complexObject3 = {
  propA: 1,
  propB: {
    propA: [1, { propA: 'a', propB: 'b' }, 3],
    propB: 1
  }
};

describe('assertEquals', () => {

  describe('Primitive Types', () => {
    it('doesnt throw when 2 primitives that are equal are compared', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow();
      expect(() => assertEquals(3, 3)).not.toThrow();
      expect(() => assertEquals(null, null)).not.toThrow();
      expect(() => assertEquals(undefined, undefined)).not.toThrow();
    })
  
    it('throws an error when 2 unequal primitives of the same type are compared', () => {
      expect(() => assertEquals('abcef', 'abc')).toThrow('Expected abcef but found abc');
      expect(() => assertEquals(99, 28)).toThrow('Expected 99 but found 28');
      expect(() => assertEquals(false, true)).toThrow('Expected false but found true');
    })
  
    it('throws an error when 2 unequal primitives of different types are compared', () => {
      expect(() => assertEquals(99, 'abc')).toThrow('Expected 99 but found abc')
      expect(() => assertEquals(99, undefined)).toThrow('Expected 99 but found undefined')
      expect(() => assertEquals('abc', null)).toThrow('Expected abc but found null')
      expect(() => assertEquals('abc', ['a', 'b'])).toThrow('Expected abc but found a,b')

    })

  })


  describe('Arrays', () => {
    it('throws an error when array and non-arrays are compared', () => {
      expect(() => assertEquals(['a'], {0:'a'})).toThrow('Expected type array but found type object');
      expect(() => assertEquals(['a'], 'abc')).toThrow('Expected type array but found type string');
      expect(() => assertEquals(['a'], 673)).toThrow('Expected type array but found type number');
      expect(() => assertEquals(['a'], true)).toThrow('Expected type array but found type boolean');
      
    })
  
    it('doesn\'t throw an error when 2 arrays that are equal are compared', () => {
      expect(() => assertEquals(['a','b','c'], ['a','b','c'])).not.toThrow()
      expect(() => assertEquals([1,3,4], [1,3,4])).not.toThrow()
      expect(() => assertEquals(['a',3,'d'], ['a',3,'d'])).not.toThrow()
    })

    it ('throws an error when 2 arrays with same length, but differing elements are compared', () => {
      expect(() => assertEquals(['a','c', 'b'], ['a','b','c'])).toThrow(`Expected a,c,b but found a,b,c`);
      expect(() => assertEquals(['a', 1, 'b'], ['a','b','c'])).toThrow(`Expected a,1,b but found a,b,c`);
    })
  
    it('throws an error when 2 arrays of unequal length are compared', () => {
      expect(() => assertEquals(['a','b'], ['a','b','c'])).toThrow('Expected array length 2 but found 3');
    })


  
  })
 
  
})