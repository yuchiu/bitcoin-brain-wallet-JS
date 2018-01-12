const request = require('request')

request({
    url: "https://blockchain.info/stats?format=json",
    json: true
}, function (err, res, body) {
    btcInfo = body
})

module.exports = (app) => {
    app.get('/',
        function (req, res) {
            res.render("index", {
                btcInfo: btcInfo
            })
        }
    ),
    app.post('/wallet',
        function (req, res) {
            var brainsrc = req.body.brainsrc
            res.send(brainsrc)
        }
    )
}