const Munros = require('./models/munros.js')
const MunroDisplayListView  = require('./views/munros_display_list_view.js')
const MunroView  = require('./views/munros_display_view.js')
const SelectView = require('./views/select_view.js')


document.addEventListener('DOMContentLoaded', () => {
   console.log('Javascript Loaded');
   
    const munroDisplayListViewContainer = document.querySelector('div#munro')
   
    const munroDisplayListView = new MunroDisplayListView(munroDisplayListViewContainer)
    munroDisplayListView.bindEvents();

    const selectContainer = document.querySelector('select#region')
    const selectView = new SelectView(selectContainer)
    selectView.bindEvents()

    const munros = new Munros();
    munros.getData();
});