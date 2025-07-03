# Configuração para Testar API de Produção

## Passo 1: Configurar o arquivo .env

Edite o arquivo `.env` e configure a URL da API:

```bash
# Para testar API de produção
VITE_API_BASE_URL=https://sua-api-producao.com

# Para API local (alternativa)
# VITE_API_BASE_URL=http://localhost:3000
```

## Passo 2: Testar localmente

Execute o projeto:

```bash
npm run dev
```

O sistema vai automaticamente:
- Usar a URL configurada em `VITE_API_BASE_URL`
- Se for uma URL externa, usar o proxy do Vite para evitar CORS
- Redirecionar `/api/*` para a URL configurada

## Passo 3: Testar funcionalidades

1. Acesse: http://localhost:5175
2. Teste o cadastro de usuário
3. Teste o login
4. Verifique se não há erros de CORS

## Passo 4: Preparar para Deploy

Quando estiver funcionando, você pode:

1. Fazer commit das alterações
2. Fazer push para o GitHub
3. Na Vercel, configurar a variável de ambiente:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://sua-api-producao.com`

## Como funciona:

- **Desenvolvimento**: Usa proxy do Vite (`/api/*` → `VITE_API_BASE_URL/*`)
- **Produção**: Usa URL direta (`VITE_API_BASE_URL/*`)

## Vantagens desta configuração:

✅ **Flexível**: Pode usar qualquer URL da API
✅ **Seguro**: URLs não ficam hardcoded no código
✅ **Portável**: Funciona em qualquer ambiente
✅ **Manutenível**: Fácil de mudar URLs sem alterar código 