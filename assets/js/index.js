// navbar state 

// smooth scroll
var isOpen = false;
$(document).ready(function(){
    
    $("section").click(function(){
        if(isOpen === true){
            $('#nav-toggle').toggleClass('is-active')
            $('ul.nav').toggleClass('show');
            isOpen = !isOpen;
        }
    })
    $("header").click(function(){
        if(isOpen === true){
            $('#nav-toggle').toggleClass('is-active')
            $('ul.nav').toggleClass('show');
            isOpen = !isOpen;
        }
    })
    $(".custom-navbar .link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
            $('#nav-toggle').toggleClass('is-active')
            $('ul.nav').toggleClass('show');
            isOpen = !isOpen;
        } 
    });
});
// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
    isOpen = !isOpen;
});


function sendEmail()
{
    var params = 
    {
        name: document.getElementById("name").value,
        mailid: document.getElementById("mail").value,
        phone: document.getElementById("phonenumber").value,
        message: document.getElementById("msge").value
    }
    const serviceID = "service_syzetdl";
    const templeteID = "template_uuas5md";

    emailjs.send(serviceID,templeteID,params).then((res)=>
    {
        alert("Your message has been sent successfully !!")
    }).catch((err)=>
    {
        console.log(err);
    })
}

