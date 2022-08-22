---
layout: post 
title:  "Quando reduzir o MTTR não deve ser o foco!"
date:   2022-08-21 08:00:00 -0300 --->
published: true
tag: "Edição #24 - 22.08.2022"
headline: "Quando reduzir o MTTR não deve ser o foco!"
highlight_title: "MTTR: lower isn’t always better"
highlight_url: "https://blog.danslimmon.com/2014/09/03/mttr-lower-isnt-always-better/"
highlight_autor: "Dan Slimmon"
image: /images/mttr_foco_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "https://www.linkedin.com/in/rcsousa1"
---
O artigo em destaque não é novo (é de 2014) nem muito profundo. Entretanto, provoca uma reflexão que vem sendo debatida a bastante tempo nos grupos responsáveis pelo gerenciamento de sistemas distribuídos (e complexos). Será o objetivo dos times deve ser sempre reduzir o MTTR?

Digo e repito (na verdade virou um mantra): Quando uma métrica se torna objetivo ela deixa de ser uma boa métrica. O artigo descreve de forma muito objetiva cenários em que o MTTR não deve ser o foco, sem deixar de reconhecer que é uma métrica fundamental e que muitas vezes traduz a disponibilidade dos ambientes.

Contexto é tudo e as vezes o foco deve ser em aumentar disponibilidade e resolver problemas estruturais, reduzindo a quantidade de incidentes, e não apenas otimizando ou automatizando a resolução.

É importante lembrar que o M de MTTR = Mean (média) e que as médias, as vezes, sugerem ações erradas. Quando o número de incidentes é alto talvez seja mais importante resolver a questão estrutural do que automatizar o tratamento do sintoma.