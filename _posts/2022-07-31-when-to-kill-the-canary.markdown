---
layout: post 
title:  "Desafios não óbvios para adotar Canary Releases"
date:   2022-07-31 08:00:00 -0300 --->
published: true
tag: "Edição #21 - 01.09.2022"
headline: "Desafios não óbvios para adotar Canary Releases"
highlight_title: "When to kill the canary"
highlight_url: "https://blixhavn.dev/when-to-kill-the-canary/"
highlight_autor: "Øystein Blixhavn"
image: /images/canary_release_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "http://linkedin.com/in/rcsousa1/"
---
Modernizar ou desenvolver aplicações modernas, distribuídas, baseadas em microserviços, e sobre um stack de tecnologia atual como kubernetes, tem muitos desafios. Entretanto, também cria muitas oportunidades para inovar e otimizar a forma como desenvolvemos e implementamos software em produção. 

Como quase todos visualizam que, na medida em que evoluam em suas jornadas, conseguirão implementar código em produção várias vezes ao dia com qualidade, técnicas como canary release tornaram-se a resposta padrão para que times conseguissem automatizar a implementação em produção sem necessidade dos famosos e odiados CABs (Change Approval Boards). Ademais, se houvesse problema com o release, a técnica de canary release seria capaz de prevenir a propagação do problema e interromper o roll-out, permitindo que ações de roll-back ou de correção fossem executadas para preservar a experiência dos usuários / clientes.

Parece ótimo e na verdade é bem coerente. No entanto, na medida em que as empresas avançam, o que é foco do artigo em destaque, aprendem que não é tão fácil implementar essa técnica e que a decisão de quando "matar o canário" na verdade depende de um grande conjunto de variáveis dinâmicas e que tem efeitos diversos umas nas outras (sistemas complexos). A determinação de SLIs e a monitoração dos golden signals, elementos da cartilha SRE, certamente ajudam e são importantes, mas pouco se sabe sobre como a variação desses indicadores podem gerar alertas objetivos e que possam ser utilizados como instrumento para tomada de decisão para interromper ou deixar um roll-out prosseguir de forma automatizada.

O artigo destaca alguns exemplos importantes. Imagine que sua estratégia de monitoração inclua a observância do percentil 90 da taxa de erros para chamadas http em uma determinada API (HTTP 500):

- Quanto essa tava deve variar no percentil 90 para que se decida por puxar o plug e interromper o roll-out? 
- E se o problema que sirva como gatilho para o aumento na taxa de error somente ocorra durante horários de pico muito específicos em que seus usuários utilizem uma função específica que acessa essa API? 
- Mais complexo ainda: E se você tiver lançado uma sequência de releases com função desativadas (dark deploy) e o impacto somente seja revelado na medida em que a curva de adoção das novas funcionalidades ocorreram. 

Identificar esses problemas pode demorar semanas. Na verdade, é possível inclusive que só sejam identificados depois de alguns outros releases tenham sido lançados. Esse tema é muito complexo, e para o qual não existem resposta simples. O próprio autor inclusive lista alguns casos mas admite o próprio desconhecimento sobre como resolver essas questões. 

Eu tenho a sensação que será necessário ainda algum tempo para que possamos encontrar um equilíbrio adequado para adotar continuous deploy para sistemas críticos e que certamente canary release é uma alternativa promissora. No entanto, ela deve ser implementada em conjunto com outras técnicas como pair programing, chaos engineering, etc. 

Precisamos urgentemente encontrar formas de aprender sobre o comportamento dos nossos sistemas mais rápido do que nossos usuários. Talvez assim seja possível termos sistemas confiáveis 😄 

Confiram o artigo na integra!