---
layout: post 
title:  "Substituir Métricas e Logs por Eventos"
date:   2022-09-03 08:00:00 -0300 --->
published: true
tag: "Edição #26 - 05.09.2022"
headline: "Substituir Métricas e Logs por Eventos"
highlight_title: "Observability Engineering"
highlight_url: "https://info.honeycomb.io/observability-engineering-oreilly-book-2022"
highlight_autor: "Charity Majors, Liz Fong-Jones e George Miranda"
image: /images/logs_metrics_post.png
comentado_por: "Richard Marques"
comentado_por_linkedin: "https://www.linkedin.com/in/richard-marques-26b3a14/"
---
O livro faz uma provocação muito interessante sobre substituir as métricas tradicionais e logs por algo que ficaria no meio destas duas abordagens, os eventos.

Principais vantagens dessa abordagem:
- Os eventos seriam mais ricos e contextualizados do que as métricas
- maior granularidade, conseguindo ir no detalhe de uma transação / requisição específica
- habilitaria por padrão o trace / correlação entre os eventos
- suporta múltiplas dimensões 

Quais as desvantagens do modelo tradicional (métricas + logs) que são resolvidas por esta nova abordagem:
- para definir um modelo de métricas e instrumentar elas na sua aplicação você precisa saber de antemão as perguntas que quer responder, o novo modelo permite fazer novas perguntas mesmo que não tenham sido identificadas antes por suportar alta granularidade e múltiplas dimensões)
- o modelo tradicional de métricas é baseado em agrupamentos e agregações o que nos faz perder o detalhe de problemas em ambientes com alto volume de transaçòes
- os logs não são estruturados e são difíceis de interpretar pelos sistemas de monitoração (máquina) por que ele é feito para humanos, ou seja, em alta escala não funciona. Já os eventos permitem uma interpretação mais fácil desses dados.

Eu não concordo com 100% do conteúdo do livro, pois em algum momento ele soa como se os autores estivessem distorcendo alguns conceitos para favorecer o produto que eles representam. Porém traz muitos conceitos, pontos de visão e provocações que valem a leitura