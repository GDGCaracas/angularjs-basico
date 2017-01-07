angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'Ejemplo con Angular JS';
    vm.searchInput = '';
    vm.shows = [
        {
            title: 'Avatar',
            year: 2009,
            favorite: false
        },
        {
            title: 'Forrest Gump',
            year: 1994,
            favorite: true
        },
        {
            title: 'Batman, El caballero oscuro',
            year: 2008,
            favorite: false
        },
        {
            title: 'Inception',
            year: 2010,
            favorite: true
        },
        {
            title: 'El silencio de los inocentes',
            year: 1991,
            favorite: true
        }
    ];
    vm.orders = [
        {
            id: 1,
            title: 'Por año, ascendente',
            key: 'year',
            reverse: false
        },
        {
            id: 2,
            title: 'Por año, descendiente',
            key: 'year',
            reverse: true
        },
        {
            id: 3,
            title: 'Por título, ascendete',
            key: 'title',
            reverse: false
        },
        {
            id: 4,
            title: 'Por título descendente',
            key: 'title',
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addShow = function() {
        vm.shows.push(vm.new);
        vm.new = {};
    };
});
