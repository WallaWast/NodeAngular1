angular.module('primeiraApp').component('contentHeader',{
    bindings:{
        titulo: '@',
        subTitulo: '@',        
    },
    template:`
    <section class="content-header">
        <h1>{{ $ctrl.titulo }} <small>{{ $ctrl.subTitulo }}</small></h1>
    </section>
    `
})