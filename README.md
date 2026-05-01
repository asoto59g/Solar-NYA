# Visor Web - "NUMU" – Parque Solar NYA Abril 2026

Este es un visor web interactivo generado para visualizar el proyecto del **Parque Solar NYA**, junto con un análisis de imágenes satelitales correspondientes a abril de 2026.

Para ir al visor dar clic al siguiente link:  https://asoto59g.github.io/Solar-NYA/

---
## Detalles del proyecto

Este proyecto fotovoltaico, denominado **"NUMU"**, aportará energía limpia y sostenible a la región.

### Resumen del proyecto

| Característica | Detalle |
|---|---|
| ☀️ **Capacidad** | **29.2 MW** |
| 📄 **Contrato con ICE** | **20 años** |
| 🌧️ **Pico de producción** | **Coincide con el período de menor lluvias**, complementando la generación hídrica. |

---

## Capas Disponibles

El visor cuenta con las siguientes capas de información que pueden ser activadas o desactivadas desde el control de capas (esquina superior derecha):

### 1. Capas Base y Vectoriales
- **Google Hybrid**: Imagen de satélite base de Google con etiquetas y caminos. Activa por defecto.
- **Parque Solar**: Polígono vectorial que delimita el área del proyecto del Parque Solar NYA. Incluye información de área en hectáreas (`AreaHa`). Activa por defecto.
  - **Alineación Estratégica**: El diseño del proyecto contempla una alineación de calles en sentido **Este-Oeste**. Esta configuración es fundamental para optimizar la captación de energía solar y maximizar el aprovechamiento del recurso durante el recorrido diario del sol.

### 2. Capas Satelitales (Sentinel-2)
Se incluye un conjunto de imágenes e índices derivados de la misión **Sentinel-2 (Nivel 2A)**, correspondientes al **17 de Abril de 2026**. Estas capas permiten evaluar diferentes características del terreno y la vegetación. Todas estas capas se encuentran agrupadas y están apagadas por defecto.

- **True color (Color Verdadero)**: Representación visual del terreno tal como lo percibe el ojo humano (Bandas RGB).
- **False color (Falso Color)**: Composición infrarroja que resalta fuertemente la vegetación sana en tonos rojos brillantes.
- **False color urban (Falso Color Urbano)**: Composición diseñada para resaltar zonas urbanas o de infraestructura, facilitando la distinción de caminos y construcciones.
- **NDVI (Índice de Vegetación de Diferencia Normalizada)**: Mide el vigor y la densidad de la vegetación. Valores altos (verde oscuro) indican vegetación densa y sana.
- **NDWI (Índice de Diferencia Normalizada de Agua)**: Utilizado para delinear cuerpos de agua abiertos y evaluar la humedad de la vegetación.
- **Moisture index (Índice de Humedad)**: Ayuda a identificar el contenido de humedad en la vegetación y los suelos.
- **SWIR (Infrarrojo de Onda Corta)**: Combinación de bandas útiles para discriminar humedad en el suelo, diferentes tipos de rocas y estrés en la vegetación.

## Uso del Visor
- **Navegación**: Utilice el ratón o pantalla táctil para desplazarse (arrastrar) y acercar/alejar (rueda del ratón o pellizcar).
- **Consultar Información**: Haga clic sobre el polígono del Parque Solar para ver su información en una ventana emergente.
- **Control de Capas**: Use el botón de capas en la esquina superior derecha para encender y apagar las capas satelitales según lo requiera su análisis.

## Esta situación es única en Costa Rica como se aprecia en los mapas adjuntos; en el siguiente vinculo se puede manipular 14 mapas de Guanacaste mostrando el potencial con promedios anuales, diarios, mensuales y las áreas de cada zona. (Manipular pestañas superior derecha, y dar clic sobre mapa para ver valores en tablas)

El gobierno debe adecuar leyes para favorecer la explotación de esta riqueza por la mayoría de las personas. 

  ![MAPA ORIGINAL](https://github.com/abcgeomatica/Mapas_Solares_Guanacaste/blob/master/Costa-Rica_PVOUT_mid-size-map_lang-ES_156x191mm-300dpi_v20200519.png))

![Mapa Guanacaste](https://github.com/abcgeomatica/Mapas_Solares_Guanacaste/blob/master/Mapa%20Solar%20Guanacaste.jpg)

MAPA INTERACTIVO
(https://abcgeomatica.github.io/Mapas_Solares_Guanacaste/)

## Visualización en Dispositivos Móviles
El visor ha sido optimizado para cargar en **"Vista de Escritorio"** en teléfonos y tablets. Esto asegura que todos los botones y controles mantengan una disposición adecuada y no se superpongan. 
- Si los botones se ven muy pequeños, puede utilizar el gesto de **pellizcar para hacer zoom** (zoom del navegador) para ampliar la zona de los controles y manipularlos con mayor facilidad.
- Se recomienda utilizar el dispositivo en modo **horizontal (landscape)** para una mejor experiencia de visualización del mapa.
