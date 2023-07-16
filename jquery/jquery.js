$(document).ready(function(){
    $("button").click(function(){
      $("p").hide();
    });
  });


$(document).ready(function(){
  $("button").click(function(){
    $("ul li:first-child").hide();
  });
});



$(document).ready(function(){
    $("button").click(function(){
      $("p").hide();
    });
  });

$(document).ready(function(){
    $("button").click(function(){
      $("#test").hide();
    });
  });

$(document).ready(function(){
    $("button").click(function(){
      $(".test").hide();
    });
  });

$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });

$(document).ready(function(){
    $("p").dblclick(function(){
      $(this).hide();
    });
  });

$(document).ready(function(){
    $("#p1").mouseenter(function(){
      alert("You entered p1!");
    });
  });

$(document).ready(function(){
    $("#p1").mouseleave(function(){
      alert("Bye! You now leave p1!");
    });
  });

$(document).ready(function(){
    $("#p1").mousedown(function(){
      alert("Mouse down over p1!");
    });
  });

$(document).ready(function(){
    $("#p1").mouseup(function(){
      alert("Mouse up over p1!");
    });
  });

$(document).ready(function(){
    $("#p1").hover(function(){
      alert("You entered p1!");
    },
    function(){
      alert("Bye! You now leave p1!");
    }); 
  });

$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "green");
    });
  });

$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "green");
    });
  });

$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });

$(document).ready(function(){
    $("button").click(function(){
      $("p").hide(1800);
    });
  });



$(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
  });

$(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(3000);
    });
  });

$(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(3000);
    });
  });

$(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeTo("slow", 0.15);
      $("#div2").fadeTo("slow", 0.4);
      $("#div3").fadeTo("slow", 0.7);
    });
  });

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideUp("slow");
    });
  });

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left: '250px'});
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      height: 'toggle'
    });
  });
});

$(document).ready(function(){
  $("button").click(function(){
    var div = $("div");  
    div.animate({left: '100px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
  });
});

$(document).ready(function(){
  $("#flip").click(function(){
     $("#panel").slideDown(5000);
   });
   $("#stop").click(function(){
     $("#panel").stop();
   });
 });


 $(document).ready(function(){
   $("button").click(function(){
     $("p").hide("slow", function(){
       alert("The paragraph is now hidden");
     });
   });
 });

 $(document).ready(function(){
   $("button").click(function(){
     $("p").hide(1000);
     alert("The paragraph is now hidden");
   });
 });

 $(document).ready(function(){
   $("button").click(function(){
     $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
   });
 });

 $(document).ready(function(){
   $("#btn1").click(function(){
     alert("Text: " + $("#test").text());
   });
   $("#btn2").click(function(){
     alert("HTML: " + $("#test").html());
   });
 });

 $(document).ready(function(){
   $("button").click(function(){
     alert("Value: " + $("#test").val());
   });
 });

 $(document).ready(function(){
   $("#btn1").click(function(){
     $("#test1").text("Hello world!");
   });
   $("#btn2").click(function(){
     $("#test2").html("<b>Hello world!</b>");
   });
   $("#btn3").click(function(){
     $("#test3").val("Dolly Duck");
   });
 });

 $(document).ready(function(){
   $("#btn1").click(function(){
     $("p").append(" <b>priya</b>.");
   });

   $("#btn2").click(function(){
     $("ol").append("<li>dharshini</li>");
   });
 });

 $(document).ready(function(){
   $("#btn1").click(function(){
     $("p").prepend("<b>Prepended text</b>. ");
   });
   $("#btn2").click(function(){
     $("ol").prepend("<li>Prepended item</li>");
   });
 });

 $(document).ready(function(){
   $("#btn1").click(function(){
     $("img").before("<b>Before</b>");
   });

   $("#btn2").click(function(){
     $("img").after("<i>After</i>");
   });
 });

 $(document).ready(function(){
   $("button").click(function(){
     $("#div1").remove();
   });
 });
 $(document).ready(function(){
   $("button").click(function(){
     $("#div1").empty();
   });
 });


 $(document).ready(function(){
   $("button").click(function(){
     $("h1, h2, p").addClass("blue");
     $("div").addClass("important");
   });
 });

 $(document).ready(function(){
   $("button").click(function(){
     $("h1, h2, p").removeClass("blue");
   });
 });

$(document).ready(function(){
  $("button").click(function(){
    $("h1, h2, p").toggleClass("blue");
  });
});





















