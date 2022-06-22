---
layout: post 
title:  "Como publicamos em produção mais de 100 vezes por dia"
date:   2022-05-29 08:00:00 -0300
published: true
tag: "Edição #12 - 30.05.2022"
headline: "Como publicamos em produção mais de 100 vezes por dia"
highlight_title: "How we deploy to production over 100 times a day"
highlight_url: "https://monzo.com/blog/2022/05/16/how-we-deploy-to-production-over-100-times-a-day"
highlight_autor: "Will Sewell"
image: /images/deploy_production.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "https://www.linkedin.com/in/rcsousa1"
---
**Você sabia que mudanças maiores (change set) e menos frequentes estão inversamente correlacionadas com qualidade e performance de entrega?**
   
O artigo da Monzo apresenta alguns dados inspiradores. Primeiro eles confirmaram que através da redução da fricção no processo de desenvolvimento, gerenciamento de mudanças e publicação de novas funcionalidades em produção, conseguiram crescer o time em 60% e ainda assim aumentaram a quantidade de deployment por engenheiro com uma redução significativa na quantidade de incidentes e manutenção na quantidade de rollbacks. No artigo o autor afirma saber que essas métricas são proxy e é preciso atentar para não torna-las objetivo, evitando o a lei de Goodhart. Menor número de incidentes não significa maior valor para os clientes e quantidade de rollbacks também não é indicativo que os usuários tenham sido afetados pelas mudanças. 
   
Trata-se de um artigo de realmente merece leitura e reflexão atentas. Os princípios básicos de oferecer uma experiência simplificada para os desenvolvedores, oferecer alertas contextualizados para potenciais problemas, e o desenvolvimento de mecanismos que automatizem o processo de deployment foram apontados como os principais fatores que contribuíram para o sucesso do experimento. Ademais, ter uma cultura que seja dura com os problemas e não com as pessoas, que não reforce a lógica tradicional de encontrar culpados e a de investir muitos esforços na criação em gerenciamento da plataforma de deployment e na adoção de Microserviços que possam ser implementados de forma independente são as principais lições aprendidas no caso.
   
Um fator me chamou atenção em particular. Como parte da estratégia da empresa eles escolheram limitar a quantidade de opções de tecnologia oferecidas por domínio de negócios e entenderam que isso foi um fator importante para garantir um processo fluido. Entretanto, existem correntes de pensamento que indicam que ter mais opções aumenta inovação e a probabilidade de criar melhores soluções, outras acreditam que a entropia causada pela multiplicação de opções alternativas no inventário de TI cria complexidade desnecessária e inibe inovação e desacelera entrega.
   
**O que você acha?**"