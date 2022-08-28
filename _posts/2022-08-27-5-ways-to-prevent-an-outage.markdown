---
layout: post 
title:  "5 maneiras de prevenir um outage"
date:   2022-08-27 08:00:00 -0300 --->
published: true
tag: "Edição #25 - 29.08.2022"
headline: "5 maneiras de prevenir um outage"
highlight_title: "5 Ways to Prevent an Outage"
highlight_url: "https://devops.com/5-ways-to-prevent-an-outage/"
highlight_autor: "Ashley Stirrup"
image: /images/prevent_outage_post.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "https://www.linkedin.com/in/rcsousa1"
---
Todos sabemos que outages, além de causar uma grande dor de cabeça, estão fortemente (e negativamente) correlacionados com a performance dos  negócios e da percepção que os clientes tem acerca dos produtos e serviços oferecidos pelas empresas. O artigo em destaque se propõe a apresentar 5 maneiras de prevenir outages, ou ao menos reduzir seus impactos, através da investigação de uma série e eventos passados que não obstante permitiram que as organizações evoluíssem e aprendessem como aprimorar seus sistemas e rotinas.

Quais são as 5 formas de evitar outages segundo o autor:

1. Sempre considera o raio de impacto de um outage e planeje para o pior. 

É fundamental conhecer a arquitetura dos sistemas e ter uma visão coerente e atualizada sobre as dependência entre seus diversos componentes. Somente assim poderemos saber a possível extensão do impacto de um outage, quem e quantas pessoas serão afetadas, qual o impacto para os negócios e quão adequadas as medidas existentes são para isolar e remediar os sistemas.

💡 **Esperança não é uma estratégia: Entenda o contexto e se prepare para o pior!**

2. Suavize e otimize as bordas. 

Pode parecer estranho mas faz bastante sentido na medida em que percebemos que os sistemas estão cada vez mais distribuídos e que muito da lógica e do processamento está de deslocando para a borda. Qual o problema? O paradigma de cloud distribuída vs cloud centralizada ainda é relativamente novo e os sistemas centrais são muitas vezes mais testados e maduros do que as bordas. 

💡 Prestem atenção nas bordas porque ainda é difícil prever como uma indisponibilidade fora do perímetro do datacenter pode ser propagado para o core.

3. Pense em contingências. 

Um sistema verdadeiramente resiliente não tem pontos únicos de falha (pelo menos não conhecidos) e não cai simplesmente porque um dos seus pilares cedeu. O autor descreve sistemas resilientes como sistemas com defesas e com profundidade. Algumas camadas podem falhar mas o sistema deve ter defesas capazes de isolar falhas e permanecer operacional. O design dos sistemas devem considerar a maior quantidade possível de eventos correlacionados com os cenários de falha e testa-los em escala.

💡 Pense no design das contingências do sistema como uma escada rolante e não como um elevador. Caso ocorra um outage no elevador todos ficam presos na cabine até que se consiga restaurar o defeito. Na escada rolante todos podem continuar seus percursos, mesmo que de forma inconveniente e menos eficiente.

4. Acompanhe o ciclo de expiração dos certificados digitais.

Esse é auto-explicativo e mais comum do que imaginamos ou gostaríamos. Certificados digitais são recursos fundamentais para manutenção de uma postura adequada de segurança e precisam se adequadamente gerenciados. A utilização de um certificado vencido pode significar uma exposição de segurança ou ainda a indisponibilidade completa de serviços críticos dos clientes finais.

💡 Você faz a gestão dos certificados em uso nos seus load balancers? A expiração de um certificado TLS em um componente tão crítico pode resultar em um outage de grande magnitude e impacto.

5. Invista na redução de desperdício.

Desenvolvimento e adaptação de sistemas é uma atividade sem fim. Invista tempo e recursos na eliminação de desperdícios que melhore a vida dos times. Isso será vital para sustentabilidade dos sistemas e irá assegurar que as pessoas tenham capacidade de trabalhar em iniciativas que promovam melhoria substancial da confiabilidade dos sistemas e não passem todo tempo apagando incêndios.

💡 Lembram que uma das práticas essenciais do SRE é reduzir o toil a menos de 50%?

Importante lembrar que essas não são as únicas 5 formas de evitar incidentes. Entretanto, requerem compromisso dos times na sua adoção. A implementação não é simples e os resultados não são imediatos.