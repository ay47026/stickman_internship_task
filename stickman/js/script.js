 new WOW().init();





 $(document).ready(function () {
     $(".navbar ul li a").click(function (e) {
         e.preventDefault();
         var hrefv = $(this).attr('href');

         $('html, body').animate({

             scrollTop: $(hrefv).offset().top
         }, 1000);
     });

 });

 //custom date
 $(document).ready(function () {

     $("#date").datepicker({

         showAnim: "fade",
         duration: 300
     });
 });

 //retrive file name
 $(document).ready(function () {
     $("#upload").on("change", function () {
         var filename = (this.files[0].name);

         $(".custom-file-label").html(filename);
     });
 });

 // custom  tooltip by proper.js
 $(document).ready(function () {
     $("#close").tooltip({
         title: "Please clickk on it",
         trigger: "click",
         delay: 30,
         // by defalt delay 500ms ka hota h


     });
     $("#close").click(function () {

         var i = document.createElement("I");
         i.className = "fas fa-caret-down";
         i.style.color = "black";
         // i.style.zIndex="1000";
         i.style.position = "absolute";
         i.style.bottom = "-3px";
         i.style.left = "50%";
         $(".tooltip-inner")[0].append(i);
     });
 });

 $(document).ready(function () {
     $("#username").popover({
         title: "hint",
         content: "<h4>fill corretaly</h4>",
         //content or title me html lagane ke liye
         html: true,
         trigger: "focus"
         //by defalt trigger click hota h

     });

 })


 //toast
 $(document).ready(function () {

     $("#toastb").click(function () {
         $("#toastt").toast('show');
     });
 });



 //search list name
 $(document).ready(function () {
     $("#searchbtn").click(function () {

         var data = $("#search").val();


         $("#searchulli li").each(function () {
             alert(this.html());
             if ($(this).html().indexOf(data) != -1) {

                 $(this).show();
             } else {
                 $(this).hide;
             }
         });
         return false;
     });
 });



 $(document).ready(function () {

     $("#one").click(function () {
         $("#myclient").carousel(0);
     });
     $("#two").click(function () {
         $("#myclient").carousel(1);
     });
     $("#three").click(function () {
         $("#myclient").carousel(1);
     });
     $("#myclient").carousel({
         interval: 2000
     });


     $(".con-d").mouseover(function () {

         $("h6", this).addClass("animated slideInUp d-block");
     });
     $(".con-d").mouseout(function () {

         $("h6", this).removeClass("animated slideInUp d-block");
     });
 });



 $(document).ready(function () {



     $(window).scroll(function () {
         $(".hieght-s").html(window.pageYOffset);
     });
     if ($(window).width() > 1024) {
         $(window).scroll(function () {
             var sheight = window.pageYOffset;
             if (sheight > 344) {
                 $("#gallery").show(500, function () {

                 });
             } else {
                 $(".#gallery").hide();
             }


         });
     }
 });







 //
 //$(document).ready(function(){
 //
 //
 //$.keyframe.define([{
 //  name:'move',
 //  '0%': {
 // 'width':'20vh'
 //  },
 //  '50%': {
 //    'width':'70vh'
 //  },
 //  '100%': {
 //    'width':'100vh'
 //  }
 //
 //}
 //]);
 //
 //$('.div-r').playKeyframe({
 //
 // name:'move',
 //  duration:"3s",
 //  timingFunction:'ease',
 //  iterationCount:'infinite',
 //  direction:'normal',
 //  fillMode:'forwards',
 //  complete: increment,
 //});
 //







 /*
  function scrollToSection(event) {
     event.preventDefault();
     var $section = $($(this).attr('href'));
     $('html, body').animate({
       scrollTop: $section.offset().top
     }, 500);
   }
   $('[data-scroll]').on('click', scrollToSection);
 }(jQuery));
 */
