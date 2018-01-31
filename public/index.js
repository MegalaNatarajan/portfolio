$(document).ready(function(){
    $('#burger').click(function(){
        event.preventDefault();
        $('body').toggle(500,redirectPage);
      //window.location='./nav'; // link of your desired page.  
    });
    function redirectPage() {
        window.location='./nav';
    }
    $('.ml2').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
      });
      
      anime.timeline({loop: true})
        .add({
          targets: '.ml2 .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: function(el, i) {
            return 70*i;
          }
        }).add({
          targets: '.ml2',
          opacity: 0,
          duration: 800,
          easing: "easeOutExpo",
          delay: 800
        });
        $('.ml3').each(function(){
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
          });
          
          anime.timeline({loop: true})
            .add({
              targets: '.ml3 .letter',
              scale: [4,1],
              opacity: [0,1],
              translateZ: 0,
              easing: "easeOutExpo",
              duration: 950,
              delay: function(el, i) {
                return 70*i;
              }
            }).add({
              targets: '.ml3',
              opacity: 0,
              duration: 800,
              easing: "easeOutExpo",
              delay: 800
            });
            $('.ml4').each(function(){
                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
              });
              
              anime.timeline({loop: true})
                .add({
                  targets: '.ml4 .letter',
                  scale: [4,1],
                  opacity: [0,1],
                  translateZ: 0,
                  easing: "easeOutExpo",
                  duration: 950,
                  delay: function(el, i) {
                    return 70*i;
                  }
                }).add({
                  targets: '.ml4',
                  opacity: 0,
                  duration: 800,
                  easing: "easeOutExpo",
                  delay: 800
                });
                $('.ml5').each(function(){
                    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                  });
                  
                  anime.timeline({loop: true})
                    .add({
                      targets: '.ml5 .letter',
                      scale: [4,1],
                      opacity: [0,1],
                      translateZ: 0,
                      easing: "easeOutExpo",
                      duration: 950,
                      delay: function(el, i) {
                        return 70*i;
                      }
                    }).add({
                      targets: '.ml5',
                      opacity: 0,
                      duration: 800,
                      easing: "easeOutExpo",
                      delay: 800
                    });
        
});