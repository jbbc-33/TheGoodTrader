export const courseData = [
  {
    id: "intro",
    title: "Lección 1: Introducción al Trading Manual y Mercados",
    content: `
      <h2>¿Qué es el Trading Manual y por qué elegirlo?</h2>
      <p>El <strong>trading manual</strong> es el arte de analizar los mercados financieros tomando decisiones deliberadas basadas en tu propio análisis, sin depender de algoritmos de ejecución automática. Es ideal para quienes desean mantener control total sobre entradas, salidas y gestión emocional.</p>

      <p>Ventajas clave: control del riesgo en tiempo real; adaptación a noticias y contexto macro; aprendizaje acelerado de la lectura del precio. Desventajas: requiere disciplina, tiempo y una curva de aprendizaje.</p>

      <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" alt="Trader operando manualmente en múltiples pantallas" class="content-img" />

      <h3>Mercados y sus características</h3>
      <ul>
        <li><strong>Forex (Divisas):</strong> Mercado descentralizado, alta liquidez y spreads variables; ideal para intradía y scalping.</li>
        <li><strong>Índices Bursátiles:</strong> Representan carteras amplias; útiles para swing y day trading con correlaciones macro.</li>
        <li><strong>Criptomonedas:</strong> Volatilidad alta, operable 24/7; exige gestión de riesgo y conocimiento de exchanges.</li>
        <li><strong>Commodities:</strong> Sensibles a inventarios y geopolítica; útiles para diversificar estrategias.</li>
      </ul>

      <div class="info-box">
        <strong>💡 Consejo de Oro:</strong> Especialízate en 1–2 mercados al principio. Dominar horarios y comportamiento reduce ruido y mejora la curva de aprendizaje.
      </div>

      <h3>Sesiones de trading y su impacto</h3>
      <ol>
        <li><strong>Sesión Asiática:</strong> Menor volatilidad; buen momento para preparar operaciones.</li>
        <li><strong>Sesión de Londres:</strong> Alta liquidez; frecuentemente genera la dirección del día.</li>
        <li><strong>Sesión de Nueva York:</strong> Volatilidad por noticias económicas; ideal para confirmaciones.</li>
      </ol>

      <h3>Checklist inicial para el principiante</h3>
      <ul>
        <li>Define capital disponible y aplica la regla del 1%.</li>
        <li>Elige 1–2 activos y un marco temporal principal.</li>
        <li>Practica en demo hasta que tu ejecución y gestión emocional sean consistentes.</li>
      </ul>
    `,
  },

  {
    id: "estructura",
    title: "Lección 2: Estructura del Mercado y Fractalidad",
    content: `
      <h2>El Lenguaje del Precio: Estructura</h2>
      <p>El precio se mueve en impulsos y retrocesos. Identificar la <strong>estructura del mercado</strong> (tendencia, retroceso, rango) es la base para decidir dirección y tamaño de la posición.</p>

      <img src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80" alt="Gráfico mostrando estructura alcista y bajista" class="content-img" />

      <h3>Fases del mercado y señales prácticas</h3>
      <ul>
        <li><strong>Tendencia Alcista:</strong> Altos Más Altos y Bajos Más Altos. Busca compras en retrocesos a zonas de valor.</li>
        <li><strong>Tendencia Bajista:</strong> Bajos Más Bajos y Altos Más Bajos. Prioriza ventas en rupturas o rebotes a resistencias.</li>
        <li><strong>Rango:</strong> Operaciones de rango requieren confirmaciones y stops ajustados; evita operar sin edge claro.</li>
      </ul>

      <h3>Fractalidad y análisis multitemporal (Top‑Down)</h3>
      <p>Los mismos patrones se repiten en distintos marcos temporales. Un análisis Top‑Down reduce ruido y mejora la relación riesgo/beneficio.</p>
      <ol>
        <li>1D: define la tendencia macro y niveles clave.</li>
        <li>4H/1H: identifica zonas de interés y confluencias.</li>
        <li>15m/5m: busca el setup exacto y optimiza el stop.</li>
      </ol>

      <div class="info-box">
        <strong>⚠️ Advertencia:</strong> El mercado pasa la mayor parte del tiempo en consolidación. La paciencia y la selección de setups son esenciales.
      </div>

      <h3>Ejercicio práctico</h3>
      <p>Selecciona un activo, marca en 1D los soportes y resistencias, baja a 4H para ver zonas de confluencia y finalmente busca un patrón de entrada en 15m. Registra la operación en tu journal.</p>
    `,
  },

  {
    id: "velas",
    title: "Lección 3: Acción del Precio y Liquidez",
    content: `
      <h2>Anatomía de las Velas Japonesas y su interpretación</h2>
      <p>Las velas muestran la batalla entre compradores y vendedores. Aprende a leer cuerpo, mechas y volumen para detectar intención institucional y puntos de liquidez.</p>

      <img src="https://images.unsplash.com/photo-1613442301239-ea2478101ea7?auto=format&fit=crop&w=800&q=80" alt="Esquema de velas japonesas y mechas" class="content-img" />

      <h3>Patrones operables y su contexto</h3>
      <ul>
        <li><strong>Pin Bar:</strong> Rechazo claro; mayor validez en zonas de confluencia.</li>
        <li><strong>Vela Envolvente:</strong> Indica cambio de momentum; útil en rupturas y giros.</li>
        <li><strong>Doji:</strong> Indecisión; mayor peso si aparece en niveles clave o tras tendencia prolongada.</li>
      </ul>

      <h3>Liquidez, stops y fakeouts</h3>
      <p>Los grandes participantes buscan liquidez para ejecutar órdenes grandes. Aprende a identificar trampas de liquidez (stop hunts) y a operar la reacción posterior en lugar de la ruptura inicial.</p>

      <h3>Volumen y confirmación</h3>
      <p>El volumen confirma la validez de movimientos. Un breakout con volumen creciente tiene mayor probabilidad de continuación; un breakout sin volumen suele fallar.</p>

      <div class="info-box">
        <strong>🔍 Tip práctico:</strong> Combina lectura de velas con zonas de liquidez y niveles de interés para filtrar señales falsas.
      </div>

      <h3>Ejercicio práctico</h3>
      <p>En un gráfico 15m, identifica una zona de soporte/resistencia en 1H. Espera una vela de rechazo (pin bar o engulfing) en la zona y confirma con aumento de volumen antes de considerar la entrada.</p>
    `,
  },

  {
    id: "riesgo",
    title: "Lección 4: Gestión de Riesgo Profesional",
    content: `
      <h2>Preservación del capital: la regla número uno</h2>
      <p>Sin capital no hay aprendizaje. La gestión de riesgo convierte una estrategia en un negocio sostenible. Define cuánto estás dispuesto a perder por operación y por día.</p>

      <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80" alt="Finanzas, calculadora y gestión monetaria" class="content-img" />

      <h3>La regla del 1% y position sizing</h3>
      <p>Nunca arriesgues más del 1%–2% del capital por operación. Calcula el tamaño de la posición con la fórmula: <em>Lotaje = (Capital * Riesgo%) / (StopLossPips * ValorPorPip)</em>.</p>

      <h3>Gestión de rachas y límites diarios</h3>
      <p>Define límites: si pierdes X operaciones consecutivas o X% del capital en un día, detén la operativa y revisa el plan. Esto evita decisiones emocionales y revenge trading.</p>

      <h3>Uso de órdenes y gestión activa</h3>
      <p>Usa órdenes limitadas para entradas y trailing stops para proteger ganancias. Evita mover stops por impulso; si cambias el stop, documenta la razón en tu journal.</p>

      <div class="info-box">
        <strong>📈 Matemática del trading:</strong> Con un R:R de 1:2, necesitas acertar al menos 34% de las operaciones para ser rentable. Calcula tu tasa de aciertos y ajusta tamaño y R:R en consecuencia.
      </div>

      <h3>Ejercicio práctico</h3>
      <p>Simula 50 operaciones con tu tamaño real en demo y registra drawdowns máximos. Ajusta riesgo por operación hasta que el drawdown sea tolerable para tu psicología.</p>
    `,
  },

  {
    id: "psicologia",
    title: "Lección 5: Psicotrading y Sesgos Cognitivos",
    content: `
      <h2>Control mental: el factor decisivo</h2>
      <p>El trading es 20% técnica y 80% psicología. Controlar emociones, expectativas y sesgos es tan importante como la estrategia.</p>

      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Persona analizando datos de forma reflexiva" class="content-img" />

      <h3>Sesgos comunes y cómo mitigarlos</h3>
      <ul>
        <li><strong>FOMO:</strong> Usa reglas de entrada y un checklist antes de operar.</li>
        <li><strong>Revenge Trading:</strong> Implementa un cooldown tras pérdidas (ej. no operar 24 horas).</li>
        <li><strong>Overtrading:</strong> Limita operaciones diarias y prioriza calidad sobre cantidad.</li>
      </ul>

      <h3>Rutinas para disciplina</h3>
      <p>Rutinas diarias (pre‑market checklist, revisión post‑market, journaling) reducen la variabilidad emocional y mejoran la consistencia.</p>

      <div class="info-box">
        <strong>🧠 Ejercicio práctico:</strong> Antes de cada operación responde: ¿Por qué entro? ¿Cuál es mi riesgo exacto? ¿Qué cambiaría si pierdo?
      </div>
    `,
  },

  {
    id: "plan",
    title: "Lección 6: Creando tu Plan de Trading",
    content: `
      <h2>Tu plan: la constitución de tu negocio de trading</h2>
      <p>Un plan escrito elimina la improvisación. Define mercados, horarios, gestión de riesgo, setups, criterios de salida y reglas de revisión.</p>

      <h3>Elementos esenciales</h3>
      <ol>
        <li><strong>Mercados y horarios:</strong> Qué operar y cuándo.</li>
        <li><strong>Gestión de riesgo:</strong> Riesgo por operación, límites diarios y semanales.</li>
        <li><strong>Modelo de entrada:</strong> Checklist paso a paso para validar la entrada.</li>
        <li><strong>Criterios de salida:</strong> Objetivos, trailing stops y reglas de gestión.</li>
      </ol>

      <div class="info-box">
        <strong>📝 Trading Journal:</strong> Registra fecha, activo, tamaño, stop, objetivo, resultado y estado emocional. Analiza semanal y mensualmente.
      </div>

      <h3>Plantilla rápida de checklist de entrada</h3>
      <ul>
        <li>¿Tendencia en 1H/4H a favor?</li>
        <li>¿Precio en zona de confluencia (soporte/resistencia, media, fibo)?</li>
        <li>¿Patrón de vela de rechazo o confirmación?</li>
        <li>¿Riesgo calculado y aceptable?</li>
      </ul>
    `,
  },

  {
    id: "estrategias",
    title: "Lección 7: Estrategias Operables para Trading Manual",
    content: `
      <h2>Estrategias prácticas y replicables</h2>
      <p>Presentamos estrategias sencillas, con reglas claras y ejemplos de gestión. Estas estrategias son educativas y deben probarse en demo antes de operar con capital real.</p>

      <h3>Estrategia 1: Pullback a la tendencia (Multi‑timeframe)</h3>
      <ol>
        <li>Identifica tendencia en 1D/4H.</li>
        <li>Espera retroceso a zona de valor en 1H (media, soporte, fibo 38–61%).</li>
        <li>Busca confirmación en 15m (pin bar, engulfing) y volumen de apoyo.</li>
        <li>Entrada: orden limitada en la zona de rechazo; Stop: por debajo del mínimo del patrón; Objetivo: 1:2 o niveles de resistencia siguientes.</li>
      </ol>

      <h3>Estrategia 2: Breakout con confirmación de volumen</h3>
      <ol>
        <li>Marca rango o nivel clave en 1H/15m.</li>
        <li>Espera ruptura con aumento de volumen y cierre por encima/por debajo del nivel.</li>
        <li>Entrada: en cierre de vela de confirmación o en pullback al nivel roto.</li>
        <li>Stop: por debajo/encima del nivel roto; Objetivo: proyección del rango o múltiplos del riesgo.</li>
      </ol>

      <h3>Estrategia 3: Operar zonas de liquidez (Smart Money Concept básico)</h3>
      <ol>
        <li>Identifica zonas donde se acumula liquidez (tops y bottoms visibles, órdenes pendientes).</li>
        <li>Observa búsqueda de liquidez (falsas rupturas) y espera la reacción institucional (velas de rechazo con volumen).</li>
        <li>Entrada: en la reacción; Stop: fuera de la zona de toma de liquidez; Objetivo: estructura previa o niveles de interés.</li>
      </ol>

      <div class="info-box">
        <strong>⚠️ Nota:</strong> Estas estrategias son educativas. No constituyen asesoramiento financiero. Prueba en demo y documenta cada operación.
      </div>

      <h3>Backtest rápido de una estrategia</h3>
      <p>Selecciona 50–100 operaciones históricas en el activo y marco temporal elegido. Registra entradas, stops, objetivos y resultado. Calcula tasa de aciertos, R:R medio y drawdown máximo.</p>
    `,
  },

  {
    id: "orderflow",
    title: "Lección 8: Fundamentos de Order Flow y Lectura Institucional",
    content: `
      <h2>Introducción al flujo de órdenes para traders manuales</h2>
      <p>El order flow muestra la interacción entre órdenes de mercado y limitadas. Aunque el acceso completo a order flow requiere herramientas avanzadas, entender los conceptos básicos mejora la lectura de la acción del precio.</p>

      <h3>Conceptos clave</h3>
      <ul>
        <li><strong>Liquidez:</strong> Zonas donde se concentran órdenes (stop loss, órdenes limitadas).</li>
        <li><strong>Imbalance:</strong> Desequilibrio entre compradores y vendedores que puede preceder movimientos fuertes.</li>
        <li><strong>Absorción:</strong> Cuando grandes órdenes limitadas detienen un movimiento y provocan reversión.</li>
      </ul>

      <h3>Cómo aplicar order flow sin herramientas avanzadas</h3>
      <ol>
        <li>Observa velas con mechas largas y volumen alto en zonas clave (posible absorción).</li>
        <li>Detecta rupturas que vuelven rápidamente al nivel (falso breakout) y espera la reacción.</li>
        <li>Usa estas señales como filtro adicional para tus entradas y salidas.</li>
      </ol>

      <div class="info-box">
        <strong>🔧 Recomendación:</strong> Si decides profundizar, estudia herramientas de DOM/Footprint y practica en simuladores antes de operar en real.
      </div>
    `,
  },

  {
    id: "backtesting",
    title: "Lección 9: Backtesting, Forward Testing y Validación de Estrategias",
    content: `
      <h2>Cómo validar una estrategia antes de arriesgar capital</h2>
      <p>Backtesting y forward testing son pasos imprescindibles para comprobar si una estrategia tiene edge. Sin validación, cualquier resultado es anecdótico.</p>

      <h3>Proceso de backtesting</h3>
      <ol>
        <li>Define reglas exactas de entrada, stop y salida.</li>
        <li>Recopila datos históricos del activo y marco temporal.</li>
        <li>Registra cada operación: entrada, stop, objetivo, resultado y notas.</li>
        <li>Calcula métricas: tasa de aciertos, expectancy, drawdown máximo y número de operaciones.</li>
      </ol>

      <h3>Forward testing y demo</h3>
      <p>Tras un backtest positivo, opera la estrategia en demo (forward testing) durante un periodo representativo (ej. 3 meses o 100 operaciones) para validar ejecución y psicología.</p>

      <div class="info-box">
        <strong>📊 Métrica clave:</strong> Expectancy = (WinRate * AvgWin) - (LossRate * AvgLoss). Una expectancy positiva es necesaria pero no suficiente; considera también el drawdown y la varianza.
      </div>
    `,
  },

  {
    id: "herramientas",
    title: "Lección 10: Herramientas, Plataformas y Gestión Operativa",
    content: `
      <h2>Selecciona herramientas que soporten tu plan</h2>
      <p>Una buena plataforma facilita la ejecución, el análisis y el journaling. Prioriza estabilidad, velocidad y herramientas de dibujo y alertas.</p>

      <h3>Checklist de plataformas</h3>
      <ul>
        <li>Gráficos con múltiples marcos temporales y alertas.</li>
        <li>Posibilidad de órdenes limitadas y OCO (one‑cancels‑other).</li>
        <li>Historial y exportación de operaciones para journaling.</li>
      </ul>

      <h3>Rutinas operativas</h3>
      <ol>
        <li>Pre‑market: revisar noticias, niveles y plan del día.</li>
        <li>Durante sesión: seguir checklist de entrada y gestionar posiciones.</li>
        <li>Post‑market: registrar operaciones y analizar errores.</li>
      </ol>

      <div class="info-box">
        <strong>🔐 Seguridad:</strong> Usa 2FA, contraseñas únicas y verifica la reputación de la contraparte antes de depositar fondos.
      </div>
    `,
  },

  {
    id: "legal",
    title: "Lección 11: Ética, Responsabilidad y Buenas Prácticas",
    content: `
      <h2>Ética y responsabilidad del trader</h2>
      <p>Operar con transparencia y responsabilidad protege tu capital y reputación. Evita prácticas de riesgo extremo y sé honesto en la comunicación de resultados.</p>

      <h3>Buenas prácticas</h3>
      <ul>
        <li>Documenta resultados reales y evita presentar backtests sin contexto.</li>
        <li>Declara conflictos de interés si compartes señales o servicios.</li>
        <li>Educa con claridad: distingue entre educación y asesoramiento personalizado.</li>
      </ul>

      <div class="info-box">
        <strong>⚖️ Nota legal:</strong> Este curso es educativo. No constituye asesoramiento financiero. Consulta a un profesional para decisiones personalizadas.
      </div>
    `,
  }
];
