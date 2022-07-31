---
layout: post 
title:  "3 erros que cometi no início de um incidente (e como evitá-los)"
date:   2022-07-31 08:00:00 -0300 --->
published: true
tag: "Edição #21 - 01.09.2022"
headline: "3 erros que cometi no início de um incidente (e como evitá-los)"
highlight_title: "3 mistakes I’ve made at the beginning of an incident (and how not to make them)"
highlight_url: "https://firehydrant.com/blog/3-mistakes-ive-made-at-the-beginning-of-an-incident-and-how-not-to-make-them/"
highlight_autor: "Robert Ross"
image: /images/incident_mistake_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "http://linkedin.com/in/rcsousa1/"
---
A resposta de incidentes é, como todos sabemos, um processo extremamente estressante e que testa todos os aspectos da nossa capacidade de responder de forma coerente e organizada aos problemas que surgem de forma cada vez mais inusitada na medida em que o incidente se desenrola.

O artigo apresenta 3 elementos que, na experiência do autor, são fundamentais para evitar os erros mais comuns durante o processo de resposta de incidentes e que, se bem endereçados, podem otimizar grandemente essa capacidade nas organizações que enfrentam esse desafio, ou seja, todas 😄 !

### Erro1 - A falta de um plano

Pode parecer óbvio mas a falta de um plano bem estruturado e bem documentado do que deve ser feito, quem é responsável por cada atividade, quem é o comandante do incidente, quem deve ser comunicado, e quais informações são relevantes para que se chegue a solução, ainda é a principal razão pela qual o MTTR dos incidentes se "arrastam" além do necessário. Ter um plano estruturado com papeis e responsabilidades, assim como um plano de comunicação adequado capaz de envolver as pessoas corretas, assegurar que elas tenham o contexto correto, e atribuir atividades exequíveis e claras, é o primeiro passo para otimizar a resposta de incidentes. Caso contrário seremos todos um exército de pessoas muito bem intencionadas, pisando umas nos pés das outras, tentando de forma muito ineficiente achar a causa raiz.

Inevitavelmente vamos encontrá-las, mas o tempo estará muito aquém do desejado ou do possível. Afinal até um relógio quebrado (analógico) estará certo duas vezes ao dia.

### Erro2 - Não ser pronto para produção

É curioso como empilhamos tecnologias e serviços de tecnologia cada vez mais complexos e sempre esperamos que tudo dê certo. Gerenciar um sistema em produção requer assegurar esse sistema esteja pronto para produção e que todos suas dependências também estejam. De que adianta ter um sistema de produção que implementa **continuous deploy** com uma infraestrutura imutável se os componentes que compõem o **pipeline** de entrega de software não tiverem o mesmo tratamento. Imagine se encontrar as 3h da madrugada com um sistema de produção com problema,  e quando você sabe que  precisa promover uma mudança no repositório de configuração para corrigi-lo, também descobre que o componente responsável por mover a alteração entre os estágios está fora para uma manutenção programada durante todo fim de semana?

É importante que assegurar que ser **production ready** não tem a ver apenas com a infraestrutura de produção. Ser **production ready** significa observar infra, pessoas e processos , e garantir que todos estejam alinhados para garantir o funcionamento adequado dos sistemas, inclusive quando o inesperado ocorre.

### Erro 3 - Cair no túnel cognitivo

Esse é um erro muito comum e talvez seja o mais complexo de lidar. Todos temos a tendência de assumir que as coisas que deram certo no passado irão dar certo no futuro. Nosso processo de diagnóstico muitas vezes é negativamente afetado por esse comportamento e precisamos ficar atentos aos sinais que podemos ser alvos dessa armadilha.

O exemplo utilizado pelo autor é bastante ilustrativo e bem comum para muitas das organizações que conhecemos. É muito comum definir períodos de **freeze** durante datas importantes para reduzir a variabilidade dos ambientes e reduzir o potencial de incidentes não planejados introduzidos por mudanças. Acho que esse técnica é bem coerente. No entanto, imagine se para uma data aplicação, o fluxo semanal de **deploy** de uma nova release for importante para resetar a utilização de memória (não conhecida) nos servidores que são alvo de um **memory leak**. O que acontece se evitarmos os deploys durante o freeze? Certamente seremos afetados pela exaustão de memória.

A maioria das organizações sequer olharia para esse fenômeno durante o freeze por assumir que se nada mudou é pouco provável que o problema esteja relacionado a aplicação. É importante durante a resposta dos incidentes refletir e determinar quando fazer um **zoom out** e aumentar o escopo dos prováveis causadores. As vezes perdemos um tempo precioso insistindo em investigar coisas que foram causadores de problemas no passado simplesmente por assumir que elas se repetirão no futuro. As vezes é o caso, mas nem sempre 😉.

Confiram o artigo na integra!