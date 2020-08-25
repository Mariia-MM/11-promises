let signEl = document.createElement(`h2`);
signEl.className = `line`;
function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 50);
  });
}
async function getRandomChinese(length) {
  try {
    for (let i = 0; i < length; i++) {
      const numb = Date.now().toString().substr(-5);
      await delay();
      document.body.append(String.fromCharCode(numb));
    }
    document.body.append(` `, length * 50, `ms`);
  } catch {
    if (length < 0) {
      return Promise.reject("wrong input");
    }

    console.log(`resolving time:`, length * 50, `ms`);
  }
}
getRandomChinese(4);
