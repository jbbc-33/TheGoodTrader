// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { courseData } from './courseData';
import './App.css';

// --- COMPONENTES DE LAS VISTAS ---

const CourseView = () => {
  const [activeLesson, setActiveLesson] = useState(courseData[0]);

  return (
    <>
      {/* HEAD DINÁMICO PARA EL CURSO */}
      <Helmet>
        <title>{activeLesson.title} | Curso de Trading TheGoodTrader</title>
        <meta name="description" content={`Aprende sobre: ${activeLesson.title}. Curso gratuito de trading manual, acción del precio y gestión de riesgo.`} />
        <link rel="canonical" href="https://www.thegoodtrader.site/curso-completo" />
      </Helmet>

      <div className="main-layout">
        <aside className="sidebar">
          <h3>Índice del Curso</h3>
          <ul className="lesson-list">
            {courseData.map((lesson) => (
              <li 
                key={lesson.id} 
                className={activeLesson.id === lesson.id ? 'active' : ''}
                onClick={() => setActiveLesson(lesson)}
              >
                {lesson.title}
              </li>
            ))}
          </ul>
        </aside>

        <article className="content-area">
          <h1>{activeLesson.title}</h1>
          <div 
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: activeLesson.content }} 
          />
          <div className="adsense-in-article">
            <span>Espacio para Anuncio AdSense (In-Article)</span>
          </div>
        </article>
      </div>
    </>
  );
};

const AboutView = () => (
  <>
    <Helmet>
      <title>Sobre Nosotros | TheGoodTrader</title>
      <meta name="description" content="Conoce nuestra misión. En TheGoodTrader desmitificamos los mercados financieros con educación basada en la realidad del trading institucional." />
      <link rel="canonical" href="https://www.thegoodtrader.site/sobre-nosotros" />
    </Helmet>
    <main className="main-layout">
      <article className="content-area">
        <h1>Sobre TheGoodTrader</h1>
        
        {/* Aquí estaba el div que faltaba por cerrar */}
        <div className="lesson-content">
          <p>Bienvenidos a TheGoodTrader. Nuestra misión es desmitificar los mercados financieros y proporcionar educación de alta calidad, transparente y basada en la realidad del trading institucional y retail.</p>
          <p>El trading no es un camino rápido hacia la riqueza, sino una profesión que requiere disciplina, gestión emocional y una estricta gestión de riesgo. Todo el contenido creado en este sitio está diseñado para construir esas bases sólidas.</p>
          <div className="info-box">
            <strong>Aviso YMYL (Your Money or Your Life):</strong> Todo el contenido de este sitio web es estrictamente educativo. No somos asesores financieros y ninguna información aquí presente debe tomarse como consejo de inversión. Opera bajo tu propio riesgo.
          </div>
        </div>
        
      </article>
    </main>
  </>
);

const ContactView = () => (
  <>
    <Helmet>
      <title>Contacto | TheGoodTrader</title>
      <meta name="description" content="Contacta con el equipo de TheGoodTrader para dudas sobre el curso de trading o consultas comerciales. Respondemos en 24-48 horas." />
      <link rel="canonical" href="https://www.thegoodtrader.site/contacto" />
    </Helmet>
    <main className="main-layout">
      <article className="content-area">
        <h1>Contacto</h1>
        <div className="lesson-content">
          <p>¿Tienes dudas sobre el contenido del curso o consultas comerciales? Rellena el siguiente formulario y nuestro equipo te responderá en un plazo de 24-48 horas.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nombre Completo</label>
              <input type="text" placeholder="Ej: Juan Pérez" required />
            </div>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="tu@correo.com" required />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea rows="5" placeholder="¿En qué te podemos ayudar?" required></textarea>
            </div>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </article>
    </main>
  </>
);

const PrivacyView = () => (
  <>
    <Helmet>
      <title>Política de Privacidad y Cookies | TheGoodTrader</title>
      <meta name="description" content="Conoce nuestra política de privacidad, uso de cookies y cómo protegemos tus datos en TheGoodTrader." />
      <link rel="canonical" href="https://www.thegoodtrader.site/privacidad" />
    </Helmet>
    <main className="main-layout">
      <article className="content-area">
        <h1>Política de Privacidad y Cookies</h1>
        <div className="lesson-content">
          <h2>1. Quiénes somos</h2>
          <p>La dirección de nuestra web es: https://www.thegoodtrader.site (TheGoodTrader).</p>
          
          <h2>2. Uso de Cookies y Publicidad de Google (Google AdSense)</h2>
          <p>Este sitio web utiliza Google AdSense para mostrar anuncios. Google, como proveedor asociado, utiliza cookies para publicar anuncios basados en las visitas previas.</p>
          <ul>
            <li>Los usuarios pueden inhabilitar la publicidad personalizada visitando la <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer">Configuración de anuncios de Google</a>.</li>
            <li>Este sitio utiliza cookies para analizar el tráfico. Al utilizar nuestro sitio, aceptas el uso de dichas cookies.</li>
          </ul>

          <h2>3. Qué datos personales recogemos</h2>
          <p>Si utilizas nuestro formulario de contacto, recopilamos tu nombre y correo electrónico únicamente con el propósito de responder a tu consulta. No compartimos estos datos.</p>
        </div>
      </article>
    </main>
  </>
);


// --- APP PRINCIPAL ---

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="app-container">
          
          <header className="header">
            <NavLink to="/curso-completo" className="logo">
              TheGoodTrader
            </NavLink>
            <nav className="top-nav">
              <NavLink to="/curso-completo" className={({isActive}) => isActive ? 'active-nav' : ''}>Curso Completo</NavLink>
              <NavLink to="/sobre-nosotros" className={({isActive}) => isActive ? 'active-nav' : ''}>Sobre Nosotros</NavLink>
              <NavLink to="/contacto" className={({isActive}) => isActive ? 'active-nav' : ''}>Contacto</NavLink>
              <NavLink to="/privacidad" className={({isActive}) => isActive ? 'active-nav' : ''}>Privacidad</NavLink>
            </nav>
          </header>

          <div className="adsense-banner">
            <span>Espacio para Anuncio AdSense (Display Superior)</span>
          </div>

          <Routes>
            <Route path="/" element={<Navigate to="/curso-completo" replace />} />
            <Route path="/curso-completo" element={<CourseView />} />
            <Route path="/sobre-nosotros" element={<AboutView />} />
            <Route path="/contacto" element={<ContactView />} />
            <Route path="/privacidad" element={<PrivacyView />} />
            <Route path="*" element={<Navigate to="/curso-completo" replace />} />
          </Routes>

          <footer className="footer">
            {/* He cambiado el código HTML por el símbolo © real */}
            <p>© {new Date().getFullYear()} TheGoodTrader. Todos los derechos reservados.</p>
            <p>Aviso Legal: Operar en mercados financieros conlleva alto riesgo. Información estrictamente educativa.</p>
          </footer>
          
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;