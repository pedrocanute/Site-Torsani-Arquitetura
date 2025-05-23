document
      .querySelectorAll('.temModal .carousel-item img')
      .forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
          const modalImg = document.getElementById('lightboxImage');
          modalImg.src = img.src;
          new bootstrap.Modal(document.getElementById('lightboxModal')).show();
        });
      });

    let botao = document.getElementById('btnVerMais');

    function verMenos() {
      if (botao.innerText == 'Ver Menos') {
        botao.innerText = 'Ver Mais Projetos';
      }
      else {
        botao.innerText = 'Ver Menos';
      }
    }