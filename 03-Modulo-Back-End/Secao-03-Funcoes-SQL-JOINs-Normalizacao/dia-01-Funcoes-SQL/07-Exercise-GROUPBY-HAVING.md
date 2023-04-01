# Exercício GROUP BY

  

1.  Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
    

![](https://lh3.googleusercontent.com/S3sFK4nWEzjnZi0B1bCZSAMm0Jmkry3oVQYmQvxsIo06dNXtGchYvoMTVB4tzcryy-qJ2eNWyiu7rBS7vEjSu5MlcZrrk2VcfW-BKO--FOZlvqRO2ss0hzaMEfu8FIcE1AT6j6B_wQ9PAfC5SIarCHI)

![](https://lh5.googleusercontent.com/8ZqOMyEt-C6E4AB0vU4znSK7kfJL8rVIA5fqIOJwDhx9JjhsCbsBGXo-ri_VsUvlTiXfqTunTHYGar6bamnOGofyNYp5PjsW0LlwnzRvzw-sLkHiBbQdjjHf9x6-E0HJHVKZJRDg5D-BzfqzYlt5Scg)

  
  

2.  Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
    

  

![](https://lh5.googleusercontent.com/Iplb6ZOf9aLqzn6strGq7yb6sE165dLEYftdKXMi6kuHzCVj-HQ28sMmm72KkDdpIf0P_QbgupKYioft9qAQjpf3ZqhHh9XkeYUHWBYivQUMGbgRjRxJhnht97SAIRrtJbS_ZL7RoOXshTyL8NHSvSI)

![](https://lh5.googleusercontent.com/vBgIYcHsqI24lk4wfCiegSaDfftAzEulu4XF6oJhYJktwBzljCIeBH9GHg7CAvaM91U_lRwJxeLLrnCFmkhskg1eobSpzjb_NYZjwfRs_-gopByBIMYRDiTbDJ2qOiw7HOwzCV2KO90tgmNDqvZWOM0)

  
  

3.  Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
    

  

![](https://lh6.googleusercontent.com/iF1S1tFVuehqfIm0A85eCSbrkvVjDEcodpaDxdSK9YfzsdD5O7qfdc7SB0n38F_5do4o0_0ClEFzvC9N1S3PFZCEb9PDIK-wLsODYjmF8zw2UxvCX06ExKifADORQgSWFp7EX2ijajwrP7gfYPHJcgo)

  
  

4.  Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
    

  

![](https://lh4.googleusercontent.com/BVHdarAhYvgT4-c0E7Ab1F4o-eXwk8TI5ufNp9n4qIfYHhatf3iN-jortesBmSzu0X6bh7ZhhjGu2AHUqGCvamhjZx8QmXMVdY4tVyIwgN4xLb_HJOv4v4SjRTzTO-wkXYzTGG9U0IixjgO3J48ZJic)

![](https://lh6.googleusercontent.com/1EncARBSiTebaq4c81yw-sOpKtcCft_HkTMibN6dm1ewQVvXHYWsd8oy6qgYVyeTZ1R7xEFX-wPR4CQUbv2lYYAZ4ejPt_Zys_cpqTeTwOnQRI28WnTeoKld1TZ4zGUQ6GUPFqGObAa7b3xxucx1JMQ)

  
  
  
  

# Exercício GROUP BY COM HAVING

  

1.  Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
    

  

![](https://lh3.googleusercontent.com/bw_KPCM8If6N_NhlysRwuJp0DVGvDVLXUqV-YOM8A1jMntahWTv-ThD17DaURGOQ_s_rIGkSCC_2gLkzbyej7aAkqr3_0PFFz0emzBsjS4N9F1FZSL1mD48zqep2p9KyamKxA109b-T7d9UtUc9IiAY)

  

![](https://lh3.googleusercontent.com/Cj9Me6vJYWiAIu1dxXHIHL9U_n6TbxkMCo3Ccy-tPpAi6xCTT9Vn0gxbZrx1qkYoPGvOR7HtOH0acJSJ4ToviNsmHWdanMItdf-O2v2GQGEDJSVaxA3EqONTEZsh8350WKbWuW7PhJk0QJtO4LabTL0)

![](https://lh6.googleusercontent.com/RUYQEqt1N8Tct_voDzj_vYS52hm6_4gndIs-1m6mh79Dc4tHjq2qBv-FL7DTuE23Vj9ZKfTjVGRlyRtQGsPnoMWZvtYEtjOvdGtFvJqwpuQIiWJEck0JY0A7uQd39vN9ixRQbPap5ViBJwaZuCPv_eA)

  
  
  

2.  Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
    

  

![](https://lh5.googleusercontent.com/troP-Gc6UK0Dnr1Wbff5NNDxJIQ2HbCFASY9q8EKs0Lkc-hskJXA3X3IUrTZSzJwdXQ9cEyhmefq-FGu1GwhqstGdsi6BifvkCAaHcBlADWkES5qLgmUSGtIvYCjUAeVun52tEHeYumKA3GrPMP_hv0)

  

![](https://lh3.googleusercontent.com/gw2It_ACBBfZHtFf2Z20FVhAhIfmFtiPmHRwEu8xgxHuFAZGYiMzeB9EHg_IgcVfLWjGaLI9toqOLN_tJUQo1yrKJS98U7eYbWIxAeWaJsM_VwmZ1a7hvaXeYPG66PV2IjA4AA9W0x7MSWEAP1KFPQ)

  

![](https://lh6.googleusercontent.com/4cMTd_LX1ly006CFQpw8wuAouR1BxS0umjetHYqqbjjEhuu6dLA0T9KRIOX27DxVNkUySDq6D83E5GW-Ak7VVXch4etMpmrxAOkt18r_P6xXJki5t5rxP6nVuWPpJGIcVTIK2fyCvROG4iUaI1bwfA)