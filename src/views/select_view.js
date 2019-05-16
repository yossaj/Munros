const PubSub = require('../helpers/pub_sub')
const Munros = require('../models/munros.js')

const SelectView = function(container, munro){
    this.container = container
    this.munro = munro
}

SelectView.prototype.bindEvents = function() {
    PubSub.subscribe('Munros: Munros Data Ready', (event) => {
        this.munro = event.detail  
        const regions = this.getRegionNames(this.munro)
        this.populate(regions)
    })
};

SelectView.prototype.populate = function(regions) {
    regions.forEach((region, index)=>{
        const option = document.createElement('option')
        option.textContent= region
        option.value = index
        this.container.appendChild(option)
    })
    
}

SelectView.prototype.getRegionNames = function(munros){
    return munros
        .map(munro => munro.region)
        .filter((region, index, regions) => regions.indexOf(region) === index)
}


module.exports = SelectView;