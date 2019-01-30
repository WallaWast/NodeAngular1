(function () {
    angular.module('primeiraApp').component('contentHeader', {
        bindings: {
            titulo: '@',
            subtitulo: '@',
        },
        template: `
    <section class="content-header">
        <h1>{{ $ctrl.titulo }} <small>{{ $ctrl.subtitulo }}</small></h1>
    </section>
    `
    })
})()