// A
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(callback, delayTime, n1 + n2);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});

delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
});

// B
function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n1 + n2), delayTime);
  });
}

delayedResultPromise(4, 5, 3000).then(console.log);

// C
async function main() {
  console.log(await delayedResultPromise(100, 100, 5000));
}

main();
