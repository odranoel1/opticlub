$( document ).ready(function() {
	$(".wrap_desktop").camera({
      loader: "none",
      navigation: false,
      fx: 'scrollHorz',
      pagination: true,
      height:'700',
      alignment: 'center',
      autoAdvance: true,
      hover: false,
      playPause: false,
      time: 3000,
      alignment: 'center',
      // pauseOnClick: false
   });  

   $(".wrap_mobile").camera({
      loader: "none",
      navigation: false,
      fx: 'scrollHorz',
      pagination: true,
      alignment: 'center',
      autoAdvance: true,
      hover: false,
      playPause: false,
      time: 3000,
      alignment: 'center',
      // pauseOnClick: false
   }); 

  if($(".sidebars").length != 0)
  {
    // All sides
    var sides = ["left", "top", "right", "bottom"];
    //$("h1 span.version").text($.fn.sidebar.version);
  
    // Initialize sidebars
    for (var i = 0; i < sides.length; ++i) {
        var cSide = sides[i];
        $(".sidebar." + cSide).sidebar({side: cSide});
    }

    // Click handlers
    $(".btn[data-action]").on("click", function () {
        var $this = $(this);
        var action = $this.attr("data-action");
        var side = $this.attr("data-side");
        $(".sidebar." + side).trigger("sidebar:" + action);
        return false;
    });
}
});