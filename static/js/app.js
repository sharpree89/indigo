

  //=========== NAVIGATION SCRIPTS ===========//


  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function myFunction() {

    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {

        x.className += " responsive";

    } else {

        x.className = "topnav";
    }
  }


  //=========== DROPDOWN MENU SCRIPTS ===========//


  $(document).ready(function() {
    $(".dropdown").click( function () {
      $(".content", this).toggle();
    });
  });
