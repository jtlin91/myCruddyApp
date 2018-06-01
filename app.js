$(document).ready(function() {

    $('.setData').on('click', function() {
      let textName = $('.textName').val();
      let textCode = $('.textCode').val().replace(/\n/g, '<br>').replace(/ /g, '&nbsp');
      //$('.debug').text(textFieldValue);
      //.replace(/\n/g, '<br>')
      localStorage.setItem('codeData', textCode);
      localStorage.setItem('nameData', textName);
      $('.textName').val('');
      $('.textCode').val('');

    });

    $('.getData').on('click', function() {
      let retrievedName = localStorage.getItem('nameData');
      let retrievedCode = localStorage.getItem('codeData');
      $('.debug').html(retrievedName + "<br></br>" + "<code>" + retrievedCode + "</code>");
    });


    // $('.textField').on('keyup', function() {
    //   let textFieldValue = $('.textField').val();
    //   $('.debug').text(textFieldValue);
    // });
});
