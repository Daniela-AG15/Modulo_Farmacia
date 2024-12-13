# Diseño En Figma Farmacia Intrahospitalaria

Link de Figma Modulo Farmacia https://www.figma.com/design/OBYpnqY6tCk7NGEkiwAfN6/Farmacia?node-id=0-1&t=u2AOHZlf6MhqdV7E-1

# 🏥 **Farmacia Intrahospitalaria**

Repositorio del módulo de **Farmacia Intrahospitalaria** para el **Hospital Privado Medical Care and Healing**

---
![logoCMD](https://github.com/CrisOjeda9/Farmacia-Intrahospitalaria/assets/161864911/7470cf19-54db-420b-bb88-bff501cbc681)



## 🌐 Organigrama CMD

![OrganigramaCMD](https://drive.google.com/uc?export=view&id=1FfywTxNxXyQ5ZdvVWzSQ3lRtLfz0klz4)

---

## 🎯 **Objetivo Principal**

<div style="text-align: justify;">
Crear una aplicación móvil que permita una gestión y administración del Hospital Privilage Care, a traves de herramientas de TICS, con el fin de facilitar el trabajo de los médicos, mejorar la eficiencia operativa y fortalecer la administración y control del hospital.

En un entorno hospitalario dinámico y exigente, optimizar los procesos internos y mejorar la comunicación entre el personal médico y administrativo son esenciales. Con la creciente dependencia de la tecnología en el sector salud, aprovechar innovaciones tecnológicas será clave para alcanzar estos objetivos de manera efectiva y sostenible.
</div>

---

## 🎯 **Objetivos Específicos**

### 1️⃣ **Recabar los requerimientos del modulo mediante técnicas de recolección (Encuestas)**  

### 2️⃣ **Diselar los Sketch (Propuesta de Frontend)**  

### 3️⃣ **Diseñar los Mockups**  

### 4️⃣ **Seleccionar las tecnologías**  

### 5️⃣ **Diseñar la base de datos (SQL)**  

### 6️⃣ **Desarrollar funcionalidades del modulo (Backend)**  

### 7️⃣ **Crear prototipo del modulo Farmacia**  

### 8️⃣ **Elaborar un manual de capacitación al personal hospitalario sobre el modulo Farmacia**

---

## 🏥 **Contexto de Negocio**

<div style="text-align: justify;">
**Hospital Privado Medical Care and Healing** es una institución líder en el sector salud, comprometida con la mejora continua y la atención integral de los pacientes. Ofrece una amplia gama de servicios médicos, incluidos tratamientos especializados y cuidados intensivos, con el objetivo de proporcionar una atención de calidad y promover la salud preventiva.

Con un enfoque en la eficiencia operativa, el hospital busca mejorar la experiencia del paciente y optimizar sus procesos internos a través de un sistema de gestión integral.
</div>

---

## 💻 **Propuesta de Frontend**

### 🎨 **Sketches de diseño**

![alt text](Sketch/1.jpeg)
![alt text](Sketch/2.jpeg)
![alt text](Sketch/3.jpeg)
![alt text](Sketch/Sketch-Calificacion.jpeg)
![alt text](Sketch/Sketch-Dispensacion.jpeg)
![alt text](Sketch/Sketch-Medicamentos.jpeg)
![alt text](Sketch/Sketch-NuevoMedicamento.jpeg)
![alt text](Sketch/Sketch1.jpg)
![alt text](Sketch/Sketch2.jpg)
![alt text](Sketch/Solicitudes.jpg)
---

### 🎨 **Wireframes**

<p align="center">
  <img src="Diseño/AcercaDe.PNG" alt="Acerca De" width="46%">
  <img src="Diseño/calificacion_app.png" alt="Calificación App" width="40%">
</p>

![alt text](Diseño/Diseño1.png)
![alt text](Diseño/Diseño2.png)
![alt text](Diseño/Diseño3.png)

<p align="center">
  <img src="Diseño/dispensacion.png"  width="40%">
  <img src="Diseño/Inventario.PNG"  width="60%">
</p>

<p align="center">
  <img src="Diseño/Loading.png"  width="44%">
  <img src="Diseño/Login.png"  width="45%">
</p>
<p align="center">
  <img src="Diseño/medicamentos.png"  width="45%">
  <img src="Diseño/nuevo_medicamento.png"  width="42.5%">
</p>
<p align="center">
  <img src="Diseño/NuevoLote.PNG"  width="44%">
  <img src="Diseño/Solicitudes.png"  width="41%">
</p>


---
 
## ⚙️ **Requerimientos Funcionales**

| **RF**  | **Requisito**                 | **Descripción** |
|---------|-------------------------------|-----------------|
| RF1     | **Inicio de sesión**           | Permitir a los usuarios autorizados iniciar sesión. |
| RF2     | **Modificación de datos**      | Permitir modificar datos personales dentro del sistema. |
| RF3     | **Cierre de sesión**           | Permitir cerrar sesión de manera segura. |
| RF4     | **Recuperación de contraseña** | Proceso seguro para recuperar contraseñas olvidadas. |
| RF5     | **Interfaz intuitiva**         | Interfaz fácil de usar y navegar. |
| RF6     | **Catálogo de medicamentos**   | Mostrar un catálogo completo de medicamentos. |
| RF7     | **Búsqueda de medicamentos**   | Permitir búsqueda por nombre o categoría. |
| RF8     | **Detalles del medicamento**   | Mostrar información detallada de cada medicamento. |
| ...     | ...                           | ...             |

---

## 🔒 **Requerimientos No Funcionales**

| **RNF** | **Requisito**                 | **Descripción** |
|---------|-------------------------------|-----------------|
| RNF1    | **Seguridad de datos**         | Garantizar la protección de datos de pacientes y farmacia. |
| RNF2    | **Cumplimiento normativo**     | Asegurar que el sistema cumpla con regulaciones médicas y de privacidad. |
| RNF3    | **Tiempo de respuesta**        | Garantizar tiempos de respuesta rápidos. |
| RNF4    | **Escalabilidad**              | El sistema debe manejar aumentos repentinos en la carga de trabajo. |
| RNF5    | **Disponibilidad**             | El sistema debe estar disponible 24/7. |

---

## 📊 **Modelo Relacional**

![Modelo Entidad-Relación](https://github.com/CrisOjeda9/Farmacia-Intrahospitalaria/assets/161864911/7771cde7-a9e3-494e-8c03-0935abc9a3f1)

---

## ⚖️ **Reglas de Negocio**

1. **Validación de prescripción médica**: Validar la prescripción médica antes de dispensar medicamentos.
2. **Registro de medicamentos en inventario**: Mantener un registro actualizado de todos los medicamentos.
3. **Alertas de stock bajo**: Notificar cuando el stock de un medicamento crítico esté por debajo del umbral.
4. **Manejo de medicamentos vencidos**: Identificar y marcar medicamentos vencidos para su eliminación.

---

### ✨ **Conclusión**

<div style="text-align: justify;">
Este sistema busca mejorar la experiencia de los pacientes y optimizar la gestión interna del hospital. Con la implementación de las últimas tecnologías y estándares de seguridad, se espera mejorar la eficiencia operativa, facilitar la toma de decisiones y contribuir al bienestar de los pacientes.
</div>

---

## Equipo de Desarrollo

Nuestro equipo está conformado por los siguientes miembros:

- Daniela Aguilar Torres
- @Daniela-AG15
- Carlos Martin Hernandez de Jesus
- @carlosM18-max
- Cristian Ojeda Gayosso  
- @CrisOjeda9  
- Myriam Valderrabano Cortez
- @MyriamValderrabano  




> **"El mejor cuidado comienza con la tecnología más avanzada."**  
> **Hospital Medical Care and Healing por CMD**



