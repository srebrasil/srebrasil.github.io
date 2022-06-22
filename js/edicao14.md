---
layout: default
permalink: /edicao14/ 
---

<div class="home py-4 py-md-5">
  <div class="row">
    {% for post in site.posts %}
    {% if post.tag contains "Edição #14 -" %}   
      <div class="col-12 col-md-6 col-lg-4">
       <a href="{{ post.url | prepend: site.baseurl }}" class="index-anchor">
        <div class="card rounded overflow-hidden">  
          <div class="image">
            {% if post.image %}
            <img src="{{post.image | relative_url}}" alt="{{post.title}}">
            {% endif %}
            <div class="card-body">
              <h4 class="panel-title font-weight-bold">{{ post.title | truncate: 25 }}</h4>
              <p class="p-0 my-1 mx-0"><span class="post-meta"><small>{{ post.date | date: "%b %-d, %Y" }}</small></span></p>
               <p>{{ post.excerpt | strip_html | strip_newlines | truncate: 150 }}</p>
            </div>
          </div>
        </div>
      </a>
      </div>
      {% endif %}
    {% endfor %}
  </div>
</div> 
    


