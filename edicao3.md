---
layout: page
title: "Edição #3 28.03.2022"
permalink: /edicao2/
---

{% for destaque in site.posts %}
{% if destaque.tag contains "Edição #3" %}


### **{{ destaque.headline }}**

🌐 [{{ destaque.highlight_title }}]({{ destaque.highlight_url }}) por 👱🏼‍♂️ {{destaque.highlight_autor}} (Comentários de :man_technologist: [{{ destaque.comentado_por }}]({{ destaque.comentado_por_linkedin }}))

🗣️ {{ destaque.comentario }}

{% endif %}
{% endfor %}

<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://srebrasil.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">Comentários habilitados pelo Disqus.</a></noscript>

<script id="dsq-count-scr" src="//srebrasil.disqus.com/count.js" async></script>