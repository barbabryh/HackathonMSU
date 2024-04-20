$(document).ready(function(){
    $(".hover_green").addClass("sectionnone");
    $("#schedule").click(function(){
        $(".hover_green").addClass("sectionblock");
        $(".hover_green_teams").removeClass('sectionblock').addClass("sectionnone");
        $(".hover_green_other").removeClass('sectionblock').addClass("sectionnone");
        $(".hover_green_profile").removeClass('sectionblock').addClass("sectionnone");
    });

    $(".hover_green_team").addClass("sectionnone");
    $("#teams").click(function(){
        $(".hover_green_teams").addClass("sectionblock");
        $(".hover_green").removeClass('sectionblock').addClass("sectionnone");
        $(".hover_green_other").addClass("sectionnone");
        $(".hover_green_profile").addClass("sectionnone");
    });

    $(".hover_green_other").addClass("sectionnone");
    $("#other").click(function(){
        $(".hover_green_other").addClass("sectionblock");
        $(".hover_green").removeClass('sectionblock').addClass("sectionnone");
        $(".hover_green_teams").addClass("sectionnone");
        $(".hover_green_profile").addClass("sectionnone");
    });

    $(".hover_green_profile").addClass("sectionnone");
    $("#profile").click(function(){
        $(".hover_green_profile").addClass("sectionblock");
        $(".hover_green").removeClass('sectionblock').addClass("sectionnone");
        $(".hover_green_teams").addClass("sectionnone");
        $(".hover_green_other").addClass("sectionnone");
    });
    

    $("#schedule").on('mouseenter', function(){
        $(".hover_green").addClass("sectionblock");
    $("#schedule").on('mouseleave', function(){
        $(".hover_green").removeClass('sectionblock').addClass("sectionnone");
    });
});

    $("#teams").on('mouseenter', function(){
       $(".hover_green_teams").addClass("sectionblock");
    $("#teams").on('mouseleave', function(){
       $(".hover_green_teams").removeClass('sectionblock').addClass("sectionnone");
    });
});

$("#other").on('mouseenter', function(){
    $(".hover_green_other").addClass("sectionblock");
 $("#other").on('mouseleave', function(){
    $(".hover_green_other").removeClass('sectionblock').addClass("sectionnone");
 });
});

$("#profile").on('mouseenter', function(){
    $(".hover_green_profile").addClass("sectionblock");
 $("#profile").on('mouseleave', function(){
    $(".hover_green_profile").removeClass('sectionblock').addClass("sectionnone");
 });
});
  
});