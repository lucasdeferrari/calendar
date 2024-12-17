function generateHeader(year, month) {
    const headerContainer = document.getElementById('header-superior');
    headerContainer.innerHTML = '';

    const botonPrevio = document.createElement('button');
    botonPrevio.classList.add('btn-nav-month');
    botonPrevio.id = 'prev-month';
    botonPrevio.textContent = '<<';
    headerContainer.appendChild(botonPrevio);

    const tituloCalendario = document.createElement('h1');
    tituloCalendario.id = 'titulo-calendario';
    // Usar plantillas de literales para concatenar mes y año
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    tituloCalendario.textContent = `${months[month]} ${year}`; // Usar el nombre del mes
    headerContainer.appendChild(tituloCalendario);

    const botonSiguiente = document.createElement('button');
    botonSiguiente.classList.add('btn-nav-month');
    botonSiguiente.id = 'next-month';
    botonSiguiente.textContent = '>>';
    headerContainer.appendChild(botonSiguiente);
}

function generateCalendar(year, month) {
    const daysContainer = document.getElementById('days');
    daysContainer.innerHTML = ''; // Limpiar el calendario

    // Crear una fecha para el primer día del mes
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0); // Día 0 del próximo mes = último día del actual

    const firstWeekday = firstDay.getDay(); // Día de la semana (0 = Domingo, 6 = Sábado)
    const daysInMonth = lastDay.getDate(); // Total de días en el mes

    // Crear celdas vacías para los días previos al primer día del mes
    for (let i = 0; i < firstWeekday; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('inactive'); // Clase para los días desactivados
        daysContainer.appendChild(emptyCell);
    }

    // Crear celdas para los días del mes
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = day; // Añadir el número del día
        daysContainer.appendChild(dayCell);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const diaHoy = new Date();
    generateHeader(diaHoy.getFullYear(), diaHoy.getMonth());
    generateCalendar(diaHoy.getFullYear(), diaHoy.getMonth()); // Diciembre (mes 11 porque enero = 0)
});

