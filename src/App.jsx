// src/App.jsx
import React, { useState } from 'react';
import { courseData } from './courseData';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('course'); // 'course', 'about', 'contact', 'privacy'
  const [activeLesson, setActiveLesson] = useState(courseData[0]);

  const renderContent = () => {
    switch (currentView) {
      case 'about':
        return (
          <article className="content-area">
            <h1>Sobre ProTrader Academy</h1>
            <div className="lesson-content">
              <p>Bienvenidos a ProTrader Academy. Nuestra misión es desmitificar los mercados financieros y proporcionar educación de alta calidad, transparente y basada en la realidad del trading institucional y retail.</p>
              <p>El trading no es un camino rápido hacia la riqueza, sino una profesión que requiere disciplina, gestión emocional y una estricta gestión de riesgo. Todo el contenido creado en este sitio está diseñado para construir esas bases sólidas.</p>
              <div className="info-box">
                <strong>Aviso YMYL (Your Money or Your Life):</strong> Todo el contenido de este sitio web es estrictamente educativo. No somos asesores financieros y ninguna información aquí presente debe tomarse como consejo de inversión. Opera bajo tu propio riesgo.
              </div>
            </div>
          </article>
        );
      case 'contact':
        return (
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
        );
      case 'privacy':
        return (
          <article className="content-area">
            <h1>Política de Privacidad y Cookies</h1>
            <div className="lesson-content">
              <h2>1. Quiénes somos</h2>
              <p>La dirección de nuestra web es: https://tusitioweb.com (ProTrader Academy).</p>
              
              <h2>2. Uso de Cookies y Publicidad de Google (Google AdSense)</h2>
              <p>Este sitio web utiliza Google AdSense para mostrar anuncios. Google, como proveedor asociado, utiliza cookies (incluidas las cookies de DART) para publicar anuncios basados en las visitas previas de los usuarios a este sitio web o a otros sitios de Internet.</p>
              <ul>
                <li>Los usuarios pueden inhabilitar la publicidad personalizada visitando la <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer">Configuración de anuncios de Google</a>.</li>
                <li>Este sitio utiliza cookies para analizar el tráfico y personalizar la experiencia del usuario. Al utilizar nuestro sitio, aceptas el uso de dichas cookies.</li>
              </ul>

              <h2>3. Qué datos personales recogemos</h2>
              <p>Si utilizas nuestro formulario de contacto, recopilamos tu nombre y correo electrónico únicamente con el propósito de responder a tu consulta. No compartimos, vendemos ni alquilamos estos datos a terceros bajo ninguna circunstancia.</p>
            </div>
          </article>
        );
      default:
        // Vista principal del curso
        return (
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
        );
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo" onClick={() => setCurrentView('course')}>ProTrader Academy</div>
        <nav className="top-nav">
          <button 
            className={currentView === 'course' ? 'active-nav' : ''} 
            onClick={() => setCurrentView('course')}>Curso Completo</button>
          <button 
            className={currentView === 'about' ? 'active-nav' : ''} 
            onClick={() => setCurrentView('about')}>Sobre Nosotros</button>
          <button 
            className={currentView === 'contact' ? 'active-nav' : ''} 
            onClick={() => setCurrentView('contact')}>Contacto</button>
          <button 
            className={currentView === 'privacy' ? 'active-nav' : ''} 
            onClick={() => setCurrentView('privacy')}>Privacidad</button>
        </nav>
      </header>

      <div className="adsense-banner">
        <span>Espacio para Anuncio AdSense (Display Superior)</span>
      </div>

      {/* Renderizado dinámico según la vista seleccionada */}
      {currentView === 'course' ? renderContent() : <main className="main-layout">{renderContent()}</main>}

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ProTrader Academy. Todos los derechos reservados.</p>
        <p>Aviso Legal: Operar en mercados financieros conlleva alto riesgo. Información estrictamente educativa.</p>
      </footer>
    </div>
  );
}

export default App;