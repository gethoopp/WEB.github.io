function animasi(){
      $("#text span ").velocity("transition.slideLeftIn",{ stagger: 200 ,complete:function(){
            animasiTombol();
      }
    });

}



$(document).ready(function(){
     animasi();

});

function animasiTombol(){

      $("#button button").velocity("transition.bounceUpIn")
                             .mouseenter(function(){
                                 $(this).velocity({width:80});
                               })
                               .mouseleave(function(){
                                    $(this).velocity({width:100});

                               });
                          
                              }


                              
  function animasiOut(){

      $("#button button").velocity("transition.whirlOut",{stagger:150,complete:function(){
                  animasiTombol();
}
                });
                        



               }



                        $(document).ready(function(){
      animasiTombol();
 
 });