---
layout: post 
title:  "Crie alertas baseados no que realmente importa!"
date:   2022-11-06 08:00:00 -0300 --->
published: true
tag: "Edição #35 - 07.11.2022"
headline: "Crie alertas baseados no que realmente importa!"
highlight_title: "Authors’ Cut—Actionable SLOs Based on What Matters Most"
highlight_url: "https://www.honeycomb.io/blog/actionable-slos-based-matters-most/"
highlight_autor: "Pierre Tessier"
image: /images/slo_alerts_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "http://linkedin.com/in/rcsousa1"
---
O artigo em destaque descreve como s Objetivos de Nível de Serviço, ou SLOs, podem ser poderosos e como podem ajudar as equipes a identificar e corrigir problemas antes que eles se tornem inaceitáveis. Mas os SLOs também podem ser intimidadores. A chave para usá-los efetivamente é compreender como eles funcionam e como depurá-los.

É muito comum encontrar times submersos em uma montanha de incidentes. Durante a jornada de melhoria contínua dos times, muitos inclusive já começaram a gerar alertas baseados nos golden signals e na observância dos percentis (ex. 95th). O problema dessa abordagem é que, apesar de muito melhor do que observar valores absolutos ou médias, eles não tem contexto suficiente para descrever a experiência do usuários. 

O artigo sugere observar esses indicadores e combina-los com a jornada dos usuários para criação de alertas baseados em SLOs que também sejam "actionable". Por exemplo, gerar alertas para as chamadas de API para o endpoint /home que, mesmo que tenham sido completada com sucesso, tenha sido executada em mais de 100ms e que tenha um erro associado no log. Esse tipo de abordagem permitirá gerar alertas que reduzam a carga cognitiva dos times encarregados de responder incidentes e amplificará o aprendizado organizacional.

 Os SLOs são muito mais eficazes quando impulsionados pelos dados de eventos de observabilidade. Com a observabilidade, as equipes podem ver o que está errado e tomar ações para corrigi-lo. e esse foi o nosso ponto de virada descrito pelo autor do artigo. **Os SLOs ajudaram a compreender as nuances do que acontece com os usuários, especialmente na cauda longa, em vez da experiência da maioria**.

Confira o artigo na íntegra [aqui](https://www.honeycomb.io/blog/actionable-slos-based-matters-most/)