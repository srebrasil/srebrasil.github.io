---
layout: post 
title:  "Devolva meu monolito!"
date:   2022-05-16 08:00:00 -0300
published: true
tag: "Edição #11 - 23.05.2022"
headline: "Devolva meu monolito!"
highlight_title: "Give me back my monolith"
highlight_url: "https://www.craigkerstiens.com/2019/03/13/give-me-back-my-monolith/"
highlight_autor: "Craig Kerstiens"
image: /images/monolito.png
comentado_por: "Tito Garrido Ogando"
comentado_por_linkedin: "https://www.linkedin.com/in/titogarrido"
---
O artigo trás uma reflexão dos desafios de uma arquitetura de micro serviços. Há uma revisita a alguns pontos que enfrentamos no dia a dia e como ela impacta no modo que vamos gerenciar o ambiente de micro serviços. Pontos como *setup*, *debug* e *test* são analisados. 

O processo de setup cresceu drasticamente. O tempo de *onboard* de novos engenheiros também cresceu junto com um sentimento de complexidade desnecessária para engenheiros juniores.

No processo de debug ficou inerentemente complicado. A identificação do erro não é mais tão clara quanto investigar o *stacktrace* e ir direto ao erro. Agora há a necessidade de entender como os serviços se comunicam e todas as peças têm que ser ligadas antes da análise do erro.

Em relação a *continuous integration* e *continuous development* há muitos ganhos no processo, porém esse mesmo ambiente de CI/CD tem que ser replicado no ambiente do desenvolvedor e acaba sendo um esforço muito grande em momentos que você quer testar somente uma peça isolada.

Concluindo o pensamento sobre as vantagens já sabidas sobre o uso de micro serviço (agilidade, escala dos times, performance e resiliência) normalmente quando o autor discute com outros colegas sobre escala, o foco é na maior parte da conversa é *como escalar o banco de dados*. Segundo o autor, há uma tendencia cada vez mais comum de se ouvir a reação: *Nós estamos felizes com nossa app monolítica.*"