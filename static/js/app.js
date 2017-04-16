
  $(document).ready(function() {

    //=========== DROPDOWN MENU SCRIPTS ===========//

    $(".dropdown").click( function () {
      $(".content", this).toggle();
    });

    //=========== NAVIGATION SCRIPTS ===========//

    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu div').toggleClass('active');

        e.preventDefault();
    });
  });
