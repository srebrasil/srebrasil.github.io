---
layout: page
---
<p align="center"><img src="https://destaque.srebrasil.com/assets/destaques.gif"></p>

{% for tag in site.tags %}
{% assign t = tag | first %}
{% assign posts = tag | last %}

# **{{ t }}**

{% for destaque in site.posts %}
{% if destaque.tags contains t %}

#### **{{ destaque.headline }}**

    🌐 [{{ destaque.highlight_title }}]({{ destaque.highlight_url }}) por 👱🏼‍♂️ {{destaque.highlight_autor}} (Comentários de :man_technologist: [{{ destaque.comentado_por }}]({{ destaque.comentado_por_linkedin }}))

    🗣️ {{ destaque.comentario }}</p>

{% endif %}
{% endfor %}
{% endfor %}