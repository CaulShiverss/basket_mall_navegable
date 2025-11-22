# BasketMall Navegable - Justificaciones

## Sergio Llorente

### Usabilidad

Para garantizar la usabilidad de la aplicación me he asegurado de seguir unos estilos coherentes y claros para el usuario. 

#### Header para navegación

<img width="1917" height="325" alt="image" src="https://github.com/user-attachments/assets/1c02fc01-bb78-4dd4-81d1-47de971c68d6" />

#### Botón para volver atrás

<img width="845" height="380" alt="image" src="https://github.com/user-attachments/assets/a289c452-bd14-4103-a4c3-1172f1198b44" />

### Accesibilidad

Para la accesibilidad he añadido los siguientes aspectos a mi web:

#### Navegación por tabs

<img width="1910" height="885" alt="image" src="https://github.com/user-attachments/assets/15ca2028-d8e6-49df-81c4-a6cea14e47e7" />

#### Uso de elementos semánticos y aria-labels

```js
<article
            className="
                flex flex-col items-start gap-3 
                p-4 
                rounded-lg 
                bg-gray-100 
                shadow-md 
                hover:shadow-lg 
                transition-transform duration-300 
                hover:scale-105 
                h-full
            "
            aria-label={`${nombre}`} // Etiqueta accesible con el nombre del intérprete/película
        >
            {/* Imagen representativa del recurso */}
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`} // Texto alternativo accesible
                    loading="lazy"            // Optimización de rendimiento
                    className="w-full h-full object-cover"
                />

                {/* Figcaption oculto visualmente, útil si children añade significado */}
                <figcaption className="sr-only">
                    {props.children}
                </figcaption>
            </figure>
```

#### Compatibilidad con lector de pantalla

<img width="1860" height="771" alt="image" src="https://github.com/user-attachments/assets/59fdaf3c-931d-4702-b117-69b622192eaa" />





