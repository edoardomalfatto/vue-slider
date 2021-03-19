var app = new Vue({
    el: '#root',
    data: {
        counter: 0,
        photos: [
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
        ],
    },
    methods: {
        prevImage: function() {
            this.counter--;
            if (this.counter < 0) {
                this.counter = (this.photos.length - 1);
                console.log(this.counter);
            }
        },
        nextImage: function() {
            this.counter++;
            if (this.counter > this.photos.length - 1) {
                this.counter = 0;
                console.log(this.counter);
            }
        }
    }
});