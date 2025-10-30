/* =====================================================
Template Name   : Visapos
Description     : Immigration and Visa Consulting HTML5 Template
Author          : Themesland
Version         : 1.2
=======================================================*/

(function ($) {
    "use strict";

    //Header Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function () {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }



    // data-background    
    $(document).on('ready', function () {
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });


    // wow init
    new WOW().init();


    // hero slider
    $('.hero-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: -1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        items: 1,
        navText: [
            "<i class='fal fa-long-arrow-left'></i>",
            "<i class='fal fa-long-arrow-right'></i>"
        ],
    });

    $('.hero-slider').on('change.owl.carousel', function (event) {
        new WOW().init();
    });


    // partner-slider
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    // testimonial-slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // coaching-slider
    $('.coaching-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
        ],
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // country-slider
    $('.country-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
        ],
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });



    // preloader
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });


    // fun fact counter
    $('.counter').countTo();
    $('.counter-box').appear(function () {
        $('.counter').countTo();
    }, {
        accY: -100
    });


    // progress bar
    $(document).ready(function () {
        var progressBar = $('.progress');
        if (progressBar.length) {
            progressBar.each(function () {
                var Self = $(this);
                Self.appear(function () {
                    var progressValue = Self.data('value');
                    Self.find('.progress-bar').animate({
                        width: progressValue + '%'
                    }, 1000);
                });
            })
        }
    });


    // magnific popup init
    $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    // scroll to top
    $(window).scroll(function () {

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").fadeIn('slow');
        } else {
            $("#scroll-top").fadeOut('slow');
        }
    });

    $("#scroll-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
        }
    });

  

    // countdown
    if ($('#countdown').length) {
        $('#countdown').countdown('2030/01/30', function (event) {
            $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
        });
    }

    // date

    let date= new Date().getFullYear();
    $("#date").html(date);


    // project filter
    $(window).on('load', function () {
        if( $(".filter-box").children().length > 0 ) {
            $(".filter-box").isotope({
                itemSelector: '.filter-item',
                masonry: {
                  columnWidth: 1
                },
            });

            $('.filter-btns').on( 'click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $(".filter-box").isotope({ filter: filterValue });
            });

            $(".filter-btns li").each(function(){
                $(this).on("click", function(){
                    $(this).siblings("li.active").removeClass("active"); 
                    $(this).addClass("active");
                });
            });
        }
    });

// Smooth scroll to quote section (extra offset for fixed header)
$('a[href^="#quote1"]').on('click', function (e) {
    e.preventDefault();

    var target = $(this.getAttribute('href'));
    if (target.length) {
        // Get total header height (including margins)
        var headerHeight = $('.header').outerHeight(true) || 0;

        // Add a little more offset (extra 80px padding)
        var totalOffset = headerHeight + 155;

        $('html, body').animate({
            scrollTop: target.offset().top - totalOffset
        }, 1200, 'easeInOutExpo');
    }
});
// Smooth scroll to quote section (extra offset for fixed header)
$('a[href^="#quote1"]').on('click', function (e) {
    e.preventDefault();

    var target = $(this.getAttribute('href'));
    if (target.length) {
        // Get total header height (including margins)
        var headerHeight = $('.header').outerHeight(true) || 0;

        // Add a little more offset (extra 80px padding)
        var totalOffset = headerHeight + 155;

        $('html, body').animate({
            scrollTop: target.offset().top - totalOffset
        }, 1200, 'easeInOutExpo');
    }
});

// ✅ Perfect GET QUOTE positioning — works from any page instantly
$(window).on('load', function() {
    const hash = window.location.hash;

    if (hash === '#quote1') {
        const target = $(hash);

        if (target.length) {
            // Wait just enough for preloader and layout stabilization
            const headerHeight = $('.header').outerHeight(true) || 0;
            const totalOffset = headerHeight + 155;

            // Instantly jump to the correct spot (no smooth scroll)
            $('html, body').scrollTop(target.offset().top - totalOffset);
        }
    }
});

// Enhanced Comment Form Handling with Spam Protection
$(document).ready(function() {
    let lastCommentTime = 0;
    const MIN_COMMENT_INTERVAL = 30000; // 30 seconds between comments
    
    $('#commentForm').on('submit', function(e) {
        e.preventDefault();
        
        var name = $('#commentName').val().trim();
        var email = $('#commentEmail').val().trim();
        var comment = $('#commentText').val().trim();
        
        // Validation
        if (!validateForm(name, email, comment)) {
            return;
        }
        
        // Spam protection - time between comments
        var currentTime = new Date().getTime();
        if (currentTime - lastCommentTime < MIN_COMMENT_INTERVAL) {
            showMessage('Please wait a moment before posting another comment.', 'error');
            return;
        }
        
        // Spam protection - comment length
        if (comment.length < 10) {
            showMessage('Comment must be at least 10 characters long.', 'error');
            return;
        }
        
        if (comment.length > 1000) {
            showMessage('Comment is too long. Maximum 1000 characters allowed.', 'error');
            return;
        }
        
        // Disable submit button during processing
        var submitBtn = $(this).find('.theme-btn');
        var originalText = submitBtn.html();
        submitBtn.prop('disabled', true).html('Posting... <i class="far fa-spinner fa-spin"></i>');
        
        // Simulate processing delay
        setTimeout(function() {
            createNewComment(name, comment);
            $('#commentForm')[0].reset();
            showMessage('Thank you! Your comment has been posted successfully.', 'success');
            lastCommentTime = new Date().getTime();
            
            // Re-enable button
            submitBtn.prop('disabled', false).html(originalText);
        }, 1500);
    });
    
    function validateForm(name, email, comment) {
        if (name === '' || email === '' || comment === '') {
            showMessage('Please fill in all required fields.', 'error');
            return false;
        }
        
        if (name.length < 2) {
            showMessage('Name must be at least 2 characters long.', 'error');
            return false;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return false;
        }
        
        return true;
    }
    
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showMessage(message, type) {
        var messageDiv = $('#commentMessage');
        messageDiv.removeClass('alert-success alert-danger');
        
        var styles = type === 'success' ? {
            'background': '#d4edda',
            'color': '#155724',
            'border': '1px solid #c3e6cb'
        } : {
            'background': '#f8d7da',
            'color': '#721c24',
            'border': '1px solid #f5c6cb'
        };
        
        messageDiv.addClass('alert-' + type).css(styles).html(
            '<i class="far ' + (type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle') + '"></i> ' + message
        ).slideDown();
        
        setTimeout(function() {
            messageDiv.slideUp();
        }, 5000);
    }
    
    function createNewComment(name, comment) {
        var currentDate = new Date();
        var dateString = currentDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        var avatarNumber = (name.length % 3) + 1;
        var avatarSrc = 'assets/img/blog/com-' + avatarNumber + '.jpg';
        
        var newComment = $(
            '<div class="blog-comments-single" style="display:none;">' +
            '    <img src="' + avatarSrc + '" alt="' + name + '">' +
            '    <div class="blog-comments-content">' +
            '        <h5>' + escapeHtml(name) + '</h5>' +
            '        <span><i class="far fa-clock"></i> ' + dateString + '</span>' +
            '        <p>' + escapeHtml(comment).replace(/\n/g, '<br>') + '</p>' +
            '        <a href="#" class="reply-btn"><i class="far fa-reply"></i> Reply</a>' +
            '    </div>' +
            '</div>'
        );
        
        $('.blog-comments-wrapper').prepend(newComment);
        newComment.slideDown(400);
        updateCommentsCount();
        
        // Add reply functionality
        newComment.find('.reply-btn').on('click', function(e) {
            e.preventDefault();
            $('#commentText').focus().val('@' + name + ': ').trigger('input');
            $('html, body').animate({
                scrollTop: $('#commentForm').offset().top - 100
            }, 500);
        });
    }
    
    function escapeHtml(text) {
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    function updateCommentsCount() {
        var commentsCount = $('.blog-comments-single').length;
        var countText = commentsCount + ' Comment' + (commentsCount !== 1 ? 's' : '');
        $('.blog-comments h4').text(countText);
    }
    
    updateCommentsCount();
});

})(jQuery);










