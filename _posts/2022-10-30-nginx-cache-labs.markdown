---
layout: post 
title:  "Você sabe implementar estrategia de caching? Esse lab te ensina!"
date:   2022-10-30 08:00:00 -0300 --->
published: true
tag: "Edição #34 - 31.10.2022"
headline: "Você sabe implementar estrategia de caching? Esse lab te ensina!"
highlight_title: "NGINX Cache Labs"
highlight_url: "https://github.com/cirolini/nginx-cache-labs"
highlight_autor: "Rafael Cirolini"
image: /images/cache_post.png
comentado_por: "Rafael Cirolini"
comentado_por_linkedin: "https://www.linkedin.com/in/cirolini/"
---
TODAS as aplicações web tem a necessidade de ter um cache configurado. Você poderia me perguntar o porque? Eu posso citar alguns motivos:

1 - Deixar seu serviço mais rápido, melhorando a experiencia dos usuários.
2 - Resiliência a falhas, tornado seu produto mais confiável.
3 - Economia de grana $$$, sendo que entrar de cache costuma ser muito mais barato do que o balaio de coisas que hoje são as aplicações como API Gateway, lambda, banco de dados, etc..

Mas será que todo mundo conhece os modelos de cache? Conversando com meu amigo [Alberto Luís Boa Vista](https://www.linkedin.com/in/ACoAAAcCNj0B5MO1eVTKpOpH2qzvVF_PLQaJK7M) e lembrando a escola que foi o [Terra](https://www.linkedin.com/company/terra/) sobre isso, e com certeza a pós graduação com doutorado que foi a [Azion](https://www.linkedin.com/company/aziontech/).

Fiz um labs simples, usando Docker com o NGINX e uma aplicação simples, para demostrar alguns tipos de cache como stale-while-revation, stale-if-error, entre outros...

A dica é simples, use o Docker Compose para subir a aplicação, e para cada uri diferente ele vai imprimir na tela o status do cache, assim vai ficar bem didático e, de alguns refreshs, acompanhe os logs e veja a magica acontecer...)