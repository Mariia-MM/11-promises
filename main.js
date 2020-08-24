function getRandomChinese(length) {
  let signEl = document.createElement(`h2`);
  signEl.className = `line`;
  if (length < 0) {
    return Promise.reject("wrong input");
  } else {
    for (let i = 0; i < length; i++) {
      setTimeout(() => {
        const numb = Date.now().toString().substr(-5);
        signEl = document.querySelector(`.line`);
        signEl.innerHTML = signEl.innerHTML + String.fromCharCode(numb);
      }, i * 50000);
    }
    console.log(`resolving time:`, (length * 50000) / 1000, `ms`);
    document.body.append(signEl);

    return Promise.resolve();
  }
}
getRandomChinese(3);
