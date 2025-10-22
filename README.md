# bnc-landing

Sitio estático para landing.

Despliegue en Vercel

1) Usar el dashboard de Vercel y conectar el repositorio de GitHub (o GitLab/Bitbucket). Vercel detecta sitios estáticos. Asegúrate de que el directorio raíz del proyecto contenga `index.html`.

2) Usar la CLI (opcional):

Abre cmd.exe en la carpeta del proyecto y ejecuta:

```
npm install -g vercel
vercel login
vercel --prod
```

La primera vez te pedirá información sobre el proyecto. `vercel.json` incluido fuerza la build como sitio estático.

Notas:
- Tu `package.json` no tiene un build real. Para un sitio estático no hace falta.
- Asegúrate de commitear y pushear el repo si usas el dashboard.
