/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const max = a > b ? a : b;
  return c > max ? c : max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  return Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y);
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let a1;
  let a2;
  let a3;
  if (a >= b && a >= c) {
    a1 = a;
    a2 = b;
    a3 = c;
  } else if (b >= a && b >= c) {
    a1 = b;
    a2 = a;
    a3 = c;
  } else if (c >= a && c >= b) {
    a1 = c;
    a2 = a;
    a3 = b;
  }
  return a2 === a3 && a1 <= a2 + a3;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let ost = num;
  let out = '';
  if (Math.floor(ost / 40) === 1) {
    out += 'XL';
    ost %= 40;
    if (ost === 0) return out;
  }
  if (Math.floor(ost / 10) > 0) {
    const repeat = Math.floor(ost / 10);
    for (let i = 1; i <= repeat; i += 1) {
      out += 'X';
    }
    ost %= 10;
    if (ost === 0) return out;
  }
  if (Math.floor(ost / 9) === 1) {
    out += 'IX';
    ost %= 9;
    if (ost === 0) return out;
  }
  if (Math.floor(ost / 5) === 1) {
    out += 'V';
    ost %= 5;
    if (ost === 0) return out;
  }
  if (Math.floor(ost / 4) === 1) {
    out += 'IV';
    ost %= 4;
    if (ost === 0) return out;
  }
  if (ost > 0) {
    for (let i = 1; i <= ost; i += 1) {
      out += 'I';
    }
    return out;
  }
  return out;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let out = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    out += i ? ' ' : '';
    switch (numberStr[i]) {
      case '-':
        out += 'minus';
        break;
      case '.':
      case ',':
        out += 'point';
        break;
      case '0':
        out += 'zero';
        break;
      case '1':
        out += 'one';
        break;
      case '2':
        out += 'two';
        break;
      case '3':
        out += 'three';
        break;
      case '4':
        out += 'four';
        break;
      case '5':
        out += 'five';
        break;
      case '6':
        out += 'six';
        break;
      case '7':
        out += 'seven';
        break;
      case '8':
        out += 'eight';
        break;
      case '9':
        out += 'nine';
        break;
      default:
        out += '';
    }
  }
  return out;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const len = Math.trunc(str.length / 2);
  for (let i = 0; i < len; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  for (let i = 0; i < str.length; i += 1) {
    if (Number(str[i]) === digit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 1; i < arr.length; i += 1) {
    rightSum += arr[i];
  }

  for (let i = 1; i < arr.length - 1; i += 1) {
    leftSum += arr[i - 1];
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let counter = 1;
  let x1 = 0;
  let y1 = 0;
  let x2 = size - 1;
  let y2 = size - 1;
  const a = [];
  for (let i = 0; i < size; i += 1) {
    a[i] = [];
  }
  while (x1 <= x2 && y1 <= y2) {
    for (let i = x1; i <= x2; i += 1) {
      a[y1][i] = counter;
      counter += 1;
    }
    y1 += 1;
    for (let i = y1; i <= y2; i += 1) {
      a[i][x2] = counter;
      counter += 1;
    }
    x2 -= 1;
    for (let i = x2; i >= x1; i -= 1) {
      a[y2][i] = counter;
      counter += 1;
    }
    y2 -= 1;
    for (let i = y2; i >= y1; i -= 1) {
      a[i][x1] = counter;
      counter += 1;
    }
    x1 += 1;
  }
  return a;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const m = matrix;
  const div = Math.trunc(m.length / 2);

  for (let i = 0; i < m.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      const tmp = m[i][j];
      m[i][j] = m[j][i];
      m[j][i] = tmp;
    }
  }

  for (let i = 0; i < m.length; i += 1) {
    for (let d = 0; d <= div; d += 1) {
      const k = m.length - 1 - d;
      const tmp = m[i][d];
      m[i][d] = m[i][k];
      m[i][k] = tmp;
    }
  }

  return m;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const swap = (items, i1, i2) => {
    const items2 = items;
    const temp = items[i1];
    items2[i1] = items2[i2];
    items2[i2] = temp;
  };

  const partition = (items, left, right) => {
    const pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (items[i] < pivot) {
        i += 1;
      }
      while (items[j] > pivot) {
        j -= 1;
      }
      if (i <= j) {
        swap(items, i, j);
        i += 1;
        j -= 1;
      }
    }
    return i;
  };

  const quickSort = (items, left, right) => {
    let idx;
    if (items.length > 1) {
      idx = partition(items, left, right);
      if (left < idx - 1) {
        quickSort(items, left, idx - 1);
      }
      if (idx < right) {
        quickSort(items, idx, right);
      }
    }
    return items;
  };

  return quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const shuffleCharOne = (s) => {
    let leftStr = '';
    let rightStr = '';
    for (let i = 0; i < s.length; i += 1) {
      if (i % 2) {
        rightStr += s[i];
      } else {
        leftStr += s[i];
      }
    }
    return leftStr + rightStr;
  };

  let shuffled = str;
  if (shuffled.length < 3) {
    return shuffled;
  }
  const optimizeIterations = iterations % 36;
  for (let i = 0; i < optimizeIterations; i += 1) {
    shuffled = shuffleCharOne(shuffled);
  }
  return shuffled;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const nums = [];

  let n = number;
  while (n > 0) {
    const num = n % 10;
    nums[nums.length] = num;
    n = (n - num) / 10;
  }

  let di = 1;
  while (di < nums.length) {
    if (nums[di] < nums[di - 1]) break;
    di += 1;
  }

  let minD = 0;
  for (let i = 1; i < di; i += 1) {
    if (
      nums[i] > nums[di] &&
      (nums[i] < nums[minD] || nums[minD] <= nums[di])
    ) {
      minD = i;
    }
  }

  const swap = nums[minD];
  nums[minD] = nums[di];
  nums[di] = swap;

  for (let i = 0; i < di; i += 1) {
    for (let j = i + 1; j < di; j += 1) {
      if (nums[i] < nums[j]) {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
      }
    }
  }

  let x = 0;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    x = x * 10 + nums[i];
  }

  return x;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
