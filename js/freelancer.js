/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Abstract toggle functionality
function toggleAbstract(abstractId, buttonElement) {
    const abstractContent = document.getElementById(abstractId);
    if (abstractContent.classList.contains('show')) {
        abstractContent.classList.remove('show');
        buttonElement.classList.remove('active');
    } else {
        abstractContent.classList.add('show');
        buttonElement.classList.add('active');
    }
}

// Set active navigation item based on current page
$(document).ready(function() {
    var currentPage = window.location.pathname.split('/').pop();
    $('.navbar-nav li a').each(function() {
        var href = $(this).attr('href');
        if (href === currentPage) {
            $(this).parent().addClass('active');
        }
    });
});
