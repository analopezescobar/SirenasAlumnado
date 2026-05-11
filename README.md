# SIRENAS SdA Propuesta para el alumnado

Sitio web estático exportado desde eXeLearning para publicar la situación de aprendizaje "SIRENAS".

## Estructura

- `index.html`: página principal. Debe permanecer en la raíz para GitHub Pages.
- `html/`: páginas internas del proyecto.
- `content/`: recursos, hojas base y archivos del contenido.
- `idevices/`: componentes exportados por eXeLearning.
- `libs/`: librerías necesarias para que funcione el sitio.
- `theme/`: estilos y comportamiento del tema.
- `.nojekyll`: evita que GitHub Pages procese el sitio con Jekyll.

## Publicación en GitHub Pages

En el repositorio de GitHub:

1. Ir a `Settings`.
2. Abrir `Pages`.
3. En `Source`, elegir `Deploy from a branch`.
4. En `Branch`, seleccionar `master` o `main`, según el nombre de la rama.
5. En carpeta, seleccionar `/(root)`.
6. Guardar.

## Antes de subir cambios

- No subir archivos `.zip`, `.elp` o `.elpx`; están excluidos en `.gitignore`.
- Comprobar que `index.html` sigue en la raíz.
- Si se vuelve a exportar desde eXeLearning, revisar que `.nojekyll`, `.gitignore` y este `README.md` sigan presentes.
- Revisar `content/resources/` si se reexporta el proyecto: eXeLearning puede generar copias duplicadas de imágenes o PDF con nombres automáticos.

## Mantenimiento del sitio

Después de reexportar desde eXeLearning:

1. Mantener las miniaturas de `content/resources/thumbs/` o regenerarlas si cambian las imágenes de las galerías.
2. Revisar que las imágenes tengan `alt`, `loading="lazy"` y `decoding="async"`.
3. Revisar que las páginas con galerías usen miniaturas en `src` y mantengan el enlace al recurso grande en `href`.
4. Ejecutar la validación local:

```powershell
./scripts/validate-site.ps1
```

Si PowerShell bloquea la ejecución de scripts en Windows, usar:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\validate-site.ps1
```

El repositorio también incluye un workflow de GitHub Actions en `.github/workflows/validate-site.yml` que ejecuta la misma validación en cada `push` a `main` o `master` y en cada pull request.
