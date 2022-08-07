---
layout: post 
title:  "12 maneiras de melhorar seu monolito antes de fazer a transição para microsserviços"
date:   2022-08-07 08:00:00 -0300 --->
published: true
tag: "Edição #22 - 08.08.2022"
headline: "12 maneiras de melhorar seu monolito antes de fazer a transição para microsserviços"
highlight_title: "12 Ways to Improve Your Monolith Before Transitioning to Microservices"
highlight_url: "https://semaphoreci.com/blog/monolith-microservices"
highlight_autor: "Tomas Fernandez, Dan Ackerson"
image: /images/monolith_post.png
comentado_por: "Tito Garrido"
comentado_por_linkedin: "http://linkedin.com/in/titogarrido/"
---
Chega a hora a sua equipe decide que é o momento de se livrar daquele monolito. O monolito cresceu tanto que você está gastando mais esforço para mantê-lo do que para criar novos recursos. Ao invés de descarta-lo e começar uma outra implementação, o artigo trás 12 dicas para que a transição de um monolito para microsserviços seja a mais tranquila possível.

**1. Certifique-se de saber no que está se metendo:** Comece aprendendo tudo que puder sobre arquitetura de microsserviços. Reescrever uma aplicação não é fácil, e movendo de monolito para microsserviço, você não está apenas mudando como você vai codifica-la; você está mudando todo o modelo de operação da empresa. Além de ter aprender tecnologias novas e mais complexas, ajustar a cultura e reorganizar as pessoas em equipes menores e multifuncionais é imprescindível. 

**2. Crie um plano:** O monolito deve continuar operacional enquanto a transição é executada, logo é preciso muita preparação. Tickets podem ser utilizados para rastrear o progresso da migração, provendo transparência para o negócio enquanto o time técnico executa cada mudança. O uso de Domain-Driven Desing (DDD) é recomendado no caso de monolitos complexos.

**3. Coloque tudo em um monorepo:** Utilize o mesmo repositório para o monolito e seus microsserviços durante a migração. Isso simplifica o rastreamento de mudanças e ter tudo em um mesmo lugar ajuda a recuperar de falhas mais rapidamente.

**4. Use um pipeline de CI compartilhado:** Durante o desenvolvimento, você não apenas enviará constantemente novos microsserviços, mas também reimplantará o monólito. Um pipeline de CI/CD deve ser implementado para testes e deploys automáticos.

**5. Certifique-se de ter testes suficientes:** Testes automatizados dão a confiança para enviar continuamente atualizações do monólito. Um bom começo é o uso da pirâmide de teste, onde existe uma boa quantidade de testes unitários, alguns testes de integração e uns poucos testes end to end.

**6. Instale um API Gateway ou um proxy reverso HTTP:** À medida que os microsserviços são implantados, você precisa segregar o tráfego de entrada. Os recursos migrados são fornecidos pelos novos serviços, enquanto a funcionalidade ainda não reimplementada é atendida pelo monolito.

**7. Considere o padrão monolith-in-a-box:** Essa dica se aplica somente se há o plano de utilizar containers ou Kubernetes para os microsserviços. O padrão monolith-in-a-box consiste em executar o monólito dentro de um contêiner como o Docker. Nesse caso, ele é usado para homogeneizar a infraestrutura. Se seu time nunca trabalhou com containers antes é uma oportunidade de se familiarizar com a tecnologia e ficar um passo mais perto de aprender sobre Kubernetes no futuro.

**8. Se prepare para mudanças:** É um novo paradigma, então prepare tempo suficiente para que todos tenham a mentalidade adequada, aprimorem as habilidades e aprendam com os erros sem a pressão de um prazo.  Comece com algo fácil com poucas dependências, por exemplo construir um microsserviço de autenticação e rotear o login para o monolito.

**9. Use feature flags:** Você pode usar feature flags para habilitar ou desabilitar partes do monolito a medida que elas forem migradas, experimentar configurações alternativas ou fazer teste A/B. Feature flag nos permite habilitar pedaços de código em produção e desabilita-lo a qualquer momento, podemos desacoplar releases do processo comum de deploy. Isso dá aos desenvolvedores um enorme grau de flexibilidade e controle.

**10. Modularize o monolito:** O monólito modular é um padrão de desenvolvimento de software que consiste em módulos empilhados verticalmente que são independentes e intercambiáveis. O oposto de um monólito modular é o clássico monólito N-tier, ou em camadas. Monólitos em camadas são difíceis de separar – o código tende a ter muitas dependências (às vezes circulares), tornando as mudanças difíceis de implementar.

**11. Desacople os dados:** Cada microsserviço deve ter um banco de dados privado e independente. A grande vantagem da implementação de microsserviços é a habilidade de implementar qualquer microsserviço a qualquer momento com pouca ou nenhuma coordenação com outros microsserviços. No começo é chocante ter que desnormalizar o banco de dados do monolito criando banco de dados menores (e muitas vezes redundantes). Mas a vantagem de ter esses dados de forma local é o que vai habilitar os microsserviços a serem autônomos. Depois de desacoplar os dados o próximo desafio é manter os dados antigos e novos sincronizados enquanto a migração está em progresso. Alguns métodos envolvem o espelhamento de dados ou mudar o código de forma que as transações sejam escritas em ambas as bases de dados.

**12. Adicione observabilidade:** O novo sistema deve ser mais rápido, mais performático e mais escalável que o monolito, caso contrário por que ter tanto trabalho para mudar pra microsserviços? . E para comparar, nós precisamos de um baseline. Antes de começar a migração é muito importante ter logs e métricas disponíveis.

Lembre-se de iterar em pequenos incrementos, aproveite o CI/CD para garantir que o monólito esteja sendo testado para regressões e mantenha tudo em um repositório para que você sempre possa retroceder se algo der errado.

Boa sorte!