$("#box2").css({
    width:100,
    height:100,
    backgroundColor: "orange",
}).on ({
    "mouseenter": function(){$(this).css({backgroundColorgr: "green"});},
    "click":      function(){$(this).css({backgroundColorgr: "red"});},
    "mouseleave": function(){$(this).css({backgroundColorgr: "orange"});}
})