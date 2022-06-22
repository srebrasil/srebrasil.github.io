---
layout: post 
title:  "Por que você precisa da Engenharia do Caos mais do que nunca"
date:   2022-06-12 08:00:00 -0300 --->
published: true
tag: "Edição #14 - 13.06.2022"
headline: "Por que você precisa da Engenharia do Caos mais do que nunca"
highlight_title: "Why You Need Chaos Engineering Now More Than Ever"
highlight_url: "https://blog.container-solutions.com/why-you-need-chaos-engineering"
highlight_autor: "Jennifer Riggins"
image: /images/Chaos_post.png
comentado_por: "Tito Garrido"
comentado_por_linkedin: "https://www.linkedin.com/in/titogarrido"
---
A urgência da pandemia superou o medo da adoção da metodologia do caos. Os picos de tráfego e usuário que as organizações viveram em 2020 fizeram com que a engenharia do caos se tornasse essencial.

“Chaos Monkey” (ou macacos do caos em tradução livre) representa a ideia de macacos loucos jogando coisas e puxando cabos dentro do seu sistema, com a missão de causar resultados imprevisíveis. É com essa ideia que o termo engenharia do caos (chaos engineering) é cunhado pela Netflix.

Como Bryant Bütow cita (em tradução livre), “A engenharia do caos é um experimento cuidadoso e planejado, projetado para revelar fraquezas em nossos sistemas”. O caos pode começar com perguntas como: “E se o servidor X desligar? E se o nosso tráfego aumentar em 300%? E se a conexão entre a nossa aplicação e a base de dados cair? E o mais importante, o monitoramento e alertas vão funcionar durante esses acontecimentos?”

Existe um aspecto cultural sobre a engenharia do caos que deve ser enfatizada. Engenharia do caos não é quebrar as coisas de propósito, a engenharia do caos não é caótica, ela é sistemática. Ainda há uma impressão de que a engenharia do caos vai causar problemas inesperados no ambiente de produção fazendo com que os times fiquem de guarda baixa e “dedos sejam apontados”, quando na verdade experimentos vão ser realizados de forma controlada, com planejamento para mitigar qualquer dano inesperado, não necessariamente em produção, e resultados serão obtidos junto com os times responsáveis. Como resultado, um plano de como mitigar os problemas encontrados deve ser criado e disseminar essa informação: o que causou, e como foi remediado.

O artigo também aborda dados do “State of Chaos Engineering report” feito em 2021, com dados importantes de companhias que estão começando ou já implantaram a engenharia do caos:

*	Organizações que rodam a engenharia do caos com frequência tem mais de 99.9% de disponibilidade nos seus sistemas
*	23% das organizações têm um MTTR (mean time to resolution) abaixo de 1h
*	60% dos que responderam que já fizeram pelo menos um experimento de engenharia do caos
*	34% das organizações rodam os experimentos em produção