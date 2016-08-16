/**
 * Created by nkraft on 8/15/2016.
 */
$(document).ready(function() {
    $.ajax({
        url: "http://booksite-app.appspot.com/api/newsletter/7419/CNL2/current",
        type: "GET",
        dataType: 'jsonp',
        headers: { "x-api-key": "2143ef40e718a8364a3704a15f6bb3441eb4030fa5bc8c8d58034a65aaaf01c6" }
    }).then(function(data) {
        // $('.greeting-id').append(data.id);
        $('.greeting-id').append(data);
        // $('.greeting-content').append(data.content);
    });
});


