$(document).ready(function(){
    "use strict";
    $('.navbar-toggler').click(function(){
        "use strict";
        $('.navbar-toggler').toggleClass('menu-icon')
        $('.navbar-nav li a').toggleClass('toggle-list')
    })
 
 });

 $(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        if($(window).scrollTop() < 60 || $(window).scrollTop() === 0 ) {
            
            $('.navbar').css ({
               'margin-top': '-100px',
                'opacity': '0'
                
            });
            
            $('.navbar-expand-md').css({
                'background-color': '#d5d5d5'
                
            });
            
        } else {
            
            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'
                
            });
            
            $('.navbar-expand-md').css({
                'background-color': 'rgba(59, 59 , 59, 0.7)',
                'border-color': '#fff'
                
            });
            
            
        }
       
        
    });
    
    
});
$(document).ready(function(){
    "use strict";
      $(function () {
          "use strict";
     $('[data-toggle="tooltip"]').tooltip()
     })
})




