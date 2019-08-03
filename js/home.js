//-- Plugin implementation
(function($) {
  $.fn.countTo = function(options) {
    return this.each(function() {
      //-- Arrange
      var FRAME_RATE = 60; // Predefine default frame rate to be 60fps
      var $el = $(this);
      var countFrom = parseInt($el.attr('data-from'));
      var countTo = parseInt($el.attr('data-to'));
      var countSpeed = $el.attr('data-speed'); // Number increment per second

      //-- Action
      var rafId;
      var increment;
      var currentCount = countFrom;
      var countAction = function() {              // Self looping local function via requestAnimationFrame
        if(currentCount < countTo) {              // Perform number incremeant
          $el.text(Math.floor(currentCount));     // Update HTML display
          increment = countSpeed / FRAME_RATE;    // Calculate increment step
          currentCount += increment;              // Increment counter
          rafId = requestAnimationFrame(countAction);
        } else {                                  // Terminate animation once it reaches the target count number
          $el.text(countTo);                      // Set to the final value before everything stops
          //cancelAnimationFrame(rafId);
        }
      };
      rafId = requestAnimationFrame(countAction); // Initiates the looping function
    });
  };
}(jQuery));


$(document).ready(function() {
    var windowsize = $(window).width();
    console.log(windowsize);
    
    
    $(".navbar-toggler").click(function() {
        if($('#navbar-ul').is(":hidden"))
        {
             $('#navbar-ul').show();        
        }
        else{
             $('#navbar-ul').hide();        
   
        }
       
    });
    
    if(windowsize>800)
    {
        $('#navbar-ul').show();            
    }
    else{
         $('#navbar-ul').hide();            

    }
    
    $('.timer').countTo();
    
});

$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() >= 800) { 
            console.log('size changed');
             $('#navbar-ul').show();            
      }
    else{
                     $('#navbar-ul').hide();            
    }
});