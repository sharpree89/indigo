
  $(document).ready(function() {

    //=========== DROPDOWN MENU SCRIPTS ===========//

    $(".trigger").click( function () {
      $("ul.content", this).toggle();
    });

    //=========== NAVIGATION SCRIPTS ===========//

    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active-mobile');
        jQuery('.menu-mobile div').toggleClass('active-mobile');

        e.preventDefault();
    });
  });
