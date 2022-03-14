---
layout: page
---
<p align="center"><img src="https://destaque.srebrasil.com/assets/destaques.gif"></p>

{% for destaque in site.posts %}

## **{{ destaque.headline }}**

🌐 [{{ destaque.highlight_title }}]({{ destaque.highlight_url }}) por 👱🏼‍♂️ {{destaque.highlight_autor}} (Comentários de :man_technologist: [{{ destaque.comentado_por }}]({{ destaque.comentado_por_linkedin }}))

🗣️ {{ destaque.comentario }}</p>

{% endfor %}


{% for tag in site.tags %}
    {% assign t = tag | first %}
    {% assign posts = tag | last %}

    {{ t | downcase }}
    <ul>
        {% for post in posts %}
            {% if post.tags contains t %}
                <li>
                    <a href="{{ post.highlight_url }}">{{ post.title }}</a>
                </li>
            {% endif %}
        {% endfor %}
    </ul>
{% endfor %}