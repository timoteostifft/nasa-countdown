let best = Infinity;

function print(value) {
  console.log(value);
}

const memo = {};

function count(n) {
  if (n in memo) {
    return memo[n];
  }

  if (n == 1) {
    memo[n] = 0;
    return memo[n];
  }

  let min = Infinity;

  if (n % 2 == 0) {
    min = Math.min(min, count(n / 2) + 1);
  }

  if (n % 3 == 0) {
    min = Math.min(min, count(n / 3) + 1);
  }

  min = Math.min(min, count(n - 1) + 1);

  memo[n] = min;

  return min;
}

print(count(parseInt(process.argv[2])));
