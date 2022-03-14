---
layout: page
---
<p align="center"><img src="https://destaque.srebrasil.com/assets/destaques.gif"></p>

{% for destaque in site.posts %}

## **{{ destaque.headline }}**

<p>🌐 [{{ destaque.highlight_title }}]({{ destaque.highlight_url }})</p>
<p>👱🏼‍♂️ De:{{destaque.highlight_autor}}</p>
<p>:man_technologist: Comentários de [{{ destaque.comentado_por }}]({{ destaque.comentado_por_linkedin }}))</p>
<p>:spiral_calendar: release: {{ destaque.release }}</p>

<p>🗣️ {{ destaque.comentario }}</p>

{% endfor %}