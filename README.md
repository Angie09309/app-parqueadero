# Parqueadero · Caminos del Campo (prototipo funcional)

Aplicación web desarrollada con Next.js (App Router), JavaScript y Tailwind CSS para controlar cupos, tiempos y cobros de vehículos en el conjunto residencial Caminos del Campo.

## Instalación y Configuración

1. Instalar Node.js 18 o superior (https://nodejs.org).
2. Abrir una terminal dentro de la carpeta del proyecto (`app-parquedero`).
3. Ejecutar `npm install` para instalar las dependencias.
4. Ejecutar `npm run dev` y abrir http://localhost:3001 (o el puerto indicado) en tu navegador.

Para versión de producción: `npm run build` y luego `npm start`.

## Uso Básico

- Registrar entrada con placa, tipo (visitante/residente) y casa.
- El contador muestra los cupos libres; los últimos cupos reservados quedan destinados para residentes.
- Cada vehículo cuenta con cronómetro y cálculo de cobro estimado en vivo (para visitantes).
- "Registrar salida" muestra de forma automática el tiempo total y el valor final a cobrar.
- En la sección de Configuración se pueden modificar los cupos de residentes, visitantes, tarifas por hora y minutos de cortesía.

Los datos se almacenan de manera local en el navegador (`localStorage`), funcionando como un prototipo modular y ligero sin necesidad de base de datos externa.
