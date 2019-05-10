class SmoothScroll{

	constructor() {
		this.allMethods();  
	}




  allMethods() {


    (function () { 


      $(document).ready(function(){
        $(".main_card").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
          top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
        });
      });
      


    }());

  }

}

export default SmoothScroll;