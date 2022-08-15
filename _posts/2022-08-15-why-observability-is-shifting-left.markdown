---
layout: post 
title:  "Porque implementar observabilidade no design"
date:   2022-08-15 08:00:00 -0300 --->
published: true
tag: "Edição #23 - 15.08.2022"
headline: "Porque implementar observabilidade no design"
highlight_title: "Why Observability Is Shifting Left"
highlight_url: "https://thenewstack.io/why-observability-is-shifting-left/"
highlight_autor: "Ilan Peleg"
image: /images/obs_design_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "https://www.linkedin.com/in/rcsousa1”
---
Observabilidade talvez seja o tópico mais comentado nos círculos de engenharia de confiabilidade e DevOps atualmente. Muito do que se discute sobre o tema é sobre a necessidade de capturar o máximo de informações ou sinais sobre os sistemas (que ficam sempre mais complexos), para que no advento dos incidentes os **times técnicos sejam capazes de investigar esses sinais e chegar, de forma rápida e precisa, ao que antigamente chamávamos de causa raiz e hoje identificamos como causa mais provável**.  

### Qual o problema?

A forma como a observabilidade é desenvolvida nos sistemas, uma prática de muitas décadas, é que os desenvolvedores não precisam se preocupar com a monitoração, haja visto que essa é uma missão dos times de operações de TI, e que os últimos deveriam adaptar suas rotinas para capturar as informações necessárias para que pudessem responder aos eventos em produção. A complexidade dos sistemas e das plataformas de TI mudou tudo. Essa prática não funciona mais e motivou uma discussão mais alorada sobre o tema. Quem deve ser responsável por instrumentar os sitemas durante o seu desenvolvimento?

Os desenvolvedores tornaram-se co-responsáveis por emitir alertas que tornassem a operação dos sistemas possível e motivou o que o artigo descreve como _Shift-Left_ da observabilidade. Entretando, como não existem boas referências (ainda) sobre o que e sobre como instrumentar, haja visto que esse é um campo ainda em desenvolvimento, o que fizeram os **desenvolvedores incapazes de saber ou advinhar o que não sabem** 🤔 ? Decidiram emitir logs para tudo e deixar a missão de entender como utilizar essas informações para os times de operações (SREs, Engenheiros DevOps, Operadores, ou qualquer outra definição aplicável para os times responsáveis pela resposta de incidentes).

### A necessidade de gerenciar os custos da observabilidade.

Emitir, capturar, armazenar e processar essa quantidade crescente de logs apesar de operacionamente desafiador, **é economicamente inviável**. Empresas buscam formas de otimizar e criar um racional para quanto valor conseguem gerar para cada GB de logs, métricas e traces armazenados e procuram entender os custos associados a não fazê-lo.

Sendo assim, e respeitando o axioma de introspecção negativa (axioma 5) da lógica modal epistêmica, que afirma que quando não sabemos de algo, não sabemos que não sabemos, e também admitindo que a melhor alternativa para tratar essa situação é a exploração científica. Devemos  implementar formas de colaborar, independentemente se somos desenvolvedores ou SRE, engenheiros DevOps ou operadores, para identificar os mecanismos que tornem nossos sistemas observáveis e ao mesmo tempo sustentáveis.

O que você acha?