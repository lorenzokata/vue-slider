const app = new Vue(
    {
      el: '#app',
      
      data:{
        counter : 0,
        src : ['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg',],
        alt : ['panorama','monumento al pellegrino','pamplona','cattedrale di burgos']
      },
  
      mounted(){
        this.autoPlay()
      },

      methods:{

        autoPlay: function(){ setInterval(() => {this.next()},3000)},

        next(){

            this.counter = (this.counter < this.src.length-1) ? ++this.counter : 0;
        }

      }
    }
  );
  
