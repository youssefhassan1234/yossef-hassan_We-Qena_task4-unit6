document.querySelectorAll('.stars').forEach(starsContainer => {
    const stars = starsContainer.querySelectorAll('span');
    stars.forEach((star, index) => {
      star.addEventListener('mouseover', () => {
        stars.forEach((s, i) => s.classList.toggle('inactive', i > index));
      });
  
      star.addEventListener('mouseout', () => {
        const rating = starsContainer.getAttribute('data-rating') || 0;
        stars.forEach((s, i) => s.classList.toggle('inactive', i >= rating));
      });
  
      star.addEventListener('click', () => {
        starsContainer.setAttribute('data-rating', index + 1);
      });
    });
  });
  