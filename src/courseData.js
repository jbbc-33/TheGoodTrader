// src/courseData.js

export const courseData = [
  {
    id: "intro",
    title: "Lección 1: Introducción al Trading Manual y Mercados",
    content: `
      <h2>¿Qué es el Trading Manual y por qué elegirlo?</h2>
      <p>El <strong>trading manual</strong> es el arte de analizar los mercados financieros tomando decisiones deliberadas basadas en tu propio análisis, sin depender de algoritmos de ejecución automática.</p>
      
      <p>A diferencia del trading automatizado, el operador manual posee una herramienta invaluable: el sentido común y la capacidad de leer el contexto socioeconómico. Un bot no sabe que el Presidente del Banco Central acaba de dar un discurso imprevisto; un trader manual sí.</p>
      
      <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" alt="Trader operando manualmente en múltiples pantallas" class="content-img" />

      <h3>Los Diferentes Mercados que puedes operar</h3>
      <p>Como trader manual, no estás limitado a un solo mercado. Sin embargo, es vital especializarse en uno o dos activos al principio. Los principales mercados son:</p>
      <ul>
        <li><strong>Forex (Divisas):</strong> El mercado más líquido del mundo. Operas pares de monedas como EUR/USD o GBP/JPY. Es ideal para análisis técnico puro debido a su inmenso volumen.</li>
        <li><strong>Índices Bursátiles:</strong> Representan el desempeño de las principales empresas de un país (ej. S&P 500, Nasdaq 100, DAX 40). Tienen tendencias muy claras y responden fuertemente a datos macroeconómicos.</li>
        <li><strong>Criptomonedas:</strong> Altamente volátiles y operables 24/7. Activos como Bitcoin o Ethereum ofrecen grandes oportunidades, pero exigen una gestión de riesgo mucho más estricta.</li>
      </ul>

      <div class="info-box">
        <strong>💡 Consejo de Oro:</strong> Al principio, ignora la abrumadora cantidad de indicadores disponibles (RSI, MACD, Bandas de Bollinger). El indicador más puro y rápido siempre será el propio precio. Todo lo demás llega con retraso.
      </div>

      <h3>Las Sesiones Operativas (El factor Tiempo)</h3>
      <p>El mercado se comporta de manera diferente dependiendo de la hora del día. Existen tres sesiones principales:</p>
      <ol>
        <li><strong>Sesión Asiática (Tokio/Sídney):</strong> Suele ser de consolidación y movimientos lentos.</li>
        <li><strong>Sesión de Londres:</strong> Históricamente, la que más volumen inyecta al mercado y donde se crean las verdaderas tendencias del día.</li>
        <li><strong>Sesión de Nueva York:</strong> Alta volatilidad, especialmente durante las primeras horas cuando se solapa con el cierre de Londres y se publican las noticias económicas de EE. UU.</li>
      </ol>
    `,
  },
  {
    id: "estructura",
    title: "Lección 2: Estructura del Mercado y Fractalidad",
    content: `
      <h2>El Lenguaje del Precio: Estructura</h2>
      <p>El mercado rara vez se mueve en líneas rectas; respira mediante impulsos y retrocesos. Comprender la <strong>estructura del mercado</strong> te dirá exactamente en qué dirección debes buscar operaciones.</p>

      <p>Operar a favor de la tendencia principal aumenta drásticamente tus probabilidades de éxito. Como dice el viejo refrán de Wall Street: <em>"The trend is your friend"</em> (La tendencia es tu amiga).</p>

      <img src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80" alt="Gráfico mostrando estructura alcista y bajista" class="content-img" />

      <h3>Las 3 Fases del Mercado</h3>
      <ul>
        <li><strong>Tendencia Alcista (Uptrend):</strong> El precio empuja hacia arriba creando Altos Más Altos (Higher Highs) y Bajos Más Altos (Higher Lows). <em>Acción recomendada: Buscar compras en los retrocesos.</em></li>
        <li><strong>Tendencia Bajista (Downtrend):</strong> El precio empuja hacia abajo creando Bajos Más Bajos (Lower Lows) y Altos Más Bajos (Lower Highs). <em>Acción recomendada: Buscar ventas.</em></li>
        <li><strong>Rango o Consolidación:</strong> El precio queda atrapado entre un soporte y una resistencia temporal. Significa un equilibrio de poder. <em>Acción recomendada: Esperar a que rompa el rango, o no operar.</em></li>
      </ul>

      <h3>El Concepto de Fractalidad y Análisis Multitemporal (Top-Down)</h3>
      <p>Los mercados son <strong>fractales</strong>. Esto significa que la estructura que ves en un gráfico mensual o semanal es exactamente la misma que ocurre en un gráfico de 1 minuto. Un impulso en el gráfico diario está compuesto por múltiples tendencias alcistas y bajistas en gráficos de 15 minutos.</p>
      
      <p>El trader profesional realiza un <strong>Análisis Top-Down</strong>:</p>
      <ol>
        <li>Revisa el gráfico Diario (1D) para entender la dirección general.</li>
        <li>Baja al gráfico de 4 Horas (4H) o 1 Hora (1H) para identificar zonas de soporte y resistencia (zonas de interés).</li>
        <li>Baja a gráficos de 15 Minutos (15m) o 5 Minutos (5m) para encontrar el patrón de entrada preciso y reducir el tamaño de su Stop Loss.</li>
      </ol>

      <div class="info-box">
        <strong>⚠️ Advertencia:</strong> El mercado pasa aproximadamente el 70% del tiempo en consolidación y solo el 30% en tendencia clara. La paciencia no es una virtud en el trading, es una obligación.
      </div>
    `,
  },
  {
    id: "velas",
    title: "Lección 3: Acción del Precio y Liquidez",
    content: `
      <h2>Anatomía Profunda de las Velas Japonesas</h2>
      <p>Las <strong>velas japonesas</strong> son la herramienta visual estándar en la industria. Desarrolladas en el siglo XVIII en Japón para comerciar arroz, hoy nos muestran la batalla diaria entre compradores y vendedores.</p>

      <p>El cuerpo de la vela representa la convicción, pero las mechas representan el rechazo y la búsqueda de liquidez.</p>

      <img src="https://images.unsplash.com/photo-1613442301239-ea2478101ea7?auto=format&fit=crop&w=800&q=80" alt="Esquema de velas japonesas y mechas" class="content-img" />

      <h3>Patrones Operables de Alta Probabilidad</h3>
      <ul>
        <li><strong>El Pin Bar (Martillo / Estrella Fugaz):</strong> Cuerpo pequeño, mecha muy larga (al menos el doble del cuerpo). Indica un fuerte rechazo de un nivel de precios. Los institucionales han absorbido todas las órdenes en esa zona.</li>
        <li><strong>La Vela Envolvente (Engulfing):</strong> Una vela que es tan grande que "envuelve" completamente a la vela anterior. Demuestra un cambio brusco y total de momentum (quién tiene el control).</li>
        <li><strong>Doji:</strong> Una vela donde la apertura y el cierre son prácticamente iguales. Representa pura indecisión. Si aparece después de una tendencia larga prolongada, puede ser el preludio de un giro.</li>
      </ul>

      <h3>Entendiendo la Liquidez (Por qué fallan los Soportes y Resistencias clásicos)</h3>
      <p>Muchos traders de manual colocan sus <em>Stop Loss</em> justo por encima de una resistencia o por debajo de un soporte. Los grandes fondos de inversión (el "Smart Money") lo saben.</p>
      
      <p>A menudo verás que el precio rompe un soporte clave, hace saltar todos los Stop Loss de los compradores (recolectando esa liquidez para poder posicionarse en compras a mejor precio), y luego el mercado se dispara en la dirección original. Aprender a identificar estas "tomas de liquidez" o "fakeouts" te elevará de trader retail a un pensador institucional.</p>
    `,
  },
  {
    id: "riesgo",
    title: "Lección 4: Gestión de Riesgo Profesional",
    content: `
      <h2>El Secreto de la Supervivencia a Largo Plazo</h2>
      <p>Puedes acertar la dirección del mercado, entrar en el momento perfecto y aún así fracasar si tu gestión de riesgo es deficiente. La <strong>preservación del capital</strong> es tu trabajo número uno.</p>

      <p>Los traders novatos se centran en "cuánto puedo ganar". Los traders profesionales se centran siempre en "cuánto puedo permitirme perder en esta operación".</p>

      <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80" alt="Finanzas, calculadora y gestión monetaria" class="content-img" />

      <h3>La Regla Inquebrantable del 1%</h3>
      <p>Nunca, bajo ninguna circunstancia, arriesgues más del 1% o 2% de tu capital total en una sola idea de trading.</p>
      
      <p>Si tu cuenta es de $1,000, el 1% son $10. Esto significa que colocarás tu límite de pérdidas (Stop Loss) en un punto del gráfico donde tu pérdida monetaria exacta sea de 10 dólares. De esta forma, necesitarías equivocarte 100 veces seguidas para quebrar la cuenta.</p>

      <h3>Calculando el Lotaje (Position Sizing)</h3>
      <p>El tamaño de tu posición no se elige al azar. Depende del tamaño de tu cuenta, tu riesgo (1%) y la distancia en puntos/pips de tu Stop Loss.</p>
      <p>Si tu Stop Loss debe ser de 20 pips para estar protegido por debajo de un soporte clave, debes ajustar tus "lotes" en tu plataforma para que esos 20 pips equivalgan exactamente a tus $10 de riesgo permitido.</p>

      <div class="info-box">
        <strong>📈 La Matemática del Ratio Riesgo/Beneficio:</strong> Si tu estrategia exige que por cada 10 dólares que arriesgas vas a buscar ganar 25 dólares (Ratio 1:2.5), podrías tener operaciones perdedoras el 60% de las veces y, gracias a la matemática, seguirías cerrando el mes en positivo.
      </div>
    `,
  },
  {
    id: "psicologia",
    title: "Lección 5: Psicotrading y Sesgos Cognitivos",
    content: `
      <h2>El Enemigo en el Espejo</h2>
      <p>Una estrategia excelente en manos de una mente indisciplinada resultará en pérdidas constantes. El trading es un 20% análisis y un 80% psicología. El mercado actuará como un amplificador de todas tus inseguridades y defectos personales.</p>

      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Persona analizando datos de forma reflexiva" class="content-img" />

      <h3>Los Tres Pecados Capitales del Trader</h3>
      <ul>
        <li><strong>FOMO (Fear Of Missing Out):</strong> El miedo a quedarse fuera. Es cuando ves una vela gigante verde y compras apresuradamente sin confirmación. Casi siempre resulta en comprar en el punto más alto antes del retroceso.</li>
        <li><strong>Revenge Trading (Trading de Venganza):</strong> Ocurre inmediatamente después de una pérdida. Sientes furia y quieres "recuperar" el dinero que el mercado "te robó". Aumentas el riesgo irracionalmente y terminas perdiendo el triple.</li>
        <li><strong>Overtrading (Sobreoperar):</strong> Ocurre por aburrimiento o adicción a la adrenalina. Tomas operaciones mediocres que no cumplen tu plan simplemente para "estar dentro del mercado".</li>
      </ul>

      <h3>Aceptar el Riesgo de Verdad</h3>
      <p>Poner un Stop Loss no significa que hayas aceptado el riesgo. Si al tocar el Stop Loss sientes frustración o enfado, no has aceptado la pérdida. Cada operación es independiente y aleatoria a corto plazo. Trata tu operativa como el gerente de un casino: a la casa no le importa si un jugador gana un premio hoy, porque sabe que a fin de mes, su ventaja estadística (el <em>Edge</em>) le garantizará los beneficios.</p>
    `,
  },
  {
    id: "plan",
    title: "Lección 6: Creando tu Plan de Trading",
    content: `
      <h2>El Mapa Hacia la Consistencia</h2>
      <p>Nadie abre un negocio físico sin un plan de viabilidad comercial. Sin embargo, millones de personas abren cuentas de trading y operan basándose en la improvisación diaria. Tu <strong>Plan de Trading</strong> es la constitución de tu negocio; son las reglas que no puedes romper.</p>

      <h3>Elementos de un Plan de Trading Profesional</h3>
      <ol>
        <li><strong>Mercados y Horarios:</strong> Define exactamente qué operarás y cuándo. <em>Ejemplo: "Solo operaré EUR/USD y SP500, de 8:00 AM a 11:00 AM hora de Nueva York."</em></li>
        <li><strong>Gestión de Riesgo Estricta:</strong> <em>"Arriesgaré un máximo de 1% por operación. Si pierdo 2 operaciones consecutivas en un día, cerraré la plataforma hasta mañana."</em></li>
        <li><strong>Modelo de Entrada (Setup):</strong> Debes tener escrito, paso a paso, qué tiene que ocurrir para apretar el gatillo. <em>Ejemplo: "1. El precio debe estar en tendencia alcista en 1H. 2. Debe retroceder a un nivel clave. 3. Debe dejar un patrón de vela envolvente de rechazo."</em></li>
        <li><strong>Criterios de Salida:</strong> Define antes de entrar dónde tomarás beneficios y dónde aceptarás la derrota. No modifiques el Stop Loss mientras la operación está abierta.</li>
      </ol>

      <div class="info-box">
        <strong>📝 El Trading Journal:</strong> Tu plan no sirve de nada si no auditas tus resultados. Utiliza herramientas como Excel o Notion para registrar cada operación, incluyendo capturas de pantalla de la entrada y salida, y tus emociones en ese momento. Lo que no se mide, no se puede mejorar.
      </div>
    `,
  }
];