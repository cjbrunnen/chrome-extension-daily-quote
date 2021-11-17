chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name === 'fetchQuote') {
    const apiCall = 'http://quotes.rest/qod.json'

    fetch(apiCall).then(function (res) {
      if (res.status !== 200) {
        response({ quote: 'Error!' })
        return
      }
      res.json().then(function (data) {
        response({
          quote: data.contents.quotes[0].quote,
          author: data.contents.quotes[0].author,
          image: data.contents.quotes[0].background,
          credit: data.copyright.url
        })
      })
    }).catch(function(err) {
      response({ quote: err })
    })
  }
  return true
})
