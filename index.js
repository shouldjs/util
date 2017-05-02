var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

export function hasOwnProperty(obj, key) {
  return _hasOwnProperty.call(obj, key);
}

export function propertyIsEnumerable(obj, key) {
  return _propertyIsEnumerable.call(obj, key);
}

export function merge(a, b) {
  if (a && b) {
    for (var key in b) {
      a[key] = b[key];
    }
  }
  return a;
}

export function isIterator(obj) {
  if (!obj) {
    return false;
  }

  if (obj.__shouldIterator__) {
    return true;
  }

  return typeof obj.next === 'function' &&
    typeof Symbol === 'function' &&
    typeof Symbol.iterator === 'symbol' &&
    typeof obj[Symbol.iterator] === 'function' &&
    obj[Symbol.iterator]() === obj;
}

//TODO find better way
export function isGeneratorFunction(f) {
  return typeof f === 'function' && /^function\s*\*\s*/.test(f.toString());
}

export function isAsyncFunction(f) {
  return typeof f === 'function' && /^async function\s*/.test(f.toString());
}