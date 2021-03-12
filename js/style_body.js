$("document").ready(function () {
    $(window).scroll(function () {
        checkAnimation($('#produits #panel1'), 1)
        checkAnimation($('#produits #panel2'), 2)
        checkAnimation($('#produits #panel3'), 3)
        checkAnimation($('#produits #panel4'), 4)
        checkAnimation($('#produits #panel5'), 5)
        checkAnimation($('#produits #panel6'), 6)
        checkAnimation($('#dashboard-right1'), 7)
        checkAnimation($('#dashboard-right2'), 7)
        checkAnimation($('#dashboard-left1'), 8)
        checkAnimation($('#dashboard-left2'), 8)
    });
    images = Array("/img/bg6.png",
        "/img/Base.png");

    $('.stat:nth-child(1) .counter').counterUp({
        delay: 30,
        time: 1000
    });
    $('.stat:nth-child(2) .counter').counterUp({
        delay: 30,
        time: 2000
    });
    $('.stat:nth-child(3) .counter').counterUp({
        delay: 30,
        time: 3000
    });
    $('#loading').find("#loading-logo").fadeOut(1000)
    $('#loading').find("#loading-text").fadeOut(2300)
    $('#loading').find("#loading-loading").fadeOut(1000, function () {
        $('#loading').find('#loading-bg2').animate({
            top: '-200vh'
        }, 750, function () {
            $('#loading').find('#loading-bg1').animate({
                bottom: '-100vh'
            }, 1000, function () {
                $('#loading').hide(1)
            })
        })

    })

    currimg = 1;
    Counterimg = 2;
    loadimg();
    url = window.location.href;
    if (url.indexOf("#contact") !== -1) {
        $("#contact").fadeIn(1000);
    }
    $(".spanel").hover(function () {
        $(this).find("nav").stop().slideDown(500);
    }, function () {
        $(this).find("nav").stop().slideUp(500);
    });

    $(".closeBTN").click(function () {
        $("#contact").fadeOut(1000);
        window.location.href = "#";
        goTo("#acceuil");
    });
    $(".demo , .demo2").click(function () {
        $("#contact").fadeIn(1000);
    });


    $('.carousel-slick').slick({ "slidesToShow": 5, "slidesToScroll": 4 });


    navsTop = $(".navTop");
    ll = $(navsTop).length;
    navTop = $(navsTop).get(0);
    itiem = $(navTop).find(".navItem");
    l = $(itiem).length;
    for (var i = 0; i < l; i++) {
        el = $(itiem).get(i);
        link = $(el).find("a");

        content = $(el).html() + "<div class='item_anim'>" + $(link).html() + "</div>";
        $(el).html(content);
    }


    $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 4; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });
    navsTop = $(".snavTop");
    ll = $(navsTop).length;
    navTop = $(navsTop).get(0);
    itiem = $(navTop).find(".navItem");
    l = $(itiem).length;
    for (var i = 0; i < l; i++) {
        el = $(itiem).get(i);
        link = $(el).find("a");

        content = $(el).html() + "<div class='item_anim'>" + $(link).html() + "</div>";
        $(el).html(content);
    }
});

function goTo(id) {
    offsettop = parseInt($(id).offset().top);
    $('html, body').animate({
        scrollTop: offsettop
    }, 1000);
}




function changeM() {

    var offsettop1 = parseInt($(window).scrollTop());
    if (offsettop1 > 173) {
        $(".srall-top").show("slide", {
            direction: "down"
        }, 500);
    } else {
        $(".srall-top").hide("slide", {
            direction: "down"
        }, 500);
    }

}

//Function that handles slide animations
//All the animation times are relative to "duration" which can be changed and all the times will scale accordingly

function loadimg() {


    //Variables initation
    let anim = $(".bgAnim").toArray()
    let i = 1
    let max = anim.length
    let duration = 6000



    //Hide all content
    $(".content").find(".title").hide()
    $(".content").find(".description").hide()
    $(".content").find(".descover").hide()

    //Handling all animations
    let animate = function () {
        let head = $('#headerContent' + i)
        let bg = $('#bgAnim' + i)
        i = i == max ? 1 : i + 1;
        if (i != 1)
            setTimeout(() => $('#slideshow').find('img').removeClass('animate').css({
                top: '0',
                opacity: '0'
            }), duration / 10)

        //Set text to fadeOut after animation ends
        setTimeout(() => {
            head.find(".title").fadeOut()
            head.find(".description").fadeOut()
            head.find(".descover").fadeOut()
        }, duration)

        head.fadeOut(duration / 5)
        bg.fadeOut(duration / 5)
        head.find('ul').hide()
        let n = $('#bgAnim' + i + '>img').toArray().length;

        //Animation specific to phones sliding
        if (i == 2) {
            let rightOffset = 30; //Distance from edge of screen
            let distance = 9; //Distance between phones

            for (let j = 1; j <= n; j++) {

                $("#img" + j).show(1)
                setTimeout(() => {
                    $("#img" + j).animate({
                        right: (rightOffset + (n - j - 1) * distance) + "vw", //Ratio to distance them nicely
                        display: "inline-block"
                    }, 3 * duration / 5 / n) //Make every phone appear after fixed duration to maintain a smooth animation
                }, duration / 5 + (3 * duration / 5) / n * (j - 1)) //This duration is the time left in duration without the transitions split evenly for all phones

                //Hide phones to restart next animation
                setTimeout(() => {
                    $("#img" + j).hide(1)
                    $("#img" + j).css({
                        right: "-1000px",
                    })

                }, duration + duration / 5)
            }
        }

        if (i == 1) {
            let topOffset = 10; //distance from top
            let distance = 8; //distance between services
            let m = $('#slideshow img').toArray().length
            for (let k = 0; k < m; k++) {
                $('#slideshow img:nth-child(' + (k + 1) + ')').css({
                    'top': topOffset + 'vh',
                    'width': 200 + 'px'
                })
            }
            $('#service' + 1).addClass('animate')
            for (let k = 1; k < m; k++) {
                let sdx = setTimeout(() => $('#service' + (k + 1)).addClass('animate'), 600 * k)
            }
        }

        head = $('#headerContent' + i)
        bg = $('#bgAnim' + i)


        head.fadeIn(duration / 5)
        bg.fadeIn(duration / 5)

        head.find('.title').show('slide', {
            direction: "up"
        }, duration / 5 + 2, function () {
            let a = head.find('.description').find('li').show()
        })

        //Makes list items appear one at a time
        head.find('.description').show('slide', {
            direction: 'left'
        }, duration / 5, function () {
            let a = head.find('ul').length
            for (let k = 1; k <= a; k++)
                setTimeout(() => head.find('ul:nth-child(' + k + ')').show('slide', {
                    direction: 'left'
                }, duration / 5), (k - 1) * duration / 7)
        })


    }

    animate()
    x = setInterval(animate, duration)

    // currimg++;
    // if (currimg > Counterimg) {
    //     currimg = 1;
    // }



    // $(".bgAnim").fadeOut(1000);
    // $("#bgAnim" + currimg).fadeIn(1000);


    // $(".bgAnim").find("img").css("display", "none");
    // 
    // $(".bgAnim").find("img").css("display", "inline-block");
    // $("#img3").animate({
    // 	right:"63vh",
    // 	display:"inline-block"
    // },duration)
    // setTimeout(
    // 	()=>
    // 	$("#img2").animate({
    // 		right:"43vh",
    // 		display:"inline-block"
    // 	},duration),
    // 	1000
    // )
    // setTimeout(
    // 	()=>
    // 	$("#img1").animate({
    // 		right:"23vh",
    // 		display:"inline-block"
    // 	},duration),
    // 	2000
    // )
    // 

    //  //$(".bgAnim").find("img").show("slide", {
    //    //  direction: "right"
    //  //}, 2000)


    // $("#headerContent" + currimg).show("slide", {
    //     direction: "left"
    // }, 1000);



}



function bonmail_c(mailteste) {
    var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
    if (reg.test(mailteste)) {
        return true;
    } else {
        return false;
    }
}
isAlpha = function (ch) {
    return typeof ch === "string" && ch.length === 1 &&
        (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}


function send_contact() {
    // 
    if (send_c()) {
        $.ajax({
            type: "POST",
            url: "/json/mail.php",
            data: {
                "objet": $("#objet").val(),
                "nom_ent": $("#nom-ent").val(),
                "nom_f": $("#nom_f").val(),
                "prenom_f": $("#prenom_f").val(),
                "pays": $("#pays").val(),
                "mail": $("#mail").val(),
                "tel": $("#tel").val(),
                "Description": $("#Description").val()
            },
            dataType: "JSON",
            beforeSend: function () {
                $("#load").css("display", "inline-block");
            },
            complete: function () {
                setTimeout(function () {
                    $("#load").css("display", "none")
                }, 5000);
            },
            error: function (data) {
                $("#msg_contact").html("Error : Synchronisation des données, réessayer plus tard");
            },
            success: function (data) {

                if (data.isValid) {
                    // $('#valid').css('display','inline-block');
                    // setTimeout(function(){ 
                    // $('#valid').css('display','none');
                    // }, 2000);

                } else {


                }
            }
        });
    }
}

function isElementInViewport(el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
    // console.log(rect)
    return (
        rect.top >= 0 &&
        // rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)  /*or $(window).height() */
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

// Check if it's time to start the animation.
function checkAnimation($elem, i = 0) {
    // If the animation has already been started
    if ($elem.hasClass('start')) return;


    if (isElementInViewport($elem)) {
        // console.log($elem)
        switch (i) {
            case 1:
                $elem.animate({
                    left: '-13.5vw',
                    opacity: '1'
                }, 1000);
                break;
            case 2:
                $elem.animate({
                    left: '-18vw',
                    opacity: '1'
                }, 1000);
                break;
            case 3:
                $elem.animate({
                    left: '-13.5vw',
                    opacity: '1'
                }, 1000);
                break;
            case 4:
                $elem.animate({
                    right: '-13.5vw',
                    opacity: '1'
                }, 1000);
                break;
            case 5:
                $elem.animate({
                    right: '-18vw',
                    opacity: '1'
                }, 1000);
                break;
            case 6:
                $elem.animate({
                    right: '-13.5vw',
                    opacity: '1'
                }, 1000);
                break;
            case 7:
                $elem.animate({ 'margin-right': 0 }, 1000)
                // console.log("ssssssssss")
                break;
            case 8:
                $elem.animate({ 'margin-left': 0 }, 1000)
                // console.log("ssssssssss")
                break;
            // case 2:
            //     $elem.show('slide',{'direction':'right'},1000);
            //     break;
        }

        $elem.addClass('start');
    }
}

// Capture scroll events


function playvideo() {
    $('#play').fadeOut(1000, function () {
        document.getElementById('video').play()
        $('#video').attr('controls', 'true')
    })
}