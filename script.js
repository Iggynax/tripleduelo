document.addEventListener('DOMContentLoaded', () => {
    const opciones = ['Piedra', 'Papel', 'Tijera'];
    const resultadoTexto = document.getElementById('resultado');
    const marcadorJugador = document.getElementById('marcador-jugador');
    const marcadorIA = document.getElementById('marcador-ia');
    const botonReiniciar = document.getElementById('reiniciar');
    let jugadorGanadas = 0;
    let iaGanadas = 0;

    document.getElementById('piedra').addEventListener('click', () => jugar('Piedra'));
    document.getElementById('papel').addEventListener('click', () => jugar('Papel'));
    document.getElementById('tijera').addEventListener('click', () => jugar('Tijera'));
    botonReiniciar.addEventListener('click', reiniciar);

    function jugar(eleccionJugador) {
        const eleccionIA = opciones[Math.floor(Math.random() * opciones.length)];
        const resultado = determinarGanador(eleccionJugador, eleccionIA);
        mostrarResultado(resultado);
        actualizarMarcador(resultado);
    }

    function determinarGanador(jugador, ia) {
        if (jugador === ia) {
            return 'Empate';
        } else if (
            (jugador === 'Piedra' && ia === 'Tijera') ||
            (jugador === 'Papel' && ia === 'Piedra') ||
            (jugador === 'Tijera' && ia === 'Papel')
        ) {
            jugadorGanadas++;
            return 'Ganas tú';
        } else {
            iaGanadas++;
            return 'Gana la IA';
        }
    }

    function mostrarResultado(resultado) {
        resultadoTexto.textContent = resultado;
    }

    function actualizarMarcador() {
        marcadorJugador.textContent = jugadorGanadas;
        marcadorIA.textContent = iaGanadas;
        if (jugadorGanadas === 3 || iaGanadas === 3) {
            mostrarGanador();
        }
    }

    function mostrarGanador() {
        if (jugadorGanadas === 3) {
            resultadoTexto.textContent = `¡Has ganado la partida!`;
        } else {
            resultadoTexto.textContent = `La IA ha ganado la partida.`;
        }
        botonReiniciar.classList.remove('hidden');
    }

    function reiniciar() {
        jugadorGanadas = 0;
        iaGanadas = 0;
        resultadoTexto.textContent = '';
        botonReiniciar.classList.add('hidden');
    }
});
