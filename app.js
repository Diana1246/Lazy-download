if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');

    const options = {
      root: null,  
      threshold: 0.5  
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          observer.unobserve(img);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    images.forEach(image => {
      observer.observe(image);
    });
  } 
 
 