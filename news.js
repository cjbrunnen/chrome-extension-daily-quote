chrome.runtime.sendMessage({ name: 'fetchQuote' }, (response) => {
  // update display
  document.querySelector('#quote-img').src = response.image
  document.querySelector('#quote').innerHTML = response.quote
  document.querySelector('#quote-author').innerHTML = response.author
  document.querySelector('#quote-credit').innerHTML = 'Quote credit: ' + response.credit
})
