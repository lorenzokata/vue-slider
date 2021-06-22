const app = new Vue(
    {
      el: '#app',
      
      data:{
        counter : 0,
        src : ['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg',],
        alt : ['panorama','monumento al pellegrino','pamplona','cattedrale di burgos']
      },
  
      methods:{

        autoPlay : function(){

            setInterval(function(){
                // (this.counter < (this.src.length - 1)) ? this.counter++ : this.counter = 0;
                if (this.counter < this.src.length - 1){
                    this.counter++;
                } else{
                    this.counter = 0
                }
                console.log(this.counter);
            }, 1000);

        }

      }
    }
  );
  

  app.autoPlay();