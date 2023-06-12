# Mudanças Realizadas 

## A nível de código:

- Conversão de commonJS para módulos, buscando melhor performance e legibilidade.

- Remoção completa do uso da palavra chave *var* por *let* e *const*, visto que a primeira sempre possui escopo global. 

- Utilização de métodos e callbacks como *find* e *splice* para simplificar iterações e aplicações repetidas de funções.

- Uso de igualdade estrita buscando segurança de tipos.

- Uso de deestruturação de objetos para extrair propriedades de forma mais legível.

- Tratamento dos casos inesperados em uma requisição, retornando os erros necessários nos casos adequados.

- Conversão das respostas dos endpoints para JSON, tornando o comportamento da aplicação mais próximo do que se esperaria de uma API.


## A nível de projeto:

- Criação de uma branch develop para desenvolvimento dos desafios.

- Abertura de uma issue para cada mudança substancial no código.

- Controle das atividades através do recurso *projects* do github.

- Referência à issue resolvida em cada commit.
