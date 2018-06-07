$(document).ready(function() {


    $('.setData').on('click', function() {
      let textName = $('.textName').val() + "**";
      let textCode = $('.textCode').val();
      //.replace(/\n/g, '<br>').replace(/ /g, '&nbsp');
      //$('.debug').text(textFieldValue);
      //.replace(/\n/g, '<br>')
      localStorage.setItem(textName, textCode);
      $('.textName').val('');
      $('.textCode').val('');

    });

    $('.getData').on('click', function() {
      let textName = $('.textName').val() + "**";
      let retrievedCode = localStorage.getItem(textName);
      textName = textName.slice(0,-2);
      $('.debug').html(textName + "<br></br>" + "<code>" + retrievedCode + "</code>");
    });

    $('.allData').on('click', function() {
      for (var key in localStorage) {
        if (key.includes("**")) {
          let textName = key;
          let retrievedCode = localStorage.getItem(textName);
          textName = textName.slice(0,-2);
          $('.debug').append("<div>" + textName + "<br></br>" + "<code>" + retrievedCode + "</code></div>");
        }
      }
    });


    // $('.textField').on('keyup', function() {
    //   let textFieldValue = $('.textField').val();
    //   $('.debug').text(textFieldValue);
    // });
});
