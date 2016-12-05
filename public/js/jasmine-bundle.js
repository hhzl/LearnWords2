(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var wordList = [
  {
    "_id": 1,
    "word": "apple",
    "translate": "der Apfel"
  },
  {
    "_id": 2,
    "word": "pear",
    "translate": "die Birne"
  },
  {
    "_id": 3,
    "word": "lemon",
    "translate": "die Zitrone"
  },
  {
    "_id": 4,
    "word": "banana",
    "translate": "die Banane"
  },
  {
    "_id": 5,
    "word": "orange",
    "translate": "die Orange"
  },
  {
    "_id": 6,
    "word": "strawberry",
    "translate": "die Erdbeere"
  },
  {
    "_id": 7,
    "word": "raspberry",
    "translate": "die Himbeere"
  },
  {
    "_id": 8,
    "word": "blueberry",
    "translate": "die Brombeere"
  },
  {
    "_id": 9,
    "word": "guava",
    "translate": "die Guava"
  },
  {
    "_id": 10,
    "word": "pawpaw",
    "translate": "die Papaya"
  },
  {
    "_id": 11,
    "word": "apricot",
    "translate": "die Aprikose"
  },
  {
    "_id": 12,
    "word": "melon",
    "translate": "die Melone"
  }
];


module.exports = wordList;

},{}],2:[function(require,module,exports){
// public
module.exports = require('./src');

},{"./src":5}],3:[function(require,module,exports){
// public
module.exports = {
  asymmetricMatcher: [{
    name: 'after',
    matcher: 'toBeAfter'
  }, {
    name: 'arrayOfBooleans',
    matcher: 'toBeArrayOfBooleans'
  }, {
    name: 'arrayOfNumbers',
    matcher: 'toBeArrayOfNumbers'
  }, {
    name: 'arrayOfObjects',
    matcher: 'toBeArrayOfObjects'
  }, {
    name: 'arrayOfSize',
    matcher: 'toBeArrayOfSize'
  }, {
    name: 'arrayOfStrings',
    matcher: 'toBeArrayOfStrings'
  }, {
    name: 'before',
    matcher: 'toBeBefore'
  }, {
    name: 'calculable',
    matcher: 'toBeCalculable'
  }, {
    name: 'emptyArray',
    matcher: 'toBeEmptyArray'
  }, {
    name: 'emptyObject',
    matcher: 'toBeEmptyObject'
  }, {
    name: 'evenNumber',
    matcher: 'toBeEvenNumber'
  }, {
    name: 'greaterThanOrEqualTo',
    matcher: 'toBeGreaterThanOrEqualTo'
  }, {
    name: 'iso8601',
    matcher: 'toBeIso8601'
  }, {
    name: 'jsonString',
    matcher: 'toBeJsonString'
  }, {
    name: 'lessThanOrEqualTo',
    matcher: 'toBeLessThanOrEqualTo'
  }, {
    name: 'longerThan',
    matcher: 'toBeLongerThan'
  }, {
    name: 'nonEmptyArray',
    matcher: 'toBeNonEmptyArray'
  }, {
    name: 'nonEmptyObject',
    matcher: 'toBeNonEmptyObject'
  }, {
    name: 'nonEmptyString',
    matcher: 'toBeNonEmptyString'
  }, {
    name: 'oddNumber',
    matcher: 'toBeOddNumber'
  }, {
    name: 'sameLengthAs',
    matcher: 'toBeSameLengthAs'
  }, {
    name: 'shorterThan',
    matcher: 'toBeShorterThan'
  }, {
    name: 'whitespace',
    matcher: 'toBeWhitespace'
  }, {
    name: 'wholeNumber',
    matcher: 'toBeWholeNumber'
  }, {
    name: 'withinRange',
    matcher: 'toBeWithinRange'
  }, {
    name: 'endingWith',
    matcher: 'toEndWith'
  }, {
    name: 'startingWith',
    matcher: 'toStartWith'
  }],
  matcher: {
    toBeAfter: require('./toBeAfter'),
    toBeArray: require('./toBeArray'),
    toBeArrayOfBooleans: require('./toBeArrayOfBooleans'),
    toBeArrayOfNumbers: require('./toBeArrayOfNumbers'),
    toBeArrayOfObjects: require('./toBeArrayOfObjects'),
    toBeArrayOfSize: require('./toBeArrayOfSize'),
    toBeArrayOfStrings: require('./toBeArrayOfStrings'),
    toBeBefore: require('./toBeBefore'),
    toBeBoolean: require('./toBeBoolean'),
    toBeCalculable: require('./toBeCalculable'),
    toBeDate: require('./toBeDate'),
    toBeEmptyArray: require('./toBeEmptyArray'),
    toBeEmptyObject: require('./toBeEmptyObject'),
    toBeEmptyString: require('./toBeEmptyString'),
    toBeEvenNumber: require('./toBeEvenNumber'),
    toBeFalse: require('./toBeFalse'),
    toBeFunction: require('./toBeFunction'),
    toBeGreaterThanOrEqualTo: require('./toBeGreaterThanOrEqualTo'),
    toBeHtmlString: require('./toBeHtmlString'),
    toBeIso8601: require('./toBeIso8601'),
    toBeJsonString: require('./toBeJsonString'),
    toBeLessThanOrEqualTo: require('./toBeLessThanOrEqualTo'),
    toBeLongerThan: require('./toBeLongerThan'),
    toBeNonEmptyArray: require('./toBeNonEmptyArray'),
    toBeNonEmptyObject: require('./toBeNonEmptyObject'),
    toBeNonEmptyString: require('./toBeNonEmptyString'),
    toBeNumber: require('./toBeNumber'),
    toBeObject: require('./toBeObject'),
    toBeOddNumber: require('./toBeOddNumber'),
    toBeSameLengthAs: require('./toBeSameLengthAs'),
    toBeShorterThan: require('./toBeShorterThan'),
    toBeString: require('./toBeString'),
    toBeTrue: require('./toBeTrue'),
    toBeWhitespace: require('./toBeWhitespace'),
    toBeWholeNumber: require('./toBeWholeNumber'),
    toBeWithinRange: require('./toBeWithinRange'),
    toEndWith: require('./toEndWith'),
    toHaveArray: require('./toHaveArray'),
    toHaveArrayOfBooleans: require('./toHaveArrayOfBooleans'),
    toHaveArrayOfNumbers: require('./toHaveArrayOfNumbers'),
    toHaveArrayOfObjects: require('./toHaveArrayOfObjects'),
    toHaveArrayOfSize: require('./toHaveArrayOfSize'),
    toHaveArrayOfStrings: require('./toHaveArrayOfStrings'),
    toHaveBoolean: require('./toHaveBoolean'),
    toHaveCalculable: require('./toHaveCalculable'),
    toHaveDate: require('./toHaveDate'),
    toHaveDateAfter: require('./toHaveDateAfter'),
    toHaveDateBefore: require('./toHaveDateBefore'),
    toHaveEmptyArray: require('./toHaveEmptyArray'),
    toHaveEmptyObject: require('./toHaveEmptyObject'),
    toHaveEmptyString: require('./toHaveEmptyString'),
    toHaveEvenNumber: require('./toHaveEvenNumber'),
    toHaveFalse: require('./toHaveFalse'),
    toHaveHtmlString: require('./toHaveHtmlString'),
    toHaveIso8601: require('./toHaveIso8601'),
    toHaveJsonString: require('./toHaveJsonString'),
    toHaveMember: require('./toHaveMember'),
    toHaveMethod: require('./toHaveMethod'),
    toHaveNonEmptyArray: require('./toHaveNonEmptyArray'),
    toHaveNonEmptyObject: require('./toHaveNonEmptyObject'),
    toHaveNonEmptyString: require('./toHaveNonEmptyString'),
    toHaveNumber: require('./toHaveNumber'),
    toHaveNumberWithinRange: require('./toHaveNumberWithinRange'),
    toHaveObject: require('./toHaveObject'),
    toHaveOddNumber: require('./toHaveOddNumber'),
    toHaveString: require('./toHaveString'),
    toHaveStringLongerThan: require('./toHaveStringLongerThan'),
    toHaveStringSameLengthAs: require('./toHaveStringSameLengthAs'),
    toHaveStringShorterThan: require('./toHaveStringShorterThan'),
    toHaveTrue: require('./toHaveTrue'),
    toHaveWhitespaceString: require('./toHaveWhitespaceString'),
    toHaveWholeNumber: require('./toHaveWholeNumber'),
    toStartWith: require('./toStartWith'),
    toThrowAnyError: require('./toThrowAnyError'),
    toThrowErrorOfType: require('./toThrowErrorOfType')
  }
};

},{"./toBeAfter":11,"./toBeArray":12,"./toBeArrayOfBooleans":13,"./toBeArrayOfNumbers":14,"./toBeArrayOfObjects":15,"./toBeArrayOfSize":16,"./toBeArrayOfStrings":17,"./toBeBefore":18,"./toBeBoolean":19,"./toBeCalculable":20,"./toBeDate":21,"./toBeEmptyArray":22,"./toBeEmptyObject":23,"./toBeEmptyString":24,"./toBeEvenNumber":25,"./toBeFalse":26,"./toBeFunction":27,"./toBeGreaterThanOrEqualTo":28,"./toBeHtmlString":29,"./toBeIso8601":30,"./toBeJsonString":31,"./toBeLessThanOrEqualTo":32,"./toBeLongerThan":33,"./toBeNonEmptyArray":34,"./toBeNonEmptyObject":35,"./toBeNonEmptyString":36,"./toBeNumber":37,"./toBeObject":38,"./toBeOddNumber":39,"./toBeSameLengthAs":40,"./toBeShorterThan":41,"./toBeString":42,"./toBeTrue":43,"./toBeWhitespace":44,"./toBeWholeNumber":45,"./toBeWithinRange":46,"./toEndWith":47,"./toHaveArray":48,"./toHaveArrayOfBooleans":49,"./toHaveArrayOfNumbers":50,"./toHaveArrayOfObjects":51,"./toHaveArrayOfSize":52,"./toHaveArrayOfStrings":53,"./toHaveBoolean":54,"./toHaveCalculable":55,"./toHaveDate":56,"./toHaveDateAfter":57,"./toHaveDateBefore":58,"./toHaveEmptyArray":59,"./toHaveEmptyObject":60,"./toHaveEmptyString":61,"./toHaveEvenNumber":62,"./toHaveFalse":63,"./toHaveHtmlString":64,"./toHaveIso8601":65,"./toHaveJsonString":66,"./toHaveMember":67,"./toHaveMethod":68,"./toHaveNonEmptyArray":69,"./toHaveNonEmptyObject":70,"./toHaveNonEmptyString":71,"./toHaveNumber":72,"./toHaveNumberWithinRange":73,"./toHaveObject":74,"./toHaveOddNumber":75,"./toHaveString":76,"./toHaveStringLongerThan":77,"./toHaveStringSameLengthAs":78,"./toHaveStringShorterThan":79,"./toHaveTrue":80,"./toHaveWhitespaceString":81,"./toHaveWholeNumber":82,"./toStartWith":83,"./toThrowAnyError":84,"./toThrowErrorOfType":85}],4:[function(require,module,exports){
// modules
var reduce = require('./lib/reduce');
var api = require('./api');

// public
module.exports = reduce(api.asymmetricMatcher, register, {});

// implementation
function register(any, asymMatcher) {
  var matcher = api.matcher[asymMatcher.matcher];
  any[asymMatcher.name] = createFactory(matcher);
  return any;
}

function createFactory(matcher) {
  return function asymmetricMatcherFactory() {
    var args = [].slice.call(arguments);
    return {
      asymmetricMatch: function asymmetricMatcher(actual) {
        var clone = args.slice();
        clone.push(actual);
        return matcher.apply(this, clone);
      }
    };
  };
}

},{"./api":3,"./lib/reduce":10}],5:[function(require,module,exports){
(function (global){
// 3rd party modules
var loader = require('jasmine-matchers-loader');

// modules
var api = require('./api');
var asymmetricMatchers = require('./asymmetricMatchers');

// public
module.exports = api.matcher;

// implementation
loader.add(api.matcher);
global.any = asymmetricMatchers;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./api":3,"./asymmetricMatchers":4,"jasmine-matchers-loader":86}],6:[function(require,module,exports){
// public
module.exports = function every(array, truthTest) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (truthTest(array[i])) {
      return true;
    }
  }
  return false;
};

},{}],7:[function(require,module,exports){
// public
module.exports = function every(array, truthTest) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (!truthTest(array[i])) {
      return false;
    }
  }
  return true;
};

},{}],8:[function(require,module,exports){
// public
module.exports = function is(value, type) {
  return Object.prototype.toString.call(value) === '[object ' + type + ']';
};

},{}],9:[function(require,module,exports){
// modules
var reduce = require('./reduce');

// public
module.exports = function keys(object) {
  return reduce(object, function (keys, value, key) {
    return keys.concat(key);
  }, []);
};

},{"./reduce":10}],10:[function(require,module,exports){
// modules
var is = require('./is');

// public
module.exports = function reduce(collection, fn, memo) {
  if (is(collection, 'Array')) {
    for (var i = 0, len = collection.length; i < len; i++) {
      memo = fn(memo, collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      if ({}.hasOwnProperty.call(collection, key)) {
        memo = fn(memo, collection[key], key, collection);
      }
    }
  }
  return memo;
};

},{"./is":8}],11:[function(require,module,exports){
// modules
var toBeBefore = require('./toBeBefore');

// public
module.exports = function toBeAfter(otherDate, actual) {
  return toBeBefore(actual, otherDate);
};

},{"./toBeBefore":18}],12:[function(require,module,exports){
// modules
var is = require('./lib/is');

// public
module.exports = function toBeArray(actual) {
  return is(actual, 'Array');
};

},{"./lib/is":8}],13:[function(require,module,exports){
// modules
var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeBoolean = require('./toBeBoolean');

// public
module.exports = function toBeArrayOfBooleans(actual) {
  return toBeArray(actual) && every(actual, toBeBoolean);
};

},{"./lib/every":7,"./toBeArray":12,"./toBeBoolean":19}],14:[function(require,module,exports){
// modules
var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeArrayOfBooleans(actual) {
  return toBeArray(actual) && every(actual, toBeNumber);
};

},{"./lib/every":7,"./toBeArray":12,"./toBeNumber":37}],15:[function(require,module,exports){
// modules
var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeObject = require('./toBeObject');

// public
module.exports = function toBeArrayOfBooleans(actual) {
  return toBeArray(actual) && every(actual, toBeObject);
};

},{"./lib/every":7,"./toBeArray":12,"./toBeObject":38}],16:[function(require,module,exports){
// modules
var toBeArray = require('./toBeArray');

// public
module.exports = function toBeArrayOfSize(size, actual) {
  return toBeArray(actual) && actual.length === size;
};

},{"./toBeArray":12}],17:[function(require,module,exports){
// modules
var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeString = require('./toBeString');

// public
module.exports = function toBeArrayOfStrings(actual) {
  return toBeArray(actual) && every(actual, toBeString);
};

},{"./lib/every":7,"./toBeArray":12,"./toBeString":42}],18:[function(require,module,exports){
// modules
var toBeDate = require('./toBeDate');

// public
module.exports = function toBeBefore(otherDate, actual) {
  return toBeDate(actual) && toBeDate(otherDate) && actual.getTime() < otherDate.getTime();
};

},{"./toBeDate":21}],19:[function(require,module,exports){
// modules
var is = require('./lib/is');

// public
module.exports = function toBeBoolean(actual) {
  return is(actual, 'Boolean');
};

},{"./lib/is":8}],20:[function(require,module,exports){
// public
module.exports = toBeCalculable;

// Assert subject can be used in Mathemetic calculations despite not being a
// Number, for example `"1" * "2" === 2` whereas `"wut?" * 2 === NaN`.
function toBeCalculable(actual) {
  return !isNaN(actual * 2);
}

},{}],21:[function(require,module,exports){
// modules
var is = require('./lib/is');

// public
module.exports = function toBeDate(actual) {
  return is(actual, 'Date');
};

},{"./lib/is":8}],22:[function(require,module,exports){
// modules
var toBeArrayOfSize = require('./toBeArrayOfSize');

// public
module.exports = function toBeEmptyArray(actual) {
  return toBeArrayOfSize(0, actual);
};

},{"./toBeArrayOfSize":16}],23:[function(require,module,exports){
// modules
var is = require('./lib/is');
var keys = require('./lib/keys');

// public
module.exports = function toBeEmptyObject(actual) {
  return is(actual, 'Object') && keys(actual).length === 0;
};

},{"./lib/is":8,"./lib/keys":9}],24:[function(require,module,exports){
// public
module.exports = function toBeEmptyString(actual) {
  return actual === '';
};

},{}],25:[function(require,module,exports){
// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeEvenNumber(actual) {
  return toBeNumber(actual) && actual % 2 === 0;
};

},{"./toBeNumber":37}],26:[function(require,module,exports){
// modules
var is = require('./lib/is');

// public
module.exports = function toBeFalse(actual) {
  return actual === false || (is(actual, 'Boolean') && actual.valueOf() === false);
};

},{"./lib/is":8}],27:[function(require,module,exports){
// modules
var is = require('./lib/is');

// public
module.exports = function toBeFunction(actual) {
  return is(actual, 'Function');
};

},{"./lib/is":8}],28:[function(require,module,exports){
// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeGreaterThanOrEqualTo(otherNumber, actual) {
  return toBeNumber(actual) && actual >= otherNumber;
};

},{"./toBeNumber":37}],29:[function(require,module,exports){
// modules
var toBeString = require('./toBeString');

// public
module.exports = function toBeHtmlString(actual) {
  // <           start with opening tag "<"
  //  (          start group 1
  //    "[^"]*"  allow string in "double quotes"
  //    |        OR
  //    '[^']*'  allow string in "single quotes"
  //    |        OR
  //    [^'">]   cant contains one single quotes, double quotes and ">"
  //  )          end group 1
  //  *          0 or more
  // >           end with closing tag ">"
  return toBeString(actual) && actual.search(/<("[^"]*"|'[^']*'|[^'">])*>/) !== -1;
};

},{"./toBeString":42}],30:[function(require,module,exports){
// modules
var any = require('./lib/any');
var toBeString = require('./toBeString');

// public
module.exports = toBeIso8601;

// implementation
var patterns = [
  'nnnn-nn-nn',
  'nnnn-nn-nnTnn:nn',
  'nnnn-nn-nnTnn:nn:nn',
  'nnnn-nn-nnTnn:nn:nn.nnn',
  'nnnn-nn-nnTnn:nn:nn.nnnZ'
];

function toBeIso8601(actual) {
  return toBeString(actual) && any(patterns, matches) && new Date(actual).toString() !== 'Invalid Date';

  function matches(pattern) {
    var regex = '^' + expand(pattern) + '$';
    return actual.search(new RegExp(regex)) !== -1;
  }
}

function expand(pattern) {
  return pattern
    .split('-').join('\\-')
    .split('.').join('\\.')
    .split('nnnn').join('([0-9]{4})')
    .split('nnn').join('([0-9]{3})')
    .split('nn').join('([0-9]{2})');
}

},{"./lib/any":6,"./toBeString":42}],31:[function(require,module,exports){
// public
module.exports = function toBeJsonString(actual) {
  try {
    return JSON.parse(actual) !== null;
  } catch (err) {
    return false;
  }
};

},{}],32:[function(require,module,exports){
// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeLessThanOrEqualTo(otherNumber, actual) {
  return toBeNumber(actual) && actual <= otherNumber;
};

},{"./toBeNumber":37}],33:[function(require,module,exports){
// modules
var toBeString = require('./toBeString');

// public
module.exports = function toBeLongerThan(otherString, actual) {
  return toBeString(actual) && toBeString(otherString) && actual.length > otherString.length;
};

},{"./toBeString":42}],34:[function(require,module,exports){
// modules
var is = require('./lib/is');

// public
module.exports = function toBeNonEmptyArray(actual) {
  return is(actual, 'Array') && actual.length > 0;
};

},{"./lib/is":8}],35:[function(require,module,exports){
// modules
var is = require('./lib/is');
var keys = require('./lib/keys');

// public
module.exports = function toBeNonEmptyObject(actual) {
  return is(actual, 'Object') && keys(actual).length > 0;
};

},{"./lib/is":8,"./lib/keys":9}],36:[function(require,module,exports){
// modules
var toBeString = require('./toBeString');

// public
module.exports = function toBeNonEmptyString(actual) {
  return toBeString(actual) && actual.length > 0;
};

},{"./toBeString":42}],37:[function(require,module,exports){
// modules
var is = require('./lib/is');

// public
module.exports = function toBeNumber(actual) {
  return !isNaN(parseFloat(actual)) && !is(actual, 'String');
};

},{"./lib/is":8}],38:[function(require,module,exports){
// modules
var is = require('./lib/is');

// public
module.exports = function toBeObject(actual) {
  return is(actual, 'Object');
};

},{"./lib/is":8}],39:[function(require,module,exports){
// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeOddNumber(actual) {
  return toBeNumber(actual) && actual % 2 !== 0;
};

},{"./toBeNumber":37}],40:[function(require,module,exports){
// modules
var toBeString = require('./toBeString');

// public
module.exports = function toBeSameLengthAs(otherString, actual) {
  return toBeString(actual) && toBeString(otherString) && actual.length === otherString.length;
};

},{"./toBeString":42}],41:[function(require,module,exports){
// modules
var toBeString = require('./toBeString');

// public
module.exports = function toBeShorterThan(otherString, actual) {
  return toBeString(actual) && toBeString(otherString) && actual.length < otherString.length;
};

},{"./toBeString":42}],42:[function(require,module,exports){
// modules
var is = require('./lib/is');

// public
module.exports = function toBeString(actual) {
  return is(actual, 'String');
};

},{"./lib/is":8}],43:[function(require,module,exports){
// modules
var is = require('./lib/is');

// public
module.exports = function toBeTrue(actual) {
  return actual === true || (is(actual, 'Boolean') && actual.valueOf() === true);
};

},{"./lib/is":8}],44:[function(require,module,exports){
// modules
var toBeString = require('./toBeString');

// public
module.exports = function toBeWhitespace(actual) {
  return toBeString(actual) && actual.search(/\S/) === -1;
};

},{"./toBeString":42}],45:[function(require,module,exports){
// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeWholeNumber(actual) {
  return toBeNumber(actual) && (
        actual === 0 || actual % 1 === 0
    );
};

},{"./toBeNumber":37}],46:[function(require,module,exports){
// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeWithinRange(floor, ceiling, actual) {
  return toBeNumber(actual) && actual >= floor && actual <= ceiling;
};

},{"./toBeNumber":37}],47:[function(require,module,exports){
// modules
var toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = function toEndWith(subString, actual) {
  if (!toBeNonEmptyString(actual) || !toBeNonEmptyString(subString)) {
    return false;
  }
  return actual.slice(actual.length - subString.length, actual.length) === subString;
};

},{"./toBeNonEmptyString":36}],48:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeArray = require('./toBeArray');

// public
module.exports = function toHaveArray(key, actual) {
  return toBeObject(actual) && toBeArray(actual[key]);
};

},{"./toBeArray":12,"./toBeObject":38}],49:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeArrayOfBooleans = require('./toBeArrayOfBooleans');

// public
module.exports = function toHaveArrayOfBooleans(key, actual) {
  return toBeObject(actual) && toBeArrayOfBooleans(actual[key]);
};

},{"./toBeArrayOfBooleans":13,"./toBeObject":38}],50:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeArrayOfNumbers = require('./toBeArrayOfNumbers');

// public
module.exports = function toHaveArrayOfNumbers(key, actual) {
  return toBeObject(actual) && toBeArrayOfNumbers(actual[key]);
};

},{"./toBeArrayOfNumbers":14,"./toBeObject":38}],51:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeArrayOfObjects = require('./toBeArrayOfObjects');

// public
module.exports = function toHaveArrayOfObjects(key, actual) {
  return toBeObject(actual) && toBeArrayOfObjects(actual[key]);
};

},{"./toBeArrayOfObjects":15,"./toBeObject":38}],52:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeArrayOfSize = require('./toBeArrayOfSize');

// public
module.exports = function toHaveArrayOfSize(key, size, actual) {
  return toBeObject(actual) && toBeArrayOfSize(size, actual[key]);
};

},{"./toBeArrayOfSize":16,"./toBeObject":38}],53:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeArrayOfStrings = require('./toBeArrayOfStrings');

// public
module.exports = function toHaveArrayOfStrings(key, actual) {
  return toBeObject(actual) && toBeArrayOfStrings(actual[key]);
};

},{"./toBeArrayOfStrings":17,"./toBeObject":38}],54:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeBoolean = require('./toBeBoolean');

// public
module.exports = function toHaveBoolean(key, actual) {
  return toBeObject(actual) && toBeBoolean(actual[key]);
};

},{"./toBeBoolean":19,"./toBeObject":38}],55:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeCalculable = require('./toBeCalculable');

// public
module.exports = function toHaveCalculable(key, actual) {
  return toBeObject(actual) && toBeCalculable(actual[key]);
};

},{"./toBeCalculable":20,"./toBeObject":38}],56:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeDate = require('./toBeDate');

// public
module.exports = function toHaveDate(key, actual) {
  return toBeObject(actual) && toBeDate(actual[key]);
};

},{"./toBeDate":21,"./toBeObject":38}],57:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeAfter = require('./toBeAfter');

// public
module.exports = function toHaveDateAfter(key, date, actual) {
  return toBeObject(actual) && toBeAfter(date, actual[key]);
};

},{"./toBeAfter":11,"./toBeObject":38}],58:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeBefore = require('./toBeBefore');

// public
module.exports = function toHaveDateBefore(key, date, actual) {
  return toBeObject(actual) && toBeBefore(date, actual[key]);
};

},{"./toBeBefore":18,"./toBeObject":38}],59:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeEmptyArray = require('./toBeEmptyArray');

// public
module.exports = function toHaveEmptyArray(key, actual) {
  return toBeObject(actual) && toBeEmptyArray(actual[key]);
};

},{"./toBeEmptyArray":22,"./toBeObject":38}],60:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeEmptyObject = require('./toBeEmptyObject');

// public
module.exports = function toHaveEmptyObject(key, actual) {
  return toBeObject(actual) && toBeEmptyObject(actual[key]);
};

},{"./toBeEmptyObject":23,"./toBeObject":38}],61:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeEmptyString = require('./toBeEmptyString');

// public
module.exports = function toHaveEmptyString(key, actual) {
  return toBeObject(actual) && toBeEmptyString(actual[key]);
};

},{"./toBeEmptyString":24,"./toBeObject":38}],62:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeEvenNumber = require('./toBeEvenNumber');

// public
module.exports = function toHaveEvenNumber(key, actual) {
  return toBeObject(actual) && toBeEvenNumber(actual[key]);
};

},{"./toBeEvenNumber":25,"./toBeObject":38}],63:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeFalse = require('./toBeFalse');

// public
module.exports = function toHaveFalse(key, actual) {
  return toBeObject(actual) && toBeFalse(actual[key]);
};

},{"./toBeFalse":26,"./toBeObject":38}],64:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeHtmlString = require('./toBeHtmlString');

// public
module.exports = function toHaveHtmlString(key, actual) {
  return toBeObject(actual) && toBeHtmlString(actual[key]);
};

},{"./toBeHtmlString":29,"./toBeObject":38}],65:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeIso8601 = require('./toBeIso8601');

// public
module.exports = toHaveIso8601;

function toHaveIso8601(key, actual) {
  return toBeObject(actual) && toBeIso8601(actual[key]);
}

},{"./toBeIso8601":30,"./toBeObject":38}],66:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeJsonString = require('./toBeJsonString');

// public
module.exports = function toHaveJsonString(key, actual) {
  return toBeObject(actual) && toBeJsonString(actual[key]);
};

},{"./toBeJsonString":31,"./toBeObject":38}],67:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeString = require('./toBeString');

// public
module.exports = function toHaveMember(key, actual) {
  return toBeString(key) && toBeObject(actual) && key in actual;
};

},{"./toBeObject":38,"./toBeString":42}],68:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeFunction = require('./toBeFunction');

// public
module.exports = function toHaveMethod(key, actual) {
  return toBeObject(actual) && toBeFunction(actual[key]);
};

},{"./toBeFunction":27,"./toBeObject":38}],69:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeNonEmptyArray = require('./toBeNonEmptyArray');

// public
module.exports = function toHaveNonEmptyArray(key, actual) {
  return toBeObject(actual) && toBeNonEmptyArray(actual[key]);
};

},{"./toBeNonEmptyArray":34,"./toBeObject":38}],70:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeNonEmptyObject = require('./toBeNonEmptyObject');

// public
module.exports = function toHaveNonEmptyObject(key, actual) {
  return toBeObject(actual) && toBeNonEmptyObject(actual[key]);
};

},{"./toBeNonEmptyObject":35,"./toBeObject":38}],71:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = function toHaveNonEmptyString(key, actual) {
  return toBeObject(actual) && toBeNonEmptyString(actual[key]);
};

},{"./toBeNonEmptyString":36,"./toBeObject":38}],72:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toHaveNumber(key, actual) {
  return toBeObject(actual) && toBeNumber(actual[key]);
};

},{"./toBeNumber":37,"./toBeObject":38}],73:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeWithinRange = require('./toBeWithinRange');

// public
module.exports = function toHaveNumberWithinRange(key, floor, ceiling, actual) {
  return toBeObject(actual) && toBeWithinRange(floor, ceiling, actual[key]);
};

},{"./toBeObject":38,"./toBeWithinRange":46}],74:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');

// public
module.exports = function toHaveObject(key, actual) {
  return toBeObject(actual) && toBeObject(actual[key]);
};

},{"./toBeObject":38}],75:[function(require,module,exports){
var toBeObject = require('./toBeObject');
var toBeOddNumber = require('./toBeOddNumber');

// public
module.exports = function toHaveOddNumber(key, actual) {
  return toBeObject(actual) && toBeOddNumber(actual[key]);
};

},{"./toBeObject":38,"./toBeOddNumber":39}],76:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeString = require('./toBeString');

// public
module.exports = function toHaveString(key, actual) {
  return toBeObject(actual) && toBeString(actual[key]);
};

},{"./toBeObject":38,"./toBeString":42}],77:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeLongerThan = require('./toBeLongerThan');

// public
module.exports = function toHaveStringLongerThan(key, other, actual) {
  return toBeObject(actual) && toBeLongerThan(other, actual[key]);
};

},{"./toBeLongerThan":33,"./toBeObject":38}],78:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeSameLengthAs = require('./toBeSameLengthAs');

// public
module.exports = function toHaveStringSameLengthAs(key, other, actual) {
  return toBeObject(actual) && toBeSameLengthAs(other, actual[key]);
};

},{"./toBeObject":38,"./toBeSameLengthAs":40}],79:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeShorterThan = require('./toBeShorterThan');

// public
module.exports = function toHaveStringShorterThan(key, other, actual) {
  return toBeObject(actual) && toBeShorterThan(other, actual[key]);
};

},{"./toBeObject":38,"./toBeShorterThan":41}],80:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeTrue = require('./toBeTrue');

// public
module.exports = function toHaveTrue(key, actual) {
  return toBeObject(actual) && toBeTrue(actual[key]);
};

},{"./toBeObject":38,"./toBeTrue":43}],81:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeWhitespace = require('./toBeWhitespace');

// public
module.exports = function toHaveWhitespaceString(key, actual) {
  return toBeObject(actual) && toBeWhitespace(actual[key]);
};

},{"./toBeObject":38,"./toBeWhitespace":44}],82:[function(require,module,exports){
// modules
var toBeObject = require('./toBeObject');
var toBeWholeNumber = require('./toBeWholeNumber');

// public
module.exports = function toHaveWholeNumber(key, actual) {
  return toBeObject(actual) && toBeWholeNumber(actual[key]);
};

},{"./toBeObject":38,"./toBeWholeNumber":45}],83:[function(require,module,exports){
// modules
var toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = function toStartWith(subString, actual) {
  if (!toBeNonEmptyString(actual) || !toBeNonEmptyString(subString)) {
    return false;
  }
  return actual.slice(0, subString.length) === subString;
};

},{"./toBeNonEmptyString":36}],84:[function(require,module,exports){
// public
module.exports = function toThrowAnyError(actual) {
  try {
    actual();
    return false;
  } catch (err) {
    return true;
  }
};

},{}],85:[function(require,module,exports){
// public
module.exports = function toThrowErrorOfType(type, actual) {
  try {
    actual();
    return false;
  } catch (err) {
    return err.name === type;
  }
};

},{}],86:[function(require,module,exports){
'use strict';

module.exports = require('./src');

},{"./src":87}],87:[function(require,module,exports){
'use strict';

var adapters = typeof jasmine.addMatchers === 'function' ?
    require('./jasmine-v2') :
    require('./jasmine-v1');

module.exports = {
    add: addMatchers
};

function addMatchers(matchers) {
    for (var matcherName in matchers) {
        addMatcher(matcherName, matchers[matcherName]);
    }
}

function addMatcher(name, matcher) {
    var adapter = adapters[matcher.length];
    return adapter(name, matcher);
}

},{"./jasmine-v1":88,"./jasmine-v2":89}],88:[function(require,module,exports){
'use strict';

module.exports = {
    1: createFactory(forActual),
    2: createFactory(forActualAndExpected),
    3: createFactory(forActualAndTwoExpected),
    4: createFactory(forKeyAndActualAndTwoExpected)
};

function createFactory(adapter) {
    return function jasmineV1MatcherFactory(name, matcher) {
        var matcherByName = new JasmineV1Matcher(name, adapter, matcher);
        beforeEach(function() {
            this.addMatchers(matcherByName);
        });
        return matcherByName;
    };
}

function JasmineV1Matcher(name, adapter, matcher) {
    this[name] = adapter(name, matcher);
}

function forActual(name, matcher) {
    return function(optionalMessage) {
        return matcher(this.actual, optionalMessage);
    };
}

function forActualAndExpected(name, matcher) {
    return function(expected, optionalMessage) {
        return matcher(expected, this.actual, optionalMessage);
    };
}

function forActualAndTwoExpected(name, matcher) {
    return function(expected1, expected2, optionalMessage) {
        return matcher(expected1, expected2, this.actual, optionalMessage);
    };
}

function forKeyAndActualAndTwoExpected(name, matcher) {
    return function(key, expected1, expected2, optionalMessage) {
        return matcher(key, expected1, expected2, this.actual, optionalMessage);
    };
}

},{}],89:[function(require,module,exports){
'use strict';

var matcherFactory = require('./matcherFactory');
var memberMatcherFactory = require('./memberMatcherFactory');

module.exports = {
    1: createFactory(getAdapter(1)),
    2: createFactory(getAdapter(2)),
    3: createFactory(getAdapter(3)),
    4: createFactory(getAdapter(4))
};

function createFactory(adapter) {
    return function jasmineV2MatcherFactory(name, matcher) {
        var matcherByName = new JasmineV2Matcher(name, adapter, matcher);
        beforeEach(function() {
            jasmine.addMatchers(matcherByName);
        });
        return matcherByName;
    };
}

function JasmineV2Matcher(name, adapter, matcher) {
    this[name] = adapter(name, matcher);
}

function getAdapter(argsCount) {
    return function adapter(name, matcher) {
        var factory = isMemberMatcher(name) ? memberMatcherFactory : matcherFactory;
        return factory[argsCount](name, matcher);
    };
}

function isMemberMatcher(name) {
    return name.search(/^toHave/) !== -1;
}

},{"./matcherFactory":90,"./memberMatcherFactory":91}],90:[function(require,module,exports){
'use strict';

module.exports = {
    1: forActual,
    2: forActualAndExpected,
    3: forActualAndTwoExpected
};

function forActual(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, optionalMessage) {
                var passes = matcher(actual);
                return {
                    pass: passes,
                    message: (
                    optionalMessage ?
                        util.buildFailureMessage(name, passes, actual, optionalMessage) :
                        util.buildFailureMessage(name, passes, actual)
                    )
                };
            }
        };
    };
}

function forActualAndExpected(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, expected, optionalMessage) {
                var passes = matcher(expected, actual);
                return {
                    pass: passes,
                    message: (
                    optionalMessage ?
                        util.buildFailureMessage(name, passes, actual, expected, optionalMessage) :
                        util.buildFailureMessage(name, passes, actual, expected)
                    )
                };
            }
        };
    };
}

function forActualAndTwoExpected(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, expected1, expected2, optionalMessage) {
                var passes = matcher(expected1, expected2, actual);
                return {
                    pass: passes,
                    message: (
                    optionalMessage ?
                        util.buildFailureMessage(name, passes, actual, expected1, expected2, optionalMessage) :
                        util.buildFailureMessage(name, passes, actual, expected1, expected2)
                    )
                };
            }
        };
    };
}

},{}],91:[function(require,module,exports){
'use strict';

module.exports = {
    2: forKeyAndActual,
    3: forKeyAndActualAndExpected,
    4: forKeyAndActualAndTwoExpected
};

function forKeyAndActual(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, key, optionalMessage) {
                var passes = matcher(key, actual);
                var message = name.search(/^toHave/) !== -1 ? key : optionalMessage;
                return {
                    pass: passes,
                    message: (
                        message ?
                        util.buildFailureMessage(name, passes, actual, message) :
                        util.buildFailureMessage(name, passes, actual)
                    )
                };
            }
        };
    };
}

function forKeyAndActualAndExpected(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, key, expected, optionalMessage) {
                var passes = matcher(key, expected, actual);
                var message = (optionalMessage ?
                    util.buildFailureMessage(name, passes, actual, expected, optionalMessage) :
                    util.buildFailureMessage(name, passes, actual, expected)
                );

                return {
                    pass: passes,
                    message: formatErrorMessage(name, message, key)
                };
            }
        };
    };
}

function forKeyAndActualAndTwoExpected(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, key, expected1, expected2, optionalMessage) {
                var passes = matcher(key, expected1, expected2, actual);
                var message = (optionalMessage ?
                    util.buildFailureMessage(name, passes, actual, expected1, expected2, optionalMessage) :
                    util.buildFailureMessage(name, passes, actual, expected1, expected2)
                );

                return {
                    pass: passes,
                    message: formatErrorMessage(name, message, key)
                };
            }
        };
    };
}

function formatErrorMessage(name, message, key) {
    if (name.search(/^toHave/) !== -1) {
        return message
            .replace('Expected', 'Expected member "' + key + '" of')
            .replace(' to have ', ' to be ');
    }
    return message;
}

},{}],92:[function(require,module,exports){

},{}],93:[function(require,module,exports){
"use strict";

var BoxOfQuestions = require('../../src/BoxOfQuestions');
var LWdb = require('../../src/LWdb');
var wordlist = require('../../data/wordlist-en-ge.js'); 

var LW;

xdescribe("BoxOfQuestions", function() {
    
  beforeEach(function() {

    	LW = function(){

		var db = new LWdb('learnWords');

		db.loadWords(wordlist);

		var box = new BoxOfQuestions(db);

		return box
        }();
        
  });


  it("should be able to create a BoxOfQuestions object", function() {

    expect(LW).not.toBe(null);
    expect(LW).not.toBe(undefined);

    expect(LW).toBeObject();

    expect(LW.db.dbName).toBeString("learnWords");
    expect(LW.db.numberOfWords()).toBeNumber(10);

  });




  xit("should be able to load additional questions", function() {

    var previousNumberOfWords = LW.db.numberOfWords();
  
    LW.db.loadWords(wordlist);

    expect(LW.db.numberOfWords()).toBe(previousNumberOfWords + wordlist.length);

  
  });


  it("should be able to have the number of steps set", function() {

    expect(LW.noOfSteps).toBe(3); // the default

    LW.setNumberOfSteps(7);

    expect(LW.noOfSteps).toBe(7); 

  });



  xit("should be able to process configuration information", function(aConfigObj) {
    // the configuration 
    // aConfigObj = {"algorithm": "Leitner", "noOfSteps": 5};
    LW.config(aConfigObj);     

    // expect code here
    fail("Implement me!");
  });



  xit("should be able to choose a next question", function() {
    var q ;

    q = LW.currQuestion();

    expect(q).not.toBe(null);
    expect(q).not.toBe(undefined);
    expect(q).toBeObject();    

    expect(q).toHaveString("date");
  
    // add expect code here
    // date should be >= today

  });



  xit("should be able to choose a next question, give options for answers and process the answer", function() {
    var q, a, opt, aChoice;

    q = LW.currQuestion();
    a = LW.currAnswer();
    opt = LW.currAnswerOptions(); // includes the correct answer
   
    LW.processAnswer(aChoice);  // after this there will be a new current question.

    // add expect code here
    fail("Implement me!");

  });


  xit("should be able to give status information", function() {
    // the configuration 
  
    var r = LW.status();
   
    // add expect code here    
    fail("Implement me!");

  });

});

},{"../../data/wordlist-en-ge.js":1,"../../src/BoxOfQuestions":95,"../../src/LWdb":96}],94:[function(require,module,exports){
(function (global){
"use strict";

var LWdb = require('../../src/LWdb');
var wordList = require('../../data/wordlist-en-ge.js'); 

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  global.localStorage = new LocalStorage('./scratch');
}

describe("Database LWdb", function() {

  beforeAll(function(){
    this.wordList = wordList;
  });

  beforeEach(function() {
    // clear properties that didn't exist in original wordList
    for(var i = 0; i < this.wordList.length; i++){
      var aWord = this.wordList[i];
      for(var key in aWord){
        if(key != "word" && key != "translate" && key != "_id"){
          delete aWord[key];
        }
      }
    }

    localStorage.clear();
    this.db = new LWdb("LearnWords");
  });


  afterEach(function(){
    this.db.destroy();
  });


  it("should be able to create a DB", function() {

    expect(this.db).toBeObject();
    
    expect(this.db).toHaveString("dbName");
    expect(this.db.dbName).toBeString("LearnWords");

    expect(this.db).toHaveArray("_keysOfAllWords");

  });



  it("should be able to answer if persistent storage is available", function() {

    expect(this.db).toHaveMethod("persistentStorageOK");
    expect(this.db.persistentStorageOK()).toBeTrue();

  });


  it("should be able to reinitialize the persistent storage", function() {
    
    this.db.removeWords();
    expect(this.db).toHaveMethod("numberOfWords");
    expect(this.db.numberOfWords()).toBe(0);

  });



  describe("deals with words;", function() {

    it("should be able to answer the number of words", function() {
      expect(this.db.numberOfWords()).toBeNumber(0);
    });


    it("should be able to store a new word", function() {
      // Inserts a new document, or new version of an existing document
      expect(this.db.numberOfWords()).toBeNumber(0);
      var i = parseInt(Math.floor(Math.random()*this.wordList.length));
      var aWord = this.wordList[i];
      aWord._id = (i+1);
      this.db.putWord(aWord);
      expect(this.db.numberOfWords()).toBeNumber(1);
    });


    it("should be able to get a word", function() {  

      var newWord = {
        "_id": 1,
        "word": "melon",
        "translate": "die Melone"
      };

      expect(this.db.numberOfWords()).toBeNumber(0);
      this.db.putWord(newWord);
      expect(this.db.numberOfWords()).toBeNumber(1);
      var r = this.db.getWord(1);
      expect(r).toBeObject();

      expect(r).toHaveNumber("_id");
      expect(r._id).toBeNumber(1);

      expect(r).toHaveString("word");
      expect(r.word).toBeString("melon");

      expect(r).toHaveString("translate");
      expect(r.translate).toBeString("melon");

      expect(r).toHaveNumber("step");
      expect(r.step).toBeNumber(0);

      expect(r).toHaveNumber("date");
      expect(r.date).toBeNumber(0);

    });


    it("should be able to remove all words", function() {
      // insert first n words from wordList
      var n = parseInt(Math.floor(Math.random()*this.wordList.length));
      var aWord;
      for(var i = 0; i < n; i++){
        aWord = this.wordList[i];
        aWord._id = (i+1);
        this.db.putWord(aWord);
      }
      expect(this.db.numberOfWords()).toBeNumber(n);
      this.db.removeWords();
      expect(this.db.numberOfWords()).toBeNumber(0);

    });





    it("should be able to answer a list of all keys of all words", function() {
      // test setup
      // insert first n words from wordList
      // n is a random number of words

      var n = parseInt(Math.floor(Math.random()*this.wordList.length));

      var aWord;
      for(var i = 0; i < n; i++){
        aWord = this.wordList[i];
        aWord._id = (i+1);
        this.db.putWord(aWord);
      }


      // run

      var r = this.db.keysOfAllWords();


      // check result
      expect(r).toBeArrayOfStrings();
      expect(r.length).toBeNumber(this.db.numberOfWords());
       
      for(var i = 0; i < r.length; i++){
        expect(r[i]).toBeString("LearnWords-wd-"+(i+1));
      }

    });









    it("should be able to answer a list of all words", function() {

      // setup
      // insert first n words from wordList
      var n = parseInt(Math.floor(Math.random()*this.wordList.length));
      var aWord;
      for(var i = 0; i < n; i++){
        aWord = this.wordList[i];
        aWord._id = (i+1);
        this.db.putWord(aWord);
      }
      expect(this.db.numberOfWords()).toBe(n);



      // run

      var r = this.db.allWords();



      // check

      expect(r).toBeArray();
      expect(r.length).toBe(this.db.numberOfWords());
      expect(r.length).toBe(n);

      for(var i = 0; i < r.length; i++){
        var tmp = this.wordList[i];
        tmp._id = i+1;
        
        expect(r[i]).toHaveString("word");
        expect(tmp).toHaveString("word");
        expect(r[i].word).toBeString(tmp.word);

        expect(r[i]).toHaveString("translate");
        expect(tmp).toHaveString("translate");
        expect(r[i].translate).toBeString(tmp.translate);

        expect(r[i]).toHaveNumber("_id");
        expect(tmp).toHaveNumber("_id");
        expect(r[i]._id).toBeNumber(tmp._id);

        expect(r[i]).toHaveNumber("date");
        expect(tmp).toHaveNumber("date");
        expect(r[i].date).toBeNumber(tmp.date);

        expect(r[i]).toHaveNumber("step");
        expect(tmp).toHaveNumber("step");
        expect(r[i].step).toBeNumber(tmp.step);

      }

    });






    it("should be able to import words", function() {

      // setup
      this.db.removeWords();
      expect(this.db.numberOfWords()).toBe(0);

      expect(this.db).toHaveMethod("importFrom");
      var theWordList = this.wordList;
      expect(theWordList).toBeArrayOfObjects();


      // run

      this.db.importFrom(theWordList);

      
      // check

      var keys = this.db.keysOfAllWords(); 
      expect(keys.length).toBe(theWordList.length);

    });




    it("should be able to maintain an index", function() {
      // Is this a duplicate?

      // setup
      this.db.removeWords();
      expect(this.db.numberOfWords()).toBe(0);
      
      this.db.importFrom(this.wordList);
      expect(this.db.numberOfWords()).toBe(this.wordList.length);


      // run
      var keys = this.db.keysOfAllWords();


      // check
      expect(keys).toBeArray();
      expect(keys.length).toBe(this.wordList.length);
    });


  });






  describe("LWdb deals with settings", function() {

    it("should be able to answer settings", function() {
      var settings = this.db.getSettings();
      expect(settings).not.toBe(null);
      expect(settings).toBeObject();
    });


    it("should be able to store settings", function() {
      // test needs improvement
      var settings = this.db.getSettings();
      settings.factorForDelayValue[3] = 6;
      this.db.putSettings(settings);
      settings = this.db.getSettings();
      expect(settings).toBeObject();
      expect(settings).toHaveArray("factorForDelayValue");
      expect(settings.factorForDelayValue[3]).toBe(6);
    });


  });

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../data/wordlist-en-ge.js":1,"../../src/LWdb":96,"node-localstorage":"node-localstorage"}],95:[function(require,module,exports){
"use strict";

var LWdb = require('./LWdb');

function BoxOfQuestions(db) {
	this.name = db.name;
	this.db = db;
        this.noOfSteps = 3;
}


BoxOfQuestions.prototype.config = function(config){
  throw new Error("not yet implemented");
};


BoxOfQuestions.prototype.setNumberOfSteps = function(aNumber){

  // the following is fine if the number of steps is increased.
  this.noOfSteps = aNumber;

  // decide what happens when the number of steps is decreased.

  // FIXME
  // is this necessary here?
  // the step information actually is only needed for calculating the new delay
  // and that information is accessible through the index.
  // trigger more action?.
  // this.recalculateIndexes();
  
};



BoxOfQuestions.prototype.recalculateIndexes = function(config){
  throw new Error("not yet implemented");
};


BoxOfQuestions.prototype.size = function(config){
  throw new Error("not yet implemented");
};


BoxOfQuestions.prototype.currQuestion = function(config){
  throw new Error("not yet implemented");
};


BoxOfQuestions.prototype.status = function(config){
  throw new Error("not yet implemented");
};


module.exports = BoxOfQuestions;


},{"./LWdb":96}],96:[function(require,module,exports){
(function (global){
"use strict";
// ----------------------------------------------------------------------
// LearnWords 2 
//
// File: 
//    LWdb.js
//
// Purpose: 
//    Database layer
//    Definition of an LWdb object
//
// Date:
//    3rd December 2016
//
// ----------------------------------------------------------------------



if (typeof localStorage === "undefined" || localStorage === null) {
  // we run in node thus we need to have a simulation of LocalStorage
  var LocalStorage = require('node-localstorage').LocalStorage;
  global.localStorage = new LocalStorage('./scratch');
}




var LWdb = function(dbName) {

    this.dbName = dbName;
    this._keysOfAllWords = [];
    
    // private
    var recalculateIndex = true; 

    var that = this;


    var _wdKeyFor = function(anInteger) { 
        return that.dbName+'-wd-'+anInteger;
    };

    var _setNumberOfWords = function(n) {
        var key = that.dbName+'-numberOfWords';
        localStorage.setItem(key,n);
        that.recalculateIndex = true;
    };


    var _incNumberOfWords = function() {
        var n = that.numberOfWords();
        _setNumberOfWords(n + 1);
        that.recalculateIndex = true;
    };

    this._invalidateIndex = function() {
        that.recalculateIndex = true;
    };

    var _indexNeedsRecalculation = function() {
        return that.recalculateIndex
    };


    var _indexHasBeenUpdated = function() {
        that.recalculateIndex = false;
    };

    var _removeObjects = function(aKeyPrefix){
        if (that.isOK) {
            var key;
            var st; 
            var keysToDelete = [];

            // find all keys starting with aKeyPrefix
            for (var i = 0; i < localStorage.length; i++){
                key = localStorage.key(i);
                st = localStorage.getItem(key);                             

                if (key.lastIndexOf(aKeyPrefix,0) === 0) {
                    keysToDelete.push(key);
                }
            }

            keysToDelete.forEach(function(aKey){
                localStorage.removeItem(aKey);
            });
        }
    };







    LWdb.prototype.persistentStorageOK = function() {
        return !!localStorage;
    };



    LWdb.prototype.isOK = function() {
        return this.persistentStorageOK();
    };



    LWdb.prototype.numberOfWords = function() {
     
       var key = this.dbName+'-numberOfWords';
        var r = 0;

        if (this.isOK) {
            r = localStorage.getItem(key);
            if (r == null) {
                localStorage.setItem(key,'0'); 
                r = '0';
            };
          r = parseInt(r);
        }; 
        return r;
    };



    LWdb.prototype.putWord = function(aWord) {

        if(!aWord._id){
            throw "_id is required in a word";
        }
        if(!aWord.step){
            aWord.step = 0;
        }
        if(!aWord.date){
            aWord.date = 0;
        }

        // get storage key 
        var storageKey = _wdKeyFor(aWord._id);
        // try to get the word to check if it already exists
        var value = localStorage.getItem(storageKey); 
     
        // save the word
        localStorage.setItem(storageKey, JSON.stringify(aWord));

        // if the word has not existed before increment the number of words
        if (value == null) {
            _incNumberOfWords();
        };
        // console.log('storageKey is=', storageKey, 'word is=', copy.word);
        return storageKey;
    };




    LWdb.prototype.getWord = function(anInteger) {
        var storageKey = _wdKeyFor(anInteger);
        try{
            var aWord = JSON.parse(localStorage.getItem(storageKey));
            if(!aWord.step){
                aWord.step = 0;
            }
            if(!aWord.date){
                aWord.date = 0;
            }
            return aWord;
        }catch(e){
            return null;
        }
    };


LWdb.prototype.importFrom = function(theWords) {
      
      var key;
      var n = theWords.length;

      var aWord;
      
      for(var i = 0; i < n; i++){
        aWord = theWords[i];
	key = this.putWord(aWord);
      }

      this._invalidateIndex();

    }



    LWdb.prototype.loadWords = function(theWords) {
        this.importFrom(theWords);
    }



    LWdb.prototype.keysOfAllWords = function() {
        if (_indexNeedsRecalculation()) {
            this._keysOfAllWords = [];
            var keyRegex = new RegExp("^"+this.dbName+"\\-wd\\-\\d+$");
            for (var i = 0; i < localStorage.length; i++){
                var key = localStorage.key(i);
                // check it starts with <name>-wd-
                if(keyRegex.test(key)){
                    this._keysOfAllWords.push(key);
                }
            }
        };
        _indexHasBeenUpdated();
        return this._keysOfAllWords;
    };



    LWdb.prototype.allWords = function() {
        var keys = this.keysOfAllWords();
        var words = [];
        for(var i = 0; i < keys.length; i++){
            var str = localStorage.getItem(keys[i]);
            words.push(JSON.parse(str));
        }
        return words;
    };



    LWdb.prototype.getSettings = function() {
        
        var key = this.dbName + '-settings';

        var value = localStorage.getItem(key);

        // lazy initialisation
        if (value==null) { 
            // define default value for settings    
            value = {"factorForDelayValue": [0,1,3,7]};
            // this is used to calculate the new date after a
            // word has been answered correctly.
            this.putSettings(value);
            return value
        } else {
            return JSON.parse(value)
        }
    };



    LWdb.prototype.putSettings = function(anObject) {
        
        var key = this.dbName + '-settings';
        return localStorage.setItem(key,JSON.stringify(anObject));  
    };



    LWdb.prototype.removeWords = function() {
        var keys = this.keysOfAllWords(); 
        for (var i = 0; i < keys.length; i++){
            localStorage.removeItem(keys);
        }
        _setNumberOfWords(0);

    };



    LWdb.prototype.destroy = function(anObject) {

         var aKeyPrefix = this.dbName;  
         _removeObjects(aKeyPrefix);
    };


};

module.exports = LWdb;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"node-localstorage":"node-localstorage"}]},{},[2,92,93,94])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkYXRhL3dvcmRsaXN0LWVuLWdlLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy9hcGkuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL2FzeW1tZXRyaWNNYXRjaGVycy5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL2xpYi9hbnkuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL2xpYi9ldmVyeS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvbGliL2lzLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy9saWIva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvbGliL3JlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZUFmdGVyLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlQXJyYXkuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvQmVBcnJheU9mQm9vbGVhbnMuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvQmVBcnJheU9mTnVtYmVycy5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZUFycmF5T2ZPYmplY3RzLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlQXJyYXlPZlNpemUuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvQmVBcnJheU9mU3RyaW5ncy5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZUJlZm9yZS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZUJvb2xlYW4uanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvQmVDYWxjdWxhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlRGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZUVtcHR5QXJyYXkuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvQmVFbXB0eU9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZUVtcHR5U3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlRXZlbk51bWJlci5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZUZhbHNlLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlRnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvQmVHcmVhdGVyVGhhbk9yRXF1YWxUby5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZUh0bWxTdHJpbmcuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvQmVJc284NjAxLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlSnNvblN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZUxlc3NUaGFuT3JFcXVhbFRvLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlTG9uZ2VyVGhhbi5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZU5vbkVtcHR5QXJyYXkuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvQmVOb25FbXB0eU9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZU5vbkVtcHR5U3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlTnVtYmVyLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlT2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlT2RkTnVtYmVyLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlU2FtZUxlbmd0aEFzLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlU2hvcnRlclRoYW4uanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvQmVTdHJpbmcuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvQmVUcnVlLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlV2hpdGVzcGFjZS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9CZVdob2xlTnVtYmVyLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0JlV2l0aGluUmFuZ2UuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvRW5kV2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlQXJyYXkuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvSGF2ZUFycmF5T2ZCb29sZWFucy5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlQXJyYXlPZk51bWJlcnMuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvSGF2ZUFycmF5T2ZPYmplY3RzLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0hhdmVBcnJheU9mU2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlQXJyYXlPZlN0cmluZ3MuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvSGF2ZUJvb2xlYW4uanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvSGF2ZUNhbGN1bGFibGUuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvSGF2ZURhdGUuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvSGF2ZURhdGVBZnRlci5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlRGF0ZUJlZm9yZS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlRW1wdHlBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlRW1wdHlPYmplY3QuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvSGF2ZUVtcHR5U3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0hhdmVFdmVuTnVtYmVyLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0hhdmVGYWxzZS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlSHRtbFN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlSXNvODYwMS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlSnNvblN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlTWVtYmVyLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0hhdmVNZXRob2QuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvSGF2ZU5vbkVtcHR5QXJyYXkuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvSGF2ZU5vbkVtcHR5T2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0hhdmVOb25FbXB0eVN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlTnVtYmVyLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0hhdmVOdW1iZXJXaXRoaW5SYW5nZS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlT2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0hhdmVPZGROdW1iZXIuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvSGF2ZVN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlU3RyaW5nTG9uZ2VyVGhhbi5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlU3RyaW5nU2FtZUxlbmd0aEFzLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b0hhdmVTdHJpbmdTaG9ydGVyVGhhbi5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlVHJ1ZS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlV2hpdGVzcGFjZVN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLWV4cGVjdC9zcmMvdG9IYXZlV2hvbGVOdW1iZXIuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvU3RhcnRXaXRoLmpzIiwibm9kZV9tb2R1bGVzL2phc21pbmUtZXhwZWN0L3NyYy90b1Rocm93QW55RXJyb3IuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1leHBlY3Qvc3JjL3RvVGhyb3dFcnJvck9mVHlwZS5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLW1hdGNoZXJzLWxvYWRlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9qYXNtaW5lLW1hdGNoZXJzLWxvYWRlci9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1tYXRjaGVycy1sb2FkZXIvc3JjL2phc21pbmUtdjEvaW5kZXguanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1tYXRjaGVycy1sb2FkZXIvc3JjL2phc21pbmUtdjIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1tYXRjaGVycy1sb2FkZXIvc3JjL2phc21pbmUtdjIvbWF0Y2hlckZhY3RvcnkuanMiLCJub2RlX21vZHVsZXMvamFzbWluZS1tYXRjaGVycy1sb2FkZXIvc3JjL2phc21pbmUtdjIvbWVtYmVyTWF0Y2hlckZhY3RvcnkuanMiLCJzcGVjL2hlbHBlcnMvbGVhcm53b3JkczIvU3BlY0hlbHBlci5qcyIsInNwZWMvbGVhcm53b3JkczIvTFdCb3hPZlF1ZXN0aW9uc1NwZWMuanMiLCJzcGVjL2xlYXJud29yZHMyL0xXZGJTcGVjLmpzIiwic3JjL0JveE9mUXVlc3Rpb25zLmpzIiwic3JjL0xXZGIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgd29yZExpc3QgPSBbXG4gIHtcbiAgICBcIl9pZFwiOiAxLFxuICAgIFwid29yZFwiOiBcImFwcGxlXCIsXG4gICAgXCJ0cmFuc2xhdGVcIjogXCJkZXIgQXBmZWxcIlxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogMixcbiAgICBcIndvcmRcIjogXCJwZWFyXCIsXG4gICAgXCJ0cmFuc2xhdGVcIjogXCJkaWUgQmlybmVcIlxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogMyxcbiAgICBcIndvcmRcIjogXCJsZW1vblwiLFxuICAgIFwidHJhbnNsYXRlXCI6IFwiZGllIFppdHJvbmVcIlxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogNCxcbiAgICBcIndvcmRcIjogXCJiYW5hbmFcIixcbiAgICBcInRyYW5zbGF0ZVwiOiBcImRpZSBCYW5hbmVcIlxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogNSxcbiAgICBcIndvcmRcIjogXCJvcmFuZ2VcIixcbiAgICBcInRyYW5zbGF0ZVwiOiBcImRpZSBPcmFuZ2VcIlxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogNixcbiAgICBcIndvcmRcIjogXCJzdHJhd2JlcnJ5XCIsXG4gICAgXCJ0cmFuc2xhdGVcIjogXCJkaWUgRXJkYmVlcmVcIlxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogNyxcbiAgICBcIndvcmRcIjogXCJyYXNwYmVycnlcIixcbiAgICBcInRyYW5zbGF0ZVwiOiBcImRpZSBIaW1iZWVyZVwiXG4gIH0sXG4gIHtcbiAgICBcIl9pZFwiOiA4LFxuICAgIFwid29yZFwiOiBcImJsdWViZXJyeVwiLFxuICAgIFwidHJhbnNsYXRlXCI6IFwiZGllIEJyb21iZWVyZVwiXG4gIH0sXG4gIHtcbiAgICBcIl9pZFwiOiA5LFxuICAgIFwid29yZFwiOiBcImd1YXZhXCIsXG4gICAgXCJ0cmFuc2xhdGVcIjogXCJkaWUgR3VhdmFcIlxuICB9LFxuICB7XG4gICAgXCJfaWRcIjogMTAsXG4gICAgXCJ3b3JkXCI6IFwicGF3cGF3XCIsXG4gICAgXCJ0cmFuc2xhdGVcIjogXCJkaWUgUGFwYXlhXCJcbiAgfSxcbiAge1xuICAgIFwiX2lkXCI6IDExLFxuICAgIFwid29yZFwiOiBcImFwcmljb3RcIixcbiAgICBcInRyYW5zbGF0ZVwiOiBcImRpZSBBcHJpa29zZVwiXG4gIH0sXG4gIHtcbiAgICBcIl9pZFwiOiAxMixcbiAgICBcIndvcmRcIjogXCJtZWxvblwiLFxuICAgIFwidHJhbnNsYXRlXCI6IFwiZGllIE1lbG9uZVwiXG4gIH1cbl07XG5cblxubW9kdWxlLmV4cG9ydHMgPSB3b3JkTGlzdDtcbiIsIi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYycpO1xuIiwiLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXN5bW1ldHJpY01hdGNoZXI6IFt7XG4gICAgbmFtZTogJ2FmdGVyJyxcbiAgICBtYXRjaGVyOiAndG9CZUFmdGVyJ1xuICB9LCB7XG4gICAgbmFtZTogJ2FycmF5T2ZCb29sZWFucycsXG4gICAgbWF0Y2hlcjogJ3RvQmVBcnJheU9mQm9vbGVhbnMnXG4gIH0sIHtcbiAgICBuYW1lOiAnYXJyYXlPZk51bWJlcnMnLFxuICAgIG1hdGNoZXI6ICd0b0JlQXJyYXlPZk51bWJlcnMnXG4gIH0sIHtcbiAgICBuYW1lOiAnYXJyYXlPZk9iamVjdHMnLFxuICAgIG1hdGNoZXI6ICd0b0JlQXJyYXlPZk9iamVjdHMnXG4gIH0sIHtcbiAgICBuYW1lOiAnYXJyYXlPZlNpemUnLFxuICAgIG1hdGNoZXI6ICd0b0JlQXJyYXlPZlNpemUnXG4gIH0sIHtcbiAgICBuYW1lOiAnYXJyYXlPZlN0cmluZ3MnLFxuICAgIG1hdGNoZXI6ICd0b0JlQXJyYXlPZlN0cmluZ3MnXG4gIH0sIHtcbiAgICBuYW1lOiAnYmVmb3JlJyxcbiAgICBtYXRjaGVyOiAndG9CZUJlZm9yZSdcbiAgfSwge1xuICAgIG5hbWU6ICdjYWxjdWxhYmxlJyxcbiAgICBtYXRjaGVyOiAndG9CZUNhbGN1bGFibGUnXG4gIH0sIHtcbiAgICBuYW1lOiAnZW1wdHlBcnJheScsXG4gICAgbWF0Y2hlcjogJ3RvQmVFbXB0eUFycmF5J1xuICB9LCB7XG4gICAgbmFtZTogJ2VtcHR5T2JqZWN0JyxcbiAgICBtYXRjaGVyOiAndG9CZUVtcHR5T2JqZWN0J1xuICB9LCB7XG4gICAgbmFtZTogJ2V2ZW5OdW1iZXInLFxuICAgIG1hdGNoZXI6ICd0b0JlRXZlbk51bWJlcidcbiAgfSwge1xuICAgIG5hbWU6ICdncmVhdGVyVGhhbk9yRXF1YWxUbycsXG4gICAgbWF0Y2hlcjogJ3RvQmVHcmVhdGVyVGhhbk9yRXF1YWxUbydcbiAgfSwge1xuICAgIG5hbWU6ICdpc284NjAxJyxcbiAgICBtYXRjaGVyOiAndG9CZUlzbzg2MDEnXG4gIH0sIHtcbiAgICBuYW1lOiAnanNvblN0cmluZycsXG4gICAgbWF0Y2hlcjogJ3RvQmVKc29uU3RyaW5nJ1xuICB9LCB7XG4gICAgbmFtZTogJ2xlc3NUaGFuT3JFcXVhbFRvJyxcbiAgICBtYXRjaGVyOiAndG9CZUxlc3NUaGFuT3JFcXVhbFRvJ1xuICB9LCB7XG4gICAgbmFtZTogJ2xvbmdlclRoYW4nLFxuICAgIG1hdGNoZXI6ICd0b0JlTG9uZ2VyVGhhbidcbiAgfSwge1xuICAgIG5hbWU6ICdub25FbXB0eUFycmF5JyxcbiAgICBtYXRjaGVyOiAndG9CZU5vbkVtcHR5QXJyYXknXG4gIH0sIHtcbiAgICBuYW1lOiAnbm9uRW1wdHlPYmplY3QnLFxuICAgIG1hdGNoZXI6ICd0b0JlTm9uRW1wdHlPYmplY3QnXG4gIH0sIHtcbiAgICBuYW1lOiAnbm9uRW1wdHlTdHJpbmcnLFxuICAgIG1hdGNoZXI6ICd0b0JlTm9uRW1wdHlTdHJpbmcnXG4gIH0sIHtcbiAgICBuYW1lOiAnb2RkTnVtYmVyJyxcbiAgICBtYXRjaGVyOiAndG9CZU9kZE51bWJlcidcbiAgfSwge1xuICAgIG5hbWU6ICdzYW1lTGVuZ3RoQXMnLFxuICAgIG1hdGNoZXI6ICd0b0JlU2FtZUxlbmd0aEFzJ1xuICB9LCB7XG4gICAgbmFtZTogJ3Nob3J0ZXJUaGFuJyxcbiAgICBtYXRjaGVyOiAndG9CZVNob3J0ZXJUaGFuJ1xuICB9LCB7XG4gICAgbmFtZTogJ3doaXRlc3BhY2UnLFxuICAgIG1hdGNoZXI6ICd0b0JlV2hpdGVzcGFjZSdcbiAgfSwge1xuICAgIG5hbWU6ICd3aG9sZU51bWJlcicsXG4gICAgbWF0Y2hlcjogJ3RvQmVXaG9sZU51bWJlcidcbiAgfSwge1xuICAgIG5hbWU6ICd3aXRoaW5SYW5nZScsXG4gICAgbWF0Y2hlcjogJ3RvQmVXaXRoaW5SYW5nZSdcbiAgfSwge1xuICAgIG5hbWU6ICdlbmRpbmdXaXRoJyxcbiAgICBtYXRjaGVyOiAndG9FbmRXaXRoJ1xuICB9LCB7XG4gICAgbmFtZTogJ3N0YXJ0aW5nV2l0aCcsXG4gICAgbWF0Y2hlcjogJ3RvU3RhcnRXaXRoJ1xuICB9XSxcbiAgbWF0Y2hlcjoge1xuICAgIHRvQmVBZnRlcjogcmVxdWlyZSgnLi90b0JlQWZ0ZXInKSxcbiAgICB0b0JlQXJyYXk6IHJlcXVpcmUoJy4vdG9CZUFycmF5JyksXG4gICAgdG9CZUFycmF5T2ZCb29sZWFuczogcmVxdWlyZSgnLi90b0JlQXJyYXlPZkJvb2xlYW5zJyksXG4gICAgdG9CZUFycmF5T2ZOdW1iZXJzOiByZXF1aXJlKCcuL3RvQmVBcnJheU9mTnVtYmVycycpLFxuICAgIHRvQmVBcnJheU9mT2JqZWN0czogcmVxdWlyZSgnLi90b0JlQXJyYXlPZk9iamVjdHMnKSxcbiAgICB0b0JlQXJyYXlPZlNpemU6IHJlcXVpcmUoJy4vdG9CZUFycmF5T2ZTaXplJyksXG4gICAgdG9CZUFycmF5T2ZTdHJpbmdzOiByZXF1aXJlKCcuL3RvQmVBcnJheU9mU3RyaW5ncycpLFxuICAgIHRvQmVCZWZvcmU6IHJlcXVpcmUoJy4vdG9CZUJlZm9yZScpLFxuICAgIHRvQmVCb29sZWFuOiByZXF1aXJlKCcuL3RvQmVCb29sZWFuJyksXG4gICAgdG9CZUNhbGN1bGFibGU6IHJlcXVpcmUoJy4vdG9CZUNhbGN1bGFibGUnKSxcbiAgICB0b0JlRGF0ZTogcmVxdWlyZSgnLi90b0JlRGF0ZScpLFxuICAgIHRvQmVFbXB0eUFycmF5OiByZXF1aXJlKCcuL3RvQmVFbXB0eUFycmF5JyksXG4gICAgdG9CZUVtcHR5T2JqZWN0OiByZXF1aXJlKCcuL3RvQmVFbXB0eU9iamVjdCcpLFxuICAgIHRvQmVFbXB0eVN0cmluZzogcmVxdWlyZSgnLi90b0JlRW1wdHlTdHJpbmcnKSxcbiAgICB0b0JlRXZlbk51bWJlcjogcmVxdWlyZSgnLi90b0JlRXZlbk51bWJlcicpLFxuICAgIHRvQmVGYWxzZTogcmVxdWlyZSgnLi90b0JlRmFsc2UnKSxcbiAgICB0b0JlRnVuY3Rpb246IHJlcXVpcmUoJy4vdG9CZUZ1bmN0aW9uJyksXG4gICAgdG9CZUdyZWF0ZXJUaGFuT3JFcXVhbFRvOiByZXF1aXJlKCcuL3RvQmVHcmVhdGVyVGhhbk9yRXF1YWxUbycpLFxuICAgIHRvQmVIdG1sU3RyaW5nOiByZXF1aXJlKCcuL3RvQmVIdG1sU3RyaW5nJyksXG4gICAgdG9CZUlzbzg2MDE6IHJlcXVpcmUoJy4vdG9CZUlzbzg2MDEnKSxcbiAgICB0b0JlSnNvblN0cmluZzogcmVxdWlyZSgnLi90b0JlSnNvblN0cmluZycpLFxuICAgIHRvQmVMZXNzVGhhbk9yRXF1YWxUbzogcmVxdWlyZSgnLi90b0JlTGVzc1RoYW5PckVxdWFsVG8nKSxcbiAgICB0b0JlTG9uZ2VyVGhhbjogcmVxdWlyZSgnLi90b0JlTG9uZ2VyVGhhbicpLFxuICAgIHRvQmVOb25FbXB0eUFycmF5OiByZXF1aXJlKCcuL3RvQmVOb25FbXB0eUFycmF5JyksXG4gICAgdG9CZU5vbkVtcHR5T2JqZWN0OiByZXF1aXJlKCcuL3RvQmVOb25FbXB0eU9iamVjdCcpLFxuICAgIHRvQmVOb25FbXB0eVN0cmluZzogcmVxdWlyZSgnLi90b0JlTm9uRW1wdHlTdHJpbmcnKSxcbiAgICB0b0JlTnVtYmVyOiByZXF1aXJlKCcuL3RvQmVOdW1iZXInKSxcbiAgICB0b0JlT2JqZWN0OiByZXF1aXJlKCcuL3RvQmVPYmplY3QnKSxcbiAgICB0b0JlT2RkTnVtYmVyOiByZXF1aXJlKCcuL3RvQmVPZGROdW1iZXInKSxcbiAgICB0b0JlU2FtZUxlbmd0aEFzOiByZXF1aXJlKCcuL3RvQmVTYW1lTGVuZ3RoQXMnKSxcbiAgICB0b0JlU2hvcnRlclRoYW46IHJlcXVpcmUoJy4vdG9CZVNob3J0ZXJUaGFuJyksXG4gICAgdG9CZVN0cmluZzogcmVxdWlyZSgnLi90b0JlU3RyaW5nJyksXG4gICAgdG9CZVRydWU6IHJlcXVpcmUoJy4vdG9CZVRydWUnKSxcbiAgICB0b0JlV2hpdGVzcGFjZTogcmVxdWlyZSgnLi90b0JlV2hpdGVzcGFjZScpLFxuICAgIHRvQmVXaG9sZU51bWJlcjogcmVxdWlyZSgnLi90b0JlV2hvbGVOdW1iZXInKSxcbiAgICB0b0JlV2l0aGluUmFuZ2U6IHJlcXVpcmUoJy4vdG9CZVdpdGhpblJhbmdlJyksXG4gICAgdG9FbmRXaXRoOiByZXF1aXJlKCcuL3RvRW5kV2l0aCcpLFxuICAgIHRvSGF2ZUFycmF5OiByZXF1aXJlKCcuL3RvSGF2ZUFycmF5JyksXG4gICAgdG9IYXZlQXJyYXlPZkJvb2xlYW5zOiByZXF1aXJlKCcuL3RvSGF2ZUFycmF5T2ZCb29sZWFucycpLFxuICAgIHRvSGF2ZUFycmF5T2ZOdW1iZXJzOiByZXF1aXJlKCcuL3RvSGF2ZUFycmF5T2ZOdW1iZXJzJyksXG4gICAgdG9IYXZlQXJyYXlPZk9iamVjdHM6IHJlcXVpcmUoJy4vdG9IYXZlQXJyYXlPZk9iamVjdHMnKSxcbiAgICB0b0hhdmVBcnJheU9mU2l6ZTogcmVxdWlyZSgnLi90b0hhdmVBcnJheU9mU2l6ZScpLFxuICAgIHRvSGF2ZUFycmF5T2ZTdHJpbmdzOiByZXF1aXJlKCcuL3RvSGF2ZUFycmF5T2ZTdHJpbmdzJyksXG4gICAgdG9IYXZlQm9vbGVhbjogcmVxdWlyZSgnLi90b0hhdmVCb29sZWFuJyksXG4gICAgdG9IYXZlQ2FsY3VsYWJsZTogcmVxdWlyZSgnLi90b0hhdmVDYWxjdWxhYmxlJyksXG4gICAgdG9IYXZlRGF0ZTogcmVxdWlyZSgnLi90b0hhdmVEYXRlJyksXG4gICAgdG9IYXZlRGF0ZUFmdGVyOiByZXF1aXJlKCcuL3RvSGF2ZURhdGVBZnRlcicpLFxuICAgIHRvSGF2ZURhdGVCZWZvcmU6IHJlcXVpcmUoJy4vdG9IYXZlRGF0ZUJlZm9yZScpLFxuICAgIHRvSGF2ZUVtcHR5QXJyYXk6IHJlcXVpcmUoJy4vdG9IYXZlRW1wdHlBcnJheScpLFxuICAgIHRvSGF2ZUVtcHR5T2JqZWN0OiByZXF1aXJlKCcuL3RvSGF2ZUVtcHR5T2JqZWN0JyksXG4gICAgdG9IYXZlRW1wdHlTdHJpbmc6IHJlcXVpcmUoJy4vdG9IYXZlRW1wdHlTdHJpbmcnKSxcbiAgICB0b0hhdmVFdmVuTnVtYmVyOiByZXF1aXJlKCcuL3RvSGF2ZUV2ZW5OdW1iZXInKSxcbiAgICB0b0hhdmVGYWxzZTogcmVxdWlyZSgnLi90b0hhdmVGYWxzZScpLFxuICAgIHRvSGF2ZUh0bWxTdHJpbmc6IHJlcXVpcmUoJy4vdG9IYXZlSHRtbFN0cmluZycpLFxuICAgIHRvSGF2ZUlzbzg2MDE6IHJlcXVpcmUoJy4vdG9IYXZlSXNvODYwMScpLFxuICAgIHRvSGF2ZUpzb25TdHJpbmc6IHJlcXVpcmUoJy4vdG9IYXZlSnNvblN0cmluZycpLFxuICAgIHRvSGF2ZU1lbWJlcjogcmVxdWlyZSgnLi90b0hhdmVNZW1iZXInKSxcbiAgICB0b0hhdmVNZXRob2Q6IHJlcXVpcmUoJy4vdG9IYXZlTWV0aG9kJyksXG4gICAgdG9IYXZlTm9uRW1wdHlBcnJheTogcmVxdWlyZSgnLi90b0hhdmVOb25FbXB0eUFycmF5JyksXG4gICAgdG9IYXZlTm9uRW1wdHlPYmplY3Q6IHJlcXVpcmUoJy4vdG9IYXZlTm9uRW1wdHlPYmplY3QnKSxcbiAgICB0b0hhdmVOb25FbXB0eVN0cmluZzogcmVxdWlyZSgnLi90b0hhdmVOb25FbXB0eVN0cmluZycpLFxuICAgIHRvSGF2ZU51bWJlcjogcmVxdWlyZSgnLi90b0hhdmVOdW1iZXInKSxcbiAgICB0b0hhdmVOdW1iZXJXaXRoaW5SYW5nZTogcmVxdWlyZSgnLi90b0hhdmVOdW1iZXJXaXRoaW5SYW5nZScpLFxuICAgIHRvSGF2ZU9iamVjdDogcmVxdWlyZSgnLi90b0hhdmVPYmplY3QnKSxcbiAgICB0b0hhdmVPZGROdW1iZXI6IHJlcXVpcmUoJy4vdG9IYXZlT2RkTnVtYmVyJyksXG4gICAgdG9IYXZlU3RyaW5nOiByZXF1aXJlKCcuL3RvSGF2ZVN0cmluZycpLFxuICAgIHRvSGF2ZVN0cmluZ0xvbmdlclRoYW46IHJlcXVpcmUoJy4vdG9IYXZlU3RyaW5nTG9uZ2VyVGhhbicpLFxuICAgIHRvSGF2ZVN0cmluZ1NhbWVMZW5ndGhBczogcmVxdWlyZSgnLi90b0hhdmVTdHJpbmdTYW1lTGVuZ3RoQXMnKSxcbiAgICB0b0hhdmVTdHJpbmdTaG9ydGVyVGhhbjogcmVxdWlyZSgnLi90b0hhdmVTdHJpbmdTaG9ydGVyVGhhbicpLFxuICAgIHRvSGF2ZVRydWU6IHJlcXVpcmUoJy4vdG9IYXZlVHJ1ZScpLFxuICAgIHRvSGF2ZVdoaXRlc3BhY2VTdHJpbmc6IHJlcXVpcmUoJy4vdG9IYXZlV2hpdGVzcGFjZVN0cmluZycpLFxuICAgIHRvSGF2ZVdob2xlTnVtYmVyOiByZXF1aXJlKCcuL3RvSGF2ZVdob2xlTnVtYmVyJyksXG4gICAgdG9TdGFydFdpdGg6IHJlcXVpcmUoJy4vdG9TdGFydFdpdGgnKSxcbiAgICB0b1Rocm93QW55RXJyb3I6IHJlcXVpcmUoJy4vdG9UaHJvd0FueUVycm9yJyksXG4gICAgdG9UaHJvd0Vycm9yT2ZUeXBlOiByZXF1aXJlKCcuL3RvVGhyb3dFcnJvck9mVHlwZScpXG4gIH1cbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgcmVkdWNlID0gcmVxdWlyZSgnLi9saWIvcmVkdWNlJyk7XG52YXIgYXBpID0gcmVxdWlyZSgnLi9hcGknKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZShhcGkuYXN5bW1ldHJpY01hdGNoZXIsIHJlZ2lzdGVyLCB7fSk7XG5cbi8vIGltcGxlbWVudGF0aW9uXG5mdW5jdGlvbiByZWdpc3RlcihhbnksIGFzeW1NYXRjaGVyKSB7XG4gIHZhciBtYXRjaGVyID0gYXBpLm1hdGNoZXJbYXN5bU1hdGNoZXIubWF0Y2hlcl07XG4gIGFueVthc3ltTWF0Y2hlci5uYW1lXSA9IGNyZWF0ZUZhY3RvcnkobWF0Y2hlcik7XG4gIHJldHVybiBhbnk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnkobWF0Y2hlcikge1xuICByZXR1cm4gZnVuY3Rpb24gYXN5bW1ldHJpY01hdGNoZXJGYWN0b3J5KCkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHJldHVybiB7XG4gICAgICBhc3ltbWV0cmljTWF0Y2g6IGZ1bmN0aW9uIGFzeW1tZXRyaWNNYXRjaGVyKGFjdHVhbCkge1xuICAgICAgICB2YXIgY2xvbmUgPSBhcmdzLnNsaWNlKCk7XG4gICAgICAgIGNsb25lLnB1c2goYWN0dWFsKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXIuYXBwbHkodGhpcywgY2xvbmUpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG4iLCIvLyAzcmQgcGFydHkgbW9kdWxlc1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ2phc21pbmUtbWF0Y2hlcnMtbG9hZGVyJyk7XG5cbi8vIG1vZHVsZXNcbnZhciBhcGkgPSByZXF1aXJlKCcuL2FwaScpO1xudmFyIGFzeW1tZXRyaWNNYXRjaGVycyA9IHJlcXVpcmUoJy4vYXN5bW1ldHJpY01hdGNoZXJzJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBhcGkubWF0Y2hlcjtcblxuLy8gaW1wbGVtZW50YXRpb25cbmxvYWRlci5hZGQoYXBpLm1hdGNoZXIpO1xuZ2xvYmFsLmFueSA9IGFzeW1tZXRyaWNNYXRjaGVycztcbiIsIi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBldmVyeShhcnJheSwgdHJ1dGhUZXN0KSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICh0cnV0aFRlc3QoYXJyYXlbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsIi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBldmVyeShhcnJheSwgdHJ1dGhUZXN0KSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghdHJ1dGhUZXN0KGFycmF5W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXModmFsdWUsIHR5cGUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0ICcgKyB0eXBlICsgJ10nO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciByZWR1Y2UgPSByZXF1aXJlKCcuL3JlZHVjZScpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIHJlZHVjZShvYmplY3QsIGZ1bmN0aW9uIChrZXlzLCB2YWx1ZSwga2V5KSB7XG4gICAgcmV0dXJuIGtleXMuY29uY2F0KGtleSk7XG4gIH0sIFtdKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgaXMgPSByZXF1aXJlKCcuL2lzJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgZm4sIG1lbW8pIHtcbiAgaWYgKGlzKGNvbGxlY3Rpb24sICdBcnJheScpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbGxlY3Rpb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG1lbW8gPSBmbihtZW1vLCBjb2xsZWN0aW9uW2ldLCBpLCBjb2xsZWN0aW9uKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIga2V5IGluIGNvbGxlY3Rpb24pIHtcbiAgICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbGxlY3Rpb24sIGtleSkpIHtcbiAgICAgICAgbWVtbyA9IGZuKG1lbW8sIGNvbGxlY3Rpb25ba2V5XSwga2V5LCBjb2xsZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lbW87XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVCZWZvcmUgPSByZXF1aXJlKCcuL3RvQmVCZWZvcmUnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvQmVBZnRlcihvdGhlckRhdGUsIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZUJlZm9yZShhY3R1YWwsIG90aGVyRGF0ZSk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIGlzID0gcmVxdWlyZSgnLi9saWIvaXMnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvQmVBcnJheShhY3R1YWwpIHtcbiAgcmV0dXJuIGlzKGFjdHVhbCwgJ0FycmF5Jyk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIGV2ZXJ5ID0gcmVxdWlyZSgnLi9saWIvZXZlcnknKTtcbnZhciB0b0JlQXJyYXkgPSByZXF1aXJlKCcuL3RvQmVBcnJheScpO1xudmFyIHRvQmVCb29sZWFuID0gcmVxdWlyZSgnLi90b0JlQm9vbGVhbicpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZUFycmF5T2ZCb29sZWFucyhhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVBcnJheShhY3R1YWwpICYmIGV2ZXJ5KGFjdHVhbCwgdG9CZUJvb2xlYW4pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciBldmVyeSA9IHJlcXVpcmUoJy4vbGliL2V2ZXJ5Jyk7XG52YXIgdG9CZUFycmF5ID0gcmVxdWlyZSgnLi90b0JlQXJyYXknKTtcbnZhciB0b0JlTnVtYmVyID0gcmVxdWlyZSgnLi90b0JlTnVtYmVyJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0JlQXJyYXlPZkJvb2xlYW5zKGFjdHVhbCkge1xuICByZXR1cm4gdG9CZUFycmF5KGFjdHVhbCkgJiYgZXZlcnkoYWN0dWFsLCB0b0JlTnVtYmVyKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgZXZlcnkgPSByZXF1aXJlKCcuL2xpYi9ldmVyeScpO1xudmFyIHRvQmVBcnJheSA9IHJlcXVpcmUoJy4vdG9CZUFycmF5Jyk7XG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZUFycmF5T2ZCb29sZWFucyhhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVBcnJheShhY3R1YWwpICYmIGV2ZXJ5KGFjdHVhbCwgdG9CZU9iamVjdCk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVBcnJheSA9IHJlcXVpcmUoJy4vdG9CZUFycmF5Jyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0JlQXJyYXlPZlNpemUoc2l6ZSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlQXJyYXkoYWN0dWFsKSAmJiBhY3R1YWwubGVuZ3RoID09PSBzaXplO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciBldmVyeSA9IHJlcXVpcmUoJy4vbGliL2V2ZXJ5Jyk7XG52YXIgdG9CZUFycmF5ID0gcmVxdWlyZSgnLi90b0JlQXJyYXknKTtcbnZhciB0b0JlU3RyaW5nID0gcmVxdWlyZSgnLi90b0JlU3RyaW5nJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0JlQXJyYXlPZlN0cmluZ3MoYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlQXJyYXkoYWN0dWFsKSAmJiBldmVyeShhY3R1YWwsIHRvQmVTdHJpbmcpO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlRGF0ZSA9IHJlcXVpcmUoJy4vdG9CZURhdGUnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvQmVCZWZvcmUob3RoZXJEYXRlLCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVEYXRlKGFjdHVhbCkgJiYgdG9CZURhdGUob3RoZXJEYXRlKSAmJiBhY3R1YWwuZ2V0VGltZSgpIDwgb3RoZXJEYXRlLmdldFRpbWUoKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgaXMgPSByZXF1aXJlKCcuL2xpYi9pcycpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZUJvb2xlYW4oYWN0dWFsKSB7XG4gIHJldHVybiBpcyhhY3R1YWwsICdCb29sZWFuJyk7XG59O1xuIiwiLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IHRvQmVDYWxjdWxhYmxlO1xuXG4vLyBBc3NlcnQgc3ViamVjdCBjYW4gYmUgdXNlZCBpbiBNYXRoZW1ldGljIGNhbGN1bGF0aW9ucyBkZXNwaXRlIG5vdCBiZWluZyBhXG4vLyBOdW1iZXIsIGZvciBleGFtcGxlIGBcIjFcIiAqIFwiMlwiID09PSAyYCB3aGVyZWFzIGBcInd1dD9cIiAqIDIgPT09IE5hTmAuXG5mdW5jdGlvbiB0b0JlQ2FsY3VsYWJsZShhY3R1YWwpIHtcbiAgcmV0dXJuICFpc05hTihhY3R1YWwgKiAyKTtcbn1cbiIsIi8vIG1vZHVsZXNcbnZhciBpcyA9IHJlcXVpcmUoJy4vbGliL2lzJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0JlRGF0ZShhY3R1YWwpIHtcbiAgcmV0dXJuIGlzKGFjdHVhbCwgJ0RhdGUnKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZUFycmF5T2ZTaXplID0gcmVxdWlyZSgnLi90b0JlQXJyYXlPZlNpemUnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvQmVFbXB0eUFycmF5KGFjdHVhbCkge1xuICByZXR1cm4gdG9CZUFycmF5T2ZTaXplKDAsIGFjdHVhbCk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIGlzID0gcmVxdWlyZSgnLi9saWIvaXMnKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi9saWIva2V5cycpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZUVtcHR5T2JqZWN0KGFjdHVhbCkge1xuICByZXR1cm4gaXMoYWN0dWFsLCAnT2JqZWN0JykgJiYga2V5cyhhY3R1YWwpLmxlbmd0aCA9PT0gMDtcbn07XG4iLCIvLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZUVtcHR5U3RyaW5nKGFjdHVhbCkge1xuICByZXR1cm4gYWN0dWFsID09PSAnJztcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU51bWJlciA9IHJlcXVpcmUoJy4vdG9CZU51bWJlcicpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZUV2ZW5OdW1iZXIoYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlTnVtYmVyKGFjdHVhbCkgJiYgYWN0dWFsICUgMiA9PT0gMDtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgaXMgPSByZXF1aXJlKCcuL2xpYi9pcycpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZUZhbHNlKGFjdHVhbCkge1xuICByZXR1cm4gYWN0dWFsID09PSBmYWxzZSB8fCAoaXMoYWN0dWFsLCAnQm9vbGVhbicpICYmIGFjdHVhbC52YWx1ZU9mKCkgPT09IGZhbHNlKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgaXMgPSByZXF1aXJlKCcuL2xpYi9pcycpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZUZ1bmN0aW9uKGFjdHVhbCkge1xuICByZXR1cm4gaXMoYWN0dWFsLCAnRnVuY3Rpb24nKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU51bWJlciA9IHJlcXVpcmUoJy4vdG9CZU51bWJlcicpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZUdyZWF0ZXJUaGFuT3JFcXVhbFRvKG90aGVyTnVtYmVyLCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVOdW1iZXIoYWN0dWFsKSAmJiBhY3R1YWwgPj0gb3RoZXJOdW1iZXI7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVTdHJpbmcgPSByZXF1aXJlKCcuL3RvQmVTdHJpbmcnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvQmVIdG1sU3RyaW5nKGFjdHVhbCkge1xuICAvLyA8ICAgICAgICAgICBzdGFydCB3aXRoIG9wZW5pbmcgdGFnIFwiPFwiXG4gIC8vICAoICAgICAgICAgIHN0YXJ0IGdyb3VwIDFcbiAgLy8gICAgXCJbXlwiXSpcIiAgYWxsb3cgc3RyaW5nIGluIFwiZG91YmxlIHF1b3Rlc1wiXG4gIC8vICAgIHwgICAgICAgIE9SXG4gIC8vICAgICdbXiddKicgIGFsbG93IHN0cmluZyBpbiBcInNpbmdsZSBxdW90ZXNcIlxuICAvLyAgICB8ICAgICAgICBPUlxuICAvLyAgICBbXidcIj5dICAgY2FudCBjb250YWlucyBvbmUgc2luZ2xlIHF1b3RlcywgZG91YmxlIHF1b3RlcyBhbmQgXCI+XCJcbiAgLy8gICkgICAgICAgICAgZW5kIGdyb3VwIDFcbiAgLy8gICogICAgICAgICAgMCBvciBtb3JlXG4gIC8vID4gICAgICAgICAgIGVuZCB3aXRoIGNsb3NpbmcgdGFnIFwiPlwiXG4gIHJldHVybiB0b0JlU3RyaW5nKGFjdHVhbCkgJiYgYWN0dWFsLnNlYXJjaCgvPChcIlteXCJdKlwifCdbXiddKid8W14nXCI+XSkqPi8pICE9PSAtMTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgYW55ID0gcmVxdWlyZSgnLi9saWIvYW55Jyk7XG52YXIgdG9CZVN0cmluZyA9IHJlcXVpcmUoJy4vdG9CZVN0cmluZycpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gdG9CZUlzbzg2MDE7XG5cbi8vIGltcGxlbWVudGF0aW9uXG52YXIgcGF0dGVybnMgPSBbXG4gICdubm5uLW5uLW5uJyxcbiAgJ25ubm4tbm4tbm5Ubm46bm4nLFxuICAnbm5ubi1ubi1ublRubjpubjpubicsXG4gICdubm5uLW5uLW5uVG5uOm5uOm5uLm5ubicsXG4gICdubm5uLW5uLW5uVG5uOm5uOm5uLm5ublonXG5dO1xuXG5mdW5jdGlvbiB0b0JlSXNvODYwMShhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVTdHJpbmcoYWN0dWFsKSAmJiBhbnkocGF0dGVybnMsIG1hdGNoZXMpICYmIG5ldyBEYXRlKGFjdHVhbCkudG9TdHJpbmcoKSAhPT0gJ0ludmFsaWQgRGF0ZSc7XG5cbiAgZnVuY3Rpb24gbWF0Y2hlcyhwYXR0ZXJuKSB7XG4gICAgdmFyIHJlZ2V4ID0gJ14nICsgZXhwYW5kKHBhdHRlcm4pICsgJyQnO1xuICAgIHJldHVybiBhY3R1YWwuc2VhcmNoKG5ldyBSZWdFeHAocmVnZXgpKSAhPT0gLTE7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXhwYW5kKHBhdHRlcm4pIHtcbiAgcmV0dXJuIHBhdHRlcm5cbiAgICAuc3BsaXQoJy0nKS5qb2luKCdcXFxcLScpXG4gICAgLnNwbGl0KCcuJykuam9pbignXFxcXC4nKVxuICAgIC5zcGxpdCgnbm5ubicpLmpvaW4oJyhbMC05XXs0fSknKVxuICAgIC5zcGxpdCgnbm5uJykuam9pbignKFswLTldezN9KScpXG4gICAgLnNwbGl0KCdubicpLmpvaW4oJyhbMC05XXsyfSknKTtcbn1cbiIsIi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0JlSnNvblN0cmluZyhhY3R1YWwpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShhY3R1YWwpICE9PSBudWxsO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU51bWJlciA9IHJlcXVpcmUoJy4vdG9CZU51bWJlcicpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZUxlc3NUaGFuT3JFcXVhbFRvKG90aGVyTnVtYmVyLCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVOdW1iZXIoYWN0dWFsKSAmJiBhY3R1YWwgPD0gb3RoZXJOdW1iZXI7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVTdHJpbmcgPSByZXF1aXJlKCcuL3RvQmVTdHJpbmcnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvQmVMb25nZXJUaGFuKG90aGVyU3RyaW5nLCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVTdHJpbmcoYWN0dWFsKSAmJiB0b0JlU3RyaW5nKG90aGVyU3RyaW5nKSAmJiBhY3R1YWwubGVuZ3RoID4gb3RoZXJTdHJpbmcubGVuZ3RoO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciBpcyA9IHJlcXVpcmUoJy4vbGliL2lzJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0JlTm9uRW1wdHlBcnJheShhY3R1YWwpIHtcbiAgcmV0dXJuIGlzKGFjdHVhbCwgJ0FycmF5JykgJiYgYWN0dWFsLmxlbmd0aCA+IDA7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIGlzID0gcmVxdWlyZSgnLi9saWIvaXMnKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi9saWIva2V5cycpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZU5vbkVtcHR5T2JqZWN0KGFjdHVhbCkge1xuICByZXR1cm4gaXMoYWN0dWFsLCAnT2JqZWN0JykgJiYga2V5cyhhY3R1YWwpLmxlbmd0aCA+IDA7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVTdHJpbmcgPSByZXF1aXJlKCcuL3RvQmVTdHJpbmcnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvQmVOb25FbXB0eVN0cmluZyhhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVTdHJpbmcoYWN0dWFsKSAmJiBhY3R1YWwubGVuZ3RoID4gMDtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgaXMgPSByZXF1aXJlKCcuL2xpYi9pcycpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZU51bWJlcihhY3R1YWwpIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KGFjdHVhbCkpICYmICFpcyhhY3R1YWwsICdTdHJpbmcnKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgaXMgPSByZXF1aXJlKCcuL2xpYi9pcycpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZU9iamVjdChhY3R1YWwpIHtcbiAgcmV0dXJuIGlzKGFjdHVhbCwgJ09iamVjdCcpO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlTnVtYmVyID0gcmVxdWlyZSgnLi90b0JlTnVtYmVyJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0JlT2RkTnVtYmVyKGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU51bWJlcihhY3R1YWwpICYmIGFjdHVhbCAlIDIgIT09IDA7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVTdHJpbmcgPSByZXF1aXJlKCcuL3RvQmVTdHJpbmcnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvQmVTYW1lTGVuZ3RoQXMob3RoZXJTdHJpbmcsIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZVN0cmluZyhhY3R1YWwpICYmIHRvQmVTdHJpbmcob3RoZXJTdHJpbmcpICYmIGFjdHVhbC5sZW5ndGggPT09IG90aGVyU3RyaW5nLmxlbmd0aDtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZVN0cmluZyA9IHJlcXVpcmUoJy4vdG9CZVN0cmluZycpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZVNob3J0ZXJUaGFuKG90aGVyU3RyaW5nLCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVTdHJpbmcoYWN0dWFsKSAmJiB0b0JlU3RyaW5nKG90aGVyU3RyaW5nKSAmJiBhY3R1YWwubGVuZ3RoIDwgb3RoZXJTdHJpbmcubGVuZ3RoO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciBpcyA9IHJlcXVpcmUoJy4vbGliL2lzJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0JlU3RyaW5nKGFjdHVhbCkge1xuICByZXR1cm4gaXMoYWN0dWFsLCAnU3RyaW5nJyk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIGlzID0gcmVxdWlyZSgnLi9saWIvaXMnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvQmVUcnVlKGFjdHVhbCkge1xuICByZXR1cm4gYWN0dWFsID09PSB0cnVlIHx8IChpcyhhY3R1YWwsICdCb29sZWFuJykgJiYgYWN0dWFsLnZhbHVlT2YoKSA9PT0gdHJ1ZSk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVTdHJpbmcgPSByZXF1aXJlKCcuL3RvQmVTdHJpbmcnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvQmVXaGl0ZXNwYWNlKGFjdHVhbCkge1xuICByZXR1cm4gdG9CZVN0cmluZyhhY3R1YWwpICYmIGFjdHVhbC5zZWFyY2goL1xcUy8pID09PSAtMTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU51bWJlciA9IHJlcXVpcmUoJy4vdG9CZU51bWJlcicpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9CZVdob2xlTnVtYmVyKGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU51bWJlcihhY3R1YWwpICYmIChcbiAgICAgICAgYWN0dWFsID09PSAwIHx8IGFjdHVhbCAlIDEgPT09IDBcbiAgICApO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlTnVtYmVyID0gcmVxdWlyZSgnLi90b0JlTnVtYmVyJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0JlV2l0aGluUmFuZ2UoZmxvb3IsIGNlaWxpbmcsIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU51bWJlcihhY3R1YWwpICYmIGFjdHVhbCA+PSBmbG9vciAmJiBhY3R1YWwgPD0gY2VpbGluZztcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU5vbkVtcHR5U3RyaW5nID0gcmVxdWlyZSgnLi90b0JlTm9uRW1wdHlTdHJpbmcnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvRW5kV2l0aChzdWJTdHJpbmcsIGFjdHVhbCkge1xuICBpZiAoIXRvQmVOb25FbXB0eVN0cmluZyhhY3R1YWwpIHx8ICF0b0JlTm9uRW1wdHlTdHJpbmcoc3ViU3RyaW5nKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gYWN0dWFsLnNsaWNlKGFjdHVhbC5sZW5ndGggLSBzdWJTdHJpbmcubGVuZ3RoLCBhY3R1YWwubGVuZ3RoKSA9PT0gc3ViU3RyaW5nO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZUFycmF5ID0gcmVxdWlyZSgnLi90b0JlQXJyYXknKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvSGF2ZUFycmF5KGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZUFycmF5KGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xudmFyIHRvQmVBcnJheU9mQm9vbGVhbnMgPSByZXF1aXJlKCcuL3RvQmVBcnJheU9mQm9vbGVhbnMnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvSGF2ZUFycmF5T2ZCb29sZWFucyhrZXksIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU9iamVjdChhY3R1YWwpICYmIHRvQmVBcnJheU9mQm9vbGVhbnMoYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZUFycmF5T2ZOdW1iZXJzID0gcmVxdWlyZSgnLi90b0JlQXJyYXlPZk51bWJlcnMnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvSGF2ZUFycmF5T2ZOdW1iZXJzKGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZUFycmF5T2ZOdW1iZXJzKGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xudmFyIHRvQmVBcnJheU9mT2JqZWN0cyA9IHJlcXVpcmUoJy4vdG9CZUFycmF5T2ZPYmplY3RzJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVBcnJheU9mT2JqZWN0cyhrZXksIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU9iamVjdChhY3R1YWwpICYmIHRvQmVBcnJheU9mT2JqZWN0cyhhY3R1YWxba2V5XSk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVPYmplY3QgPSByZXF1aXJlKCcuL3RvQmVPYmplY3QnKTtcbnZhciB0b0JlQXJyYXlPZlNpemUgPSByZXF1aXJlKCcuL3RvQmVBcnJheU9mU2l6ZScpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9IYXZlQXJyYXlPZlNpemUoa2V5LCBzaXplLCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVPYmplY3QoYWN0dWFsKSAmJiB0b0JlQXJyYXlPZlNpemUoc2l6ZSwgYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZUFycmF5T2ZTdHJpbmdzID0gcmVxdWlyZSgnLi90b0JlQXJyYXlPZlN0cmluZ3MnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvSGF2ZUFycmF5T2ZTdHJpbmdzKGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZUFycmF5T2ZTdHJpbmdzKGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xudmFyIHRvQmVCb29sZWFuID0gcmVxdWlyZSgnLi90b0JlQm9vbGVhbicpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9IYXZlQm9vbGVhbihrZXksIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU9iamVjdChhY3R1YWwpICYmIHRvQmVCb29sZWFuKGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xudmFyIHRvQmVDYWxjdWxhYmxlID0gcmVxdWlyZSgnLi90b0JlQ2FsY3VsYWJsZScpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9IYXZlQ2FsY3VsYWJsZShrZXksIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU9iamVjdChhY3R1YWwpICYmIHRvQmVDYWxjdWxhYmxlKGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xudmFyIHRvQmVEYXRlID0gcmVxdWlyZSgnLi90b0JlRGF0ZScpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9IYXZlRGF0ZShrZXksIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU9iamVjdChhY3R1YWwpICYmIHRvQmVEYXRlKGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xudmFyIHRvQmVBZnRlciA9IHJlcXVpcmUoJy4vdG9CZUFmdGVyJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVEYXRlQWZ0ZXIoa2V5LCBkYXRlLCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVPYmplY3QoYWN0dWFsKSAmJiB0b0JlQWZ0ZXIoZGF0ZSwgYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZUJlZm9yZSA9IHJlcXVpcmUoJy4vdG9CZUJlZm9yZScpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9IYXZlRGF0ZUJlZm9yZShrZXksIGRhdGUsIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU9iamVjdChhY3R1YWwpICYmIHRvQmVCZWZvcmUoZGF0ZSwgYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZUVtcHR5QXJyYXkgPSByZXF1aXJlKCcuL3RvQmVFbXB0eUFycmF5Jyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVFbXB0eUFycmF5KGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZUVtcHR5QXJyYXkoYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZUVtcHR5T2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlRW1wdHlPYmplY3QnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvSGF2ZUVtcHR5T2JqZWN0KGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZUVtcHR5T2JqZWN0KGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xudmFyIHRvQmVFbXB0eVN0cmluZyA9IHJlcXVpcmUoJy4vdG9CZUVtcHR5U3RyaW5nJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVFbXB0eVN0cmluZyhrZXksIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU9iamVjdChhY3R1YWwpICYmIHRvQmVFbXB0eVN0cmluZyhhY3R1YWxba2V5XSk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVPYmplY3QgPSByZXF1aXJlKCcuL3RvQmVPYmplY3QnKTtcbnZhciB0b0JlRXZlbk51bWJlciA9IHJlcXVpcmUoJy4vdG9CZUV2ZW5OdW1iZXInKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvSGF2ZUV2ZW5OdW1iZXIoa2V5LCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVPYmplY3QoYWN0dWFsKSAmJiB0b0JlRXZlbk51bWJlcihhY3R1YWxba2V5XSk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVPYmplY3QgPSByZXF1aXJlKCcuL3RvQmVPYmplY3QnKTtcbnZhciB0b0JlRmFsc2UgPSByZXF1aXJlKCcuL3RvQmVGYWxzZScpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9IYXZlRmFsc2Uoa2V5LCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVPYmplY3QoYWN0dWFsKSAmJiB0b0JlRmFsc2UoYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZUh0bWxTdHJpbmcgPSByZXF1aXJlKCcuL3RvQmVIdG1sU3RyaW5nJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVIdG1sU3RyaW5nKGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZUh0bWxTdHJpbmcoYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZUlzbzg2MDEgPSByZXF1aXJlKCcuL3RvQmVJc284NjAxJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSB0b0hhdmVJc284NjAxO1xuXG5mdW5jdGlvbiB0b0hhdmVJc284NjAxKGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZUlzbzg2MDEoYWN0dWFsW2tleV0pO1xufVxuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVPYmplY3QgPSByZXF1aXJlKCcuL3RvQmVPYmplY3QnKTtcbnZhciB0b0JlSnNvblN0cmluZyA9IHJlcXVpcmUoJy4vdG9CZUpzb25TdHJpbmcnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvSGF2ZUpzb25TdHJpbmcoa2V5LCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVPYmplY3QoYWN0dWFsKSAmJiB0b0JlSnNvblN0cmluZyhhY3R1YWxba2V5XSk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVPYmplY3QgPSByZXF1aXJlKCcuL3RvQmVPYmplY3QnKTtcbnZhciB0b0JlU3RyaW5nID0gcmVxdWlyZSgnLi90b0JlU3RyaW5nJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVNZW1iZXIoa2V5LCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVTdHJpbmcoa2V5KSAmJiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYga2V5IGluIGFjdHVhbDtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xudmFyIHRvQmVGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdG9CZUZ1bmN0aW9uJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVNZXRob2Qoa2V5LCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVPYmplY3QoYWN0dWFsKSAmJiB0b0JlRnVuY3Rpb24oYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZU5vbkVtcHR5QXJyYXkgPSByZXF1aXJlKCcuL3RvQmVOb25FbXB0eUFycmF5Jyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVOb25FbXB0eUFycmF5KGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZU5vbkVtcHR5QXJyYXkoYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZU5vbkVtcHR5T2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlTm9uRW1wdHlPYmplY3QnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvSGF2ZU5vbkVtcHR5T2JqZWN0KGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZU5vbkVtcHR5T2JqZWN0KGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xudmFyIHRvQmVOb25FbXB0eVN0cmluZyA9IHJlcXVpcmUoJy4vdG9CZU5vbkVtcHR5U3RyaW5nJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVOb25FbXB0eVN0cmluZyhrZXksIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU9iamVjdChhY3R1YWwpICYmIHRvQmVOb25FbXB0eVN0cmluZyhhY3R1YWxba2V5XSk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVPYmplY3QgPSByZXF1aXJlKCcuL3RvQmVPYmplY3QnKTtcbnZhciB0b0JlTnVtYmVyID0gcmVxdWlyZSgnLi90b0JlTnVtYmVyJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVOdW1iZXIoa2V5LCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVPYmplY3QoYWN0dWFsKSAmJiB0b0JlTnVtYmVyKGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xudmFyIHRvQmVXaXRoaW5SYW5nZSA9IHJlcXVpcmUoJy4vdG9CZVdpdGhpblJhbmdlJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVOdW1iZXJXaXRoaW5SYW5nZShrZXksIGZsb29yLCBjZWlsaW5nLCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVPYmplY3QoYWN0dWFsKSAmJiB0b0JlV2l0aGluUmFuZ2UoZmxvb3IsIGNlaWxpbmcsIGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xuXG4vLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9IYXZlT2JqZWN0KGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZU9iamVjdChhY3R1YWxba2V5XSk7XG59O1xuIiwidmFyIHRvQmVPYmplY3QgPSByZXF1aXJlKCcuL3RvQmVPYmplY3QnKTtcbnZhciB0b0JlT2RkTnVtYmVyID0gcmVxdWlyZSgnLi90b0JlT2RkTnVtYmVyJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVPZGROdW1iZXIoa2V5LCBhY3R1YWwpIHtcbiAgcmV0dXJuIHRvQmVPYmplY3QoYWN0dWFsKSAmJiB0b0JlT2RkTnVtYmVyKGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU9iamVjdCA9IHJlcXVpcmUoJy4vdG9CZU9iamVjdCcpO1xudmFyIHRvQmVTdHJpbmcgPSByZXF1aXJlKCcuL3RvQmVTdHJpbmcnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvSGF2ZVN0cmluZyhrZXksIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU9iamVjdChhY3R1YWwpICYmIHRvQmVTdHJpbmcoYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZUxvbmdlclRoYW4gPSByZXF1aXJlKCcuL3RvQmVMb25nZXJUaGFuJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVTdHJpbmdMb25nZXJUaGFuKGtleSwgb3RoZXIsIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU9iamVjdChhY3R1YWwpICYmIHRvQmVMb25nZXJUaGFuKG90aGVyLCBhY3R1YWxba2V5XSk7XG59O1xuIiwiLy8gbW9kdWxlc1xudmFyIHRvQmVPYmplY3QgPSByZXF1aXJlKCcuL3RvQmVPYmplY3QnKTtcbnZhciB0b0JlU2FtZUxlbmd0aEFzID0gcmVxdWlyZSgnLi90b0JlU2FtZUxlbmd0aEFzJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVTdHJpbmdTYW1lTGVuZ3RoQXMoa2V5LCBvdGhlciwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZVNhbWVMZW5ndGhBcyhvdGhlciwgYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZVNob3J0ZXJUaGFuID0gcmVxdWlyZSgnLi90b0JlU2hvcnRlclRoYW4nKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvSGF2ZVN0cmluZ1Nob3J0ZXJUaGFuKGtleSwgb3RoZXIsIGFjdHVhbCkge1xuICByZXR1cm4gdG9CZU9iamVjdChhY3R1YWwpICYmIHRvQmVTaG9ydGVyVGhhbihvdGhlciwgYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZVRydWUgPSByZXF1aXJlKCcuL3RvQmVUcnVlJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVUcnVlKGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZVRydWUoYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZVdoaXRlc3BhY2UgPSByZXF1aXJlKCcuL3RvQmVXaGl0ZXNwYWNlJyk7XG5cbi8vIHB1YmxpY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0hhdmVXaGl0ZXNwYWNlU3RyaW5nKGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZVdoaXRlc3BhY2UoYWN0dWFsW2tleV0pO1xufTtcbiIsIi8vIG1vZHVsZXNcbnZhciB0b0JlT2JqZWN0ID0gcmVxdWlyZSgnLi90b0JlT2JqZWN0Jyk7XG52YXIgdG9CZVdob2xlTnVtYmVyID0gcmVxdWlyZSgnLi90b0JlV2hvbGVOdW1iZXInKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvSGF2ZVdob2xlTnVtYmVyKGtleSwgYWN0dWFsKSB7XG4gIHJldHVybiB0b0JlT2JqZWN0KGFjdHVhbCkgJiYgdG9CZVdob2xlTnVtYmVyKGFjdHVhbFtrZXldKTtcbn07XG4iLCIvLyBtb2R1bGVzXG52YXIgdG9CZU5vbkVtcHR5U3RyaW5nID0gcmVxdWlyZSgnLi90b0JlTm9uRW1wdHlTdHJpbmcnKTtcblxuLy8gcHVibGljXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvU3RhcnRXaXRoKHN1YlN0cmluZywgYWN0dWFsKSB7XG4gIGlmICghdG9CZU5vbkVtcHR5U3RyaW5nKGFjdHVhbCkgfHwgIXRvQmVOb25FbXB0eVN0cmluZyhzdWJTdHJpbmcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBhY3R1YWwuc2xpY2UoMCwgc3ViU3RyaW5nLmxlbmd0aCkgPT09IHN1YlN0cmluZztcbn07XG4iLCIvLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9UaHJvd0FueUVycm9yKGFjdHVhbCkge1xuICB0cnkge1xuICAgIGFjdHVhbCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIvLyBwdWJsaWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9UaHJvd0Vycm9yT2ZUeXBlKHR5cGUsIGFjdHVhbCkge1xuICB0cnkge1xuICAgIGFjdHVhbCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGVyci5uYW1lID09PSB0eXBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhZGFwdGVycyA9IHR5cGVvZiBqYXNtaW5lLmFkZE1hdGNoZXJzID09PSAnZnVuY3Rpb24nID9cbiAgICByZXF1aXJlKCcuL2phc21pbmUtdjInKSA6XG4gICAgcmVxdWlyZSgnLi9qYXNtaW5lLXYxJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFkZDogYWRkTWF0Y2hlcnNcbn07XG5cbmZ1bmN0aW9uIGFkZE1hdGNoZXJzKG1hdGNoZXJzKSB7XG4gICAgZm9yICh2YXIgbWF0Y2hlck5hbWUgaW4gbWF0Y2hlcnMpIHtcbiAgICAgICAgYWRkTWF0Y2hlcihtYXRjaGVyTmFtZSwgbWF0Y2hlcnNbbWF0Y2hlck5hbWVdKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZE1hdGNoZXIobmFtZSwgbWF0Y2hlcikge1xuICAgIHZhciBhZGFwdGVyID0gYWRhcHRlcnNbbWF0Y2hlci5sZW5ndGhdO1xuICAgIHJldHVybiBhZGFwdGVyKG5hbWUsIG1hdGNoZXIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAxOiBjcmVhdGVGYWN0b3J5KGZvckFjdHVhbCksXG4gICAgMjogY3JlYXRlRmFjdG9yeShmb3JBY3R1YWxBbmRFeHBlY3RlZCksXG4gICAgMzogY3JlYXRlRmFjdG9yeShmb3JBY3R1YWxBbmRUd29FeHBlY3RlZCksXG4gICAgNDogY3JlYXRlRmFjdG9yeShmb3JLZXlBbmRBY3R1YWxBbmRUd29FeHBlY3RlZClcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnkoYWRhcHRlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiBqYXNtaW5lVjFNYXRjaGVyRmFjdG9yeShuYW1lLCBtYXRjaGVyKSB7XG4gICAgICAgIHZhciBtYXRjaGVyQnlOYW1lID0gbmV3IEphc21pbmVWMU1hdGNoZXIobmFtZSwgYWRhcHRlciwgbWF0Y2hlcik7XG4gICAgICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE1hdGNoZXJzKG1hdGNoZXJCeU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXJCeU5hbWU7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gSmFzbWluZVYxTWF0Y2hlcihuYW1lLCBhZGFwdGVyLCBtYXRjaGVyKSB7XG4gICAgdGhpc1tuYW1lXSA9IGFkYXB0ZXIobmFtZSwgbWF0Y2hlcik7XG59XG5cbmZ1bmN0aW9uIGZvckFjdHVhbChuYW1lLCBtYXRjaGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9wdGlvbmFsTWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlcih0aGlzLmFjdHVhbCwgb3B0aW9uYWxNZXNzYWdlKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBmb3JBY3R1YWxBbmRFeHBlY3RlZChuYW1lLCBtYXRjaGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGV4cGVjdGVkLCBvcHRpb25hbE1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXIoZXhwZWN0ZWQsIHRoaXMuYWN0dWFsLCBvcHRpb25hbE1lc3NhZ2UpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGZvckFjdHVhbEFuZFR3b0V4cGVjdGVkKG5hbWUsIG1hdGNoZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXhwZWN0ZWQxLCBleHBlY3RlZDIsIG9wdGlvbmFsTWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlcihleHBlY3RlZDEsIGV4cGVjdGVkMiwgdGhpcy5hY3R1YWwsIG9wdGlvbmFsTWVzc2FnZSk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZm9yS2V5QW5kQWN0dWFsQW5kVHdvRXhwZWN0ZWQobmFtZSwgbWF0Y2hlcikge1xuICAgIHJldHVybiBmdW5jdGlvbihrZXksIGV4cGVjdGVkMSwgZXhwZWN0ZWQyLCBvcHRpb25hbE1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXIoa2V5LCBleHBlY3RlZDEsIGV4cGVjdGVkMiwgdGhpcy5hY3R1YWwsIG9wdGlvbmFsTWVzc2FnZSk7XG4gICAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1hdGNoZXJGYWN0b3J5ID0gcmVxdWlyZSgnLi9tYXRjaGVyRmFjdG9yeScpO1xudmFyIG1lbWJlck1hdGNoZXJGYWN0b3J5ID0gcmVxdWlyZSgnLi9tZW1iZXJNYXRjaGVyRmFjdG9yeScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAxOiBjcmVhdGVGYWN0b3J5KGdldEFkYXB0ZXIoMSkpLFxuICAgIDI6IGNyZWF0ZUZhY3RvcnkoZ2V0QWRhcHRlcigyKSksXG4gICAgMzogY3JlYXRlRmFjdG9yeShnZXRBZGFwdGVyKDMpKSxcbiAgICA0OiBjcmVhdGVGYWN0b3J5KGdldEFkYXB0ZXIoNCkpXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5KGFkYXB0ZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gamFzbWluZVYyTWF0Y2hlckZhY3RvcnkobmFtZSwgbWF0Y2hlcikge1xuICAgICAgICB2YXIgbWF0Y2hlckJ5TmFtZSA9IG5ldyBKYXNtaW5lVjJNYXRjaGVyKG5hbWUsIGFkYXB0ZXIsIG1hdGNoZXIpO1xuICAgICAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgamFzbWluZS5hZGRNYXRjaGVycyhtYXRjaGVyQnlOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYXRjaGVyQnlOYW1lO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIEphc21pbmVWMk1hdGNoZXIobmFtZSwgYWRhcHRlciwgbWF0Y2hlcikge1xuICAgIHRoaXNbbmFtZV0gPSBhZGFwdGVyKG5hbWUsIG1hdGNoZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRBZGFwdGVyKGFyZ3NDb3VudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBhZGFwdGVyKG5hbWUsIG1hdGNoZXIpIHtcbiAgICAgICAgdmFyIGZhY3RvcnkgPSBpc01lbWJlck1hdGNoZXIobmFtZSkgPyBtZW1iZXJNYXRjaGVyRmFjdG9yeSA6IG1hdGNoZXJGYWN0b3J5O1xuICAgICAgICByZXR1cm4gZmFjdG9yeVthcmdzQ291bnRdKG5hbWUsIG1hdGNoZXIpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGlzTWVtYmVyTWF0Y2hlcihuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUuc2VhcmNoKC9edG9IYXZlLykgIT09IC0xO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAxOiBmb3JBY3R1YWwsXG4gICAgMjogZm9yQWN0dWFsQW5kRXhwZWN0ZWQsXG4gICAgMzogZm9yQWN0dWFsQW5kVHdvRXhwZWN0ZWRcbn07XG5cbmZ1bmN0aW9uIGZvckFjdHVhbChuYW1lLCBtYXRjaGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHV0aWwpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbXBhcmU6IGZ1bmN0aW9uKGFjdHVhbCwgb3B0aW9uYWxNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhc3NlcyA9IG1hdGNoZXIoYWN0dWFsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBwYXNzOiBwYXNzZXMsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxNZXNzYWdlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuYnVpbGRGYWlsdXJlTWVzc2FnZShuYW1lLCBwYXNzZXMsIGFjdHVhbCwgb3B0aW9uYWxNZXNzYWdlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmJ1aWxkRmFpbHVyZU1lc3NhZ2UobmFtZSwgcGFzc2VzLCBhY3R1YWwpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGZvckFjdHVhbEFuZEV4cGVjdGVkKG5hbWUsIG1hdGNoZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odXRpbCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oYWN0dWFsLCBleHBlY3RlZCwgb3B0aW9uYWxNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhc3NlcyA9IG1hdGNoZXIoZXhwZWN0ZWQsIGFjdHVhbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFzczogcGFzc2VzLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAoXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsTWVzc2FnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmJ1aWxkRmFpbHVyZU1lc3NhZ2UobmFtZSwgcGFzc2VzLCBhY3R1YWwsIGV4cGVjdGVkLCBvcHRpb25hbE1lc3NhZ2UpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuYnVpbGRGYWlsdXJlTWVzc2FnZShuYW1lLCBwYXNzZXMsIGFjdHVhbCwgZXhwZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGZvckFjdHVhbEFuZFR3b0V4cGVjdGVkKG5hbWUsIG1hdGNoZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odXRpbCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oYWN0dWFsLCBleHBlY3RlZDEsIGV4cGVjdGVkMiwgb3B0aW9uYWxNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhc3NlcyA9IG1hdGNoZXIoZXhwZWN0ZWQxLCBleHBlY3RlZDIsIGFjdHVhbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFzczogcGFzc2VzLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAoXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsTWVzc2FnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmJ1aWxkRmFpbHVyZU1lc3NhZ2UobmFtZSwgcGFzc2VzLCBhY3R1YWwsIGV4cGVjdGVkMSwgZXhwZWN0ZWQyLCBvcHRpb25hbE1lc3NhZ2UpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuYnVpbGRGYWlsdXJlTWVzc2FnZShuYW1lLCBwYXNzZXMsIGFjdHVhbCwgZXhwZWN0ZWQxLCBleHBlY3RlZDIpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIDI6IGZvcktleUFuZEFjdHVhbCxcbiAgICAzOiBmb3JLZXlBbmRBY3R1YWxBbmRFeHBlY3RlZCxcbiAgICA0OiBmb3JLZXlBbmRBY3R1YWxBbmRUd29FeHBlY3RlZFxufTtcblxuZnVuY3Rpb24gZm9yS2V5QW5kQWN0dWFsKG5hbWUsIG1hdGNoZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odXRpbCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oYWN0dWFsLCBrZXksIG9wdGlvbmFsTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXNzZXMgPSBtYXRjaGVyKGtleSwgYWN0dWFsKTtcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IG5hbWUuc2VhcmNoKC9edG9IYXZlLykgIT09IC0xID8ga2V5IDogb3B0aW9uYWxNZXNzYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3M6IHBhc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmJ1aWxkRmFpbHVyZU1lc3NhZ2UobmFtZSwgcGFzc2VzLCBhY3R1YWwsIG1lc3NhZ2UpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuYnVpbGRGYWlsdXJlTWVzc2FnZShuYW1lLCBwYXNzZXMsIGFjdHVhbClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZm9yS2V5QW5kQWN0dWFsQW5kRXhwZWN0ZWQobmFtZSwgbWF0Y2hlcikge1xuICAgIHJldHVybiBmdW5jdGlvbih1dGlsKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb21wYXJlOiBmdW5jdGlvbihhY3R1YWwsIGtleSwgZXhwZWN0ZWQsIG9wdGlvbmFsTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXNzZXMgPSBtYXRjaGVyKGtleSwgZXhwZWN0ZWQsIGFjdHVhbCk7XG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAob3B0aW9uYWxNZXNzYWdlID9cbiAgICAgICAgICAgICAgICAgICAgdXRpbC5idWlsZEZhaWx1cmVNZXNzYWdlKG5hbWUsIHBhc3NlcywgYWN0dWFsLCBleHBlY3RlZCwgb3B0aW9uYWxNZXNzYWdlKSA6XG4gICAgICAgICAgICAgICAgICAgIHV0aWwuYnVpbGRGYWlsdXJlTWVzc2FnZShuYW1lLCBwYXNzZXMsIGFjdHVhbCwgZXhwZWN0ZWQpXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3M6IHBhc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZm9ybWF0RXJyb3JNZXNzYWdlKG5hbWUsIG1lc3NhZ2UsIGtleSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGZvcktleUFuZEFjdHVhbEFuZFR3b0V4cGVjdGVkKG5hbWUsIG1hdGNoZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odXRpbCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oYWN0dWFsLCBrZXksIGV4cGVjdGVkMSwgZXhwZWN0ZWQyLCBvcHRpb25hbE1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFzc2VzID0gbWF0Y2hlcihrZXksIGV4cGVjdGVkMSwgZXhwZWN0ZWQyLCBhY3R1YWwpO1xuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gKG9wdGlvbmFsTWVzc2FnZSA/XG4gICAgICAgICAgICAgICAgICAgIHV0aWwuYnVpbGRGYWlsdXJlTWVzc2FnZShuYW1lLCBwYXNzZXMsIGFjdHVhbCwgZXhwZWN0ZWQxLCBleHBlY3RlZDIsIG9wdGlvbmFsTWVzc2FnZSkgOlxuICAgICAgICAgICAgICAgICAgICB1dGlsLmJ1aWxkRmFpbHVyZU1lc3NhZ2UobmFtZSwgcGFzc2VzLCBhY3R1YWwsIGV4cGVjdGVkMSwgZXhwZWN0ZWQyKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBwYXNzOiBwYXNzZXMsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZvcm1hdEVycm9yTWVzc2FnZShuYW1lLCBtZXNzYWdlLCBrZXkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvck1lc3NhZ2UobmFtZSwgbWVzc2FnZSwga2V5KSB7XG4gICAgaWYgKG5hbWUuc2VhcmNoKC9edG9IYXZlLykgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgICAgICAgICAucmVwbGFjZSgnRXhwZWN0ZWQnLCAnRXhwZWN0ZWQgbWVtYmVyIFwiJyArIGtleSArICdcIiBvZicpXG4gICAgICAgICAgICAucmVwbGFjZSgnIHRvIGhhdmUgJywgJyB0byBiZSAnKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iLCIiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEJveE9mUXVlc3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vc3JjL0JveE9mUXVlc3Rpb25zJyk7XG52YXIgTFdkYiA9IHJlcXVpcmUoJy4uLy4uL3NyYy9MV2RiJyk7XG52YXIgd29yZGxpc3QgPSByZXF1aXJlKCcuLi8uLi9kYXRhL3dvcmRsaXN0LWVuLWdlLmpzJyk7IFxuXG52YXIgTFc7XG5cbnhkZXNjcmliZShcIkJveE9mUXVlc3Rpb25zXCIsIGZ1bmN0aW9uKCkge1xuICAgIFxuICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgXHRMVyA9IGZ1bmN0aW9uKCl7XG5cblx0XHR2YXIgZGIgPSBuZXcgTFdkYignbGVhcm5Xb3JkcycpO1xuXG5cdFx0ZGIubG9hZFdvcmRzKHdvcmRsaXN0KTtcblxuXHRcdHZhciBib3ggPSBuZXcgQm94T2ZRdWVzdGlvbnMoZGIpO1xuXG5cdFx0cmV0dXJuIGJveFxuICAgICAgICB9KCk7XG4gICAgICAgIFxuICB9KTtcblxuXG4gIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gY3JlYXRlIGEgQm94T2ZRdWVzdGlvbnMgb2JqZWN0XCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgZXhwZWN0KExXKS5ub3QudG9CZShudWxsKTtcbiAgICBleHBlY3QoTFcpLm5vdC50b0JlKHVuZGVmaW5lZCk7XG5cbiAgICBleHBlY3QoTFcpLnRvQmVPYmplY3QoKTtcblxuICAgIGV4cGVjdChMVy5kYi5kYk5hbWUpLnRvQmVTdHJpbmcoXCJsZWFybldvcmRzXCIpO1xuICAgIGV4cGVjdChMVy5kYi5udW1iZXJPZldvcmRzKCkpLnRvQmVOdW1iZXIoMTApO1xuXG4gIH0pO1xuXG5cblxuXG4gIHhpdChcInNob3VsZCBiZSBhYmxlIHRvIGxvYWQgYWRkaXRpb25hbCBxdWVzdGlvbnNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgcHJldmlvdXNOdW1iZXJPZldvcmRzID0gTFcuZGIubnVtYmVyT2ZXb3JkcygpO1xuICBcbiAgICBMVy5kYi5sb2FkV29yZHMod29yZGxpc3QpO1xuXG4gICAgZXhwZWN0KExXLmRiLm51bWJlck9mV29yZHMoKSkudG9CZShwcmV2aW91c051bWJlck9mV29yZHMgKyB3b3JkbGlzdC5sZW5ndGgpO1xuXG4gIFxuICB9KTtcblxuXG4gIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gaGF2ZSB0aGUgbnVtYmVyIG9mIHN0ZXBzIHNldFwiLCBmdW5jdGlvbigpIHtcblxuICAgIGV4cGVjdChMVy5ub09mU3RlcHMpLnRvQmUoMyk7IC8vIHRoZSBkZWZhdWx0XG5cbiAgICBMVy5zZXROdW1iZXJPZlN0ZXBzKDcpO1xuXG4gICAgZXhwZWN0KExXLm5vT2ZTdGVwcykudG9CZSg3KTsgXG5cbiAgfSk7XG5cblxuXG4gIHhpdChcInNob3VsZCBiZSBhYmxlIHRvIHByb2Nlc3MgY29uZmlndXJhdGlvbiBpbmZvcm1hdGlvblwiLCBmdW5jdGlvbihhQ29uZmlnT2JqKSB7XG4gICAgLy8gdGhlIGNvbmZpZ3VyYXRpb24gXG4gICAgLy8gYUNvbmZpZ09iaiA9IHtcImFsZ29yaXRobVwiOiBcIkxlaXRuZXJcIiwgXCJub09mU3RlcHNcIjogNX07XG4gICAgTFcuY29uZmlnKGFDb25maWdPYmopOyAgICAgXG5cbiAgICAvLyBleHBlY3QgY29kZSBoZXJlXG4gICAgZmFpbChcIkltcGxlbWVudCBtZSFcIik7XG4gIH0pO1xuXG5cblxuICB4aXQoXCJzaG91bGQgYmUgYWJsZSB0byBjaG9vc2UgYSBuZXh0IHF1ZXN0aW9uXCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBxIDtcblxuICAgIHEgPSBMVy5jdXJyUXVlc3Rpb24oKTtcblxuICAgIGV4cGVjdChxKS5ub3QudG9CZShudWxsKTtcbiAgICBleHBlY3QocSkubm90LnRvQmUodW5kZWZpbmVkKTtcbiAgICBleHBlY3QocSkudG9CZU9iamVjdCgpOyAgICBcblxuICAgIGV4cGVjdChxKS50b0hhdmVTdHJpbmcoXCJkYXRlXCIpO1xuICBcbiAgICAvLyBhZGQgZXhwZWN0IGNvZGUgaGVyZVxuICAgIC8vIGRhdGUgc2hvdWxkIGJlID49IHRvZGF5XG5cbiAgfSk7XG5cblxuXG4gIHhpdChcInNob3VsZCBiZSBhYmxlIHRvIGNob29zZSBhIG5leHQgcXVlc3Rpb24sIGdpdmUgb3B0aW9ucyBmb3IgYW5zd2VycyBhbmQgcHJvY2VzcyB0aGUgYW5zd2VyXCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBxLCBhLCBvcHQsIGFDaG9pY2U7XG5cbiAgICBxID0gTFcuY3VyclF1ZXN0aW9uKCk7XG4gICAgYSA9IExXLmN1cnJBbnN3ZXIoKTtcbiAgICBvcHQgPSBMVy5jdXJyQW5zd2VyT3B0aW9ucygpOyAvLyBpbmNsdWRlcyB0aGUgY29ycmVjdCBhbnN3ZXJcbiAgIFxuICAgIExXLnByb2Nlc3NBbnN3ZXIoYUNob2ljZSk7ICAvLyBhZnRlciB0aGlzIHRoZXJlIHdpbGwgYmUgYSBuZXcgY3VycmVudCBxdWVzdGlvbi5cblxuICAgIC8vIGFkZCBleHBlY3QgY29kZSBoZXJlXG4gICAgZmFpbChcIkltcGxlbWVudCBtZSFcIik7XG5cbiAgfSk7XG5cblxuICB4aXQoXCJzaG91bGQgYmUgYWJsZSB0byBnaXZlIHN0YXR1cyBpbmZvcm1hdGlvblwiLCBmdW5jdGlvbigpIHtcbiAgICAvLyB0aGUgY29uZmlndXJhdGlvbiBcbiAgXG4gICAgdmFyIHIgPSBMVy5zdGF0dXMoKTtcbiAgIFxuICAgIC8vIGFkZCBleHBlY3QgY29kZSBoZXJlICAgIFxuICAgIGZhaWwoXCJJbXBsZW1lbnQgbWUhXCIpO1xuXG4gIH0pO1xuXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgTFdkYiA9IHJlcXVpcmUoJy4uLy4uL3NyYy9MV2RiJyk7XG52YXIgd29yZExpc3QgPSByZXF1aXJlKCcuLi8uLi9kYXRhL3dvcmRsaXN0LWVuLWdlLmpzJyk7IFxuXG5pZiAodHlwZW9mIGxvY2FsU3RvcmFnZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBsb2NhbFN0b3JhZ2UgPT09IG51bGwpIHtcbiAgdmFyIExvY2FsU3RvcmFnZSA9IHJlcXVpcmUoJ25vZGUtbG9jYWxzdG9yYWdlJykuTG9jYWxTdG9yYWdlO1xuICBnbG9iYWwubG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgnLi9zY3JhdGNoJyk7XG59XG5cbmRlc2NyaWJlKFwiRGF0YWJhc2UgTFdkYlwiLCBmdW5jdGlvbigpIHtcblxuICBiZWZvcmVBbGwoZnVuY3Rpb24oKXtcbiAgICB0aGlzLndvcmRMaXN0ID0gd29yZExpc3Q7XG4gIH0pO1xuXG4gIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gY2xlYXIgcHJvcGVydGllcyB0aGF0IGRpZG4ndCBleGlzdCBpbiBvcmlnaW5hbCB3b3JkTGlzdFxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLndvcmRMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBhV29yZCA9IHRoaXMud29yZExpc3RbaV07XG4gICAgICBmb3IodmFyIGtleSBpbiBhV29yZCl7XG4gICAgICAgIGlmKGtleSAhPSBcIndvcmRcIiAmJiBrZXkgIT0gXCJ0cmFuc2xhdGVcIiAmJiBrZXkgIT0gXCJfaWRcIil7XG4gICAgICAgICAgZGVsZXRlIGFXb3JkW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB0aGlzLmRiID0gbmV3IExXZGIoXCJMZWFybldvcmRzXCIpO1xuICB9KTtcblxuXG4gIGFmdGVyRWFjaChmdW5jdGlvbigpe1xuICAgIHRoaXMuZGIuZGVzdHJveSgpO1xuICB9KTtcblxuXG4gIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gY3JlYXRlIGEgREJcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICBleHBlY3QodGhpcy5kYikudG9CZU9iamVjdCgpO1xuICAgIFxuICAgIGV4cGVjdCh0aGlzLmRiKS50b0hhdmVTdHJpbmcoXCJkYk5hbWVcIik7XG4gICAgZXhwZWN0KHRoaXMuZGIuZGJOYW1lKS50b0JlU3RyaW5nKFwiTGVhcm5Xb3Jkc1wiKTtcblxuICAgIGV4cGVjdCh0aGlzLmRiKS50b0hhdmVBcnJheShcIl9rZXlzT2ZBbGxXb3Jkc1wiKTtcblxuICB9KTtcblxuXG5cbiAgaXQoXCJzaG91bGQgYmUgYWJsZSB0byBhbnN3ZXIgaWYgcGVyc2lzdGVudCBzdG9yYWdlIGlzIGF2YWlsYWJsZVwiLCBmdW5jdGlvbigpIHtcblxuICAgIGV4cGVjdCh0aGlzLmRiKS50b0hhdmVNZXRob2QoXCJwZXJzaXN0ZW50U3RvcmFnZU9LXCIpO1xuICAgIGV4cGVjdCh0aGlzLmRiLnBlcnNpc3RlbnRTdG9yYWdlT0soKSkudG9CZVRydWUoKTtcblxuICB9KTtcblxuXG4gIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gcmVpbml0aWFsaXplIHRoZSBwZXJzaXN0ZW50IHN0b3JhZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgdGhpcy5kYi5yZW1vdmVXb3JkcygpO1xuICAgIGV4cGVjdCh0aGlzLmRiKS50b0hhdmVNZXRob2QoXCJudW1iZXJPZldvcmRzXCIpO1xuICAgIGV4cGVjdCh0aGlzLmRiLm51bWJlck9mV29yZHMoKSkudG9CZSgwKTtcblxuICB9KTtcblxuXG5cbiAgZGVzY3JpYmUoXCJkZWFscyB3aXRoIHdvcmRzO1wiLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gYW5zd2VyIHRoZSBudW1iZXIgb2Ygd29yZHNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBleHBlY3QodGhpcy5kYi5udW1iZXJPZldvcmRzKCkpLnRvQmVOdW1iZXIoMCk7XG4gICAgfSk7XG5cblxuICAgIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gc3RvcmUgYSBuZXcgd29yZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vIEluc2VydHMgYSBuZXcgZG9jdW1lbnQsIG9yIG5ldyB2ZXJzaW9uIG9mIGFuIGV4aXN0aW5nIGRvY3VtZW50XG4gICAgICBleHBlY3QodGhpcy5kYi5udW1iZXJPZldvcmRzKCkpLnRvQmVOdW1iZXIoMCk7XG4gICAgICB2YXIgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLndvcmRMaXN0Lmxlbmd0aCkpO1xuICAgICAgdmFyIGFXb3JkID0gdGhpcy53b3JkTGlzdFtpXTtcbiAgICAgIGFXb3JkLl9pZCA9IChpKzEpO1xuICAgICAgdGhpcy5kYi5wdXRXb3JkKGFXb3JkKTtcbiAgICAgIGV4cGVjdCh0aGlzLmRiLm51bWJlck9mV29yZHMoKSkudG9CZU51bWJlcigxKTtcbiAgICB9KTtcblxuXG4gICAgaXQoXCJzaG91bGQgYmUgYWJsZSB0byBnZXQgYSB3b3JkXCIsIGZ1bmN0aW9uKCkgeyAgXG5cbiAgICAgIHZhciBuZXdXb3JkID0ge1xuICAgICAgICBcIl9pZFwiOiAxLFxuICAgICAgICBcIndvcmRcIjogXCJtZWxvblwiLFxuICAgICAgICBcInRyYW5zbGF0ZVwiOiBcImRpZSBNZWxvbmVcIlxuICAgICAgfTtcblxuICAgICAgZXhwZWN0KHRoaXMuZGIubnVtYmVyT2ZXb3JkcygpKS50b0JlTnVtYmVyKDApO1xuICAgICAgdGhpcy5kYi5wdXRXb3JkKG5ld1dvcmQpO1xuICAgICAgZXhwZWN0KHRoaXMuZGIubnVtYmVyT2ZXb3JkcygpKS50b0JlTnVtYmVyKDEpO1xuICAgICAgdmFyIHIgPSB0aGlzLmRiLmdldFdvcmQoMSk7XG4gICAgICBleHBlY3QocikudG9CZU9iamVjdCgpO1xuXG4gICAgICBleHBlY3QocikudG9IYXZlTnVtYmVyKFwiX2lkXCIpO1xuICAgICAgZXhwZWN0KHIuX2lkKS50b0JlTnVtYmVyKDEpO1xuXG4gICAgICBleHBlY3QocikudG9IYXZlU3RyaW5nKFwid29yZFwiKTtcbiAgICAgIGV4cGVjdChyLndvcmQpLnRvQmVTdHJpbmcoXCJtZWxvblwiKTtcblxuICAgICAgZXhwZWN0KHIpLnRvSGF2ZVN0cmluZyhcInRyYW5zbGF0ZVwiKTtcbiAgICAgIGV4cGVjdChyLnRyYW5zbGF0ZSkudG9CZVN0cmluZyhcIm1lbG9uXCIpO1xuXG4gICAgICBleHBlY3QocikudG9IYXZlTnVtYmVyKFwic3RlcFwiKTtcbiAgICAgIGV4cGVjdChyLnN0ZXApLnRvQmVOdW1iZXIoMCk7XG5cbiAgICAgIGV4cGVjdChyKS50b0hhdmVOdW1iZXIoXCJkYXRlXCIpO1xuICAgICAgZXhwZWN0KHIuZGF0ZSkudG9CZU51bWJlcigwKTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcInNob3VsZCBiZSBhYmxlIHRvIHJlbW92ZSBhbGwgd29yZHNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAvLyBpbnNlcnQgZmlyc3QgbiB3b3JkcyBmcm9tIHdvcmRMaXN0XG4gICAgICB2YXIgbiA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLndvcmRMaXN0Lmxlbmd0aCkpO1xuICAgICAgdmFyIGFXb3JkO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG47IGkrKyl7XG4gICAgICAgIGFXb3JkID0gdGhpcy53b3JkTGlzdFtpXTtcbiAgICAgICAgYVdvcmQuX2lkID0gKGkrMSk7XG4gICAgICAgIHRoaXMuZGIucHV0V29yZChhV29yZCk7XG4gICAgICB9XG4gICAgICBleHBlY3QodGhpcy5kYi5udW1iZXJPZldvcmRzKCkpLnRvQmVOdW1iZXIobik7XG4gICAgICB0aGlzLmRiLnJlbW92ZVdvcmRzKCk7XG4gICAgICBleHBlY3QodGhpcy5kYi5udW1iZXJPZldvcmRzKCkpLnRvQmVOdW1iZXIoMCk7XG5cbiAgICB9KTtcblxuXG5cblxuXG4gICAgaXQoXCJzaG91bGQgYmUgYWJsZSB0byBhbnN3ZXIgYSBsaXN0IG9mIGFsbCBrZXlzIG9mIGFsbCB3b3Jkc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vIHRlc3Qgc2V0dXBcbiAgICAgIC8vIGluc2VydCBmaXJzdCBuIHdvcmRzIGZyb20gd29yZExpc3RcbiAgICAgIC8vIG4gaXMgYSByYW5kb20gbnVtYmVyIG9mIHdvcmRzXG5cbiAgICAgIHZhciBuID0gcGFyc2VJbnQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMud29yZExpc3QubGVuZ3RoKSk7XG5cbiAgICAgIHZhciBhV29yZDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuOyBpKyspe1xuICAgICAgICBhV29yZCA9IHRoaXMud29yZExpc3RbaV07XG4gICAgICAgIGFXb3JkLl9pZCA9IChpKzEpO1xuICAgICAgICB0aGlzLmRiLnB1dFdvcmQoYVdvcmQpO1xuICAgICAgfVxuXG5cbiAgICAgIC8vIHJ1blxuXG4gICAgICB2YXIgciA9IHRoaXMuZGIua2V5c09mQWxsV29yZHMoKTtcblxuXG4gICAgICAvLyBjaGVjayByZXN1bHRcbiAgICAgIGV4cGVjdChyKS50b0JlQXJyYXlPZlN0cmluZ3MoKTtcbiAgICAgIGV4cGVjdChyLmxlbmd0aCkudG9CZU51bWJlcih0aGlzLmRiLm51bWJlck9mV29yZHMoKSk7XG4gICAgICAgXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGV4cGVjdChyW2ldKS50b0JlU3RyaW5nKFwiTGVhcm5Xb3Jkcy13ZC1cIisoaSsxKSk7XG4gICAgICB9XG5cbiAgICB9KTtcblxuXG5cblxuXG5cblxuXG5cbiAgICBpdChcInNob3VsZCBiZSBhYmxlIHRvIGFuc3dlciBhIGxpc3Qgb2YgYWxsIHdvcmRzXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAvLyBzZXR1cFxuICAgICAgLy8gaW5zZXJ0IGZpcnN0IG4gd29yZHMgZnJvbSB3b3JkTGlzdFxuICAgICAgdmFyIG4gPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy53b3JkTGlzdC5sZW5ndGgpKTtcbiAgICAgIHZhciBhV29yZDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuOyBpKyspe1xuICAgICAgICBhV29yZCA9IHRoaXMud29yZExpc3RbaV07XG4gICAgICAgIGFXb3JkLl9pZCA9IChpKzEpO1xuICAgICAgICB0aGlzLmRiLnB1dFdvcmQoYVdvcmQpO1xuICAgICAgfVxuICAgICAgZXhwZWN0KHRoaXMuZGIubnVtYmVyT2ZXb3JkcygpKS50b0JlKG4pO1xuXG5cblxuICAgICAgLy8gcnVuXG5cbiAgICAgIHZhciByID0gdGhpcy5kYi5hbGxXb3JkcygpO1xuXG5cblxuICAgICAgLy8gY2hlY2tcblxuICAgICAgZXhwZWN0KHIpLnRvQmVBcnJheSgpO1xuICAgICAgZXhwZWN0KHIubGVuZ3RoKS50b0JlKHRoaXMuZGIubnVtYmVyT2ZXb3JkcygpKTtcbiAgICAgIGV4cGVjdChyLmxlbmd0aCkudG9CZShuKTtcblxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgdG1wID0gdGhpcy53b3JkTGlzdFtpXTtcbiAgICAgICAgdG1wLl9pZCA9IGkrMTtcbiAgICAgICAgXG4gICAgICAgIGV4cGVjdChyW2ldKS50b0hhdmVTdHJpbmcoXCJ3b3JkXCIpO1xuICAgICAgICBleHBlY3QodG1wKS50b0hhdmVTdHJpbmcoXCJ3b3JkXCIpO1xuICAgICAgICBleHBlY3QocltpXS53b3JkKS50b0JlU3RyaW5nKHRtcC53b3JkKTtcblxuICAgICAgICBleHBlY3QocltpXSkudG9IYXZlU3RyaW5nKFwidHJhbnNsYXRlXCIpO1xuICAgICAgICBleHBlY3QodG1wKS50b0hhdmVTdHJpbmcoXCJ0cmFuc2xhdGVcIik7XG4gICAgICAgIGV4cGVjdChyW2ldLnRyYW5zbGF0ZSkudG9CZVN0cmluZyh0bXAudHJhbnNsYXRlKTtcblxuICAgICAgICBleHBlY3QocltpXSkudG9IYXZlTnVtYmVyKFwiX2lkXCIpO1xuICAgICAgICBleHBlY3QodG1wKS50b0hhdmVOdW1iZXIoXCJfaWRcIik7XG4gICAgICAgIGV4cGVjdChyW2ldLl9pZCkudG9CZU51bWJlcih0bXAuX2lkKTtcblxuICAgICAgICBleHBlY3QocltpXSkudG9IYXZlTnVtYmVyKFwiZGF0ZVwiKTtcbiAgICAgICAgZXhwZWN0KHRtcCkudG9IYXZlTnVtYmVyKFwiZGF0ZVwiKTtcbiAgICAgICAgZXhwZWN0KHJbaV0uZGF0ZSkudG9CZU51bWJlcih0bXAuZGF0ZSk7XG5cbiAgICAgICAgZXhwZWN0KHJbaV0pLnRvSGF2ZU51bWJlcihcInN0ZXBcIik7XG4gICAgICAgIGV4cGVjdCh0bXApLnRvSGF2ZU51bWJlcihcInN0ZXBcIik7XG4gICAgICAgIGV4cGVjdChyW2ldLnN0ZXApLnRvQmVOdW1iZXIodG1wLnN0ZXApO1xuXG4gICAgICB9XG5cbiAgICB9KTtcblxuXG5cblxuXG5cbiAgICBpdChcInNob3VsZCBiZSBhYmxlIHRvIGltcG9ydCB3b3Jkc1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgLy8gc2V0dXBcbiAgICAgIHRoaXMuZGIucmVtb3ZlV29yZHMoKTtcbiAgICAgIGV4cGVjdCh0aGlzLmRiLm51bWJlck9mV29yZHMoKSkudG9CZSgwKTtcblxuICAgICAgZXhwZWN0KHRoaXMuZGIpLnRvSGF2ZU1ldGhvZChcImltcG9ydEZyb21cIik7XG4gICAgICB2YXIgdGhlV29yZExpc3QgPSB0aGlzLndvcmRMaXN0O1xuICAgICAgZXhwZWN0KHRoZVdvcmRMaXN0KS50b0JlQXJyYXlPZk9iamVjdHMoKTtcblxuXG4gICAgICAvLyBydW5cblxuICAgICAgdGhpcy5kYi5pbXBvcnRGcm9tKHRoZVdvcmRMaXN0KTtcblxuICAgICAgXG4gICAgICAvLyBjaGVja1xuXG4gICAgICB2YXIga2V5cyA9IHRoaXMuZGIua2V5c09mQWxsV29yZHMoKTsgXG4gICAgICBleHBlY3Qoa2V5cy5sZW5ndGgpLnRvQmUodGhlV29yZExpc3QubGVuZ3RoKTtcblxuICAgIH0pO1xuXG5cblxuXG4gICAgaXQoXCJzaG91bGQgYmUgYWJsZSB0byBtYWludGFpbiBhbiBpbmRleFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vIElzIHRoaXMgYSBkdXBsaWNhdGU/XG5cbiAgICAgIC8vIHNldHVwXG4gICAgICB0aGlzLmRiLnJlbW92ZVdvcmRzKCk7XG4gICAgICBleHBlY3QodGhpcy5kYi5udW1iZXJPZldvcmRzKCkpLnRvQmUoMCk7XG4gICAgICBcbiAgICAgIHRoaXMuZGIuaW1wb3J0RnJvbSh0aGlzLndvcmRMaXN0KTtcbiAgICAgIGV4cGVjdCh0aGlzLmRiLm51bWJlck9mV29yZHMoKSkudG9CZSh0aGlzLndvcmRMaXN0Lmxlbmd0aCk7XG5cblxuICAgICAgLy8gcnVuXG4gICAgICB2YXIga2V5cyA9IHRoaXMuZGIua2V5c09mQWxsV29yZHMoKTtcblxuXG4gICAgICAvLyBjaGVja1xuICAgICAgZXhwZWN0KGtleXMpLnRvQmVBcnJheSgpO1xuICAgICAgZXhwZWN0KGtleXMubGVuZ3RoKS50b0JlKHRoaXMud29yZExpc3QubGVuZ3RoKTtcbiAgICB9KTtcblxuXG4gIH0pO1xuXG5cblxuXG5cblxuICBkZXNjcmliZShcIkxXZGIgZGVhbHMgd2l0aCBzZXR0aW5nc1wiLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gYW5zd2VyIHNldHRpbmdzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNldHRpbmdzID0gdGhpcy5kYi5nZXRTZXR0aW5ncygpO1xuICAgICAgZXhwZWN0KHNldHRpbmdzKS5ub3QudG9CZShudWxsKTtcbiAgICAgIGV4cGVjdChzZXR0aW5ncykudG9CZU9iamVjdCgpO1xuICAgIH0pO1xuXG5cbiAgICBpdChcInNob3VsZCBiZSBhYmxlIHRvIHN0b3JlIHNldHRpbmdzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gdGVzdCBuZWVkcyBpbXByb3ZlbWVudFxuICAgICAgdmFyIHNldHRpbmdzID0gdGhpcy5kYi5nZXRTZXR0aW5ncygpO1xuICAgICAgc2V0dGluZ3MuZmFjdG9yRm9yRGVsYXlWYWx1ZVszXSA9IDY7XG4gICAgICB0aGlzLmRiLnB1dFNldHRpbmdzKHNldHRpbmdzKTtcbiAgICAgIHNldHRpbmdzID0gdGhpcy5kYi5nZXRTZXR0aW5ncygpO1xuICAgICAgZXhwZWN0KHNldHRpbmdzKS50b0JlT2JqZWN0KCk7XG4gICAgICBleHBlY3Qoc2V0dGluZ3MpLnRvSGF2ZUFycmF5KFwiZmFjdG9yRm9yRGVsYXlWYWx1ZVwiKTtcbiAgICAgIGV4cGVjdChzZXR0aW5ncy5mYWN0b3JGb3JEZWxheVZhbHVlWzNdKS50b0JlKDYpO1xuICAgIH0pO1xuXG5cbiAgfSk7XG5cbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBMV2RiID0gcmVxdWlyZSgnLi9MV2RiJyk7XG5cbmZ1bmN0aW9uIEJveE9mUXVlc3Rpb25zKGRiKSB7XG5cdHRoaXMubmFtZSA9IGRiLm5hbWU7XG5cdHRoaXMuZGIgPSBkYjtcbiAgICAgICAgdGhpcy5ub09mU3RlcHMgPSAzO1xufVxuXG5cbkJveE9mUXVlc3Rpb25zLnByb3RvdHlwZS5jb25maWcgPSBmdW5jdGlvbihjb25maWcpe1xuICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgeWV0IGltcGxlbWVudGVkXCIpO1xufTtcblxuXG5Cb3hPZlF1ZXN0aW9ucy5wcm90b3R5cGUuc2V0TnVtYmVyT2ZTdGVwcyA9IGZ1bmN0aW9uKGFOdW1iZXIpe1xuXG4gIC8vIHRoZSBmb2xsb3dpbmcgaXMgZmluZSBpZiB0aGUgbnVtYmVyIG9mIHN0ZXBzIGlzIGluY3JlYXNlZC5cbiAgdGhpcy5ub09mU3RlcHMgPSBhTnVtYmVyO1xuXG4gIC8vIGRlY2lkZSB3aGF0IGhhcHBlbnMgd2hlbiB0aGUgbnVtYmVyIG9mIHN0ZXBzIGlzIGRlY3JlYXNlZC5cblxuICAvLyBGSVhNRVxuICAvLyBpcyB0aGlzIG5lY2Vzc2FyeSBoZXJlP1xuICAvLyB0aGUgc3RlcCBpbmZvcm1hdGlvbiBhY3R1YWxseSBpcyBvbmx5IG5lZWRlZCBmb3IgY2FsY3VsYXRpbmcgdGhlIG5ldyBkZWxheVxuICAvLyBhbmQgdGhhdCBpbmZvcm1hdGlvbiBpcyBhY2Nlc3NpYmxlIHRocm91Z2ggdGhlIGluZGV4LlxuICAvLyB0cmlnZ2VyIG1vcmUgYWN0aW9uPy5cbiAgLy8gdGhpcy5yZWNhbGN1bGF0ZUluZGV4ZXMoKTtcbiAgXG59O1xuXG5cblxuQm94T2ZRdWVzdGlvbnMucHJvdG90eXBlLnJlY2FsY3VsYXRlSW5kZXhlcyA9IGZ1bmN0aW9uKGNvbmZpZyl7XG4gIHRocm93IG5ldyBFcnJvcihcIm5vdCB5ZXQgaW1wbGVtZW50ZWRcIik7XG59O1xuXG5cbkJveE9mUXVlc3Rpb25zLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24oY29uZmlnKXtcbiAgdGhyb3cgbmV3IEVycm9yKFwibm90IHlldCBpbXBsZW1lbnRlZFwiKTtcbn07XG5cblxuQm94T2ZRdWVzdGlvbnMucHJvdG90eXBlLmN1cnJRdWVzdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZyl7XG4gIHRocm93IG5ldyBFcnJvcihcIm5vdCB5ZXQgaW1wbGVtZW50ZWRcIik7XG59O1xuXG5cbkJveE9mUXVlc3Rpb25zLnByb3RvdHlwZS5zdGF0dXMgPSBmdW5jdGlvbihjb25maWcpe1xuICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgeWV0IGltcGxlbWVudGVkXCIpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJveE9mUXVlc3Rpb25zO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIExlYXJuV29yZHMgMiBcbi8vXG4vLyBGaWxlOiBcbi8vICAgIExXZGIuanNcbi8vXG4vLyBQdXJwb3NlOiBcbi8vICAgIERhdGFiYXNlIGxheWVyXG4vLyAgICBEZWZpbml0aW9uIG9mIGFuIExXZGIgb2JqZWN0XG4vL1xuLy8gRGF0ZTpcbi8vICAgIDNyZCBEZWNlbWJlciAyMDE2XG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgPT09IFwidW5kZWZpbmVkXCIgfHwgbG9jYWxTdG9yYWdlID09PSBudWxsKSB7XG4gIC8vIHdlIHJ1biBpbiBub2RlIHRodXMgd2UgbmVlZCB0byBoYXZlIGEgc2ltdWxhdGlvbiBvZiBMb2NhbFN0b3JhZ2VcbiAgdmFyIExvY2FsU3RvcmFnZSA9IHJlcXVpcmUoJ25vZGUtbG9jYWxzdG9yYWdlJykuTG9jYWxTdG9yYWdlO1xuICBnbG9iYWwubG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgnLi9zY3JhdGNoJyk7XG59XG5cblxuXG5cbnZhciBMV2RiID0gZnVuY3Rpb24oZGJOYW1lKSB7XG5cbiAgICB0aGlzLmRiTmFtZSA9IGRiTmFtZTtcbiAgICB0aGlzLl9rZXlzT2ZBbGxXb3JkcyA9IFtdO1xuICAgIFxuICAgIC8vIHByaXZhdGVcbiAgICB2YXIgcmVjYWxjdWxhdGVJbmRleCA9IHRydWU7IFxuXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG5cbiAgICB2YXIgX3dkS2V5Rm9yID0gZnVuY3Rpb24oYW5JbnRlZ2VyKSB7IFxuICAgICAgICByZXR1cm4gdGhhdC5kYk5hbWUrJy13ZC0nK2FuSW50ZWdlcjtcbiAgICB9O1xuXG4gICAgdmFyIF9zZXROdW1iZXJPZldvcmRzID0gZnVuY3Rpb24obikge1xuICAgICAgICB2YXIga2V5ID0gdGhhdC5kYk5hbWUrJy1udW1iZXJPZldvcmRzJztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LG4pO1xuICAgICAgICB0aGF0LnJlY2FsY3VsYXRlSW5kZXggPSB0cnVlO1xuICAgIH07XG5cblxuICAgIHZhciBfaW5jTnVtYmVyT2ZXb3JkcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbiA9IHRoYXQubnVtYmVyT2ZXb3JkcygpO1xuICAgICAgICBfc2V0TnVtYmVyT2ZXb3JkcyhuICsgMSk7XG4gICAgICAgIHRoYXQucmVjYWxjdWxhdGVJbmRleCA9IHRydWU7XG4gICAgfTtcblxuICAgIHRoaXMuX2ludmFsaWRhdGVJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LnJlY2FsY3VsYXRlSW5kZXggPSB0cnVlO1xuICAgIH07XG5cbiAgICB2YXIgX2luZGV4TmVlZHNSZWNhbGN1bGF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGF0LnJlY2FsY3VsYXRlSW5kZXhcbiAgICB9O1xuXG5cbiAgICB2YXIgX2luZGV4SGFzQmVlblVwZGF0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5yZWNhbGN1bGF0ZUluZGV4ID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBfcmVtb3ZlT2JqZWN0cyA9IGZ1bmN0aW9uKGFLZXlQcmVmaXgpe1xuICAgICAgICBpZiAodGhhdC5pc09LKSB7XG4gICAgICAgICAgICB2YXIga2V5O1xuICAgICAgICAgICAgdmFyIHN0OyBcbiAgICAgICAgICAgIHZhciBrZXlzVG9EZWxldGUgPSBbXTtcblxuICAgICAgICAgICAgLy8gZmluZCBhbGwga2V5cyBzdGFydGluZyB3aXRoIGFLZXlQcmVmaXhcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgICAgIHN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5sYXN0SW5kZXhPZihhS2V5UHJlZml4LDApID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXNUb0RlbGV0ZS5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXlzVG9EZWxldGUuZm9yRWFjaChmdW5jdGlvbihhS2V5KXtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShhS2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuXG5cblxuXG5cblxuICAgIExXZGIucHJvdG90eXBlLnBlcnNpc3RlbnRTdG9yYWdlT0sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhbG9jYWxTdG9yYWdlO1xuICAgIH07XG5cblxuXG4gICAgTFdkYi5wcm90b3R5cGUuaXNPSyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJzaXN0ZW50U3RvcmFnZU9LKCk7XG4gICAgfTtcblxuXG5cbiAgICBMV2RiLnByb3RvdHlwZS5udW1iZXJPZldvcmRzID0gZnVuY3Rpb24oKSB7XG4gICAgIFxuICAgICAgIHZhciBrZXkgPSB0aGlzLmRiTmFtZSsnLW51bWJlck9mV29yZHMnO1xuICAgICAgICB2YXIgciA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNPSykge1xuICAgICAgICAgICAgciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgICAgICBpZiAociA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCcwJyk7IFxuICAgICAgICAgICAgICAgIHIgPSAnMCc7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIHIgPSBwYXJzZUludChyKTtcbiAgICAgICAgfTsgXG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG5cblxuXG4gICAgTFdkYi5wcm90b3R5cGUucHV0V29yZCA9IGZ1bmN0aW9uKGFXb3JkKSB7XG5cbiAgICAgICAgaWYoIWFXb3JkLl9pZCl7XG4gICAgICAgICAgICB0aHJvdyBcIl9pZCBpcyByZXF1aXJlZCBpbiBhIHdvcmRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZighYVdvcmQuc3RlcCl7XG4gICAgICAgICAgICBhV29yZC5zdGVwID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZighYVdvcmQuZGF0ZSl7XG4gICAgICAgICAgICBhV29yZC5kYXRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBzdG9yYWdlIGtleSBcbiAgICAgICAgdmFyIHN0b3JhZ2VLZXkgPSBfd2RLZXlGb3IoYVdvcmQuX2lkKTtcbiAgICAgICAgLy8gdHJ5IHRvIGdldCB0aGUgd29yZCB0byBjaGVjayBpZiBpdCBhbHJlYWR5IGV4aXN0c1xuICAgICAgICB2YXIgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KTsgXG4gICAgIFxuICAgICAgICAvLyBzYXZlIHRoZSB3b3JkXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KGFXb3JkKSk7XG5cbiAgICAgICAgLy8gaWYgdGhlIHdvcmQgaGFzIG5vdCBleGlzdGVkIGJlZm9yZSBpbmNyZW1lbnQgdGhlIG51bWJlciBvZiB3b3Jkc1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgX2luY051bWJlck9mV29yZHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0b3JhZ2VLZXkgaXM9Jywgc3RvcmFnZUtleSwgJ3dvcmQgaXM9JywgY29weS53b3JkKTtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2VLZXk7XG4gICAgfTtcblxuXG5cblxuICAgIExXZGIucHJvdG90eXBlLmdldFdvcmQgPSBmdW5jdGlvbihhbkludGVnZXIpIHtcbiAgICAgICAgdmFyIHN0b3JhZ2VLZXkgPSBfd2RLZXlGb3IoYW5JbnRlZ2VyKTtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgdmFyIGFXb3JkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KSk7XG4gICAgICAgICAgICBpZighYVdvcmQuc3RlcCl7XG4gICAgICAgICAgICAgICAgYVdvcmQuc3RlcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighYVdvcmQuZGF0ZSl7XG4gICAgICAgICAgICAgICAgYVdvcmQuZGF0ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYVdvcmQ7XG4gICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuXG5MV2RiLnByb3RvdHlwZS5pbXBvcnRGcm9tID0gZnVuY3Rpb24odGhlV29yZHMpIHtcbiAgICAgIFxuICAgICAgdmFyIGtleTtcbiAgICAgIHZhciBuID0gdGhlV29yZHMubGVuZ3RoO1xuXG4gICAgICB2YXIgYVdvcmQ7XG4gICAgICBcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuOyBpKyspe1xuICAgICAgICBhV29yZCA9IHRoZVdvcmRzW2ldO1xuXHRrZXkgPSB0aGlzLnB1dFdvcmQoYVdvcmQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pbnZhbGlkYXRlSW5kZXgoKTtcblxuICAgIH1cblxuXG5cbiAgICBMV2RiLnByb3RvdHlwZS5sb2FkV29yZHMgPSBmdW5jdGlvbih0aGVXb3Jkcykge1xuICAgICAgICB0aGlzLmltcG9ydEZyb20odGhlV29yZHMpO1xuICAgIH1cblxuXG5cbiAgICBMV2RiLnByb3RvdHlwZS5rZXlzT2ZBbGxXb3JkcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoX2luZGV4TmVlZHNSZWNhbGN1bGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2tleXNPZkFsbFdvcmRzID0gW107XG4gICAgICAgICAgICB2YXIga2V5UmVnZXggPSBuZXcgUmVnRXhwKFwiXlwiK3RoaXMuZGJOYW1lK1wiXFxcXC13ZFxcXFwtXFxcXGQrJFwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpdCBzdGFydHMgd2l0aCA8bmFtZT4td2QtXG4gICAgICAgICAgICAgICAgaWYoa2V5UmVnZXgudGVzdChrZXkpKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5c09mQWxsV29yZHMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX2luZGV4SGFzQmVlblVwZGF0ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNPZkFsbFdvcmRzO1xuICAgIH07XG5cblxuXG4gICAgTFdkYi5wcm90b3R5cGUuYWxsV29yZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGtleXMgPSB0aGlzLmtleXNPZkFsbFdvcmRzKCk7XG4gICAgICAgIHZhciB3b3JkcyA9IFtdO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB2YXIgc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5c1tpXSk7XG4gICAgICAgICAgICB3b3Jkcy5wdXNoKEpTT04ucGFyc2Uoc3RyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdvcmRzO1xuICAgIH07XG5cblxuXG4gICAgTFdkYi5wcm90b3R5cGUuZ2V0U2V0dGluZ3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmRiTmFtZSArICctc2V0dGluZ3MnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cbiAgICAgICAgLy8gbGF6eSBpbml0aWFsaXNhdGlvblxuICAgICAgICBpZiAodmFsdWU9PW51bGwpIHsgXG4gICAgICAgICAgICAvLyBkZWZpbmUgZGVmYXVsdCB2YWx1ZSBmb3Igc2V0dGluZ3MgICAgXG4gICAgICAgICAgICB2YWx1ZSA9IHtcImZhY3RvckZvckRlbGF5VmFsdWVcIjogWzAsMSwzLDddfTtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdXNlZCB0byBjYWxjdWxhdGUgdGhlIG5ldyBkYXRlIGFmdGVyIGFcbiAgICAgICAgICAgIC8vIHdvcmQgaGFzIGJlZW4gYW5zd2VyZWQgY29ycmVjdGx5LlxuICAgICAgICAgICAgdGhpcy5wdXRTZXR0aW5ncyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKVxuICAgICAgICB9XG4gICAgfTtcblxuXG5cbiAgICBMV2RiLnByb3RvdHlwZS5wdXRTZXR0aW5ncyA9IGZ1bmN0aW9uKGFuT2JqZWN0KSB7XG4gICAgICAgIFxuICAgICAgICB2YXIga2V5ID0gdGhpcy5kYk5hbWUgKyAnLXNldHRpbmdzJztcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSxKU09OLnN0cmluZ2lmeShhbk9iamVjdCkpOyAgXG4gICAgfTtcblxuXG5cbiAgICBMV2RiLnByb3RvdHlwZS5yZW1vdmVXb3JkcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIga2V5cyA9IHRoaXMua2V5c09mQWxsV29yZHMoKTsgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBfc2V0TnVtYmVyT2ZXb3JkcygwKTtcblxuICAgIH07XG5cblxuXG4gICAgTFdkYi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKGFuT2JqZWN0KSB7XG5cbiAgICAgICAgIHZhciBhS2V5UHJlZml4ID0gdGhpcy5kYk5hbWU7ICBcbiAgICAgICAgIF9yZW1vdmVPYmplY3RzKGFLZXlQcmVmaXgpO1xuICAgIH07XG5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMV2RiO1xuXG4iXX0=
