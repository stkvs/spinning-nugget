document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('loop');
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(function(error) {
        console.log('Autoplay failed:', error);
    });
});