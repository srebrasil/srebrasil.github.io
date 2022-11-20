---
layout: post 
title:  "Porque sistemas não devem ficar 100% ocupados"
date:   2022-11-20 08:00:00 -0300 --->
published: true
tag: "Edição #37 - 21.11.2022"
headline: "Porque sistemas não devem ficar 100% ocupados"
highlight_title: "The most important thing to understand about queues"
highlight_url: "https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/"
highlight_autor: "Dan Slimmon"
image: /images/queues_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "http://linkedin.com/in/rcsousa1"
---
O artigo do Dan Slimmon, apesar de ser um pouco denso, provoca algumas reflexões que deveriam fazer parte do dia-a-dia de todos envolvidos na concepção, desenvolvimento, e manutenção de sistemas de TI. Não que a teoria se aplique apenas a TI!

Também não é minha intenção traduzir o artigo. Sugiro que todos que tenham interesse, não apenas leiam na integra [aqui](https://blog.danslimmon.com/2016/08/26/the-most-important-thing-to-understand-about-queues/) e ainda aproveitem para mergulhar na **Little's Law**. Muito do que entendemos sobre escalabilidade, capacidade de entrega de sistemas conectados, de TI ou não!

A mais importante lição destacada no artigo é que, em sistemas que "rodam" 100% do tempo ocupados, as filas tendem ao infinito, assim como o tempo de resposta para processa-las. Inclusive é fundamental entender que, apesar da idéia de ter um sistema com utilização média em 100% ser teórica em função das flutuações de demanda, os sistemas degradam e os tempos de espera aumentam exponencialmente com taxas de utilização muito menores.

Por que isso é importante para SREs, Engenheiros de Sistemas, Arquitetos de Software, etc? Se você e seu time estão 100% do tempo apagando incêndios, resolvendo tickets, escrevendo código, o que seja. Vocês não estão fazendo coisas fundamentais como escrever blogs e wikis e documentando seus sistemas, não estão investindo tempo para estudar novas tecnologias e paradigmas de desenvolvimento, não estão compartilhando experiências e ajudando a formar a próxima geração de profissionais de TI.

Todos esses aspectos são vitais para que os sistemas, de TI ou humanos, consigam escalar na criação de valor e fujam da armadilha de fazer, com extrema eficiência, mais do mesmo. **Talvez esse mesmo não seja mais relevante no futuro ou no próximo patamar de evolução dos sistemas e da sociedade**. 