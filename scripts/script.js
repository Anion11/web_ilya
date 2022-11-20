window.onload = function(){
	document.querySelector("#imgZipCode").addEventListener("keypress", function (evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }

});
}
let image = document.querySelector('.containerImage');
let frame = image.querySelectorAll('img');
let timeout = null;

containerImage.addEventListener('mouseenter', function() {
  let time = 3; // Время перелистывания
  let i = 0;

  change();

  function change() {
    frame[i].style.zIndex = 100;
    if (frame[++i]) {
      // Если существует следующая картинка - функция вызывает сама себя.
      timeout = setTimeout(change, time); // Уже с увеличенным временем.
    }
  }
});

containerImage.addEventListener('mouseleave', function() {
  clearTimeout(timeout);
  for( let i = 0; i < frame.length; i++ ){
    frame[i].style.zIndex = 0;
  }
});
