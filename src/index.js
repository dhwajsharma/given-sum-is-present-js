import "./styles.css";

// check if pair with given sum is present
// [2,1,3,6] = 3

const pair = (arr, sum) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
    return false;
  }
};

console.log(pair([2, 1, 3, 6], 3));
