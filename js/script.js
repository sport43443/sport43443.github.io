function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    $("input[name='utm_term']").val(vars['utm_term']);
    $("input[name='utm_source']").val(vars['utm_source']);
    return vars;
}
$(document).ready(function() {
    $('.popup-close').click(function() {
        $('.popup-overlay').css('display', 'none');
        $('.popup-overlay1').css('display', 'none');
    });
    $('.when1').addClass('active');
    $('.calltime').hide('slow');
    $('.when1').click(function() {
        $('.calltime').hide('normal');
        $('.when2').removeClass('active');
        $(this).addClass('active');
        $('#timebutton').val("Позвонить сейчас");
    });
    $('.when2').click(function() {
        $('.calltime').show('normal');
        $('.when1').removeClass('active');
        $(this).addClass('active');
        $('#timebutton').val("Позвонить позже");
    });
    $('.wbut').hover(function() {
        $('.mbut').removeClass('active');
        $(this).addClass('active');
        $('.woman').css('display', 'block');
        $('.man').css('display', 'none');
    });
    $('.mbut').hover(function() {
        $('.wbut').removeClass('active');
        $(this).addClass('active');
        $('.man').css('display', 'block');
        $('.woman').css('display', 'none');
    });
    $('.ask').click(function() {
        $('.askform .feedback-form2').css("margin-top", $(window).scrollTop());
        $('#askform').toggle();
        return false;
    });
    $('#mbutton').click(function() {
        $('.askform .feedback-form2').css("margin-top", $(window).scrollTop());
        $('#backform1').toggle();
        return false;
    });
    $('.call').click(function() {
        $('.askform .feedback-form2').css("margin-top", $(window).scrollTop());
        $('#backform1').toggle();
        return false;
    });
    $('.calllink').click(function() {
        $('.askform .feedback-form2').css("margin-top", $(window).scrollTop());
        $('#backform1').toggle();
        return false;
    });
    $('.learnmore_zakaz').click(function() {
        $('.askform .feedback-form2').css("margin-top", $(window).scrollTop());
        $('#backform1').toggle();
        return false;
    });
    $('.tel').mask("+9999 999-99-99");
    getUrlVars();
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: false,
        smartSpeed: 1000,
        autoHeight: true
    });
    // $(".form").submit(function(e) {
    //     var v = $(this).find('.isreg').val();
    //     if (v == '' || v == '(+    )       ') {
    //         $(this).find('.isreg').focus();
    //         $(this).find('.isreg').addClass('error');
    //         return false;
    //     }
    //     $('#thx_zvonok .feedback-form2').css("margin-top", $(window).scrollTop());
    //     $("#thx_zvonok").fadeIn("slow");
    //     $.ajax({
    //         type: "POST",
    //         url: 'sendmessage.php',
    //         data: $(this).serialize(),
    //         success: function(data) {
    //             if (data == "true") {
    //                 $("#backform1").fadeOut("fast");
    //                 $("#thx_zvonok").fadeIn("slow");
    //                 setTimeout(function() {
    //                     $("#thx_zvonok").fadeOut("slow")
    //                 }, 60000);
    //             }
    //         }
    //     });
    //     e.preventDefault();
    // });
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    $("input[name='utm_term']").val(vars['utm_term']);
    $("input[name='utm_source']").val(vars['utm_source']);
    return vars;
}
$(document).ready(function() {
    $('.popup-close').click(function() {
        $('.popup-overlay').css('display', 'none');
        $('.popup-overlay1').css('display', 'none');
    });
    $('.when1').addClass('active');
    $('.calltime').hide('slow');
    $('.when1').click(function() {
        $('.calltime').hide('normal');
        $('.when2').removeClass('active');
        $(this).addClass('active');
        $('#timebutton').val("Позвонить сейчас");
    });
    $('.when2').click(function() {
        $('.calltime').show('normal');
        $('.when1').removeClass('active');
        $(this).addClass('active');
        $('#timebutton').val("Позвонить позже");
    });
    $('.wbut').hover(function() {
        $('.mbut').removeClass('active');
        $(this).addClass('active');
        $('.woman').css('display', 'block');
        $('.man').css('display', 'none');
    });
    $('.mbut').hover(function() {
        $('.wbut').removeClass('active');
        $(this).addClass('active');
        $('.man').css('display', 'block');
        $('.woman').css('display', 'none');
    });
    $('.learnmore').click(function() {
        $('.askform .feedback-form2').css("margin-top", $(window).scrollTop());
        $('#backform').toggle();
        return false;
    });
    $('.call_cena').click(function() {
        $('.askform .feedback-form2').css("margin-top", $(window).scrollTop());
        $('#backform').toggle();
        return false;
    });
    $('.tel').mask("+9999 999-99-99");
    getUrlVars();
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: false,
        smartSpeed: 1000,
        autoHeight: true
    });
    // $(".form_cena").submit(function(e) {
    //     var v = $(this).find('.isreg').val();
    //     if (v == '' || v == '(+    )       ') {
    //         $(this).find('.isreg').focus();
    //         $(this).find('.isreg').addClass('error');
    //         return false;
    //     }
    //     $('#thx .feedback-form2').css("margin-top", $(window).scrollTop());
    //     $("#thx").fadeIn("slow");
    //     $.ajax({
    //         type: "POST",
    //         url: 'sendmessage.php',
    //         data: $(this).serialize(),
    //         success: function(data) {
    //             if (data == "true") {
    //                 $("#backform").fadeOut("fast");
    //                 $("#thx").fadeIn("slow");
    //                 setTimeout(function() {
    //                     $("#thx").fadeOut("slow")
    //                 }, 60000);
    //             }
    //         }
    //     });
    //     e.preventDefault();
    // });
});