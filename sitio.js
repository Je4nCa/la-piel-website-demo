// Sitio de La Piel. Sin librerías: todo el movimiento sale del desliz de la página.
const $ = (s, r = document) => r.querySelector(s)
const $$ = (s, r = document) => [...r.querySelectorAll(s)]
const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches
const computadora = () => matchMedia('(min-width: 901px)').matches
const limitar = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const WHATSAPP = 'https://wa.me/50664792222'

// Fuente: Base de Conocimiento V5 de la clínica y publicaciones de la doctora. Lenguaje médico aprobado por la clínica: sin promesas ni diagnósticos.
// Precios: solo los públicos. Publicar los demás es decisión de Catalina. Todo por aprobar antes de publicar.
const GRUPOS = [
  ['Para empezar', [
    { id: 'valoracion', nombre: 'Valoración médica', precio: '₡50 000', foto: 'dra-sonrisa.jpg',
      texto: 'Todo tratamiento empieza aquí. En una consulta de aproximadamente 45 minutos revisamos tus antecedentes, objetivos, riesgos y alternativas para construir un plan personalizado.',
      datos: [['Incluye', 'Análisis de tus facciones, la calidad de tu piel, tus proporciones y lo que querés lograr.'], ['El mismo día', 'En muchos casos se puede realizar un tratamiento en la misma visita, según la evaluación, la disponibilidad y tu candidatura.']] },
  ]],
  ['Toxina y armonización', [
    { id: 'toxina', nombre: 'Toxina botulínica', foto: 'trat/toxina.jpg',
      texto: 'Relaja temporalmente los músculos responsables de las líneas de expresión. Se utiliza para suavizar las líneas de frente, entrecejo y patas de gallo, y ayudar a prevenir que se profundicen, manteniendo tu expresión natural.',
      datos: [['Evolución', 'Los cambios aparecen de forma progresiva durante los primeros días, y el efecto completo suele apreciarse a las dos semanas.'], ['Duración orientativa', 'Entre 3 y 4 meses. Alrededor del cuarto mes se evalúa si corresponde volver a aplicar.'], ['Importante', 'No está diseñada para eliminar por completo arrugas ya marcadas en reposo. Edad mínima: 18 años.']] },
    { id: 'bruxismo', nombre: 'Toxina para bruxismo', foto: 'trat/acido.jpg',
      texto: 'Puede formar parte del manejo del bruxismo en pacientes seleccionados. Disminuye la actividad excesiva de los músculos que aprietan la mandíbula, especialmente los maseteros.',
      datos: [['Busca', 'Reducir la tensión muscular y las molestias asociadas. En algunas personas también afina progresivamente el contorno mandibular.'], ['Importante', 'No es una cura ni sustituye la atención odontológica.']] },
    { id: 'tercio', nombre: 'Lifting de tercio inferior', foto: 'trat/rellenos.jpg',
      texto: 'Aplicación de toxina que puede formar parte de protocolos para mejorar la apariencia del tercio inferior del rostro y del contorno mandibular.',
      datos: [['Se valora para', 'Tercio inferior facial y contorno mandibular, según tu anatomía.']] },
    { id: 'nefertiti', nombre: 'Técnica Nefertiti', foto: 'dra-consultorio.jpg',
      texto: 'Aplicación estratégica de toxina en áreas del cuello y del tercio inferior, en pacientes seleccionados.',
      datos: [['Importante', 'Es un tratamiento distinto del protocolo general de reafirmación del cuello. La valoración permite distinguir cuál corresponde.']] },
    { id: 'hialuronico', nombre: 'Rellenos con ácido hialurónico', foto: 'trat/rellenos.jpg',
      texto: 'No es solo relleno: es diseño. Con una sustancia biocompatible presente naturalmente en el organismo, se aporta volumen, soporte, hidratación y definición, buscando armonía y respeto por tus rasgos.',
      datos: [['Se valora en', 'Labios, ojeras, mentón, pómulos, mandíbula y otras zonas.'], ['Duración orientativa', 'De 10 a 18 meses, según la zona, el producto y tu metabolismo.'], ['Importante', 'No se garantiza un resultado idéntico al de una fotografía. Edad mínima: 18 años.']] },
  ]],
  ['Bioestimulación y medicina regenerativa', [
    { id: 'radiesse', nombre: 'Radiesse', foto: 'trat/acido.jpg',
      texto: 'Bioestimulador a base de hidroxiapatita de calcio. Busca estimular el colágeno, mejorar la firmeza, la elasticidad y la calidad de la piel, y aportar soporte en determinadas áreas.',
      datos: [['Se valora en', 'Rostro, cuello y manos.'], ['Duración orientativa', 'De 12 a 18 meses, con resultados que se desarrollan de forma progresiva.']] },
    { id: 'gouri', nombre: 'Gouri', foto: 'trat/piel.jpg',
      texto: 'Bioestimulador basado en policaprolactona, orientado a una bioestimulación más difusa y progresiva. Busca mejorar la firmeza, la elasticidad y la calidad de la piel.',
      datos: [['Se valora para', 'Rejuvenecimiento facial y flacidez leve.'], ['Duración orientativa', 'De 10 a 18 meses, según cada caso.'], ['Importante', 'A veces se le dice “colágeno líquido”, pero no se inyecta colágeno: es un bioestimulador.']] },
    { id: 'polinucleotidos', nombre: 'Polinucleótidos o ADN de salmón', foto: 'trat/exosomas.jpg',
      texto: 'Protocolos orientados a apoyar los procesos de reparación y mejorar la hidratación, la luminosidad, la textura y la elasticidad de la piel.',
      datos: [['Objetivo', 'La calidad de la piel y su reparación. No aportan volumen como un relleno.'], ['Evolución', 'Los cambios son progresivos y varían entre personas. Pueden combinarse con microagujas si la doctora lo indica.']] },
    { id: 'profhilo', nombre: 'Profhilo', foto: 'trat/ojeras.jpg',
      texto: 'Ácido hialurónico de alta pureza orientado a la biorremodelación, la hidratación, la elasticidad y la firmeza.',
      datos: [['Importante', 'No es un relleno facial tradicional ni busca generar volumen. Tiene un objetivo y un protocolo propios.']] },
    { id: 'exosomas', nombre: 'Exosomas', foto: 'trat/exosomas.jpg',
      texto: 'Estructuras microscópicas que participan en la comunicación celular. Se contemplan dentro de protocolos orientados a apoyar la reparación y mejorar la calidad de la piel, la textura y la luminosidad.',
      datos: [['Importante', 'La selección y la forma de uso las define la doctora según tu caso.']] },
    { id: 'prp', nombre: 'Plasma rico en plaquetas (PRP)', foto: 'toma-laboratorio.jpg',
      texto: 'Utiliza componentes obtenidos de tu propia sangre para apoyar procesos naturales de reparación, en protocolos faciales y capilares.',
      datos: [['En el rostro', 'Se orienta a la calidad de la piel y al rejuvenecimiento progresivo.'], ['En el cabello', 'Puede usarse como complemento del protocolo individual.'], ['Importante', 'Que venga de tu propia sangre no significa ausencia de riesgos ni resultados garantizados.']] },
  ]],
  ['Calidad de la piel', [
    { id: 'lumina', nombre: 'Lumina Skin', precio: 'Desde $650 por zona', foto: 'trat/ojeras.jpg',
      texto: 'Protocolo médico personalizado para mejorar la hidratación, la luminosidad y la calidad general de la piel. Según tus necesidades, combina procedimientos de revitalización, hidratación y estimulación de colágeno y elastina.',
      datos: [['Se valora en', 'Rostro, cuello y manos, desde los 18 años.'], ['Duración orientativa', 'Entre 6 meses y 1 año, según los procedimientos y tu respuesta.'], ['Importante', 'No es un único producto: la mayoría de las técnicas son inyectables y se eligen durante la valoración.']] },
    { id: 'limpieza', nombre: 'Limpieza facial médica', precio: '₡50 000', foto: 'trat/limpieza.jpg',
      texto: 'No consiste solamente en retirar impurezas. Primero analizamos tu piel para seleccionar un protocolo según sus necesidades.',
      datos: [['Busca', 'Una piel más limpia y cuidada, con criterio médico.']] },
    { id: 'oxygeneo', nombre: 'Oxygeneo', foto: 'trat/radiofrecuencia.jpg',
      texto: 'Tratamiento facial de revitalización que combina exfoliación, oxigenación y nutrición de la piel, para mejorar la luminosidad, la hidratación y la textura.',
      datos: [['Mantenimiento', 'La referencia es una sesión cada dos meses, ajustable según tu valoración.']] },
    { id: 'mesofacial', nombre: 'Mesoterapia facial', foto: 'trat/piel.jpg',
      texto: 'Aplicación de principios activos mediante microinyecciones para mejorar la hidratación, la nutrición, la textura y la calidad de la piel.',
      datos: [['Sesiones', 'La referencia del protocolo facial es de diez sesiones, pero la indicación y los intervalos se personalizan.']] },
    { id: 'microagujas', nombre: 'Microagujas', foto: 'piel-ancha.jpg',
      texto: 'También conocidas como microneedling. Crean microcanales controlados para estimular la reparación y la producción de colágeno.',
      datos: [['Pueden mejorar', 'La textura, la apariencia de los poros, determinadas cicatrices de acné y la calidad de la piel.'], ['Opciones', 'Microagujas faciales y despigmentantes, y combinaciones con protocolos regenerativos.']] },
  ]],
  ['Manchas y tono', [
    { id: 'peelings', nombre: 'Peelings médicos', foto: 'trat/peel.jpg',
      texto: 'Utilizan sustancias que favorecen una renovación controlada de la piel. Pueden formar parte de protocolos para manchas, textura irregular, luminosidad, acné, rosácea, revitalización y envejecimiento.',
      datos: [['Importante', 'No todos los peelings son apropiados para todas las pieles. La selección depende de la evaluación médica.']] },
    { id: 'cosmelan', nombre: 'Cosmelan', foto: 'trat/manchas.jpg',
      texto: 'Protocolo médico despigmentante para el manejo de hiperpigmentaciones y alteraciones del tono. Se valora en casos seleccionados de melasma, manchas solares y tono irregular.',
      datos: [['Busca', 'Mejorar la apariencia de las manchas y favorecer un tono más uniforme, sin prometer su eliminación completa.'], ['Importante', 'El melasma requiere un manejo personalizado y puede reaparecer. La protección solar y el seguimiento son parte del tratamiento.']] },
    { id: 'meline', nombre: 'Me Line', foto: 'trat/manchas.jpg',
      texto: 'Protocolo médico despigmentante para el manejo personalizado de manchas e hiperpigmentación. Su elección depende del tipo y la profundidad de la pigmentación, la zona y tu piel.',
      datos: [['Sesiones', 'El plan de referencia comprende tres sesiones.']] },
    { id: 'despojeras', nombre: 'Despigmentante de ojeras', foto: 'trat/ojeras.jpg',
      texto: 'Orientado al componente pigmentario de las ojeras. Como también pueden deberse a hundimiento, soporte, hidratación o características vasculares, no todas se tratan con despigmentantes.',
      datos: [['Otras alternativas', 'Mesoterapia, polinucleótidos o rellenos cuando corresponda. Despigmentar y rellenar tienen objetivos diferentes.']] },
    { id: 'despcorporal', nombre: 'Despigmentante corporal', foto: 'trat/cuerpo.jpg',
      texto: 'Protocolo para mejorar la apariencia de áreas corporales con hiperpigmentación o diferencias de tonalidad, personalizado según tu piel y tus objetivos.',
      datos: [] },
  ]],
  ['Cabello y cuerpo', [
    { id: 'capilar', nombre: 'Mesoterapia capilar', foto: 'trat/cabello.jpg',
      texto: 'Aplicación de sustancias mediante microinyecciones en el cuero cabelludo. Puede formar parte de protocolos para fortalecer el folículo y mejorar la apariencia de la densidad y la calidad del cabello.',
      datos: [['Importante', 'La caída del cabello tiene distintas causas, y la doctora debe valorar cada caso. Según la evaluación, se puede complementar con PRP u otros protocolos regenerativos.']] },
    { id: 'cuello', nombre: 'Reafirmación de cuello', foto: 'trat/acido.jpg',
      texto: 'Protocolos para mejorar la firmeza y la calidad de la piel del cuello, mediante bioestimulación y medicina regenerativa.',
      datos: [['Se valora con', 'Radiesse, Gouri y otras estrategias, según tu caso.']] },
    { id: 'manos', nombre: 'Revitalización de manos', foto: 'trat/piel.jpg',
      texto: 'Protocolos que buscan mejorar la calidad de la piel, la hidratación, la apariencia y la firmeza de las manos.',
      datos: [['Se valora con', 'Radiesse, bioestimulación y estrategias regenerativas.']] },
    { id: 'celulitis', nombre: 'Celulitis y mesoterapia corporal', foto: 'trat/cuerpo.jpg',
      texto: 'Abordaje personalizado según tus características y el grado de celulitis. Puede incluir mesoterapia corporal, radiofrecuencia, bioestimuladores o combinaciones que seleccione la doctora.',
      datos: [['Busca', 'Mejorar progresivamente la apariencia y la calidad de la piel de la zona, sin prometer eliminar la celulitis.']] },
    { id: 'depilacion', nombre: 'Depilación láser', foto: 'trat/depilacion.jpg',
      texto: 'Reduce progresivamente el crecimiento del vello. Se trabaja mediante paquetes.',
      datos: [['Sesiones', 'La referencia promedio es de diez sesiones, ajustable a tu caso.'], ['Importante', 'No se garantiza una depilación permanente ni una cantidad exacta de sesiones.']] },
  ]],
  ['Control médico del peso', [
    { id: 'glp1', nombre: 'Programa médico con GLP-1', foto: 'dra-sueter.jpg',
      texto: 'Protocolo personalizado para pérdida de peso bajo la supervisión de la Dra. Catalina, organizado como un plan mensual. Incluye valoración, seguimiento médico, orientación nutricional y cambios de hábitos.',
      datos: [['Cómo actúa', 'Sobre mecanismos relacionados con el apetito, la saciedad y la regulación de la glucosa, dentro de un plan integral.'], ['Importante', 'Los resultados varían. No se garantiza una cantidad de kilos ni un plazo, y la candidatura exige valoración médica.']] },
  ]],
]

// "Según lo que buscás": orienta, pero no diagnostica. La recomendación final depende de la valoración.
const GUIA = [
  ['Manchas y melasma', 'Depende del tipo de pigmentación y de tu piel.', ['peelings', 'cosmelan', 'meline', 'microagujas']],
  ['Ojeras', 'El abordaje cambia según haya pigmentación, falta de hidratación, de soporte o hundimiento.', ['despojeras', 'mesofacial', 'polinucleotidos', 'hialuronico']],
  ['Poros y cicatrices de acné', 'Se busca mejorar su apariencia, sin prometer que desaparezcan.', ['microagujas', 'peelings', 'oxygeneo']],
  ['Acné y rosácea', 'Se atienden con valoración y protocolos personalizados.', ['peelings', 'valoracion']],
  ['Líneas de expresión', 'La edad, por sí sola, no determina qué tratamiento necesitás.', ['toxina', 'polinucleotidos', 'radiesse']],
  ['Hidratación y calidad de piel', 'Para una piel más luminosa, hidratada y de textura más uniforme.', ['lumina', 'profhilo', 'polinucleotidos', 'oxygeneo', 'mesofacial']],
  ['Flacidez y firmeza', 'La selección depende del grado, la zona y tu anatomía.', ['radiesse', 'gouri', 'cuello', 'manos']],
  ['Naturalidad, sin rellenos', 'La planificación respeta tu anatomía y tus rasgos.', ['polinucleotidos', 'profhilo', 'exosomas', 'prp']],
  ['Caída del cabello', 'La causa orienta el protocolo.', ['capilar', 'prp']],
  ['Pérdida de peso', 'Un programa médico integral, nunca un producto de libre elección.', ['glp1']],
]

const DIFERENCIAS = [
  ['Toxina o ácido hialurónico', 'La toxina trabaja el movimiento muscular asociado a las líneas de expresión. Los rellenos trabajan volumen, soporte, definición e hidratación. No son intercambiables.'],
  ['Toxina o bioestimuladores', 'La toxina relaja músculos y suaviza líneas dinámicas. Los bioestimuladores se orientan al colágeno, la firmeza y la calidad de la piel. La doctora puede valorar combinarlos.'],
  ['Gouri o Radiesse', 'Ambos buscan estimular el colágeno. Gouri se orienta a una acción más difusa y progresiva; Radiesse puede aportar soporte estructural en áreas seleccionadas.'],
  ['Polinucleótidos o rellenos', 'Los polinucleótidos se enfocan en reparación, hidratación y textura. Los rellenos se orientan a volumen, soporte y contorno.'],
  ['Profhilo o rellenos', 'Profhilo se orienta a la hidratación y la biorremodelación. Los rellenos buscan volumen y contorno.'],
  ['Cosmelan o Me Line', 'Ambos son protocolos despigmentantes. La selección depende del tipo y la profundidad de la pigmentación, la zona y tu piel.'],
]

const PREGUNTAS = [
  ['¿Necesito una valoración antes de cualquier tratamiento?', 'Sí. Todos los tratamientos requieren valoración médica previa. Consultar un precio o querer un tratamiento no confirma que sea el indicado para vos: la doctora determina la candidatura y el protocolo.'],
  ['¿Puedo hacerme el tratamiento el mismo día?', 'En muchos casos es posible, según la evaluación, la disponibilidad y tu candidatura. No se puede garantizar antes de la valoración.'],
  ['¿Hay que pagar para reservar?', 'No se solicita un monto de reserva para agendar. Si cancelás el mismo día o llegás más de 15 minutos tarde, la próxima vez que agendés se te pedirá un anticipo de ₡50 000.'],
  ['¿Qué métodos de pago aceptan?', 'Efectivo, tarjetas de crédito y débito, SINPE Móvil, transferencia y enlace de pago. No contamos con tasa cero. La valoración médica se paga en colones.'],
  ['¿Cuál es la edad mínima?', 'Para los tratamientos estéticos, 18 años con valoración médica. Atendemos consultas de personas menores acompañadas por su persona encargada, lo que no implica autorizar un procedimiento estético.'],
  ['¿Puedo tratarme si estoy embarazada o en lactancia?', 'Requiere una revisión individual con la doctora. Contanos tu caso en la valoración.'],
  ['¿Cuándo veo los resultados y cuánto duran?', 'Algunos tratamientos muestran cambios en pocos días; la bioestimulación y los protocolos regenerativos evolucionan durante semanas o meses. Los resultados no se garantizan: dependen del procedimiento, tu metabolismo, tus hábitos y tu plan. La mayoría de los tratamientos puede requerir mantenimiento.'],
  ['¿Qué pasa después de un tratamiento?', 'Puede aparecer sensibilidad, inflamación leve, enrojecimiento o pequeños moretones temporales. Muchas personas retoman sus actividades el mismo día o al siguiente. Sol, ejercicio, maquillaje, piscina o sauna se ajustan según las indicaciones que te dé la doctora para tu tratamiento.'],
  ['¿Cuándo debo contactar a la clínica?', 'Ante dolor intenso, inflamación importante, cambios de coloración inusuales, una reacción inesperada o cualquier síntoma que te preocupe. Ante síntomas graves o una posible emergencia, buscá atención médica inmediata.'],
  ['¿Atienden pacientes de otros países o de forma virtual?', 'Sí, atendemos a pacientes internacionales, y te recomendamos coordinar con anticipación, sobre todo si venís por pocos días. También contamos con un programa de consultas virtuales: el equipo te confirma sus condiciones.'],
  ['¿Venden productos para el cuidado de la piel?', 'Sí. Durante la consulta, la doctora te recomienda cuáles necesitás según tu piel, tu procedimiento y tus objetivos.'],
  ['¿Qué servicios no realizan?', 'No realizamos eliminación ni cauterización de lunares, piercings ni eliminación de tatuajes.'],
]

const REELS = ['De2Xc3MAmpK', 'DehxFb1iK3g', 'DeAS_ocFO6j', 'DdCfyMYD5gh', 'Dc1n5K0krU3', 'DcecjWyAT8V', 'DcRkl8ZCmDK', 'Db30mt2AR-6', 'DbTxgBZCKxr', 'DboX56jCQc-', 'DZqM6R2Cemz', 'DZ-zUCCACUI']

// ── Lista de tratamientos ──
const lista = $('#lista')
const abrirTrat = (trat) => {
  const yaAbierto = trat.classList.contains('abierto')
  $$('.trat', lista).forEach((t) => { t.classList.remove('abierto'); $('.trat-boton', t).setAttribute('aria-expanded', 'false') })
  if (!yaAbierto) { trat.classList.add('abierto'); $('.trat-boton', trat).setAttribute('aria-expanded', 'true') }
}
lista.innerHTML = GRUPOS.map(([grupo, filas], g) => `<li class="grupo etiqueta" data-grupo="${g}">${grupo}</li>` + filas.map(({ id, nombre, precio, texto, datos, foto }) => `<li class="trat" id="trat-${id}" data-grupo="${g}">
    <button class="trat-boton" aria-expanded="false" aria-controls="t-${id}">
      <span class="trat-nombre">${nombre}</span><span class="trat-precio">${precio ?? ''}</span><span class="trat-mas" aria-hidden="true"></span>
    </button>
    <div class="trat-cuerpo" id="t-${id}"><div><div class="trat-interior">
      <div>
        <p>${texto}</p>
        ${datos.length ? `<dl class="trat-datos">${datos.map(([t, d]) => `<div><dt>${t}</dt><dd>${d}</dd></div>`).join('')}</dl>` : ''}
        <a class="enlace" href="${WHATSAPP}?text=${encodeURIComponent(`Hola, me gustaría información sobre ${nombre}.`)}" target="_blank" rel="noopener">Consultá por este tratamiento</a>
      </div>
      <figure><img src="img/${foto}" alt="" loading="lazy"></figure>
    </div></div></div>
  </li>`).join('')).join('')
lista.addEventListener('click', (e) => {
  const boton = e.target.closest('.trat-boton')
  if (boton) abrirTrat(boton.parentElement)
})
abrirTrat($('.trat', lista))

// Filtro por categoría, para no recorrer toda la lista.
const filtros = $('#filtros')
filtros.innerHTML = `<button class="filtro on" data-g="" aria-pressed="true">Todos</button>` + GRUPOS.map(([g], i) => `<button class="filtro" data-g="${i}" aria-pressed="false">${g}</button>`).join('')
const filtrar = (g) => {
  $$('.filtro', filtros).forEach((f) => { const on = f.dataset.g === g; f.classList.toggle('on', on); f.setAttribute('aria-pressed', on) })
  $$('[data-grupo]', lista).forEach((el) => { el.hidden = g !== '' && el.dataset.grupo !== g; el.classList.add('visto') })
}
filtros.addEventListener('click', (e) => { const f = e.target.closest('.filtro'); if (f) filtrar(f.dataset.g) })

// ── Según lo que buscás: lleva al tratamiento y lo deja abierto ──
const nombreDe = Object.fromEntries(GRUPOS.flatMap(([, filas]) => filas.map((t) => [t.id, t.nombre])))
$('#guia').innerHTML = GUIA.map(([necesidad, texto, ids]) => `<li class="guia-fila sube">
    <h3>${necesidad}</h3><p>${texto}</p>
    <div class="guia-opciones">${ids.map((id) => `<button class="guia-op" data-ir="${id}">${nombreDe[id]}</button>`).join('')}</div>
  </li>`).join('')
$('#guia').addEventListener('click', (e) => {
  const ir = e.target.closest('[data-ir]')
  if (!ir) return
  filtrar('')
  const trat = $(`#trat-${ir.dataset.ir}`)
  if (!trat.classList.contains('abierto')) abrirTrat(trat)
  // Espera a que se cierre el que estaba abierto, para no quedar corrido.
  setTimeout(() => trat.scrollIntoView({ behavior: quieto ? 'auto' : 'smooth', block: 'start' }), quieto ? 0 : 450)
})

// ── Diferencias y preguntas frecuentes ──
const desplegables = (items) => items.map(([t, d]) => `<li class="plegable sube"><details><summary><span>${t}</span><i aria-hidden="true"></i></summary><p>${d}</p></details></li>`).join('')
$('#diferencias').innerHTML = desplegables(DIFERENCIAS)
$('#preguntas').innerHTML = desplegables(PREGUNTAS)

// ── Carril de videos: en computadora se mueve solo y se puede arrastrar; en celular se desliza con el dedo ──
const carril = $('#carril')
const enBucle = computadora() && !quieto
const reelHtml = (id, copia) => `<a class="reel" ${copia ? 'aria-hidden="true" tabindex="-1"' : ''} draggable="false" href="https://www.instagram.com/lapielcentromedicodraalpizar/reel/${id}/" target="_blank" rel="noopener" aria-label="${copia ? '' : 'Ver video de la doctora en Instagram'}"><img src="img/reels/${id}.jpg" alt="" loading="lazy" draggable="false"><video src="img/videos/${id}.mp4" muted loop playsinline preload="none"></video></a>`
carril.innerHTML = REELS.map((id) => reelHtml(id, false)).join('') + (enBucle ? REELS.map((id) => reelHtml(id, true)).join('') : '')
const sonar = (reel, si) => {
  const v = $('video', reel)
  reel.classList.toggle('sonando', si)
  if (si) v.play().catch((e) => console.error('[video]', e.message)); else v.pause()
}
let carrilX = 0, carrilVel = -0.45, arrastre = null, seMovio = false, sobreCarril = false
if (enBucle) {
  carril.addEventListener('pointerdown', (e) => { arrastre = { x: e.clientX, inicio: carrilX }; seMovio = false; carril.classList.add('arrastrando') })
  addEventListener('pointermove', (e) => {
    if (!arrastre) return
    const dx = e.clientX - arrastre.x
    if (Math.abs(dx) > 6) seMovio = true
    carrilX = arrastre.inicio + dx
  })
  const soltar = () => { arrastre = null; carril.classList.remove('arrastrando') }
  addEventListener('pointerup', soltar)
  addEventListener('pointercancel', soltar)
  carril.addEventListener('click', (e) => { if (seMovio) e.preventDefault() })
  carril.addEventListener('pointerenter', () => { sobreCarril = true })
  carril.addEventListener('pointerleave', () => { sobreCarril = false })
  $$('.reel', carril).forEach((r) => {
    r.addEventListener('pointerenter', () => sonar(r, true))
    r.addEventListener('pointerleave', () => sonar(r, false))
  })
} else if (!quieto) {
  const visible = new IntersectionObserver((ents) => ents.forEach((e) => sonar(e.target, e.isIntersecting)), { root: carril, threshold: 0.75 })
  $$('.reel', carril).forEach((r) => visible.observe(r))
}

// ── Videos que solo corren cuando están a la vista ──
const enfoque = new IntersectionObserver((ents) => ents.forEach((e) => {
  if (quieto) return
  if (e.isIntersecting) e.target.play().catch((err) => console.error('[video]', err.message)); else e.target.pause()
}), { threshold: 0.2 })
$$('[data-enfoque]').forEach((v) => enfoque.observe(v))

// ── Revelados ──
const palabras = $('[data-palabras]')
palabras.innerHTML = palabras.textContent.split(' ').map((p) => `<i class="${/correcto/.test(p) ? 'acento' : ''}">${p}</i>`).join(' ')
const fichas = $$('i', palabras)

const avistar = new IntersectionObserver((ents) => ents.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add('visto'); avistar.unobserve(e.target) }
}), { rootMargin: '0px 0px -8% 0px' })
$$('main .titulo:not(.portada .titulo), .sube, .foto, .trat').forEach((el) => avistar.observe(el))

// ── Botones con imán ──
if (matchMedia('(hover: hover)').matches && !quieto) {
  $$('.iman').forEach((b) => {
    b.addEventListener('pointermove', (e) => {
      const r = b.getBoundingClientRect()
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px, ${(e.clientY - r.top - r.height / 2) * 0.32}px)`
    })
    b.addEventListener('pointerleave', () => { b.style.transform = '' })
  })
}

// ── Menú, botón fijo y altura del proceso ──
const nav = $('.nav'), fijo = $('.fijo'), avance = $('.avance')
const portada = $('.portada'), gigantes = $$('.portada-gigante span'), arco = $('.arco'), arcoImg = $('.arco img')
const frase = $('.frase'), fraseFija = $('.frase-fija'), fraseFondo = $('.frase-fondo')
const proceso = $('.proceso'), pista = $('.proceso-pista')
const cierre = $('.cierre')
const moviles = $$('[data-mover]').map((el) => ({ el, f: Number(el.dataset.mover) }))

function medir() {
  if (computadora()) {
    const sobrante = Math.max(0, pista.scrollWidth - innerWidth)
    proceso.style.setProperty('--alto', `${innerHeight + sobrante}px`)
  } else {
    proceso.style.removeProperty('--alto')
    pista.style.transform = ''
  }
}
addEventListener('resize', medir)
addEventListener('load', medir)
medir()

let ultimoY = scrollY, anchoCopia = 0

function cuadro() {
  const y = scrollY, alto = innerHeight
  const total = document.documentElement.scrollHeight - alto
  avance.style.transform = `scaleX(${total > 0 ? y / total : 0})`

  if (Math.abs(y - ultimoY) > 6) {
    nav.classList.toggle('oculto', y > ultimoY && y > alto * 0.6)
    ultimoY = y
  }
  const enCierre = cierre.getBoundingClientRect().top < alto * 0.75
  fijo.classList.toggle('on', y > alto * 0.8 && !enCierre)

  // Portada: las letras se abren y la doctora crece
  const pPortada = limitar(y / (portada.offsetHeight - alto))
  if (pPortada < 1 && !quieto) {
    const abre = pPortada * innerWidth * (computadora() ? 0.32 : 0.5)
    gigantes.forEach((s) => { s.style.transform = `translateX(${Number(s.dataset.lado) * abre}px)` })
    arco.style.transform = `scale(${1 + pPortada * 0.1})`
    arcoImg.style.transform = `translateY(${pPortada * -4}%) scale(${1 + pPortada * 0.08})`
  }

  // Manifiesto: las palabras se encienden una a una
  const rP = palabras.getBoundingClientRect()
  const pPal = limitar((alto * 0.86 - rP.top) / (alto * 0.5 + rP.height * 0.6))
  const encendidas = quieto ? fichas.length : Math.round(pPal * fichas.length)
  fichas.forEach((f, i) => f.classList.toggle('on', i < encendidas))

  // Movimiento lento de las fotos
  if (!quieto) {
    moviles.forEach(({ el, f }) => {
      const r = el.getBoundingClientRect()
      if (r.bottom < -80 || r.top > alto + 80) return
      el.style.translate = `0 ${(r.top + r.height / 2 - alto / 2) * f}px`
    })
  }

  // Frase: entra una parte, después la otra, mientras la foto se acerca
  if (!quieto) {
    const rF = frase.getBoundingClientRect()
    const pF = limitar(-rF.top / (frase.offsetHeight - alto))
    fraseFija.style.setProperty('--a', limitar(pF / 0.28).toFixed(3))
    fraseFija.style.setProperty('--b', limitar((pF - 0.42) / 0.28).toFixed(3))
    fraseFondo.style.setProperty('--z', (1.12 - pF * 0.12).toFixed(3))
  }

  // Proceso: de lado en computadora
  if (computadora() && !quieto) {
    const rPr = proceso.getBoundingClientRect()
    const sobrante = Math.max(0, pista.scrollWidth - innerWidth)
    const pPr = limitar(-rPr.top / Math.max(1, proceso.offsetHeight - alto))
    pista.style.transform = `translate3d(${-pPr * sobrante}px, 0, 0)`
  }

  // Carril de videos, en bucle. Se detiene mientras el cursor está encima.
  if (enBucle) {
    if (!anchoCopia) anchoCopia = carril.scrollWidth / 2
    if (!arrastre && !sobreCarril) carrilX += carrilVel
    if (carrilX <= -anchoCopia) { carrilX += anchoCopia; if (arrastre) arrastre.inicio += anchoCopia }
    if (carrilX > 0) { carrilX -= anchoCopia; if (arrastre) arrastre.inicio -= anchoCopia }
    carril.style.transform = `translate3d(${carrilX}px, 0, 0)`
  }

  requestAnimationFrame(cuadro)
}
requestAnimationFrame(cuadro)
addEventListener('resize', () => { anchoCopia = 0 })
