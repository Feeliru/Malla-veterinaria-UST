document.addEventListener('DOMContentLoaded', () => {
    // --- DEFINICIÓN DE LA MALLA ACADÉMICA DE MEDICINA VETERINARIA UST ---
    // ¡IMPORTANTE!: Esta sección ya ha sido populada con la información del PDF.
    // 'id': Un identificador único para el ramo (código del ramo).
    // 'nombre': El nombre completo del ramo.
    // 'semestre': El número de semestre en que se imparte.
    // 'aprobado': true si ya lo tienes aprobado, false si no.
    // 'nota': La nota si ya está aprobado, null si no.
    // 'prerequisitos': Un array con los 'id' (códigos) de los ramos que son prerequisitos.
    let malla = [
        // Semestre 1 
        { id: "VET-069", nombre: "Zoología", semestre: 1, aprobado: false, nota: null, prerequisitos: [] },
        { id: "VET-171", nombre: "Intro. Medicina Veterinaria", semestre: 1, aprobado: false, nota: null, prerequisitos: [] },
        { id: "MAT-016", nombre: "Razonamiento Lógico Matemático", semestre: 1, aprobado: false, nota: null, prerequisitos: [] },
        { id: "BIO-002", nombre: "Biología Celular", semestre: 1, aprobado: false, nota: null, prerequisitos: [] },
        { id: "FGL-149", nombre: "Taller de Competencias Comunicativas", semestre: 1, aprobado: false, nota: null, prerequisitos: [] },
        { id: "FGL-151", nombre: "Taller de Desarrollo Personal I", semestre: 1, aprobado: false, nota: null, prerequisitos: [] },

        // Semestre 2 
        // NOTA: Los semestres en el PDF pueden ser un poco confusos en la numeración,
        // asumo la siguiente numeración lógica de semestres consecutivos.
        { id: "VET-147", nombre: "Anatomía de Animales de Compañía", semestre: 2, aprobado: false, nota: null, prerequisitos: [] },
        { id: "VET-122", nombre: "Etología y Bienestar Animal", semestre: 2, aprobado: false, nota: null, prerequisitos: [] },
        { id: "QUI-003", nombre: "Química General y Orgánica", semestre: 2, aprobado: false, nota: null, prerequisitos: [] },
        { id: "FGL-152", nombre: "Taller de Desarrollo Personal II", semestre: 2, aprobado: false, nota: null, prerequisitos: [] },
        { id: "FGL-001", nombre: "Cultura y Valores", semestre: 2, aprobado: false, nota: null, prerequisitos: [] },
        { id: "COM-001", nombre: "Taller de Competencias para el Aprendizaje", semestre: 2, aprobado: false, nota: null, prerequisitos: [] },

        // Semestre 3 
        { id: "VET-148", nombre: "Anatomía de Animales Mayores", semestre: 3, aprobado: false, nota: null, prerequisitos: ["VET-147"] },
        { id: "VET-173", nombre: "Histología y Embriología", semestre: 3, aprobado: false, nota: null, prerequisitos: ["BIO-002"] },
        { id: "FGL-008", nombre: "Inglés Básico", semestre: 3, aprobado: false, nota: null, prerequisitos: [] },
        { id: "VET-154_old", nombre: "Estadística para una Salud", semestre: 3, aprobado: false, nota: null, prerequisitos: ["MAT-016"] }, // Renombrado para evitar conflicto con VET-154 Nutrición Animal
        { id: "BIO-003", nombre: "Bioquímica General", semestre: 3, aprobado: false, nota: null, prerequisitos: ["QUI-003"] },
        { id: "FGL-111", nombre: "Persona y Sentido", semestre: 3, aprobado: false, nota: null, prerequisitos: [] },

        // Semestre 4 
        { id: "VET-150", nombre: "Fisiología Animal", semestre: 4, aprobado: false, nota: null, prerequisitos: ["VET-148"] },
        { id: "VET-076", nombre: "Microbiología", semestre: 4, aprobado: false, nota: null, prerequisitos: ["VET-173"] },
        { id: "VET-175", nombre: "Inmunología", semestre: 4, aprobado: false, nota: null, prerequisitos: ["BIO-002"] },
        { id: "VET-151", nombre: "Zootecnia y Genética Aplicada", semestre: 4, aprobado: false, nota: null, prerequisitos: ["VET-154_old"] }, // Prereq: Estadística para una Salud
        { id: "VET-177", nombre: "Ecología y Fauna Silvestre", semestre: 4, aprobado: false, nota: null, prerequisitos: ["VET-069"] },
        { id: "VET-176", nombre: "Práctica Básica", semestre: 4, aprobado: false, nota: null, prerequisitos: ["VET-122"] },
        { id: "VET-152", nombre: "MEC Hito 1", semestre: 4, aprobado: false, nota: null, prerequisitos: ["VET-176"] }, // "Estar cursando Práctica Básica" - lo interpretamos como aprobado para este ejercicio.

        // Semestre 5 
        { id: "VET-153", nombre: "Fisiopatología", semestre: 5, aprobado: false, nota: null, prerequisitos: ["VET-150"] },
        { id: "VET-186", nombre: "Enfermedades Parasitarias", semestre: 5, aprobado: false, nota: null, prerequisitos: ["VET-175"] },
        { id: "VET-154", nombre: "Nutrición Animal", semestre: 5, aprobado: false, nota: null, prerequisitos: ["BIO-003"] }, // Cuidado con ID VET-154, hay dos en el PDF
        { id: "VET-124", nombre: "Reproducción Animal", semestre: 5, aprobado: false, nota: null, prerequisitos: ["VET-150"] },
        { id: "VET-155", nombre: "Conservación y Gestión Ambiental", semestre: 5, aprobado: false, nota: null, prerequisitos: ["VET-177"] },
        { id: "FGL-010", nombre: "Inglés Básico II", semestre: 5, aprobado: false, nota: null, prerequisitos: ["FGL-008"] },

        // Semestre 6 
        { id: "VET-156", nombre: "Patología de Sistemas", semestre: 6, aprobado: false, nota: null, prerequisitos: ["VET-153"] },
        { id: "VET-084", nombre: "Farmacología", semestre: 6, aprobado: false, nota: null, prerequisitos: ["VET-153"] },
        { id: "VET-179", nombre: "Enfermedades Infecciosas", semestre: 6, aprobado: false, nota: null, prerequisitos: ["VET-076"] },
        { id: "VET-154_Alim", nombre: "Alimentación Animal", semestre: 6, aprobado: false, nota: null, prerequisitos: ["VET-154"] }, // Cuidado con ID VET-154
        { id: "VET-158", nombre: "Gestión de Negocios Veterinarios", semestre: 6, aprobado: false, nota: null, prerequisitos: ["MAT-016"] },
        { id: "VET-178", nombre: "Ética y Legislación Profesional", semestre: 6, aprobado: false, nota: null, prerequisitos: ["VET-176"] },

        // Semestre 7 
        { id: "VET-180", nombre: "Semiología", semestre: 7, aprobado: false, nota: null, prerequisitos: ["VET-156"] },
        { id: "VET-129", nombre: "Patología Clínica", semestre: 7, aprobado: false, nota: null, prerequisitos: ["VET-156"] },
        { id: "VET-159", nombre: "Sistemas de Producción de Monogástricos", semestre: 7, aprobado: false, nota: null, prerequisitos: ["VET-151", "VET-122"] }, // Zootecnia y Mej.Genético, Etología y Bien. Animal
        { id: "VET-160", nombre: "Epidemiología y Salud Pública", semestre: 7, aprobado: false, nota: null, prerequisitos: ["VET-186", "VET-179"] }, // Enf. Parasitarias, Enf. Infecciosas
        { id: "VET-187", nombre: "Inocuidad Alimentaria", semestre: 7, aprobado: false, nota: null, prerequisitos: ["VET-076"] },
        { id: "VET-161", nombre: "Innovación y Emprendimiento", semestre: 7, aprobado: false, nota: null, prerequisitos: ["VET-158"] },

        // Semestre 8 
        { id: "VET-102", nombre: "Medicina Animales de Compañía", semestre: 8, aprobado: false, nota: null, prerequisitos: ["VET-129"] },
        { id: "VET-182", nombre: "Procedimientos Médicos", semestre: 8, aprobado: false, nota: null, prerequisitos: ["VET-180"] },
        { id: "VET-183", nombre: "Imagenología", semestre: 8, aprobado: false, nota: null, prerequisitos: ["VET-180"] },
        { id: "VET-162", nombre: "Sistemas de Producción de Rumiantes", semestre: 8, aprobado: false, nota: null, prerequisitos: ["VET-122", "VET-124", "VET-154"] }, // Etología y B.A., Reproducción Animal, Nutrición Animal
        { id: "VET-163", nombre: "Medicina de la Conservación", semestre: 8, aprobado: false, nota: null, prerequisitos: ["VET-155", "VET-160"] }, // Conservación y G.A., Epidemiología y S.P.
        { id: "VET-EL1", nombre: "Electivo I", semestre: 8, aprobado: false, nota: null, prerequisitos: [] },
        { id: "VET-164", nombre: "MEC Hito 2", semestre: 8, aprobado: false, nota: null, prerequisitos: ["VET-182"] }, // "Estar cursando Procedimientos Médicos"

        // Semestre 9 
        { id: "VET-165", nombre: "Práctica Preprofesional", semestre: 9, aprobado: false, nota: null, prerequisitos: ["VET-102", "VET-182", "VET-183", "VET-162", "VET-163", "VET-EL1", "VET-164"] }, // Asumo "Semestre VIII aprobado" significa todos los ramos del semestre 8
        { id: "VET-166", nombre: "Clínica Animales Compañía", semestre: 9, aprobado: false, nota: null, prerequisitos: ["VET-102", "VET-182"] }, // Medicina An. Compañía, Procedimientos Médicos
        { id: "VET-167", nombre: "Cirugía y Anestesiología", semestre: 9, aprobado: false, nota: null, prerequisitos: ["VET-084", "VET-183"] }, // Farmacología, Imagenología
        { id: "VET-103", nombre: "Medicina del Equino", semestre: 9, aprobado: false, nota: null, prerequisitos: ["VET-182"] },
        { id: "VET-101", nombre: "Medicina Animales de Producción", semestre: 9, aprobado: false, nota: null, prerequisitos: ["VET-162"] },
        { id: "VET-184", nombre: "Metodología de la Investigación Científica", semestre: 9, aprobado: false, nota: null, prerequisitos: ["VET-102", "VET-178"] }, // Med. An. Compañía, Ética y Leg. Profesional
        { id: "VET-EL2", nombre: "Electivo II", semestre: 9, aprobado: false, nota: null, prerequisitos: [] },

        // Semestre 10 
        { id: "VET-168", nombre: "Internado de Animales Compañía", semestre: 10, aprobado: false, nota: null, prerequisitos: ["VET-166", "VET-167"] }, // Clínica An. Compañía, Cirugía y Anestesiología
        { id: "VET-169", nombre: "Internado de Animales Mayores", semestre: 10, aprobado: false, nota: null, prerequisitos: ["VET-101", "VET-103"] }, // Med. An. Producción, Med. del Equino
        { id: "VET-170", nombre: "Módulo Integrador en Una Salud", semestre: 10, aprobado: false, nota: null, prerequisitos: ["VET-163", "VET-187", "VET-160"] }, // Med. de la Cons., Inoc. Alimentaria, Epidemiología y S.P.
        { id: "VET-185", nombre: "Proyecto de Titulación", semestre: 10, aprobado: false, nota: null, prerequisitos: ["VET-184"] }, // Metodología de la Investigación
        { id: "VET-EL3", nombre: "Electivo III", semestre: 10, aprobado: false, nota: null, prerequisitos: [] },
    ];

    const mallaContainer = document.getElementById('malla-container');
    const LOCAL_STORAGE_KEY = 'mallaMedicinaVeterinariaUSTStatus'; // Clave específica para esta malla

    // --- Cargar el estado guardado al inicio ---
    function loadMallaStatus() {
        const savedMalla = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedMalla) {
            const parsedMalla = JSON.parse(savedMalla);
            // Fusionar el estado guardado con la definición actual de la malla
            malla.forEach(ramoOriginal => {
                const savedRamo = parsedMalla.find(r => r.id === ramoOriginal.id);
                if (savedRamo) {
                    ramoOriginal.aprobado = savedRamo.aprobado;
                    ramoOriginal.nota = savedRamo.nota;
                }
            });
        }
    }

    // --- Guardar el estado actual de la malla ---
    function saveMallaStatus() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(malla));
    }

    // --- Función para verificar si un ramo cumple sus prerequisitos ---
    function meetsPrerequisites(ramoId) {
        const ramo = malla.find(r => r.id === ramoId);
        if (!ramo) return false; // Ramo no encontrado

        // Si no tiene prerequisitos, se puede aprobar
        if (ramo.prerequisitos.length === 0) return true;

        // Comprobar si todos los prerequisitos están aprobados
        return ramo.prerequisitos.every(prereqId => {
            const prereqRamo = malla.find(r => r.id === prereqId);
            return prereqRamo && prereqRamo.aprobado;
        });
    }

    // --- Función para renderizar (dibujar) la malla en el HTML ---
    function renderMalla() {
        mallaContainer.innerHTML = ''; // Limpiar el contenedor antes de redibujar

        // Agrupar los ramos por semestre
        const semestresAgrupados = malla.reduce((acc, ramo) => {
            if (!acc[ramo.semestre]) {
                acc[ramo.semestre] = [];
            }
            acc[ramo.semestre].push(ramo);
            return acc;
        }, {});

        // Ordenar los semestres y crear los divs para cada uno
        Object.keys(semestresAgrupados).sort((a, b) => a - b).forEach(semestreNum => {
            const semestreDiv = document.createElement('div');
            semestreDiv.classList.add('semestre');
            semestreDiv.innerHTML = `<h2>Semestre ${semestreNum}</h2>`;

            // Ordenar los ramos dentro del semestre alfabéticamente
            semestresAgrupados[semestreNum].sort((a, b) => a.nombre.localeCompare(b.nombre)).forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.classList.add('ramo');
                ramoDiv.setAttribute('data-id', ramo.id); // Guardamos el ID en el HTML

                // Aplicar clases CSS según el estado del ramo
                if (ramo.aprobado) {
                    ramoDiv.classList.add('aprobado');
                } else if (!meetsPrerequisites(ramo.id)) {
                    ramoDiv.classList.add('bloqueado');
                }

                // Contenido del ramo: nombre y nota si está aprobado
                ramoDiv.innerHTML = `<span>${ramo.nombre}</span>`;
                if (ramo.aprobado && ramo.nota !== null) {
                    ramoDiv.innerHTML += `<span class="nota">Nota: ${ramo.nota}</span>`;
                }

                // Añadir el evento click SOLO si el ramo no está aprobado y cumple los prerequisitos
                if (!ramo.aprobado && meetsPrerequisites(ramo.id)) {
                    ramoDiv.addEventListener('click', () => aprobarRamo(ramo.id));
                }

                semestreDiv.appendChild(ramoDiv);
            });
            mallaContainer.appendChild(semestreDiv);
        });
    }

    // --- Función para manejar la aprobación de un ramo ---
    function aprobarRamo(ramoId) {
        const ramoIndex = malla.findIndex(r => r.id === ramoId);

        // Asegurarse de que el ramo existe, no está aprobado y cumple los prerequisitos
        if (ramoIndex > -1 && !malla[ramoIndex].aprobado && meetsPrerequisites(ramoId)) {
            let notaInput = prompt(`Ingresa la nota con la que aprobaste "${malla[ramoIndex].nombre}" (1.0 a 7.0):`);

            // Validar la nota
            let nota = parseFloat(notaInput);
            // Considera notas chilenas, de 1.0 a 7.0, con 4.0 como aprobado.
            if (isNaN(nota) || nota < 1.0 || nota > 7.0) {
                alert("Nota inválida. Por favor, ingresa un número entre 1.0 y 7.0.");
                return; // No aprobar el ramo si la nota es inválida
            }

            malla[ramoIndex].aprobado = true;
            malla[ramoIndex].nota = nota.toFixed(1); // Formatear a un decimal

            saveMallaStatus(); // Guardar el nuevo estado
            renderMalla();     // Volver a renderizar la malla para actualizar la interfaz
        } else if (malla[ramoIndex].aprobado) {
            alert(`"${malla[ramoIndex].nombre}" ya está aprobado.`);
        } else {
            alert(`No puedes aprobar "${malla[ramoIndex].nombre}" aún. Necesitas aprobar sus prerequisitos primero.`);
        }
    }

    // --- Inicialización de la aplicación ---
    loadMallaStatus(); // Cargar el estado guardado al iniciar
    renderMalla();     // Dibujar la malla inicial
});
