const request = require('request')

request({
    url: "https://blockchain.info/stats?format=json",
    json: true
}, function (err, res, body) {
    btcPrice = body.market_price_usd
    console.log(btcPrice)
})

module.exports = (app) => {
    app.get('/',
        function (req, res) {
            res.render("index", {
                btcPrice: btcPrice
            })
        }
    )
}