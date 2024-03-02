document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById('text');
    const image = document.getElementById('image');
  
    text.addEventListener('mouseover', function() {
      image.style.display = 'block';
    });
  
    text.addEventListener('mouseout', function() {
      image.style.display = 'none';
    });
  });
  