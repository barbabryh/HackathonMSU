$(document).ready(function(){
    $('load.html').click (function (e) {
        e.preventDefault(); //will stop the link href to call the blog page
     
        setTimeout(function () {
            window.location.href = "main.html"; //will redirect to your blog page (an ex: blog.html)
         }, 2000); //will call the function after 2 secs.
     
     });
})