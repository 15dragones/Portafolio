# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Configurar el formulario y recibir consultas

El formulario usa EmailJS para enviar la consulta a tu correo sin abrir el cliente de correo:

1. En [EmailJS](https://www.emailjs.com/), abre **Email Services** y agrega un servicio de Gmail. Inicia sesión con la cuenta donde quieres recibir las consultas y autoriza la conexión. Si ya vinculaste Gmail, reutiliza ese servicio.
2. En **Email Templates**, crea o edita una plantilla y configura:
   - **To Email**: tu dirección receptora fija. El visitante no debe poder modificarla.
   - **Reply-To**: `{{reply_to}}`, para que al responder desde Gmail respondas al visitante.
   - **From Name**: `{{nombre}}`. Deja **From Email** con la dirección predeterminada del servicio Gmail conectado.
   - **Subject**: por ejemplo, `Consulta del portafolio - {{nombre}}`.
   - **Contenido**: incluye `{{nombre}}`, `{{email}}` y `{{mensaje}}`. El formulario agrega el tema seleccionado al inicio de `{{mensaje}}`.
3. Guarda la plantilla y copia el **Service ID**, **Template ID** y **Public Key** a `.env.local`, siguiendo los nombres de `.env.example`. No pongas una clave privada en el frontend ni la compartas.
4. Reinicia Vite con `npm run dev` para cargar las variables. En despliegue, configura esas mismas tres variables en el panel de entorno del hosting y vuelve a desplegar.
5. Envía una consulta desde el sitio. Debe llegar a la bandeja de entrada del Gmail conectado; revisa también **Spam**. Para probar primero, usa la función de prueba de EmailJS con la plantilla.

La dirección del destinatario se fija en la plantilla de EmailJS; el campo de correo del formulario recoge el email del visitante y se usa para responderle. `.env.local` está excluido de Git.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
