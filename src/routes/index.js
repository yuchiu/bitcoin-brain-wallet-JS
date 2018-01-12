const request = require('request')
const bitcore = require('bitcore-lib')
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
                const brainsrc = req.body.brainsrc

                const input = new Buffer(brainsrc)
                const hash = bitcore.crypto.Hash.sha256(input)
                const bigNumber = bitcore.crypto.BN.fromBuffer(hash)
                const privateKey = new bitcore.PrivateKey(bigNumber).toWIF()
                const addy = new bitcore.PrivateKey(bigNumber).toAddress()
                res.send("The Brain wallet of: " + brainsrc + "<br/>" +
                    "The address/public key is: " + addy + "<br/>" + "Private key is: " + privateKey)
            }
        )
}