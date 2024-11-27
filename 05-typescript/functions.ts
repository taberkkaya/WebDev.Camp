const getAverage = (...a: number[]): string => {
  let total = 0;
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    total += a[i];
    count++;
  }
  const result = total / count;
  return "result:" + result;
};

function getAverage1(a: number, b: number, c?: number): string {
  let total = a + b;
  let count = 2;

  if (typeof c !== "undefined") {
    total += c;
    count++;
  }
  const result = total / count;
  return "result:" + result;
}

getAverage(1, 2, 3);
getAverage(1, 2);
getAverage(1, 2, 4, 5, 6);
getAverage(1, 2, 4, 5);

// getAverage("a", "b", "c");
