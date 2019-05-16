const PubSub = require('../helpers/pub_sub.js')
const MunroView = require('./munros_display_view.js')

const MunroDisplayListView  = function(container){
    this.container = container;
    console.log(this.container)
}

MunroDisplayListView.prototype.bindEvents = function(){
    PubSub.subscribe('Munros: Munros Data Ready', (evt)=>{
        this.munros = evt.detail 
        this.render()
    })
}
MunroDisplayListView.prototype.render = function(){
 this.munros.forEach((munro)=>{
     const munroView = new MunroView(this.container, munro) 
     munroView.render()
     
 })
}

module.exports = MunroDisplayListView;