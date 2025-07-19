// La malla curricular de Medicina Veterinaria UST 2023
// Referencia del PDF "PLAN 5 ESTUDIO_MVET 2023 PREREQUISITOS ACTUALIZADOS.pdf"

const malla = [
    // Semestre 1
    { id: 'VET-069', name: 'Zoología', semester: 1, prerequisites: [] },
    { id: 'VET-171', name: 'Introducción a Medicina Veterinaria', semester: 1, prerequisites: [], noNota: true }, // SIN NOTA
    { id: 'MAT-016', name: 'Razonamiento Lógico Matemático', semester: 1, prerequisites: [] },
    { id: 'BIO-002', name: 'Biología Celular', semester: 1, prerequisites: [] },
    { id: 'FGL-149', name: 'Taller de Competencias Comunicativas', semester: 1, prerequisites: [] },
    { id: 'FGL-151', name: 'Taller de Desarrollo Personal I', semester: 1, prerequisites: [] }, // SIN NOTA

    // Semestre 2
    { id: 'VET-147', name: 'Anatomía de Animales de Compañía', semester: 2, prerequisites: [] },
    { id: 'VET-122', name: 'Etología y Bienestar Animal', semester: 2, prerequisites: [] },
    { id: 'QUI-003', name: 'Química General y Orgánica', semester: 2, prerequisites: [] },
    { id: 'FGL-152', name: 'Taller de Desarrollo Personal II', semester: 2, prerequisites: [] }, // SIN NOTA
    { id: 'FGL-001', name: 'Cultura y Valores', semester: 2, prerequisites: [] },
    { id: 'COM-001', name: 'Taller de Competencias para el Aprendizaje', semester: 2, prerequisites: [] },

    // Semestre 3
    { id: 'VET-148', name: 'Anatomía de Animales Mayores', semester: 3, prerequisites: ['VET-147'] }, // Anatomía de Animales de Compañía [cite: 195, 198]
    { id: 'VET-173', name: 'Histología y Embriología', semester: 3, prerequisites: ['BIO-002'] }, // Biología Celular [cite: 195, 198]
    { id: 'FGL-008', name: 'Inglés Básico', semester: 3, prerequisites: [] },
    { id: 'VET-154', name: 'Estadística para una Salud', semester: 3, prerequisites: ['MAT-016'] }, // Razonamiento Lógico Matemático [cite: 195, 198]
    { id: 'BIO-003', name: 'Bioquímica General', semester: 3, prerequisites: ['QUI-003'] }, // Química General y Orgánica [cite: 195, 198]
    { id: 'FGL-111', name: 'Persona y Sentido', semester: 3, prerequisites: [] },

    // Semestre 4
    { id: 'VET-150', name: 'Fisiología Animal', semester: 4, prerequisites: ['VET-148'] }, // Anatomía de Animales Mayores [cite: 195, 198]
    { id: 'VET-076', name: 'Microbiología', semester: 4, prerequisites: ['VET-173'] }, // Histología y Embriología [cite: 195, 198]
    { id: 'VET-175', name: 'Inmunología', semester: 4, prerequisites: ['BIO-002'] }, // Biología Celular [cite: 195, 198]
    { id: 'VET-151', name: 'Zootecnia y Genética Aplicada', semester: 4, prerequisites: ['VET-154'] }, // Estadística para una Salud [cite: 195, 198]
    { id: 'VET-177', name: 'Ecología y Fauna Silvestre', semester: 4, prerequisites: ['VET-069'] }, // Zoología [cite: 195, 198]
    { id: 'VET-176', name: 'Práctica Básica', semester: 4, prerequisites: ['VET-122'], noNota: true }, // Etología y Bienestar Animal [cite: 195, 198] // SIN NOTA
    { id: 'VET-152', name: 'MEC Hito 1', semester: 4, prerequisites: ['VET-176'], noNota: true }, // Estar cursando Práctica Básica [cite: 195, 198] // SIN NOTA

    // Semestre 5
    { id: 'VET-153', name: 'Fisiopatología', semester: 5, prerequisites: ['VET-150'] }, // Fisiología [cite: 195, 198]
    { id: 'VET-186', name: 'Enfermedades Parasitarias', semester: 5, prerequisites: ['VET-175'] }, // Inmunología [cite: 195, 198]
    { id: 'VET-154', name: 'Nutrición Animal', semester: 5, prerequisites: ['BIO-003'] }, // Bioquímica General [cite: 195, 198]
    { id: 'VET-124', name: 'Reproducción Animal', semester: 5, prerequisites: ['VET-150'] }, // Fisiología [cite: 195, 198]
    { id: 'VET-155', name: 'Conservación y Gestión Ambiental', semester: 5, prerequisites: ['VET-177'] }, // Ecología y Fauna Silvestre [cite: 195, 198]
    { id: 'FGL-010', name: 'Inglés Básico II', semester: 5, prerequisites: ['FGL-008'] }, // Inglés Básico I [cite: 195, 198]

    // Semestre 6
    { id: 'VET-156', name: 'Patología de Sistemas', semester: 6, prerequisites: ['VET-153'] }, // Fisiopatología [cite: 195, 198]
    { id: 'VET-084', name: 'Farmacología', semester: 6, prerequisites: ['VET-153'] }, // Fisiopatología [cite: 195, 198]
    { id: 'VET-179', name: 'Enfermedades Infecciosas', semester: 6, prerequisites: ['VET-076'] }, // Microbiología [cite: 195, 198]
    { id: 'VET-154', name: 'Alimentación Animal', semester: 6, prerequisites: ['VET-154'] }, // Nutrición Animal [cite: 195, 198]
    { id: 'VET-158', name: 'Gestión de Negocios Veterinarios', semester: 6, prerequisites: ['MAT-016'] }, // Razonamiento Lógico Matemático [cite: 195, 198]
    { id: 'VET-178', name: 'Ética y Legislación Profesional', semester: 6, prerequisites: ['VET-176'] }, // Práctica Básica [cite: 195, 198]

    // Semestre 7
    { id: 'VET-180', name: 'Semiología', semester: 7, prerequisites: ['VET-156'] }, // Patología de Sistemas [cite: 195, 198]
    { id: 'VET-129', name: 'Patología Clínica', semester: 7, prerequisites: ['VET-156'] }, // Patología de sistemas [cite: 195, 198]
    { id: 'VET-159', name: 'Sistema de Producción de Monogástricos', semester: 7, prerequisites: ['VET-151', 'VET-122'] }, // Zootecnia y Mejoramiento Genético, Etología y Bienestar Animal [cite: 195, 198]
    { id: 'VET-160', name: 'Epidemiología y Salud Pública', semester: 7, prerequisites: ['VET-186', 'VET-179'] }, // Enfermedades Parasitarias, Enfermedades infecciosas [cite: 195, 198]
    { id: 'VET-187', name: 'Inocuidad Alimentaria', semester: 7, prerequisites: ['VET-076'] }, // Microbiología [cite: 195, 198]
    { id: 'VET-161', name: 'Innovación y Emprendimiento', semester: 7, prerequisites: ['VET-158'] }, // Gestión de Negocios Veterinarios [cite: 195, 198]

    // Semestre 8
    { id: 'VET-102', name: 'Medicina Animales de Compañía', semester: 8, prerequisites: ['VET-129'] }, // Patología Clínica [cite: 195, 198]
    { id: 'VET-182', name: 'Procedimientos Médicos', semester: 8, prerequisites: ['VET-180'] }, // Semiología [cite: 195, 198]
    { id: 'VET-183', name: 'Imagenología', semester: 8, prerequisites: ['VET-180'] }, // Semiología [cite: 195, 198]
    { id: 'VET-162', name: 'Sistemas de Producción de Rumiantes', semester: 8, prerequisites: ['VET-122', 'VET-124', 'VET-154'] }, // Etología y Bienestar Animal, Reproducción Animal, Nutrición Animal [cite: 195, 198]
    { id: 'VET-163', name: 'Medicina de la Conservación', semester: 8, prerequisites: ['VET-155', 'VET-160'] }, // Conservación y Gestión Ambiental, Epidemiología y Salud Pública [cite: 195, 198]
    { id: 'VET-EL1', name: 'Electivo I', semester: 8, prerequisites: [] },
    { id: 'VET-164', name: 'MEC Hito 2', semester: 8, prerequisites: ['VET-182'], noNota: true }, // Estar cursando Procedimientos Médicos [cite: 195, 198] // SIN NOTA
    { id: 'VET-165', name: 'Práctica Preprofesional', semester: 8, prerequisites: ['Semestre VIII Aprobado'], noNota: true }, // Semestre VIII aprobado [cite: 195, 198] // SIN NOTA

    // Semestre 9
    { id: 'VET-166', name: 'Clínica Animales Compañía', semester: 9, prerequisites: ['VET-102', 'VET-182'] }, // Medicina Animales de Compañía, Procedimientos Médicos [cite: 195, 198]
    { id: 'VET-167', name: 'Cirugía y Anestesiología', semester: 9, prerequisites: ['VET-084', 'VET-183'] }, // Farmacología, Imagenología [cite: 195, 198]
    { id: 'VET-103', name: 'Medicina del Equino', semester: 9, prerequisites: ['VET-182'] }, // Procedimientos Médicos [cite: 195, 198]
    { id: 'VET-101', name: 'Medicina Animales de Producción', semester: 9, prerequisites: ['VET-162'] }, // Sistemas de Producción de rumiantes [cite: 195, 198]
    { id: 'VET-184', name: 'Metodología de la Investigación Científica', semester: 9, prerequisites: ['VET-102', 'VET-178'] }, // Medicina de animales de compañía, Ética y legislación profesional [cite: 195, 198]
    { id: 'VET-EL2', name: 'Electivo II', semester: 9, prerequisites: [] },

    // Semestre 10
    { id: 'VET-168', name: 'Internado de Animales Compañía', semester: 10, prerequisites: ['VET-166', 'VET-167'], noNota: true }, // Clínica de Animales Compañía, Cirugía y Anestesiología [cite: 195, 198] // SIN NOTA
    { id: 'VET-169', name: 'Internado de Animales Mayores', semester: 10, prerequisites: ['VET-101', 'VET-103'], noNota: true }, // Medicina Animales de Producción, Medicina del Equino [cite: 195, 198] // SIN NOTA
    { id: 'VET-170', name: 'Módulo Integrador en Una Salud', semester: 10, prerequisites: ['VET-163', 'VET-187', 'VET-160'] }, // Medicina de la Conservación, Inocuidad Alimentaria, Epidemiología y Salud Pública [cite: 195, 198]
    { id: 'VET-185', name: 'Proyecto de Titulación', semester: 10, prerequisites: ['VET-184'], noNota: true }, // Metodología de la Investigación [cite: 195, 198] // SIN NOTA
    { id: 'VET-EL3', name: 'Electivo III', semester: 10, prerequisites: [] }
];

// Estado de la malla del usuario
let mallaStatus = {}; // { ramoId: { approved: true/false, grade: 'nota' } }
const LOCAL_STORAGE_KEY = 'mallaMedicinaVeterinariaUSTStatus';

// Función para inicializar la malla y cargar el estado
document.addEventListener('DOMContentLoaded', () => {
    loadMallaStatus();
    renderMalla();
});

// Cargar estado desde localStorage
function loadMallaStatus() {
    const savedStatus = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedStatus) {
        mallaStatus = JSON.parse(savedStatus);
    } else {
        // Inicializar todos los ramos como no aprobados si no hay nada guardado
        malla.forEach(ramo => {
            mallaStatus[ramo.id] = { approved: false, grade: '' };
        });
    }
}

// Guardar estado en localStorage
function saveMallaStatus() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mallaStatus));
}

// Renderizar la malla en el HTML
function renderMalla() {
    const mallaContainer = document.getElementById('malla-container');
    mallaContainer.innerHTML = ''; // Limpiar contenedor antes de renderizar

    // Obtener todos los semestres únicos
    const semesters = [...new Set(malla.map(ramo => ramo.semester))].sort((a, b) => a - b);

    semesters.forEach(semesterNum => {
        const semestreDiv = document.createElement('div');
        semestreDiv.classList.add('semestre');
        semestreDiv.innerHTML = `<h2>Semestre ${semesterNum}</h2>`;

        const ramosEnSemestre = malla.filter(ramo => ramo.semester === semesterNum);

        ramosEnSemestre.forEach(ramo => {
            const ramoDiv = document.createElement('div');
            ramoDiv.classList.add('ramo');
            ramoDiv.dataset.id = ramo.id; // Guarda el ID del ramo en el elemento HTML

            const isApproved = mallaStatus[ramo.id]?.approved;
            const grade = mallaStatus[ramo.id]?.grade || ''; // Obtener la nota o cadena vacía

            let isBlocked = !checkPrerequisites(ramo.id);

            // Determinar clases CSS
            if (isApproved) {
                ramoDiv.classList.add('aprobado');
            } else if (isBlocked) {
                ramoDiv.classList.add('bloqueado');
            }

            // Contenido del ramo: nombre y nota (si aplica)
            ramoDiv.innerHTML = `<span>${ramo.name}</span>`;
            if (isApproved && !ramo.noNota) { // Solo muestra la nota si está aprobado Y NO es un ramo sin nota
                ramoDiv.innerHTML += `<span class="nota">${grade}</span>`;
            }

            ramoDiv.addEventListener('click', () => handleRamoClick(ramo.id, ramo.noNota)); // Pasar noNota al handler

            semestreDiv.appendChild(ramoDiv);
        });
        mallaContainer.appendChild(semestreDiv);
    });
}

// Manejar clic en un ramo
function handleRamoClick(ramoId, noNota) { // Recibe noNota
    const currentStatus = mallaStatus[ramoId];
    const ramoElement = document.querySelector(`.ramo[data-id="${ramoId}"]`);

    if (ramoElement.classList.contains('bloqueado')) {
        alert('Este ramo está bloqueado. Primero debes aprobar sus prerequisitos.');
        return;
    }

    if (currentStatus.approved) {
        // Si ya está aprobado, desaprobarlo
        currentStatus.approved = false;
        currentStatus.grade = '';
    } else {
        // Si no está aprobado, aprobarlo
        if (!noNota) { // Pide nota solo si el ramo NO tiene la propiedad noNota: true
            let grade = prompt(`Ingresa la nota para ${ramoId} (1.0 a 7.0):`);
            if (grade === null) { // Si el usuario cancela
                return;
            }
            grade = parseFloat(grade.replace(',', '.')); // Reemplazar coma por punto y convertir a número

            if (isNaN(grade) || grade < 1.0 || grade > 7.0) {
                alert('Nota inválida. Por favor, ingresa un número entre 1.0 y 7.0.');
                return;
            }
            currentStatus.grade = grade.toFixed(1); // Formatear a un decimal
        }
        currentStatus.approved = true;
    }

    saveMallaStatus();
    renderMalla(); // Volver a renderizar para actualizar el estado visual
}

// Verificar prerequisitos
function checkPrerequisites(ramoId) {
    const ramo = malla.find(r => r.id === ramoId);
    if (!ramo || !ramo.prerequisites || ramo.prerequisites.length === 0) {
        return true; // No tiene prerequisitos o el ramo no existe
    }

    // Caso especial para "Semestre VIII Aprobado"
    if (ramo.prerequisites.includes('Semestre VIII Aprobado')) {
        const semester8Ramos = malla.filter(r => r.semester === 8 && r.id !== ramoId); // Excluir el propio ramo
        const allSemester8Approved = semester8Ramos.every(r => mallaStatus[r.id]?.approved);
        return allSemester8Approved;
    }

    // Verificar prerequisitos normales
    return ramo.prerequisites.every(prereqId => {
        return mallaStatus[prereqId]?.approved;
    });
}
