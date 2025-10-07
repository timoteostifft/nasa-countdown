let best = Infinity;

function print(value) {
  console.log(value);
}

function count(n, sum = 0) {
  if (n == 1) {
    if (sum < best) {
      best = sum;
    }

    return;
  }

  if (n % 2 == 0) {
    count(n / 2, sum + 1);
  }

  if (n % 3 == 0) {
    count(n / 3, sum + 1);
  }

  count(n - 1, sum + 1);
}

count(parseInt(process.argv[2])), print(best);
