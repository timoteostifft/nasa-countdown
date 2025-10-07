function print(value) {
  console.log(value);
}

function count(n) {
  const memo = new Array(n + 1).fill(Infinity);

  memo[1] = 0;

  for (let i = 2; i <= n; i++) {
    memo[i] = Math.min(memo[i], memo[i - 1] + 1);

    if (i % 2 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 2] + 1);
    }

    if (i % 3 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 3] + 1);
    }
  }

  return memo[n];
}

print(count(parseInt(process.argv[2])));
