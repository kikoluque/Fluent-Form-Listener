# 🎯 Listener para Fluent Forms + Google Tag Manager

Script personalizado y optimizado para rastrear correctamente formularios de **Fluent Forms** (WordPress) mediante **Google Tag Manager (GTM)**.  
Al enviarse correctamente el formulario, se dispara un evento en `dataLayer` con todos los datos rellenados por el usuario.

---

## 🚀 ¿Qué hace este script?

- Escucha el envío exitoso de cualquier formulario de Fluent Forms en la página.
- Empuja un evento personalizado al `dataLayer`: **`fluent_form_enviado`**.
- Incluye:
  - ✅ ID del formulario (`formId`)
  - ✅ Todos los campos rellenados (`campos`)
  - ✅ Compatible con múltiples formularios en la misma página

---

## 🧩 Código del listener (para copiar/usar)



## 2. Configura Google Tag Manager

### 🎯 Activador

- **Tipo:** Evento personalizado  
- **Nombre del evento:** `fluent_form_enviado`  
- **Activación:** Todas las páginas (o donde esté el formulario)

---

### 🔍 Variables recomendadas

- **`formId`**  
  - Tipo: Variable de capa de datos  
  - Clave: `formId`

- **`campos`**  
  - Tipo: Variable de capa de datos  
  - Clave: `campos`

También puedes crear variables específicas si conoces el nombre exacto de cada campo.  
Por ejemplo: `campos.nombre`, `campos.email`, `campos.telefono`, etc.

---

## 👨‍💻 Autor

**Kiko Luque**

- 🌐 Web: [www.kikoluque.com](https://www.kikoluque.com)
- 💼 Linkedin: [linkedin.com/in/kiko-luque-analitica](https://linkedin.com/in/kiko-luque-analitica)
- 📩 Email: [kiko@kikoluque.com](mailto:kiko@kikoluque.com)

---

## 🚫 Uso

Este código ha sido creado para **fines personales y no comerciales**.  
No se permite su redistribución pública ni su uso con fines lucrativos sin consentimiento previo.
