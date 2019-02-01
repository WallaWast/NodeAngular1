(function(){
    angular.module('primeiraApp').component('paginator',{
        bindings: {
            url: '@',
            pages: '@',
        },
        controller:[
            '$location',
            function($location){
                this.$onInit = function(){
                    const pages = parseInt(this.pages) || 1
                    this.pagesArray = Array(pages).fill(0).map((e,i) => i + 1)
                }

                this.current = parseInt($location.search().page) || 1
                this.needPagination = this.pages > 1
                this.hasPrev = this.current > 1
                this.hasNext = this.current < this.pages

                this.isCurrent = function(i){
                    return this.current == i
                }
            }
        ]
    })
})()