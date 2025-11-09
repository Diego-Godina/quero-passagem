# Quero Passagem API (Back-end Laravel)

Este repositório contém o **back-end** da aplicação **Quero Passagem**, desenvolvido com o **framework Laravel 12**, servindo como **API RESTful** para o front-end em Vue 3.  
O objetivo é prover alguns endpoints seguros, performáticos e escaláveis que alimentam o SPA responsável pela interface do usuário.

---

## 🚀 Tecnologias e Dependências

O projeto utiliza o ecossistema Laravel mais recente, com autenticação básica para rotas que não necessitam de login e suporte para desenvolvimento moderno.

### **Dependências Principais**
- **PHP 8.2+** — Linguagem principal do projeto.
- **Laravel 12** — Framework robusto para construção de APIs e aplicações web modernas.
- **Laravel Tinker** — Console interativo REPL para manipulação e testes rápidos de código.

### **Dependências de Desenvolvimento**
- **FakerPHP** — Geração de dados falsos para testes e seeders.
- **Laravel Pail** — Ferramenta de log e monitoramento de eventos em tempo real.
- **Laravel Pint** — Formatador e padronizador de código PHP.
- **Laravel Sail** — Ambiente de desenvolvimento com Docker pronto para Laravel.
- **Mockery** — Mocking framework para testes automatizados.
- **Nunomaduro Collision** — Exibição elegante de erros no terminal.
- **PHPUnit** — Framework oficial de testes unitários do PHP.

---

## 🧩 Estrutura e Arquitetura

O projeto segue o padrão MVC (Model–View–Controller) do Laravel, adaptado para servir exclusivamente como **API**:

```
app/
 ├─ Enums/             # Utilizado para tipagem aprimorada
 ├─ Http/
 │   ├─ Controllers/   # Controladores da API
 │   ├─ Middleware/    # Filtros e autenticação de requisições
 │   ├─ Requests/      # Validações de entrada
 │   └─ Traits/        # Para reuso de métodos
 ├─ Interfaces/        # Para facilitar troca de fonte de dados no futuro
 ├─ Models/            # Modelos Eloquent (representação do banco)
 ├─ Providers/         # Provedores de serviços do Laravel
 ├─ Repositories/      # Onde contém a lógica de busca de dados
 └─ Services/          # Para conter regras de negócio na busca de dados das APIs externas
     └─ Validations/   # Contém as validações dos dados de retorno da API externa

routes/
 ├─ api.php            # Rotas da API RESTful
 └─ web.php            # Rotas web (geralmente desativadas nesta API)

database/
 ├─ migrations/        # Estrutura das tabelas
 ├─ seeders/           # Dados iniciais
 └─ factories/         # Geração de dados fake
```

---

## ⚙️ Configuração do Ambiente

### **Pré-requisitos**
- **PHP 8.2+**
- **Composer 2.7+**
- **MySQL / MariaDB / SQLite**
- (Opcional) **Docker** com **Laravel Sail**

### **Instalação**

```bash
git clone <URL_DO_REPOSITORIO>
cd quero-passagem-api
composer install
```

### **Configuração do ambiente (.env)**

Crie o arquivo `.env` com base no exemplo fornecido:

```bash
cp .env.example .env
```

Gere a chave da aplicação:

```bash
php artisan key:generate
```

Configure as variáveis de banco de dados no `.env`, por exemplo:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=quero_passagem
DB_USERNAME=root
DB_PASSWORD=secret
```

### **Rodar as migrações e seeds**

```bash
php artisan migrate --seed
```

---

## 🧪 Desenvolvimento e Execução

### **Servidor local**

```bash
php artisan serve
```

A API ficará disponível (por padrão) em `http://localhost:8000`.

### **Ambiente Docker (Laravel Sail)**

Se preferir rodar com Docker:

```bash
./vendor/bin/sail up -d
```

Depois acesse `http://localhost`.

---

## 🧠 Scripts Úteis

### **Configuração inicial completa**
```bash
composer run setup
```

### **Modo de desenvolvimento integrado**
Executa servidor, fila, logs e Vite simultaneamente:
```bash
composer run dev
```

### **Rodar testes**
```bash
composer run test
```

---

## 🌍 Implantação em outro ambiente

1. **Copie o projeto** para o servidor desejado.
2. **Instale as dependências PHP:**
   ```bash
   composer install --optimize-autoloader --no-dev
   ```
3. **Configure o .env** com as credenciais corretas.
4. **Execute as migrações:**
   ```bash
   php artisan migrate --force
   ```
5. **Ative o cache de configuração e rotas:**
   ```bash
   php artisan config:cache
   php artisan route:cache
   ```
6. **Inicie o servidor (ou configure com Nginx/Apache).**

---

© 2025 — Desenvolvido com ❤️ e Laravel.