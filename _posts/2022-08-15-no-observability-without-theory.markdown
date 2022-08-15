---
layout: post 
title:  "Porque não existe observability sem teoria"
date:   2022-08-15 08:00:00 -0300 --->
published: true
tag: "Edição #23 - 15.08.2022"
headline: "Porque não existe observability sem teoria"
highlight_title: "No observability without theory"
highlight_url: "https://blog.danslimmon.com/2019/05/03/no-observability-without-theory/"
highlight_autor: "Dan Slimmon"
image: /images/obs_theory_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "https://www.linkedin.com/in/rcsousa1”
---
Será que é possível implementar observabilidade sem teoria? Aparentemente (e eu concordo) não.
A maioria das iniciativas atuais para implementar ou expandir observabilidade nos sistemas está associada a expandir a captura de logs, métricas e traces (spans), e criar dashboards que permitam que os times cheguem mais rapidamente a causa raiz dos problemas na medida em que eles ocorram.
Qual o problema?

Somente ter mais dados sem entender ou estabelecer teorias de como os sistemas funcionam é muito pouco útil. Os times precisam ser capazes de não somente acessar essas informações mas também entender como o que estão observando se assemelha ou diferencia do estado "normal" dos sistemas para que consigam ser precisos em suas atividades.

O autor faz um análise muito interessante quando compara a atuação de um médico. Um médico que conheça toda teoria sobre anatomia humana mas que não solicite exames, ou seja, que não tenha dados sobre o paciente, será muito incompetente porque só tentará adivinhar o melhor tratamento. De forma análoga, se o médico não conhecer muito sobre anatomia mas tiver acesso a todos exames possíveis, também será incompetente por não conseguir entender os dados e sugerir o melhor tratamento.
Isso também se aplica para os engenheiros e analistas de TI. 

Quais os tipos de teorias precisamos desenvolver?