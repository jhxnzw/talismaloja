
        document.getElementById("rolarBotao").addEventListener("click", function () {
            // Rolando suavemente para o ponto específico da página
            document.getElementById("destino").scrollIntoView({ behavior: "smooth" });
          });
          let indice = 0;
          let intervalo; // Variável para armazenar o intervalo
          
          function proximo() {
            indice++;
            if (indice >= document.querySelectorAll(".imagem").length) {
              indice = 0;
            }
            atualizarCarrossel();
          }
          
          function anterior() {
            indice--;
            if (indice < 0) {
              indice = document.querySelectorAll(".imagem").length - 1;
            }
            atualizarCarrossel();
          }
          
          function atualizarCarrossel() {
            const imagens = document.getElementById("imagens");
            imagens.style.transform = `translateX(-${indice * 1359}px)`;
          }
          
          // Iniciar o carrossel automático
          function iniciarCarrossel() {
            intervalo = setInterval(proximo, 3000); // Troca de imagem a cada 3 segundos (3000 milissegundos)
          }
          
          // Parar o carrossel automático
          function pararCarrossel() {
            clearInterval(intervalo);
          }
          
          // Chame a função iniciarCarrossel quando a página for carregada
          window.onload = iniciarCarrossel;
          
          // Para pausar o carrossel ao passar o mouse sobre ele
          const imagensContainer = document.getElementById("imagens");
          imagensContainer.addEventListener("mouseenter", pararCarrossel);
          imagensContainer.addEventListener("mouseleave", iniciarCarrossel);
