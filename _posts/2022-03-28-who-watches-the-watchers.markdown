---
layout: post 
title:  "Quem monitora a monitoração?"
date:   2022-03-28 08:00:00 -0300
published: true
tag: "Edição #3 - 28.03.2022"
headline: "Quem monitora a monitoração?"
highlight_title: "Who watches the watchers?"
highlight_url: "https://engineering.nanit.com/who-watches-the-watchers-1608d29ac3a8"
highlight_autor: "Miedwar Meshbesher"
image: /images/watchers.png
comentado_por: "Ricardo Coelho de Sousa"
comentado_por_linkedin: "https://www.linkedin.com/in/rcsousa1/"
---
Todos sabemos da importância de ter sistemas observáveis e de implementar ferramentas para monitora-los de forma eficaz. Apesar de ser um assunto recorrente, estabelecer mecanismos para monitorar as ferramentas de monitoração é muitas vezes deixado em segundo plano e só lembrado quando somos vítimas de algum incidente grave que poderia ter sido evitado ou m entendido se a monitoração estivesse funcionando. Nesse artigo a autora presta um grande serviço ao oferecer não apenas uma solução simples utilizando algumas soluções AWS, como também disponibiliza receitas para que todos possam também implementa-la. Talvez o item de maior valor tenha sido a inversão da lógica tradicional de inspeção do ambiente (de fora para dentro) e a utilização da técnica do dead man switch em que a própria solução de monitoração informa uma função lambda sobre sua saúde e então, a partir da taxa de sucesso dessas sondas, é possível determinar se o ambiente está saudável ou se é necessário acionar alguém para corrigir qualquer eventual problema. A solução também resolve um problema recorrente em muitos lugares que é a geração de alertas para falhas temporárias de comunicação, um fator que pode contribuir para o burn-out dos times de suporte e operações.