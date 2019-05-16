// const PubSub = require('../helpers/pub_sub.js')
// const MunrosDisplayListView = require('./munros_display_list_view')

const MunroView = function(container, munro) {
    this.munrosContainer = container
    this.munro = munro

}

MunroView.prototype.render = function() {
    const munroContainer = document.createElement('div')
    munroContainer.classList.add('munro');

    const name = document.createElement('h2');
    name.classList.add('munro-name')
    name.textContent = this.munro.name

    const list = document.createElement('ul');

    const meaning = document.createElement('li')
    meaning.textContent = `Meaning: ${this.munro.meaning}`

    const height = document.createElement('li')
    height.textContent = `Height: ${this.munro.height}`

   
    this.munrosContainer.appendChild(name)
    this.munrosContainer.appendChild(list)
    list.appendChild(meaning)
    list.appendChild(height)
}

// MunroView.prototype.createMunrosList= function(){
//     const munrosList = document.createElement('ul')
//     munrosList.classList.add('munros')
//     this.populateList(munrosList)
//     return munrosList
// }

// MunroView.prototype.populateList = function(list){
//     this.munro.m
// }

module.exports = MunroView;