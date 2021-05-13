# Teste Frontend Angular Performa

- Para a realização deste teste criamos uma API mocada.
- Os detalhes do funcionamento estão no diretório backend-mock.
- Logs das requests mocadas são exibidos no console.

- Endereço Base da Api: http://bankito.com.br
- Os dados da api são armazenado no localstorage
- Quando a aplicação abre pela primeira vez é realizado um seed de dados iniciais

## Endpoints:

#### POST /login
```ts
  // recebe pelo body da request
  {
    cpf: string;
    passowrd: string;
  }

  // em caso de sucesso responde com um User[]
  // em caso de falha na autenticação responde com um 401
```

---

#### GET /getUserById
```ts
  // recebe por query parameter
  {
    userId: string;
  }

  // em caso de sucesso responde com um User
```

---

#### GET /getUserByAccount
```ts
  // recebe por query parameter
  {
    accountId: string;
  }

  // em caso de sucesso responde com um User
```

---


#### GET /getUserByCpf
```ts
  // recebe por query parameter
  {
    cpf: string;
  }

  // em caso de sucesso responde com um User
```

---

#### PUT /updateUser
```ts
  // recebe no body User
```

---

#### GET /getTransactionsHistoryByUser
```ts
  // recebe no body
  {
    userId: string;
    interval?: 'currentMonth' | 'all';
  }

  // em caso de sucesso responde com um Transaction[]
```

---

#### PUT /addTransaction
```ts
  // recebe por query parameter
  {
    userId: string; // usuario que realiza a transação
    value: number; // valor da transação
    account: string; // conta que recebe a transação
  }
```

---

#### GET /getBalance
```ts
  // recebe por query parameter
  {
    userId: string;
    interval?: 'currentMonth' | 'all';
  }

  // em caso de sucesso responde com um Balance
```

## Usuários mocados

```ts
    {
      id: '1',
      account: '206029-6',
      cpf: '97182610019',
      name: 'Levi José Nicolas das Neves',
      password: '123456',
      photo: '/assets/users/206029-6'
    },
    {
      id: '2',
      account: '1922831-2',
      cpf: '92157861394',
      name: 'Marina Luiza Hadassa Bernardes',
      password: '123456',
      photo: '/assets/users/1922831-2'
    },
    {
      id: '3',
      account: '07902079-3',
      cpf: '44671760550',
      name: 'Mirella Luana Alice Cavalcanti',
      password: '123456',
      photo: '/assets/users/07902079-3'
    }
```

## Models da API

```ts
  interface User {
    id: string;
    cpf: string;
    name: string;
    // numero da conta
    account: string;
    // senha
    password: string;
    // url da photo
    photo: string;
  }

  interface Transaction {
    id: string;
    // valor da transação
    value: number;
    // data da transação
    date: string;
    // conta que transferiu o valor
    fromAccount: string;
    // conta que recebeu o valor
    toAccount: string;
  }

  interface Balance {
    // entradas
    in: number;
    // saidas
    out: number;
    // valor total
    total: number;
  }
```
