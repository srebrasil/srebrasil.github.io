---
layout: post 
title:  "Observability e o poder de fazer perguntas"
date:   2022-04-17 08:00:00 -0300
published: true
tag: "Edição #6 - 18.04.2022"
headline: "Observability e o poder de fazer perguntas"
highlight_title: "The power of asking questions"
highlight_url: "https://www.honeycomb.io/blog/observability-power-of-asking-questions/"
highlight_autor: "Vlad Ionescu"
image: /images/ask_guide.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "http://www.linkedin.com/in/rcsousa1"
---
O artigo em questão, apesar de muitas vezes utilizar uma linguagem que enaltece a solução da empresa Honeycomb (que de fato é muito interessante), vale a leitura. O que mais chamou minha atenção, e motivo pelo qual recomendo a análise, é a história de como o autor fez o benchmark de performance para containers Windows na AWS e como, através da utilização dos campos disponíveis nos logs enviados para a solução da Honeycomb, ele conseguiu obter insights importantes que permitiram que ele sugerisse otimização na estrutura do serviço.
    
O caso apresentado confirma alguns aspectos muito importantes da construção de observabilidade nos sistemas. Ter logs com alta cardinalidade é fundamental para que possamos responder as perguntas que ainda não conseguimos formular quando desenhamos os experimentos (no caso em questão o benchmark).
    
Logs, Métricas e traces são pilares importantes para construção de observabilidade. Contudo, não devemos esquecer que a razão pela qual precisamos construir essas capacidades nos nossos sistemas. As interações entre seus vários atores que compõem os sistemas (tecnologias e humanos) tornam-se a cada dia mais complexos. Para que tenhamos sucesso na gestão desse tipo de ambiente precisaremos desenvolver a capacidade de obter respostas para as perguntas que ainda não conseguimos formular.