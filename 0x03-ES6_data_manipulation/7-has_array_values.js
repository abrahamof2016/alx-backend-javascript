export default function hasvalueFromArray(set, arr) {
  let isIn = true;
  arr.forEach((element) => {
    if (set.has(element) === false) {
      isIn = false;
    }
  });
  return isIn;
}
