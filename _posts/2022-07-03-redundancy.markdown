---
layout: post 
title:  "Redundância Sim! Mas para quais vulnerabilidades?"
date:   2022-07-03 08:00:00 -0300 --->
published: true
tag: "Edição #17 - 04.07.2022"
headline: "Redundância Sim! Mas para quais vulnerabilidades?"
highlight_title: "Redundant against what?"
highlight_url: "https://brooker.co.za/blog/2021/04/14/redundancy.html"
highlight_autor: "Marc Brooker"
image: /images/redundancy_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "http://linkedin.com/in/rcsousa1/"
---
O artigo que inspirou esse comentário é simples e não promove uma avaliação detalhada do assunto. No entanto, inspira uma reflexão muito profunda.

Na medida em que nossos sistemas aumentam em tamanho, complexidade, e velocidade de alterações, precisamos repensar nossa definição usual de redundância, um termo que usamos a bastante tempo quase que exclusivamente para descrever a necessidade de duplicar componentes de infraestrutura, para então arquitetar soluções de fail-over automatizados para esses mesmos componentes.

Os vetores de falha para o sistemas complexos que desenvolvemos e precisamos manter atualmente possuem uma variedade de vetores de falha imensamente maiores. Esses vetores vão desde potenciais falhas originadas por fatores sociais e organizacionais, até fatores relacionados e falhas de conteúdo, as famosas poison pills ou falhas lógicas, e até falhas operacionais associadas a execução de processos. Falhas que são muito (senão impossíveis) de antecipar, haja visto que é "impossível que saibamos o que não sabemos :-)".

Ao pensar em construir redundâncias para os sistemas é fundamental primeiro responder: Redundância contra o que? Falhas de infraestrutura, falhas lógicas e de conteúdo, falhas operacionais ou processuais? Para cada uma delas é preciso fazer o design e desenvolvimento de uma solução específica. Infelizmente (ou felizmente) não existem balas de prata para resolver todos os vetores de falha de vez.