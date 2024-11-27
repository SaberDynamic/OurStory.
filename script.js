$(".option").click(function(){
   $(".option").removeClass("active");
   $(this).addClass("active");
   
});

let lastClickedOption = null; // Variabel untuk menyimpan elemen terakhir yang diklik

$(".option").click(function () {
    if ($(this).hasClass("active")) {
        // Jika elemen aktif dan diklik lagi
        if (lastClickedOption === this) {
         // Periksa apakah elemen yang diklik adalah Chapter 1
         if ($(this).find(".main").text() === "Chapter 1") {
             // Redirect hanya untuk Chapter 1
             window.location.href = "firstlove.html";
         }
         return;
     }     
    }
    // Jika elemen belum aktif, aktifkan elemen tersebut
    $(".option").removeClass("active");
    $(this).addClass("active");
    lastClickedOption = this; // Simpan elemen yang terakhir diklik
});


$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
  
    // Contoh pesan
    var message = `
      Dear someone special,<br><br>
      This is an example of a long message.<br>
      The letter dynamically adjusts its height as the message grows.<br><br>
      Keep adding more content to see the scrolling effect in action.<br>
      You can write as much as you want, and it will keep scrolling endlessly!<br><br>
      Best regards,<br>
      Someone who cares. ❤️
    `;
  
    // Tambahkan pesan ke dalam surat
    $('#letter-content').html(message);
  
    envelope.click(function () {
      open();
    });
  
    btn_open.click(function () {
      open();
    });
  
    btn_reset.click(function () {
      close();
    });
  
    function open() {
      envelope.addClass("open")
        .removeClass("close");
  
      // Aktifkan animasi infinite scrolling
      var contentHeight = $('#letter-content').height();
      $('.content').css({
        animationDuration: contentHeight / 50 + "s" // Kecepatan animasi tergantung panjang teks
      });
    }
  
    function close() {
      envelope.addClass("close")
        .removeClass("open");
  
      // Matikan animasi saat ditutup
      $('.content').css({
        animation: "none"
      });
    }
  });
  