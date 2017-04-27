$(document).ready(function(event){
  $("form").submit(function(event){

    var a = parseInt($("input#firstLength").val());
    var b = parseInt($("input#secondLength").val());
    var c = parseInt($("input#thirdLength").val());

    //
    if ((a+b<=c) || (b+c<=a) || (c+a<=b)) {
      //Not a triangle
      $("#output").text("NOT a Triangle!!");
    }
    else if ((a===b && a===c) && (b===c && b===a) && (c===a && c===b)){
      //Equilateral triangle
      $("#output").text("Equilateral Triangle");
    }
    else if ((a===b && a!=c) || (b===c && b!=a ) || (c===a && c!=b)) {
      //Isoceles triangle
      $("#output").text("Isoceles Triangle");
    }
    else if ((a!=b && a!==c) && (b!=a && b!=c) && (c!=a && c!==b)) {
      //Scalene triangle
      $("#output").text("Scalene Triangle");
    }
    else {
      $("#output").text("You've gone KooKoo!");
    }

    event.preventDefault();
  });
});
