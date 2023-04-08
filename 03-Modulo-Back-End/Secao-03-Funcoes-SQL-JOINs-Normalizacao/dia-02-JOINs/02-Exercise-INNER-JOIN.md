# Exercício INNER JOIN

  
  

Vamos ver agora alguns desafios para consolidar esse conhecimento sobre o INNER JOIN, utilizando o banco de dados sakila

  

1.  Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
    

  

![](https://lh6.googleusercontent.com/KQjGcprdzOIyCsdo0_poQsqBCF6lXCANAN1X3zP_s0cThfAyhLREWhxS4RzLrrurDrOp_jP5MgENidM-ImYk3u_aqRNteN5kHq3jX6OsbMzSqcPjX2IGE_HzCRoBNLGckLOXZtqXbesBNGDhrfSXemw)

![](https://lh6.googleusercontent.com/6xnwWiGxEdu_caWV4osXJdahg_CRyrYs-2f5L_JARe5ZXE570ksW9r300fnxW-FqdewRJwbEX4HNmHtKosw1o16ebxwniQybK1PvgBfsHR2n623ukcxvAm6rSCTn5mKRT_Yr1r2ZrxSBYAK7_vY6R44)

  
  

2.  Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
    

  

![](https://lh6.googleusercontent.com/6l5UQO0AD2kLQwv5-DSRuxwwoLs1d4Qls1HNH5ac0EIxj5UFQDBGGkNxhoaYq0wQylku9ASzy3FKxbjRdHBbueeZXBHhy8I87IcWwEuLZ2Lx-sg8SJdCe-Euo5Co7fAI0H8LzI69trBkspQEycFuex4)

![](https://lh6.googleusercontent.com/jIMHIXkCu3cVD9o4-wLhoED7TbuJGNNjux3zxm3j_PPsLqJN3JYbOx1LKryP2imGZQ9oxmhQzG7y5e1kZlYK31jvzaWVHYrKf14qKUd1QkklKTiUhCRSs8ThFdbbRqKiwv7wTn9lnc-IbE98up4fK5E)

  
  

3.  Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
    

  

![](https://lh4.googleusercontent.com/szTUSUPf1S3mW6-B0XFXkmFUOXzQh9jyfEOIbh43S2sWOlrBaT_DdMeDU45NAWVci5KM2b1_W_0nr1GpzFLTv80P4SrCNQ7C1wYnqT0JnEkADiv0py3fKiNwVjQV0eQE3B6Bc71oVjzjWpsBceyTO1M)

  

![](https://lh5.googleusercontent.com/Rkqq4s1LraqK-dhCJjBc2MCpBYqNWYJFy5UzLpuytaXJHRKSf5GcF7PoJrEzhoUoT2JatyIUg5nSu1uCPiDH4TEqAuO8GWUmyceY3mkcVJsBjlM1uTTTtOx0GOwnzCmUj_i3tEtGw8em_DusuZauySM)

  
  
  

4.  Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm “rene” em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
    

  

![](https://lh6.googleusercontent.com/oRhG5SeG18ftTraUbu0JIz6VO-dvhQpIiWbyqKeg0erS4ZzDxz5iKzffWz8AyG0jtoBH1HIkMPtH1wrxXsRKutC7-bplba_IaQbH1fHupebAWFrCc7SvMP56bx7OMnTuiZHIv1TsCkR7urff7kJDE9s)

![](https://lh3.googleusercontent.com/k18RZ3YGefRyS2IbfsMOxknGCyKZ5C6gBqXH1WHFAMCBjfsL_eCiHzNTfX_vJLJabtZpJNCNAGKp5pWw4C76r2x7OOdKs8Hl-thZgpWh2R7-b43q30e7CB7QMeqfvOCCl_h9-QYHOpGhDOP_0BJvStg)

  
  

5.  Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado. Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas nas tabelas customer e rental.
    

  

  

![](https://lh3.googleusercontent.com/HhSpHK6WDq_m4rZnhMhYc63mWx6iTPfJbXBNUDlcZPozBAvG3t-PUqEdE9i7N0T7YFYFuGMgp_kEU2Q4TJkyLDlRFxwWlRN6W9llKtshHdW-sJbCEN1KBcrHEMxnNT1p9xJYRDS14GBIF5P9iq13M4g)

  

![](https://lh6.googleusercontent.com/wb9V7DpHYkWLw8bwKI1jUn2r4NwYq61FYmGv_6qwh-V7lw3vGshc6ZTljAOs9ltlkLsMK8oanUo76KQD0b6fjCBgF4iQEZS6UZI9QrDScXU_RyHKsUMC3UZn6t0DpOoWqOmvgwW8gLYtmgiP-KXtX08)

  
  
  
  

6.  Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
    

  

![](https://lh5.googleusercontent.com/vo6G-30OiVUOL7ZtxKWMG0OUpqEhBJEcIGcb-svUv6W48S06DGX2Xar4E2Vr97-3qNO9X64ypT1HtsLP30HaLBRZDRpvtOaIoIfiVSrD28TerWDeNFJwJpFq303w0iN2dHWiKwNUqB28T3Fo0GNZUVA)

  

![](https://lh5.googleusercontent.com/ZKtFLBIk3NazlW8UAek7X69ZZoIKRT4PS-tMTCgvouB5_hwxH7KZnvL9tq4vAHB_noYIgTbLmzEwbywqbZYKGHml66pRMYcw-5itZ972RJGsCSFrJ7_pRFrzjEE5h3lfs0a146M-A9lndolE7KMQh_8)

  
  
  
  

7.  Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
    

  
  

![](https://lh5.googleusercontent.com/Ksrk0aWQRtZAXfuR279ofPyrybgirOL_BPy6NU7oELJKT3iqWs6e8gNBO-HreuOMqj-vT4iBtrehVOQpO_n3UzH1cWq-nGiqC1eeR5hiyaG8WT_6g1urLsVyha-JfCcAPMTYsfEZiMPiJy-G6Y2H0DQ)

  

![](https://lh6.googleusercontent.com/-1-4NimuBT2J1nSO1l9U-eEm1OI9WVHK6-tQEYXrdLVFiNgXr_q-0ZfSedzwN382KSoKPb5XigNOqa6_1mnITfAz8FKlPx9YMg3ZARyqSXlBHRCkoVshLh67F-7TJXzTBNsgBch6U7jaqkGhmMvy_Cs)