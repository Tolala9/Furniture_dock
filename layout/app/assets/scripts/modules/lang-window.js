class LangWindow{

	constructor() {
		this.allMethods();  
	}




  allMethods() {


    (function () { 

      $(".header__language__icon").click(function(){

        if ($(".header__language__block").is(":visible")) {
          $(".header__language__block").fadeOut(200);

        } else {
          $(".header__language__block").fadeIn(200).css("display", "flex");
          $(".header__language__block").removeClass("hidden");

        };
      });



    }());

  }

}

export default LangWindow;