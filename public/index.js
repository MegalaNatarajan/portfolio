$(document).ready(function(){
    $('#burger').click(function(){
        event.preventDefault();
        $('body').toggle(500,redirectPage);
      //window.location='./nav'; // link of your desired page.  
    });
    function redirectPage() {
        window.location='./nav';
    }
});