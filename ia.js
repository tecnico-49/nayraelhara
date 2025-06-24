function consultarOraculo() {
  const frasesOraculo = [
    "Confía, el universo ya está trabajando a tu favor.",
    "Recuerda quién eres: una chispa eterna de luz.",
    "Lo que hoy duele, mañana será tu poder.",
    "Abre tu corazón: el amor divino te rodea.",
    "Los ciclos que terminan son puertas que se abren.",
    "No temas al cambio, Nayra te guía en cada paso.",
    "Tu intuición es más sabia de lo que crees.",
    "Cada noche oscura da paso a un amanecer dorado.",
    "Suelta el pasado con gratitud, no con miedo.",
    "Eres sostenida por la energía del todo.",
    "Tu alma eligió esta lección, y ya la estás dominando.",
    "En el silencio encontrarás las respuestas que buscas.",
    "La respuesta está en ti. Respira y escucha."
  ];

  const pregunta = document.getElementById("pregunta").value.trim();
  const respuestaDiv = document.getElementById("respuestaOraculo");

  if (pregunta === "") {
    respuestaDiv.innerText = "🌌 Escribe tu pregunta para recibir una guía del Oráculo.";
  } else {
    const indice = Math.floor(Math.random() * frasesOraculo.length);
    respuestaDiv.innerText = `🔮 ${frasesOraculo[indice]}`;
  }
}
