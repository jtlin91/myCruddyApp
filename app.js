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
      let textName = $('.textSearch').val() + "**";
      let retrievedCode = localStorage.getItem(textName);
      textName = textName.slice(0,-2);
      $('.debug').html("<h3>" + textName + "</h3><pre><code>" + retrievedCode + "</code><pre>");

      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });

    $('.allData').on('click', function() {
      $('.debug').html('');
      for (var key in localStorage) {
        if (key.includes("**")) {
          let textName = key;
          let retrievedCode = localStorage.getItem(textName);
          textName = textName.slice(0,-2);
          $('.debug').append("<h3>" + textName + "</h3><pre><code>" + retrievedCode + "</code></pre><br></br>");
        }
      }
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });


    // $('.textField').on('keyup', function() {
    //   let textFieldValue = $('.textField').val();
    //   $('.debug').text(textFieldValue);
    // });
});
