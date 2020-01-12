$(function() {

    /*======== Filter =========*/
    let filter = $("[data-filter]");
    filter.on("click", function(event) {
        event.preventDefault();
        let cat = $(this).data('filter');
        if( cat == 'all' ) {
             $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function() {
            let workcat = $(this).data('cat');
            if(workcat != cat){
               $(this).addClass('hide');
                } else {
                $(this).removeClass('hide');
                }
           });
        }
    });


/*======== Filter =========*/

const moadlCall = $("[data-modal]");
const moadlClose = $("[data-close]");

    moadlCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout (function() {
           $(modalId).find(".modal__dialog").css({
               transform: "rotateX(0)",
               opacity: 1
           });
        }, 200);

    });

    moadlClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

           modalParent.find(".modal__dialog").css({
               transform: "rotateX(90deg)",
               opacity: 0
           });

        setTimeout (function() {
                modalParent.removeClass('show');
                $("body").removeClass('no-scroll');
        }, 200);

//        modalParent.removeClass('show');
//        $("body").removeClass('no-scroll');

    });

   $(".modal").on("click", function(event) {

       let $this = $(this);

        $this.find(".modal__dialog").css({
           transform: "rotateX(90deg)",
           opacity: 0
        });
        setTimeout (function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);

//        $(this).removeClass('show');
//        $("body").removeClass('no-scroll');
    });

   $(".modal__dialog").on("click", function(event) {
       event.stopPropagation();
    });

});
