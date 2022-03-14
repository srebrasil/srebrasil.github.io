layout: page
list_title: ' '
---
<p align="center"><img src="https://destaque.srebrasil.com/assets/destaques.gif"></p>

{{ % for destaque in site.posts %}}

## **{{ destaque.headline }}**

🌐 [{{ destaque.highlight_title }}]({{ destaque.highlight_url }}) por 👱🏼‍♂️ {{destaque.highlight_autor}} (Comentários de :man_technologist: [{{ destaque.comentado_por }}]({{ destaque.comentado_por_linkedin }}))

🗣️ {{ destaque.comentario }}

{{ % endfor %}}

