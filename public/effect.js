$(document).ready(function() {
    
 
    $(".effect").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        
        
        $('body').toggle(500,redirectPage);     
    });
         
    function redirectPage() {
        //$('body').css("background-color", "#FF0000");
        
        //$('body').animate({backgroundColor: '#400101'});
        window.location = linkLocation;
    }
});