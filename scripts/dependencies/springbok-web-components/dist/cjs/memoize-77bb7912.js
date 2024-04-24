'use strict';

var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this,
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}

/**
 * Decorator to memoize (static) methods and getters.
 *
 * @param {string|array} props Optional, single or array of property names to be used for cache
 *   invalidation if the method doesn't have any arguments.
 *
 * @example
```
import { Memoize } from '@springbokagency/stencil-base';

class ExampleGetter {
  stringified = '{"foo": "bar"}';

  @Memoize('stringified')
  get parsed() {
    return JSON.parse(this.stringified);
  }

  constructor() {
    this.parsed; // cache miss: { foo: 'bar' }
    this.parsed; // cache hit: { foo: 'bar' }
    this.stringified = '{"foo": "baz"}';
    this.parsed; // cache miss: { foo: 'baz' }
  }
}

class ExampleMethod {
  numberA = 1;
  numberB = 2;

  constructor() {
    this.addition() // cache miss: 3
    this.addition() // cache hit: 3
    this.numberA = 2;
    this.addition() // cache miss: 4
  }

  @Memoize(['numberA', 'numberB'])
  addition() {
    return this.numberA + this.numberB;
  }
}

class ExampleStaticMethod {
  @Memoize()
  static addition(numberA, numberB) {
    return numberA + numberB;
  }

  constructor() {
    ExampleStaticMethod.addition(1, 2) // cache miss: 3
    ExampleStaticMethod.addition(1, 2) // cache hit: 3
    ExampleStaticMethod.addition(2, 2) // cache miss: 4
  }
}
```
 */
function Memoize(props = []) {
  return (_, propertyKey, descriptor) => {
    let descriptorProp;
    if ('value' in descriptor) {
      descriptorProp = 'value';
    }
    else if ('get' in descriptor) {
      descriptorProp = 'get';
    }
    else {
      throw new TypeError('The decorated value must be a (static) method or a getter.');
    }
    const descriptorFunc = descriptor[descriptorProp];
    /**
     * Memoize the wrapper of the method/getter to pass the cache key as first argument.
     * __ is used here solely for determining the memoize cache key.
     */
    const memoizedFunc = memoizeOne((__, thisArg, arguments_) => {
      const argsArray = arguments_.length > 0 ? arguments_ : null;
      return descriptorFunc.apply(thisArg, argsArray);
    }, (newArgs, lastArgs) => newArgs[0] === lastArgs[0]);
    // replace the method/getter by the memoized method/getter
    // eslint-disable-next-line no-param-reassign, func-names
    descriptor[descriptorProp] = function (...arguments_) {
      let cacheKeyArr;
      // set the cache key array
      if (arguments_.length > 0) {
        cacheKeyArr = arguments_;
      }
      else if (Array.isArray(props) && props.length > 0) {
        cacheKeyArr = props.map((prop) => this[prop]);
      }
      else if (typeof props === 'string' && props !== '') {
        cacheKeyArr = [this[props]];
      }
      else {
        // no cache invalidation
        cacheKeyArr = [propertyKey];
      }
      return memoizedFunc(JSON.stringify(cacheKeyArr), this, arguments_);
    };
    return descriptor;
  };
}

exports.Memoize = Memoize;

//# sourceMappingURL=memoize-77bb7912.js.map