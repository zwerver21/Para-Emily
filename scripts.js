const heart = document.getElementById("heart");

heart.addEventListener("mouseover", () => {
    heart.style.transform = "scale(1.2)"; // Aumenta o tamanho
    heart.style.transition = "transform 0.3s"; // Aplica a transição suave
});

heart.addEventListener("mouseout", () => {
    heart.style.transform = "scale(1)"; // Volta ao tamanho original
});
