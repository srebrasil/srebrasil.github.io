---
layout: page
---
<p align="center"><img src="https://destaque.srebrasil.com/assets/destaques.gif"></p>

{% for destaque in site.posts %}

## **{{ destaque.headline }}**

🌐 [{{ destaque.highlight_title }}]({{ destaque.highlight_url }}) por 👱🏼‍♂️ {{page.highlight_autor}} (Comentários de :man_technologist: [{{ page.comentado_por }}]({{ page.comentado_por_linkedin }}))

🗣️ {{ destaque.comentario }}</p>

{% endfor %}