let best = Infinity;
let steps = "";

function print(value) {
  console.log(value);
}

function count(n, sum = 0, path = "") {
  if (n == 1) {
    if (sum < best) {
      best = sum;
      steps = path.trim();
    }

    return;
  }

  if (sum > best) {
    return;
  }

  if (n % 2 == 0) {
    count(n / 2, sum + 1, path + " /2");
  }

  if (n % 3 == 0) {
    count(n / 3, sum + 1, path + " /3");
  }

  count(n - 1, sum + 1, path + " -1");
}

const n = parseInt(process.argv[2]);
count(n);
print(`${best} operações: ${steps}`);
