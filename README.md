# Welcome to your Expo app 👋

# Pantalla de Perfil - React Native & Expo

Aplicación móvil desarrollada en React Native utilizando Expo. El proyecto consiste en una interfaz de usuario interactiva para la gestión de un perfil personal, cuidando el diseño responsive, la alineación visual y la usabilidad en dispositivos Android.

---

## 📱 Características y Componentes
- **Componentes Nativos:** Implementación de `SafeAreaView`, `ScrollView`, `TextInput` y `TouchableOpacity`.
- **Manejo del Teclado:** Integración de `KeyboardAvoidingView` y ajuste en `app.json` (`softwareKeyboardLayoutMode: "pan"`) para evitar que el teclado virtual oculte los campos de entrada en Android.
- **Campo Multilinea:** Entrada de **Biografía** configurada con `multiline={true}` y `textAlignVertical="top"` para garantizar un área de texto funcional y cómoda.
- **Diseño & Estilos:** Centralización de diseño con `StyleSheet`, uso de `Flexbox`, contenedores tipo tarjeta (`card`) y avatares redondeados.

---

## 📷 Capturas de Pantalla

> *Ubica tus capturas dentro de la carpeta `screenshots/` en la raíz del proyecto para que se visualicen correctamente.*

| Vista Principal | Formulario | Teclado Activo |
| :---: | :---: | :---: |
| ![Vista 1](./screenshots/1-tp1.png) | ![Vista 2](./screenshots/2-tp1.png) | ![Vista 3](./screenshots/3-tp1.png) |

---

## 🚀 Cómo ejecutar el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Anahi1985/mi-perfil-react-native.git](https://github.com/Anahi1985/mi-perfil-react-native.git)
   cd mi-perfil-react-native
