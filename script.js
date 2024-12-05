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


$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var audio = document.getElementById('audio'); // Ambil elemen audio

    // Pesan surat diperbarui
    var message = `
      Dear Tyara,<br><br>

      Maybe our love story doesn't start like those romantic couple out there.<br>

      But it's ok as long as I still have you.<br>

      Of course it's not like I don't like being romantic, but it's ok because we still have so much to grow. (Maybe we can start by something simple like answering each other message or MAYBE we could hang out sometimes u know?)<br>
     
      However. <br>

      I'm just thankful for how you accepted me even though I'm not even like the ordinary man.<br>

      from my own eyes im just a guy who isnt good at anything and sometimes i play around too much making me an uncharismatic character and just a tripping stone wich is why some people might not liked me 😅<br>

      But The truth is I've always prayed to God for something like this to happen.<br>

      When I ask for something new in my life, God introduced me to you.<br>
      And when I ask for strength, God gave me several difficulties or problem from the start of our interaction to make my heart stronger.<br>

      I ask for wisdom, and God gave me problems from every possible side like school, organization, and you, for me to Learn.<br>

      I asked for courage, and God gave me a situation to overcome my cowardly self.<br>

      And when I asked for love, God gave me the strength, wisdom, courage, and patience to ask you out.<br>

      "Ask and you shall receive."  Matthew 7:7<br><br>

      After all that, it came to my conclusion that all of my prayers were answered by God with you.<br><br>

      Listen to the song btw Cause if u ever hear this song before, you know where it came from (this song is the literal 1:1 scale of how i love you since day 1)<br>

      and also cuz the song is kinda Fire 🔥🔥<br><br>

      Best regards,<br>
      Geo. ❤️
    `;

    $('#letter-content').html(message); // Tambahkan pesan ke surat

    envelope.click(function () {
        open();
    });

    btn_open.click(function () {
        open();
    });

    btn_reset.click(function () {
        close(); // Tutup surat
        resetAnimation(); // Reset animasi
    });

    function open() {
        envelope.addClass("open").removeClass("close");

        // Aktifkan ulang animasi scroll dengan kecepatan lambat
        var contentHeight = $('#letter-content').outerHeight();
        if (contentHeight > 0) {
            var animationDuration = Math.max(contentHeight / 20, 40); // Durasi minimum 40 detik untuk surat panjang
            $('.content').css({
                animation: `scrollText ${animationDuration}s linear`,
                transform: "translateY(0%)" // Mulai dari atas
            });
        }

        // Putar lagu saat surat dibuka
        if (audio) {
            audio.play();
        }
    }

    function close() {
        envelope.addClass("close").removeClass("open");

        // Reset posisi teks ke atas
        $('.content').css({
            animation: "none", // Hentikan animasi
            transform: "translateY(0%)" // Reset ke posisi awal
        });

        // Reload pesan jika hilang
        $('#letter-content').html(message);
    }

    function resetAnimation() {
        $('.content').css({
            animation: "none" // Hapus animasi
        });
        setTimeout(() => {
            // Aktifkan kembali animasi dengan delay kecil
            open();
        }, 10); // Delay untuk memastikan animasi di-restart
    }
});
