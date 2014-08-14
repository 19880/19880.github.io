/**
 * Created by zhengnaiguang on 2014/8/7.
 */
 $(function(){
     var canvas = document.getElementById("hw_canvas");
     var ctx = canvas.getContext("2d");
     draw(ctx);

     function draw(ctx) {

         ctx.save();
         ctx.beginPath();

         ctx.moveTo(0.0, 0.0);
         ctx.lineTo(0.0, 56.0);
         ctx.lineTo(130.0, 56.0);
         ctx.lineTo(130.0, 69.7);
         ctx.lineTo(150.8, 56.0);
         ctx.lineTo(280.0, 56.0);
         ctx.lineTo(280.0, 0.0);
         ctx.lineTo(0.0, 0.0);
         ctx.closePath();

         ctx.moveTo(276.0, 52.0);
         ctx.lineTo(149.6, 52.0);
         ctx.lineTo(134.0, 62.3);
         ctx.lineTo(134.0, 52.0);
         ctx.lineTo(4.0, 52.0);
         ctx.lineTo(4.0, 4.0);
         ctx.lineTo(276.0, 4.0);
         ctx.lineTo(276.0, 52.0);
         ctx.closePath();
         ctx.fillStyle = "#8C8C8C";
         ctx.fill();
         ctx.restore();
     }


     skrollr.init();
     /*$('#fullpage').fullpage({
         sectionsColor: ['transparent', '#3da3a2', '#eb713b', '#f2b636'],
         anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
         menu: '#menu',
         continuousVertical: true,
         autoScrolling: false,
         afterLoad: function(anchorLink, index){
            if( index == 2 ){
                skills_anim();
            }
         }
     });*/
     function skills_anim() {
         if($(document).scrollTop()>1000) {
             $('.widget_skills .skills_row .progress').each(function () {
                 var val = $(this).find('.value').text();
                 $(this).animate({'width': val}, 1000, 'easeInQuint');
             });
             $(window).unbind('.skills_anim');
         }
     }
     $(window).bind('load.skills_anim scroll.skills_anim', function(){
         skills_anim();
     });
 });