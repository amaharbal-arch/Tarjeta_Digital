# PROYECTO: Tarjeta Digital - PWA
**Technical Stack:** Vanilla HTML5 / CSS3 / JavaScript
**Deployment:** [https://tarjeta-arte.vercel.app/]


## 1. Introducción
Este sistema representa una solución de software orientada a la transición digital de perfiles profesionales. Se trata de una **Progressive Web App (PWA)** diseñada bajo una filosofía de arquitectura funcional, donde la complejidad técnica se gestiona internamente para ofrecer una interfaz minimalista, fluida y de alto rendimiento.

## 2. Previsualización del Sistema
<div align="center">
  <img src="https://res.cloudinary.com/deqk2tmer/image/upload/v1785710300/screenshot_pp63ep.jpg" width="250" alt="Captura de la Tarjeta Digital">
  <p><i>Interfaz optimizada para dispositivos móviles con política de Zero-Scroll.</i></p>
</div>

## 3. Problemática
El intercambio de información de contacto tradicional presenta fricciones de almacenamiento, pérdida de datos y falta de interactividad. Este proyecto resuelve la necesidad de una plataforma centralizada que sea:
*   **Accesible:** Sin necesidad de descarga desde tiendas de aplicaciones.
*   **Persistente:** Consultable en cualquier momento, con o sin conexión a red.
*   **Adaptable:** Compatible con la diversidad de hardware móvil actual sin degradación visual.

## 4. Requerimientos del Sistema

### 4.1 Requerimientos Funcionales (RF)
*   **RF-1:** Integración de APIs de comunicación directa (WhatsApp, Facebook, Instagram).
*   **RF-2:** Sistema de geolocalización mediante vinculación con Google Maps.
*   **RF-3:** Implementación de Service Workers para garantizar la disponibilidad offline.
*   **RF-4:** Generación de identidad visual mediante código QR embebido.

### 4.2 Requerimientos No Funcionales (RNF)
*   **RNF-1 (Rendimiento):** Tiempo de carga crítico inferior a 2 segundos mediante la ausencia de frameworks externos.
*   **RNF-2 (Usabilidad):** Layout de pantalla completa (100dvh) con política de cero desplazamiento vertical.
*   **RNF-3 (Instalabilidad):** Cumplimiento del estándar PWA para persistencia en el menú de aplicaciones del sistema operativo.

## 5. Casos de Uso
*   **Escenario A (Networking Presencial):** El profesional despliega el código QR desde su dispositivo; el cliente escanea y obtiene acceso instantáneo a todos los canales de contacto.
*   **Escenario B (Zona de Baja Conectividad):** El cliente accede a la tarjeta instalada previamente; el sistema sirve los datos desde la memoria caché local gracias al Service Worker.
*   **Escenario C (Instalación Directa):** El usuario añade la tarjeta a su pantalla de inicio, eliminando la dependencia del navegador para futuras consultas.

## 6. Estructura de Ingeniería
*   **`index.html`**: Arquitectura semántica y punto de control del ciclo de vida del Service Worker.
*   **`style.css`**: Motor de diseño basado en geometría vectorial y proporciones dinámicas.
*   **`ServiceWorker.js`**: Controlador de red y gestor de persistencia de datos local.
*   **`manifest.json`**: Esquema de metadatos para la integración nativa con el sistema operativo.

---
*Documentación técnica de cierre para la versión estable 1.0.0.*

