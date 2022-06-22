---
layout: post 
title:  "Seus sistemas de contingência realmente estão preparados para um desastre?"
date:   2022-04-10 08:00:00 -0300
published: true
tag: "Edição #5 - 11.04.2022"
headline: "Seus sistemas de contingência realmente estão preparados para um desastre?"
highlight_title: "How Disaster Ready are Your Backup Systems, Really?"
highlight_url: "https://www.blameless.com/sre/how-disaster-ready-are-your-backup-systems-really"
highlight_autor: "Emily Arnott"
image: /images/disaster_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "http://www.linkedin.com/in/rcsousa1"
---
A confiabilidade e resiliência dos sistemas estão fortemente relacionados com três pilares de sustentação. O primeiro e talvez mais comum nas rodas de conversa de SRE é a capacidade de responder aos incidentes com precisão e velocidade. O segundo por sua vez diz respeito a própria arquitetura dos sistemas e sobre a inexistência de pontos únicos de falha, pelo menos aqueles que conseguimos prever. O terceiro pilar é igualmente importante, porém é bem menos famoso ou discutindo exaustivamente, e trata-se da capacidade de restaurar os sistemas caso as coisas deem muito errado. O artigo em destaque aponta para a execução sistemática de simulações ou exercícios teóricos para tratar os eventos inimagináveis como a melhor medida para se preparar para uma eventual ocorrência. Segundo a autora,  as organizações são razoavelmente boas em executar esses exercícios para os problemas que eles conseguem imaginar, porém muito ruins em desenvolver rotinas e procedimentos para o impensável. 

Imagine que você sofreu um ataque de ransomware e perdeu acesso aos seus bancos de dados. Você certamente pensaria que o melhor curso de ação seria restaurar o backup e tudo ficará bem. E se o ataque também tiver afetado a plataforma de backup, impedindo que você execute as rotinas de restore? Você tem um plano de contingência ou backup do backup? Parece paranoico não? Mas refletir sobre esse tipo de cenário irá ajudar muito na construção de sistemas realmente confiáveis.