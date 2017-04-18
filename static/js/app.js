
  $(document).ready(function() {

    //=========== DROPDOWN MENU SCRIPT ===========//

    $(".trigger").click(function () {
      $("ul.content", this).toggle();
    });

    //=========== RESPONSIVE NAVBAR SCRIPT ===========//

    $("#nav-mobile").html($("#navbar").html());
    $("#nav-trigger span").click(function(){
        if ($("ul.navbar").hasClass("expanded")) {
            $("ul.navbar").removeClass("expanded").slideUp(500);
            $(this).removeClass("open");
        } else {
            $("ul.navbar").addClass("expanded").slideDown(500);
            $(this).addClass("open");
        }
    });

  });
