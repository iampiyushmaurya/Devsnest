
    var input1 = document.getElementById('cur1')
    const input2 = document.getElementById('cur2')
    const article = document.querySelector('article')
    const btn = document.querySelector('button');

    btn.addEventListener('click',calculate)


    function calculate(){
    article.innerHTML = "";
    fetch(`https://api.coingecko.com/api/v3/exchange_rates`)
    .then(res => res.json())
    .then(data => {
    eval(`data.rates.${input1.value}.value`)
    getResponse(data);
    })
  }

    let factor
    let convertedCurrency

    function getResponse(data){
      factor = eval(`data.rates.${input1.value}.value`)
      convertedCurrency = factor * input2.value
      article.append(convertedCurrency);
      
    }


    
  
    



  
