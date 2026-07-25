export const courseData = [
  {
    id: "intro",
    title: "Lección 1: Introducción al Trading Manual y Mercados Financieros",
    content: `
      <h2>¿Qué es el Trading Manual y por qué elegirlo?</h2>
      <p>El <strong>trading manual</strong> es el arte y la disciplina de analizar los mercados financieros para tomar decisiones deliberadas basadas en tu propio análisis técnico y fundamental. A diferencia del trading algorítmico o los bots, aquí tú tienes el control total: ejecutas las entradas, gestionas las salidas y afinas tu inteligencia emocional.</p>

      <p>Aprender <strong>trading manual desde cero</strong> te otorga ventajas competitivas invaluables: control del riesgo en tiempo real, adaptación instantánea a noticias macroeconómicas y el desarrollo de una habilidad vitalicia para leer el precio. La principal desventaja es la curva de aprendizaje; requiere disciplina férrea, paciencia y control emocional.</p>

      <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" alt="Trader operando manualmente en múltiples pantallas analizando gráficos" class="content-img" />

      <h3>Los Mejores Mercados para Hacer Trading</h3>
      <ul>
        <li><strong>Forex (Mercado de Divisas):</strong> El mercado más líquido del mundo. Opera 24/5 con spreads ajustados. Es ideal para estrategias de <em>day trading</em> y <em>scalping</em> debido a su alta volatilidad en sesiones clave.</li>
        <li><strong>Índices Bursátiles (Nasdaq, S&P 500):</strong> Representan la salud económica general. Excelentes para el <em>swing trading</em> y operativas basadas en horarios de apertura (ej. Open de Nueva York).</li>
        <li><strong>Criptomonedas (Bitcoin, Ethereum):</strong> Mercado abierto 24/7 con volatilidad extrema. Exige una estricta <strong>gestión de riesgo</strong> y un profundo conocimiento de los niveles de liquidez.</li>
        <li><strong>Materias Primas (Oro, Petróleo):</strong> Activos muy técnicos y sensibles a eventos geopolíticos. El oro (XAUUSD) es el favorito de muchos traders manuales por sus movimientos limpios y tendenciales.</li>
      </ul>

      <div class="info-box">
        <strong>💡 Consejo SEO y Práctico:</strong> Para ser un trader rentable, especialízate en 1 o 2 activos (por ejemplo, EUR/USD o Nasdaq). Dominar el comportamiento de un solo activo reduce el ruido del mercado y acelera tu rentabilidad.
      </div>

      <h3>Sesiones Operativas (Killzones)</h3>
      <ol>
        <li><strong>Sesión Asiática (Tokio/Sídney):</strong> Menor volatilidad, suele crear rangos de consolidación que otras sesiones romperán.</li>
        <li><strong>Sesión de Londres:</strong> Alta liquidez. A menudo genera el máximo o mínimo del día (manipulación inicial y expansión).</li>
        <li><strong>Sesión de Nueva York:</strong> Máxima volatilidad por la apertura americana y publicación de noticias económicas. Ideal para buscar continuaciones de tendencia.</li>
      </ol>
    `,
  },

  {
    id: "estructura",
    title: "Lección 2: Estructura del Mercado, Tendencias y Fractalidad",
    content: `
      <h2>El Lenguaje del Precio: Estructura del Mercado</h2>
      <p>El mercado no se mueve en línea recta; respira a través de impulsos y retrocesos. Identificar correctamente la <strong>estructura del mercado</strong> es el pilar del <strong>análisis técnico</strong>. Saber si estás en una tendencia o en un rango dicta el 90% del éxito de tu operativa.</p>

      <img src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80" alt="Gráfico financiero mostrando estructura alcista, bajista y líneas de tendencia" class="content-img" />

      <h3>Fases del Mercado (Price Action)</h3>
      <ul>
        <li><strong>Tendencia Alcista (Bull Market):</strong> Secuencia de Altos Más Altos (Higher Highs) y Bajos Más Altos (Higher Lows). La regla de oro: busca compras (Longs) en los retrocesos hacia zonas de soporte.</li>
        <li><strong>Tendencia Bajista (Bear Market):</strong> Secuencia de Bajos Más Bajos (Lower Lows) y Altos Más Bajos (Lower Highs). La regla de oro: prioriza ventas (Shorts) en los rebotes hacia resistencias.</li>
        <li><strong>Consolidación o Rango:</strong> El precio lateraliza atrapando liquidez en ambos extremos. Opera los extremos (compra barato, vende caro) o espera el <em>breakout</em> (ruptura) confirmado.</li>
      </ul>

      <h3>Fractalidad y Análisis Top‑Down (Múltiples Temporalidades)</h3>
      <p>El mercado es fractal: un patrón que ves en gráficos de 1 minuto está ocurriendo dentro de un patrón más grande en gráficos de 1 hora. El <strong>análisis multitemporal</strong> aumenta drásticamente tu <em>win rate</em> (tasa de acierto):</p>
      <ol>
        <li><strong>Macrotendencia (Diario - 1D):</strong> Define la dirección general e identifica soportes y resistencias históricos.</li>
        <li><strong>Estructura Media (4H / 1H):</strong> Localiza zonas de oferta y demanda o bloques de órdenes (Order Blocks).</li>
        <li><strong>Ejecución (15m / 5m):</strong> Encuentra el gatillo de entrada exacto, minimizando el Stop Loss para maximizar el ratio Riesgo/Beneficio.</li>
      </ol>

      <div class="info-box">
        <strong>⚠️ Concepto Clave:</strong> BOS (Break of Structure) indica la continuación de una tendencia, mientras que CHoCH (Change of Character) alerta sobre un posible cambio de tendencia institucional.
      </div>
    `,
  },

  {
    id: "velas",
    title: "Lección 3: Acción del Precio (Price Action) y Liquidez",
    content: `
      <h2>Anatomía de las Velas Japonesas</h2>
      <p>Operar con <strong>acción del precio (Price Action)</strong> significa leer el gráfico desnudo, sin depender de indicadores rezagados como el RSI o el MACD. Las velas japonesas te cuentan la historia en tiempo real de la batalla entre compradores (toros) y vendedores (osos).</p>

      <img src="https://images.unsplash.com/photo-1613442301239-ea2478101ea7?auto=format&fit=crop&w=800&q=80" alt="Esquema educativo de velas japonesas, mechas y cuerpos" class="content-img" />

      <h3>Patrones de Velas de Alta Probabilidad</h3>
      <ul>
        <li><strong>Pin Bar (Vela Martillo o Estrella Fugaz):</strong> Una mecha larga que rechaza un nivel clave. Representa una trampa institucional: el precio fue empujado hacia una zona, pero las instituciones absorbieron todas las órdenes y revirtieron el precio.</li>
        <li><strong>Vela Envolvente (Engulfing):</strong> El cuerpo de la vela actual cubre completamente a la vela anterior. Es un fuerte indicador de inyección de volumen y cambio de momentum.</li>
        <li><strong>Doji:</strong> Cuerpos muy pequeños que indican indecisión. Adquieren gran importancia operativa cuando aparecen justo en niveles de soporte o resistencia (posible giro).</li>
      </ul>

      <h3>Trampas de Liquidez y Stop Hunts (Caza de Stops)</h3>
      <p>Los grandes bancos (Smart Money) necesitan <strong>liquidez</strong> para ejecutar sus posiciones gigantescas. ¿Dónde está esa liquidez? En los Stop Loss de los traders minoristas, situados justo por encima de resistencias obvias o por debajo de soportes evidentes.</p>
      <p><strong>Cómo operarlo:</strong> No operes la ruptura inicial. Espera a que el precio rompa un nivel, saque a los traders impacientes (fakeout), y vuelve a entrar en la dirección contraria cuando el precio reingrese al rango con fuerza.</p>

      <div class="info-box">
        <strong>🔍 Tip de Price Action:</strong> El volumen es el detector de mentiras del mercado. Un rompimiento de nivel sin un incremento de volumen suele ser una manipulación (toma de liquidez).
      </div>
    `,
  },

  {
    id: "riesgo",
    title: "Lección 4: Gestión de Riesgo y Money Management",
    content: `
      <h2>Preservación del Capital: El Santo Grial del Trading</h2>
      <p>La estrategia más rentable del mundo fracasará sin una correcta <strong>gestión de riesgo (Money Management)</strong>. El objetivo principal de un trader manual no es ganar dinero rápido, sino proteger su capital para sobrevivir a la varianza matemática del mercado.</p>

      <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80" alt="Gráficos financieros y herramientas para la gestión monetaria" class="content-img" />

      <h3>La Regla del 1% y el Tamaño de Posición (Position Sizing)</h3>
      <p>Un trader profesional <strong>nunca arriesga más del 1% o 2% de su cuenta total en una sola operación</strong>. Esto garantiza que puedas encadenar una racha de 10 pérdidas consecutivas (Drawdown) y aún retener más del 80% de tu capital.</p>
      <p>Fórmula universal para el cálculo de lotaje: <br>
      <em>Tamaño de Lotes = (Capital x Porcentaje de Riesgo) / (Pips de Stop Loss x Valor del Pip)</em></p>

      <h3>Ratio Riesgo/Beneficio (Risk:Reward)</h3>
      <p>Es la relación entre lo que estás dispuesto a perder y lo que esperas ganar. Buscar un Ratio R:R mínimo de 1:2 significa arriesgar $100 para ganar $200. Las matemáticas del trading demuestran que con un RR de 1:2, <strong>solo necesitas un 34% de aciertos (Win Rate) para ser rentable a largo plazo</strong>.</p>

      <h3>Reglas Antirruina</h3>
      <ul>
        <li><strong>Stop Loss Fijo:</strong> Colócalo al abrir la operación y nunca lo alejes mientras estás en negativo.</li>
        <li><strong>Límite de Pérdida Diaria:</strong> Si pierdes un 3% de tu cuenta en un día, apaga las pantallas. El mercado estará ahí mañana; tu objetividad no.</li>
        <li><strong>Trailing Stop:</strong> Asegura ganancias parciales moviendo tu Stop Loss al punto de entrada (Breakeven) una vez que el movimiento avanza a tu favor.</li>
      </ul>
    `,
  },

  {
    id: "psicologia",
    title: "Lección 5: Psicotrading y Control de Sesgos Cognitivos",
    content: `
      <h2>Psicotrading: El 80% del Éxito en los Mercados</h2>
      <p>El mercado financiero es un espejo que refleja tus peores defectos: avaricia, miedo, impaciencia y ego. El <strong>psicotrading</strong> es el entrenamiento mental para ejecutar tu plan de forma robótica, incluso frente a la incertidumbre absoluta.</p>

      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Trader reflexionando, control emocional y disciplina en trading" class="content-img" />

      <h3>Los 3 Demonios del Trader Manual</h3>
      <ul>
        <li><strong>FOMO (Fear Of Missing Out):</strong> El miedo a quedarse fuera de un gran movimiento. Te hace comprar en el punto más alto por ansiedad. <em>Solución: Entiende que cada día hay docenas de nuevas oportunidades. Si se fue el tren, espera al siguiente.</em></li>
        <li><strong>Revenge Trading (Trading de Venganza):</strong> Operar por rabia inmediatamente después de una pérdida para "recuperar" el dinero. Suele terminar en pérdidas mayores. <em>Solución: Implanta una regla estricta de levantarte de la silla durante 15 minutos tras tocar un Stop Loss.</em></li>
        <li><strong>Overtrading (Sobreoperar):</strong> Abrir demasiadas operaciones por aburrimiento o necesidad de dopamina, diluyendo tu ventaja estadística. <em>Solución: Limita tu operativa a un máximo de 2-3 setups de alta calidad por sesión.</em></li>
      </ul>

      <div class="info-box">
        <strong>🧠 Ejercicio de Disciplina:</strong> Piensa en probabilidades, no en dinero. Antes de dar clic en "Comprar" o "Vender", pregúntate: "¿Estoy operando lo que veo en el gráfico, o lo que deseo que pase?".
      </div>
    `,
  },

  {
    id: "plan",
    title: "Lección 6: Cómo Crear tu Plan de Trading y Bitácora",
    content: `
      <h2>Tu Plan de Trading: El Mapa hacia la Consistencia</h2>
      <p>Un <strong>plan de trading</strong> escrito separa a los profesionales de los apostadores. Es un documento vivo que dicta exactamente qué, cuándo y cómo operas, eliminando cualquier margen para la improvisación impulsiva.</p>

      <h3>Estructura de un Plan Profesional</h3>
      <ol>
        <li><strong>Filosofía y Horarios:</strong> Ej. "Soy un day trader de acción del precio. Solo opero el EUR/USD durante la Killzone de Londres (2:00 AM - 5:00 AM EST)".</li>
        <li><strong>Gestión Monetaria:</strong> "Arriesgo un máximo de 1% por trade. Máxima pérdida diaria: 2%. Objetivo mínimo de RR: 1:2".</li>
        <li><strong>Setup de Entrada (El Gatillo):</strong> Detalla paso a paso las condiciones obligatorias. (Ej. Tendencia alcista en 1H + Retroceso al nivel 61.8% de Fibonacci + Patrón Envolvente Alcista en 15m).</li>
        <li><strong>Gestión de la Operación:</strong> "Moveré a Breakeven cuando el precio alcance el ratio 1:1. Cerraré el 50% de la posición en el primer nivel de resistencia".</li>
      </ol>

      <h3>La Bitácora de Trading (Trading Journal)</h3>
      <p>No puedes mejorar lo que no mides. Documentar tus trades es obligatorio. Anota en un Excel o software especializado:</p>
      <ul>
        <li>Fecha, Activo, Dirección (Largo/Corto).</li>
        <li>Captura de pantalla de la entrada y de la salida.</li>
        <li><strong>Columna Emocional:</strong> ¿Sentías miedo, seguridad o aburrimiento al ejecutar? Revisar esto los fines de semana te mostrará patrones destructivos en tu comportamiento.</li>
      </ul>
    `,
  },

  {
    id: "estrategias",
    title: "Lección 7: Estrategias de Trading Manual Rentables",
    content: `
      <h2>Modelos de Operación Replicables (Setups)</h2>
      <p>En el trading manual, menos es más. Estas son tres de las <strong>estrategias de trading</strong> más probadas por la industria. Úsalas como punto de partida, hazles backtesting y adáptalas a tu personalidad.</p>

      <h3>Estrategia 1: El Pullback Multitemporal (Trend Following)</h3>
      <p>La tendencia es tu amiga. Esta estrategia busca unirse a una tendencia dominante después de una corrección sana.</p>
      <ol>
        <li><strong>Dirección (4H):</strong> Identifica una clara sucesión de altos y bajos más altos.</li>
        <li><strong>Zona de Valor (1H):</strong> Espera a que el precio retroceda hacia una Media Móvil (ej. EMA 50), un nivel de soporte previo o el nivel 50% / 61.8% de Fibonacci.</li>
        <li><strong>Gatillo (15m):</strong> Busca una formación de vela de rechazo (Pin Bar) con incremento de volumen.</li>
        <li><strong>Ejecución:</strong> Stop Loss estructural (debajo del último mínimo). Take Profit en el último máximo.</li>
      </ol>

      <h3>Estrategia 2: Smart Money y Toma de Liquidez (Sweep)</h3>
      <p>Basada en conceptos de order flow y huella institucional.</p>
      <ol>
        <li>Identifica máximos o mínimos del día anterior (Asian High/Low, Previous Daily High/Low).</li>
        <li>Espera a que el precio supere ese nivel por unos pocos pips, disparando los Stop Loss (caza de liquidez).</li>
        <li>Si el precio rechaza agresivamente ese nivel y cierra dentro del rango anterior, entra a mercado en la dirección del rechazo.</li>
      </ol>

      <div class="info-box">
        <strong>⚠️ Importante:</strong> El Santo Grial no existe. Ninguna estrategia tiene un 100% de efectividad. La rentabilidad nace de aplicar una de estas estrategias 100 veces seguidas con el mismo nivel de riesgo.
      </div>
    `,
  },

  {
    id: "orderflow",
    title: "Lección 8: Order Flow, Oferta y Demanda Básico",
    content: `
      <h2>Leyendo las Intenciones del Smart Money</h2>
      <p>Aunque el <strong>Trading Manual</strong> clásico se basa en la acción del precio, incorporar principios básicos de <strong>Order Flow</strong> e instituciones financieras te pone en la mente de los "creadores de mercado" (Market Makers).</p>

      <h3>Conceptos de Oferta y Demanda</h3>
      <ul>
        <li><strong>Order Blocks (Bloques de Órdenes):</strong> Son las últimas velas contrarias antes de un movimiento institucional violento. El mercado suele regresar a estas zonas para mitigar posiciones, ofreciendo entradas de altísima precisión.</li>
        <li><strong>Imbalance (Fair Value Gap - FVG):</strong> Vacíos de liquidez creados por movimientos explosivos donde no hubo un intercambio justo entre compradores y vendedores. El precio actúa como un imán para rellenar estos vacíos.</li>
        <li><strong>Absorción:</strong> Cuando observas en un soporte que las velas intentan bajar pero cierran repetidamente con mechas largas inferiores. Significa que las instituciones están limitando el precio y "absorbiendo" todas las ventas minoristas para acumular posiciones compradoras.</li>
      </ul>

      <p><strong>Aplicación Práctica:</strong> Trata de alinear tus entradas de Price Action (ej. una vela envolvente) justo dentro de un Order Block no mitigado o tras rellenar un Imbalance. Esa confluencia dispara tu probabilidad de éxito.</p>
    `,
  },

  {
    id: "backtesting",
    title: "Lección 9: Backtesting y Validación Estadística",
    content: `
      <h2>Cómo Crear Confianza Ciega en tu Estrategia</h2>
      <p>El <strong>Backtesting</strong> es el proceso de retroceder en el tiempo en un gráfico histórico para simular tu estrategia y obtener datos estadísticos fiables. Es el único antídoto contra el miedo y la duda al operar.</p>

      <h3>Fases de un Backtesting Profesional</h3>
      <ol>
        <li><strong>Definición Mecánica:</strong> Tus reglas deben ser tan exactas que un ordenador podría seguirlas. Sin ambigüedades.</li>
        <li><strong>Recopilación de Datos (TradingView Replay Mode):</strong> Retrocede 6 meses a 1 año en el activo elegido. Avanza vela a vela y anota cada setup que cumpla tus reglas.</li>
        <li><strong>Métricas Clave a Calcular:</strong>
          <ul>
            <li><strong>Win Rate:</strong> Porcentaje de operaciones ganadoras (Ej. 45%).</li>
            <li><strong>Payoff Ratio:</strong> Beneficio promedio vs Pérdida promedio (Ej. Gano $200 de media, pierdo $100 = Ratio 2).</li>
            <li><strong>Maximum Drawdown:</strong> Tu peor racha histórica. Si sabes que tu estrategia puede perder 7 veces seguidas, no entrarás en pánico cuando te pase en real.</li>
          </ul>
        </li>
      </ol>

      <h3>Forward Testing (Cuenta Demo)</h3>
      <p>Una vez completado el backtest histórico, opera la estrategia en tiempo real usando dinero virtual (demo) durante al menos 1 o 2 meses. Esto pondrá a prueba tu capacidad de ejecución en vivo y tu paciencia.</p>
    `,
  },

  {
    id: "herramientas",
    title: "Lección 10: Herramientas, Plataformas y Gestión del Entorno",
    content: `
      <h2>El Arsenal del Trader de Acción del Precio</h2>
      <p>Para analizar el mercado de forma manual necesitas software profesional, rápido y estable. Las herramientas no te harán rentable, pero eliminarán fricciones técnicas.</p>

      <h3>Plataformas de Análisis y Ejecución</h3>
      <ul>
        <li><strong>TradingView:</strong> El estándar de la industria para el análisis técnico. Indispensable por sus herramientas de dibujo intuitivas, alertas de precios y la función de *Replay* para backtesting.</li>
        <li><strong>MetaTrader 4 y 5 (MT4/MT5):</strong> Las plataformas de ejecución más usadas por brokers de Forex y CFDs. Ligeras y fiables para ejecutar tus operaciones.</li>
        <li><strong>cTrader o NinjaTrader:</strong> Excelentes alternativas más modernas con grandes funcionalidades para gestión avanzada de órdenes.</li>
      </ul>

      <h3>El Entorno Operativo Libre de Ruido</h3>
      <ol>
        <li><strong>Calculadora de Posiciones:</strong> Usa calculadoras web de riesgo (como las de MyFxBook) para saber exactamente qué lotaje usar antes de entrar. Nunca calcules mentalmente bajo presión.</li>
        <li><strong>Calendario Económico:</strong> Consulta ForexFactory o Investing.com antes de tu sesión. <em>Regla de oro de la gestión de riesgo: Nunca mantengas posiciones abiertas a corto plazo durante la publicación del NFP, IPC (CPI) o decisiones de tipos de interés, la volatilidad barrerá tus stops.</em></li>
      </ol>
    `,
  },

  {
    id: "legal",
    title: "Lección 11: Ética, Regulación y Cómo Evitar Estafas",
    content: `
      <h2>Protege tu Capital antes de Operar</h2>
      <p>El mundo del trading atrae mucho dinero, y con ello, a actores malintencionados. Elegir un buen broker y entender el entorno legal es el "Nivel Cero" de tu carrera como trader manual.</p>

      <h3>Cómo Elegir un Broker Regulado (Tier 1)</h3>
      <p>Tu dinero no está seguro si tu broker no está vigilado por entidades estrictas. Evita brokers ubicados en paraísos fiscales sin reputación. Busca entidades reguladas por:</p>
      <ul>
        <li><strong>FCA</strong> (Reino Unido)</li>
        <li><strong>ASIC</strong> (Australia)</li>
        <li><strong>SEC / CFTC</strong> (Estados Unidos)</li>
        <li><strong>CySEC</strong> (Europa)</li>
      </ul>

      <h3>Red Flags (Banderas Rojas) en la Industria</h3>
      <ul>
        <li>Cuentas administradas o "bots mágicos" que prometen rentabilidades mensuales fijas e irreales. (El trading es probabilidad, no renta fija).</li>
        <li>Influencers que no muestran sus cuentas auditadas (MyFxBook) pero presumen de lujos.</li>
        <li>Empresas de fondeo (Prop Firms) con reglas ocultas diseñadas estadísticamente para que suspendas tus evaluaciones.</li>
      </ul>

      <div class="info-box">
        <strong>⚖️ Disclaimer Educativo:</strong> El trading conlleva un alto riesgo de pérdida de capital. Este curso está diseñado exclusivamente con fines formativos y de análisis técnico. No representa asesoramiento financiero personalizado. Estudia, practica en demo y asume la responsabilidad 100% total de tus decisiones.
      </div>
    `,
  }
];