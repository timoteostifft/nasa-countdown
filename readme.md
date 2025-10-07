# NASA Countdown - Algoritmos de Otimização

Este projeto implementa três abordagens diferentes para resolver o problema de encontrar o menor número de operações para transformar um número `n` em 1.

## Operações Permitidas

- Decrementar uma unidade (`n - 1`)
- Dividir por 2 (`n / 2`) - apenas se `n` é par
- Dividir por 3 (`n / 3`) - apenas se `n` é múltiplo de 3

## Como Executar

### 1. Recursão Simples

```bash
node recursion.js <número>
# Exemplo: node recursion.js 10
```

### 2. Recursão com Memoização

```bash
node memorization.js <número>
# Exemplo: node memorization.js 10
```

### 3. Implementação sem recursão (Loop)

```bash
node loop.js <número>
# Exemplo: node loop.js 10
```

## Comparação das Implementações

### 1. Recursão Simples (`recursion.js`)

- ✅ **Vantagens**: Código simples e intuitivo

```javascript
// Explora todas as combinações possíveis
if (n % 2 == 0) count(n / 2, sum + 1);
if (n % 3 == 0) count(n / 3, sum + 1);
count(n - 1, sum + 1);
```

### 2. Recursão com Memoização (`memorization.js`)

- ✅ **Vantagens**: Evita recálculos, resolvendo cada subproblema apenas uma vez e mantém estrutura recursiva

```javascript
// Verifica se já foi calculado
if (n in memo) return memo[n];
// Calcula e armazena
memo[n] = min;
```

### 3. Implementação sem recursão (`loop.js`)

- ✅ **Vantagens**: Mais eficiente em memória, sem recursão

```javascript
// Constrói solução incrementalmente
for (let i = 2; i <= n; i++) {
  memo[i] = Math.min(/* todas as operações possíveis */);
}
```

## Repositório

[GitHub](https://github.com/timoteostifft/nasa-countdown)
