---
layout: post 
title:  "Informações indispensáveis no Dashboard SLIs"
date:   2022-09-03 08:00:00 -0300 --->
published: true
tag: "Edição #26 - 05.09.2022"
headline: "Informações indispensáveis no Dashboard SLIs"
highlight_title: "What should be on a SLI dashboard"
highlight_url: "https://ali.sattari.me/posts/2021/what-should-be-on-a-sli-dashboard/"
highlight_autor: "Ali Sattari"
image: /images/dashboard_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "https://www.linkedin.com/in/rcsousa1"
---
Construir observabilidade nos sistemas e adotar uma estratégia coerente de como compartilhar e fazer o melhor uso dessas informações são tarefas árduas e que muitas empresas ainda encontram dificuldades.

Definir indicadores e objetivos de nível de serviço (SLIs e SLOs) representam em si mesmos um grande desafio. Entretanto, quando as empresas conseguem dar os primeiros passos na implementação, surge um desafio subsequente tão complexo e sofisticado quando a própria definição dos indicadores. Quais informações são relevantes e quais devem compor os dashboards dos serviços? É importante também destacar que o espectro de observabilidade é muito mais amplo que os dashboards e incluem a capacidade de pesquisar e interpretar uma vasta quantidade de dados. 

No contexto abordado no artigo destacado o autor propõe um modelo de quais informações são capazes de traduzir a satisfação e felicidade dos usuários (afinal é isso que importa) e também inclui informações relevantes capazes de auxiliar os eventuais consumidores dos dashboards do serviço sobre qual o SLO, quanto do budget foi consumido e, algo que é extremamente útil na minha opinião, onde é possível encontrar informações sobre os acordos de nível de serviço, documentação sobre o sistema, fluxo de interação/transação, serviços upstream e downstream, e mapa de dependências.

💡 No final do dia, métricas de infraestrutura como **% de uso de cpu** ou **% de alocação do sistema de arquivos**, apesar de muito importantes para determinação de problemas, são ineficientes para traduzir a experiência dos usuários e portanto **não devem compor o dashboard de SLIs**. 

Para avaliar se seu dashboard é bom o bastante se pergunte se alguém, ao ser acordado as 3 da madrugada, conseguiria consulta-lo e utilizar as informações contidas para entender ou resolver um problema! 😃