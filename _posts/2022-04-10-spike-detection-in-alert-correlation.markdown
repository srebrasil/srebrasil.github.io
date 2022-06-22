---
layout: post 
title:  "Detecção de falso positivo na geração de alertas em produção"
date:   2022-04-10 08:00:00 -0300
published: true
tag: "Edição #5 - 11.04.2022"
headline: "Detecção de falso positivo na geração de alertas em produção"
highlight_title: "Spike detection in Alert Correlation"
highlight_url: "https://engineering.linkedin.com/blog/2021/spike-detection-in-alert-correlation"
highlight_autor: "Nishant Singh"
image: /images/stats_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "http://www.linkedin.com/in/rcsousa1"
---
Antes de tudo é importante destacar que esse não é um artigo de leitura fácil e que requer um certo grau de conhecimento de estatística para que se possa compreender alguns dos conceitos. Apesar disso vale muito a pena a leitura ainda que seja um sobrevoo no conceito fundamental. O autor parte do reconhecimento que em sistemas complexos, e que ficam cada vez mais complexos com o tempo, mesmo com a instrumentação das plataformas, da definição adequada das métricas, e do entendimento correto dos fluxos de interação dos usuários, ainda é muito desafiador entender a causa raiz, ou utilizando uma linguagem mais adequada, os fatores que mais influenciaram ou contribuíram para o incidente. Tudo isso afeta a capacidade de resposta dos times e certamente tem efeitos adversos na moral e na saúde mental dos times.

O caso compartilhado pelo LinkedIn é muito inspirador pois retrata como eles, de forma objetiva e sem implementar soluções muito complexas, conseguiram fazer correlação entre anomalias (picos) e o mapa de dependência dos serviços, e com isso conseguiram fazer scoring de eventos, e gerar alertas sobre a provável causa raiz, e quão certos eles estavam que uma dada anomalia seria o principal causador do impacto adverso nos serviços (upstrem e downstream).
    
De modo geral o caso é muito bom e demonstra que o investimento constante da instrumentação das plataformas trás retornos no longo prazo. A solução em si é simples, mas não poderia ter sido implementada caso não existisse o mapa de dependências, métricas definidas e propagadas na cadeia de valor de serviços,  e também se não existissem integrações com veículos de colaboração como slack, etc. 
    
Fica de lição para todos nós: O investimento é contínuo e o retorno não acontece com apenas um projeto ou iniciativa.