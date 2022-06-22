---
layout: post 
title:  "Circuit Breakers irão resolver meus problemas?"
date:   2022-04-04 08:00:00 -0300
published: true
tag: "Edição #4 - 04.04.2022"
headline: "Circuit Breakers irão resolver meus problemas?"
highlight_title: "Will circuit breakers solve my problems?"
highlight_url: "https://brooker.co.za/blog/2022/02/16/circuit-breakers.html"
highlight_autor: "Marc Brooker"
image: /images/circuit.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "http://www.linkedin.com/in/rcsousa1"
---
O artigo do Marc Brooker é, além de inspiracional e muito realista, leitura obrigatória para quem já desenvolveu ou pensa em desenvolver circuit breakers como mecanismos para aumentar a resiliência dos seus sistemas distribuídos em produção. O artigo não necessariamente condena a técnica e reconhece que em algumas situações ele é útil e até desejável mas, diante dos cenários mais complexos de implementação dos sistemas atuais, ele termina por adicionar uma complexidade que pode não gerar os benefícios desejados. No artigo o autor descreve cenários muito comuns de arquiteturas para ambientes distribuídos, sendo a primeira o particionamento de dados para assegurar maior escalabilidade e a segunda a utilização de células para isolar ou reduzir o bast radius em caso de indisponibilidade dos serviços. Em ambos os casos as técnicas de circuit breaker teriam como consequência mais prejuízo do que benefício dada a impossibilidade de determinar a probabilidade de uma determinada solicitação de clientes ser atendida com sucesso ou não.
    
Existem alternativas que podem tornar o uso de circuit breakers mais efetivos mas elas ainda parecem desnecessariamente complexas para implementação em escala. As opinões do Marc Brooker nesse artigo são controversas e muitos podem não concordar. No entanto, todos que já estivem envolvidos no design e operação e sistemas distribuídos complexos de alto volume devem concordar que elas fazem muito sentido.
    
O que você acha?"