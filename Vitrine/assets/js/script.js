/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $('.parallax').parallax();
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        //$('#navbar').css('top', '0');
        $('#navbar').fadeIn();
    } else {
        //$('#navbar').css('top', '-64px');
        $('#navbar').fadeOut();
    }
    prevScrollpos = currentScrollPos;
};