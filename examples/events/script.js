var app = new Vue ({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        countUp: function(){
            this.count +=1
        },
        countDown: function(){
            this.count -=1
        }
    },

})

var app2 = new Vue ({
    el: '#app2',
    data: {
        url: "",
        cleanUrl: ""
    },
    methods: {
        cleanerUrl: function(){
            this.cleanUrl = this.url.replace(/^https?:\/\//,"").replace(/\/$/,"")
        }
    },

})