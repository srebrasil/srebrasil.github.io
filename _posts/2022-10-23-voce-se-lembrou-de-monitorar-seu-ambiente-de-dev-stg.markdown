---
layout: post 
title:  "Você se lembrou de monitorar seu ambiente de dev/stg"
date:   2022-10-23 08:00:00 -0300 --->
published: true
tag: "Edição #33 - 24.10.2022"
headline: "Você se lembrou de monitorar seu ambiente de dev/stg"
highlight_title: "Getting Started with Observability Driven DevOps and SRE Automation "
highlight_url: "https://www.youtube.com/watch?v=LIujiymZoXA"
highlight_autor: "Rob Jahn and Andreas Grabner"
image: /images/dev_monitoring_post.png
comentado_por: "Danne Aguiar"
comentado_por_linkedin: "https://www.linkedin.com/in/dannemca/"
---
Todo SRE conhece a importância de ter seus ambientes produtivos sob monitoração. Mas e os ambientes de desenvolvimento (dev) e testes (stg)? 

Boas ferramentas de Observabilidade são caras. E talvez por isso o escopo monitorado seja reduzido apenas aos ambientes críticos. Porém, isso é um erro e vou te explicar o porquê.

Ao deixar de lado a monitoração dos ambientes de dev e stg, você deixa de considerar importantes overheads que só serão percebidos pelo seu ambiente produtivo, o que pode causar sérios impactos aos seus níveis de serviço.

Por outro lado, ao incluir a monitoração nos ambientes de dev e stg, alguns benefícios são introduzidos:

- Overheads causados por agentes de monitoração (ou coleta de traces) podem ser contabilizados em seus SLOs/SLAs
- Falhas de código (ou mesmo vulnerabilidades) são identificadas durante o desenvolvimento, o que pode gerar redução ou mesmo eliminar o MTTR de um possível problema em produção.
- O Pipeline pode ser automatizado, pois uma vez monitorado, a release pode ser medida e liberada para stg/prd apenas ao atingir determinados níveis de SLI
- Introduzir a [Engenharia de Caos](https://destaque.srebrasil.com/tabletop-exercises-for-engineering-teams/) dentro da organização fica mais simples, pois ela pode ser aplicada no ambiente de dev, sem causar interrupções ao cliente final.
- A estimativa dos níveis de SLI ficam mais claros quando se alinha os [testes sintéticos](https://destaque.srebrasil.com/top-7-reasons-to-use-synthetic-monitoring/) nos ambientes pré-produtivos.

Se esses benefícios não te convenceram a estender a monitoração nos ambientes dev/stg, talvez esse vídeo mostrando seu uso na prática o faça.

Assista o vídeo [aqui](https://www.youtube.com/watch?v=LIujiymZoXA)