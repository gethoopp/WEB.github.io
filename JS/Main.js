function animasiText(){
    $(".nav ").velocity("transition.slideLeftIn",{ stagger: 200
    
    });
         
}



    $(document).ready(function(){
        animasiText();
    
  
    });
     
    function textgerak(){

        $("#kata").velocity("transition.slideLeftIn",{stagger:150,complete:function(){
               project();
        }
                          
        
        })
    
    }
   


    $(document).ready(function(){
        textgerak();
    
  
    });


    function project(){
        $(".judul1 ").velocity("transition.slideLeftIn",{duration:1500,complete:function(){

                     Teks();            
        }
               
           
        });
    }

    function Teks(){
        $(".judul2 ").velocity("transition.slideLeftIn")
    }


    $(document).ready(function(){
        project();
    
  
    });
     

    function gambar(){
        $("img#photo").velocity("transition.flipYIn",{duration:1400,complete:function(){

              hasil();
        }
        
        })
    }

   
    function hasil(){

         $(".foto").velocity("transition.slideLeftIn",{duration:2500})
    }



    $(document).ready(function(){
        gambar();
    
  
    });
     