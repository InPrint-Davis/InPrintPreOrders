document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.querySelector('body').classList.toggle('loaded');
  }, 500);

  setTimeout(function() {
    document.querySelector('body').classList.toggle('nloaded');
  }, 1000);
});
