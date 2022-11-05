function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", 
    createGame("catar", "13:00", "equador")
  ) +
  createCard("21/11", "segunda", 
    createGame("inglaterra", "10:00", "iran") +
    createGame("senegal", "13:00", "holanda") +
    createGame("eua", "16:00", "gales")
  ) +
  createCard("22/11", "terça", 
    createGame("argentina", "07:00", "australia") +
    createGame("dinamarca", "10:00", "tunisia") +
    createGame("mexico", "13:00", "polonia") +
    createGame("franca", "16:00", "australia")
  ) +
  createCard("23/11", "quarta", 
    createGame("marrocos", "07:00", "croacia") +
    createGame("alemanha", "10:00", "japao") +
    createGame("espanha", "13:00", "costa_rica") +
    createGame("belgica", "16:00", "canada")
  ) +
  createCard("24/11", "quinta",
    createGame("switzerland", "07:00", "cameroon") +
    createGame("uruguai", "10:00", "coreia_do_sul") +
    createGame("portugal", "13:00", "gana") +
    createGame("brazil", "16:00", "servia")
  ) +
  createCard("25/11", "sexta",
    createGame("gales", "07:00", "iran") +
    createGame("catar", "10:00", "canada") +
    createGame("holanda", "13:00", "equador") +
    createGame("inglaterra", "16:00", "eua")
  ) +
  createCard("26/11", "sábado",
    createGame("tunisia", "07:00", "australia") +
    createGame("polonia", "10:00", "argentina") +
    createGame("franca", "13:00", "dinamarca") +
    createGame("argentina", "16:00", "mexico")
  ) +
  createCard("27/11", "domingo",
    createGame("japao", "07:00", "costa_rica") +
    createGame("belgica", "10:00", "marrocos") +
    createGame("croacia", "13:00", "canada") +
    createGame("espanha", "16:00", "alemanha")
  ) +
  createCard("28/11", "segunda",
    createGame("cameroon", "07:00", "servia") +
    createGame("coreia_do_sul", "10:00", "gana") +
    createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguai")
  ) +
  createCard("29/11", "terça",
    createGame("equador", "07:00", "senegal") +
    createGame("holanda", "10:00", "catar") +
    createGame("iran", "13:00", "eua") +
    createGame("gales", "16:00", "inglaterra")
  ) +
  createCard("30/11", "quarta",
    createGame("tunisia", "07:00", "franca") +
    createGame("australia", "10:00", "dinamarca") +
    createGame("polonia", "13:00", "argentina") +
    createGame("alemanha", "16:00", "mexico")
  ) +
  createCard("01/12", "quinta", 
    createGame("croacia", "07:00", "belgica") +
    createGame("canada", "10:00", "marrocos") +
    createGame("japao", "13:00", "espanha") +
    createGame("costa_rica", "16:00", "alemanha")
  ) +
  createCard("02/12", "sexta", 
    createGame("coreia_do_sul", "07:00", "portugal") +
    createGame("gana", "10:00", "uruguai") +
    createGame("servia", "13:00", "switzerland") +
    createGame("cameroon", "16:00", "brazil")
  )
