
  document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
        entry.target.classList.remove('visible');       
        }
      });
    });

    
    document.querySelectorAll('.hidden-left, .hidden-right, .hidden-bottom').forEach(el => {
      observer.observe(el);
    });
  });

