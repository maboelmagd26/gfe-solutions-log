// Generics
// array of T[] so current that is a member of it should be of type T
// accumlator is of the same type as initial value and itsself is the return of the callback
// myReduce is returning the accumlator at the end so it is of type U
interface Array<T> {
  myReduce<U>(
    callbackFn: (
      accumlator: U,
      currentValue: T,
      currentIndex: number,
      array: T[],
    ) => U,
    initialValue?: U,
  ): U;
}

Array.prototype.myReduce = function (cfn, initialValue) {
  let accumlator;
  let startIndex: number = 0;
  let arr = this;
  let isSparse = true;
  // early returns with type errors
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      isSparse = false;
      break;
    }
  }
  const hasNoInitialValue = arguments.length <= 1;
  if ((arr.length == 0 && hasNoInitialValue) || (isSparse && hasNoInitialValue))
    throw new TypeError("Reduce of empty array with no initial value");
  // check for sparse arrays

  // index at which the callback starts executing (current element Index)
  if (!hasNoInitialValue) {
    accumlator = initialValue;
    startIndex = 0;
  } else {
    // find the accumlator
    let foundAccumulator = false;

    for (let i = 0; i < arr.length; i++) {
      // Native reduce skips holes.
      // We need the first existing index.
      if (i in arr) {
        accumlator = arr[i];
        startIndex = i + 1;
        foundAccumulator = true;
        break;
      }
    }
  }
  for (let i = startIndex; i < arr.length; i++) {
    const currentValue = arr[i],
      currentIndex = i;
    // reduce native method skips holes
    if (i in arr) {
      accumlator = cfn(accumlator, currentValue, currentIndex, arr);
    }
  }

  return accumlator;
};
