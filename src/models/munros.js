const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const Munros = function(){
    this.munros= []

}

Munros.prototype.getData = function(){
    const request = new RequestHelper('https://munroapi.herokuapp.com/munros')

    request.get()
    .then((data)=>{
        this.munros = data
        PubSub.publish('Munros: Munros Data Ready', this.munros)
    })
}



module.exports = Munros;