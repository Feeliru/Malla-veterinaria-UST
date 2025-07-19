document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('close');
  const guardarBtn = document.getElementById('guardar');
  const notaInput = document.getElementById('nota');
  const ramoNombre = document.getElementById('ramo-nombre');
  let ramoActual = null;

  const data = JSON.parse(localStorage.getItem('mallaAprobada')) || {};

  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    if (data[id]) {
      ramo.classList.add('aprobado');
      ramo.setAttribute('data-nota', data[id]);
    }

    ramo.addEventListener('click', () => {
      if (ramo.classList.contains('bloqueado')) return;

      ramoActual = ramo;
      ramoNombre.textContent = ramo.dataset.nombre;
      notaInput.value = data[id] || '';
      modal.classList.remove('hidden');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  guardarBtn.addEventListener('click', () => {
    const nota = notaInput.value.trim();
    if (nota && ramoActual) {
      const id = ramoActual.dataset.id;
      ramoActual.classList.add('aprobado');
      ramoActual.setAttribute('data-nota', nota);
      data[id] = nota;
      localStorage.setItem('mallaAprobada', JSON.stringify(data));
      modal.classList.add('hidden');
    }
  });

  const prerreqs = {
    "VET-148": ["VET-147"],
    "VET-173": ["BIO-002"],
    "BIO-003": ["QUI-003"],
    "VET-150": ["VET-148"],
    "VET-076": ["VET-173"],
    "VET-175": ["BIO-002"],
    "VET-151": ["VET-154"],
    "VET-177": ["VET-069"],
    "VET-176": ["VET-122"],
    "VET-152": ["VET-176"],
    "VET-153": ["VET-150"],
    "VET-186": ["VET-175"],
    "VET-154": ["BIO-003"],
    "VET-124": ["VET-150"],
    "VET-155": ["VET-177"],
    "FGL-010": ["FGL-008"],
    "VET-156": ["VET-153"],
    "VET-084": ["VET-153"],
    "VET-179": ["VET-076"],
    "VET-158": ["MAT-016"],
    "VET-178": ["VET-176"],
    "VET-180": ["VET-156"],
    "VET-129": ["VET-156"],
    "VET-159": ["VET-151", "VET-122"],
    "VET-160": ["VET-186", "VET-179"],
    "VET-187": ["VET-076"],
    "VET-161": ["VET-158"],
    "VET-102": ["VET-129"],
    "VET-182": ["VET-180"],
    "VET-183": ["VET-180"],
    "VET-162": ["VET-122", "VET-124", "VET-154"],
    "VET-163": ["VET-155", "VET-160"],
    "VET-164": ["VET-182"],
    "VET-165": ["VET-164"],
    "VET-166": ["VET-102", "VET-182"],
    "VET-167": ["VET-084", "VET-183"],
    "VET-103": ["VET-182"],
    "VET-101": ["VET-162"],
    "VET-184": ["VET-102", "VET-178"],
    "VET-168": ["VET-166", "VET-167"],
    "VET-169": ["VET-101", "VET-103"],
    "VET-170": ["VET-163", "VET-187", "VET-160"],
    "VET-185": ["VET-184"]
  };

  Object.entries(prerreqs).forEach(([id, requisitos]) => {
    const ramo = document.querySelector(`[data-id='${id}']`);
    const requisitosAprobados = requisitos.every(req => data[req]);
    if (!requisitosAprobados && ramo) {
      ramo.classList.add('bloqueado');
    }
  });
});
