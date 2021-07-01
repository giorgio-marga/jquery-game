$(document).ready( function() {

  $.fn.random = function() {
    return this.eq(Math.floor(Math.random() * this.length));
  }

  $('#playButton').on('click', function() {
      var intervalCountdown = setInterval(function() {
        var counter = parseInt($('#countdown').html());
        if (counter > 0) {
          $('#countdown').html(counter - 1);
          if ($('#countdown').html() == '0') {
           $('#playButton').text('RETRY');
          }
        } else {
          clearInterval(intervalCountdown);
        }
        if (counter == 1) {
          $('.buttons-container button').random().css('border-color', 'red');
        }
      }, 1000);
  });

  $('#playButton').on('click', function() {
    var intervalTime = setInterval(function() {
      var timer = parseInt($('#time').html());
      var countdown = $('#countdown').html();
      if (countdown == 0) {
        $('#time').html(timer + 10);
      }
      $('.buttons-container').on('click', function() {
        var anyButton = $(this).find('.buttons-up'.button, '.buttons-down'.button);
        var clicked = $(anyButton).data('clicked', true);

        if (clicked) {
          clearInterval(intervalTime);
        }
      });
    }, 100);
  });

  $('#playButton').on('click', function() {
    var playButton = $('#playButton').html();
    if (playButton == 'RETRY') {
      $('#countdown').html(3);
      $('#time').html(0);
      $('.buttons-container button').css('border-color', 'green');
    }
  });

});
