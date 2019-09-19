///<reference path="jquery-3.4.1.min.js" />

$(document).ready(function () {
    $('#submit').on('click', callServer);
});

function callServer() {
    var data = $('#ContactForm').serialize();
    $.post('/ContactService', data, function (returnObject) {
        $('#result').html(returnObject.result);
    }, 'json');
}