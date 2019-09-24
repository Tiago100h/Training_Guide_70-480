/// <reference path="jquery-3.4.1.min.js" />

$(document).ready(function () {
    $('#media').on('play', function () {
        $('#message').html($('#media')[0].currentSrc);
    });
});