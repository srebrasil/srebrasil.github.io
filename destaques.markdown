---
layout: page
---
<p align="center"><img src="https://destaque.srebrasil.com/assets/destaques.gif"></p>

{% for destaque in site.posts %}

## **{{ destaque.headline }}**

🌐 [{{ destaque.highlight_title }}]({{ destaque.highlight_url }})
\n👱🏼‍♂️ De:{{destaque.highlight_autor}}
\n:man_technologist: Comentários de [{{ destaque.comentado_por }}]({{ destaque.comentado_por_linkedin }}))
\n:spiral_calendar: release: {{ destaque.release }}

🗣️ {{ destaque.comentario }}</p>

{% endfor %}