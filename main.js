var app = new Vue({
    el: '#root',
    data: {
        active: "active",
        counter: 0,
        fantasiaPhoto: "https://www.liberandoprospero.it/wp-content/uploads/2020/07/FANTASIA-copertina.jpg",
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
        },
        //bonus 2
        pallinoClick: function(index) {
            this.counter = index;
        },
        //bonus spazio alla fantasia
        fantasia: function() {
            $("#fantasiaID").addClass("active")
            $(".slider-wrapper").addClass("none");
        }

    },

    //bonus 1
    created: function() {
        setInterval(this.nextImage, 3000);
    }
});