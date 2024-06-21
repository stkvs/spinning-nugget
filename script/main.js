document.addEventListener('DOMContentLoaded', function() {
    var imgElement = document.querySelector('img');
    var button = document.querySelector('.play');
    imgElement.style.display = 'none';

    button.addEventListener('click', function() {
        var audioElement = document.querySelector('audio');
        button.style.display = 'none';
        setTimeout(function() {
            imgElement.style.display = 'block';
            audioElement.volume = 0.3;
            audioElement.loop = true;
            audioElement.play();
        }, 2000);
    });
});