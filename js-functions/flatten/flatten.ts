export default function flatten(value: Array<unknown>) {
  if (value.length == 0) return [];
  // iterate over the array
  const recieved = [...value];
  const flattened: Array<unknown> = [];
  recieved.forEach((element) => {
    // if type is not an array
    if (!Array.isArray(element)) {
      flattened.push(element);
    } else {
      // if type is array make a recursive call
      // every call has its variables and the call stack still has the old calls results
      flattened.push(...flatten(element));
    }
  });
  return flattened;
}
