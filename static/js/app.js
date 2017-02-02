
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function myFunction() {

    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {

        x.className += " responsive";

    } else {

        x.className = "topnav";
    }
  }

  /* Set the width of the side navigation to 250px */
  function openNav() {
      document.getElementById("mySidenav").style.width = "150px";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  function openNav() {
      document.getElementById("mySidenav").style.width = "150px";
      document.getElementById("main").style.marginLeft = "150px";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
  }
