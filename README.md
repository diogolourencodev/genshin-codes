# Genshin Impact - Redeem Codes

Ferramenta automatizada para resgatar códigos promocionais do Genshin Impact.

## 🎮 Como usar

### Método 1: Console (Recomendado)
1. Abra o site oficial do Genshin Impact: https://genshin.hoyoverse.com/gift
2. Faça login com sua conta
3. Abra o console do navegador (F12)
4. Cole o código abaixo e pressione Enter:

```javascript
fetch('https://raw.githubusercontent.com/diogolourencodev/genshin-codes/refs/heads/main/src/script.js').then(r=>r.text()).then(codigo=>eval(codigo))
```

### Método 2: Script completo
1. Abra o site oficial do Genshin Impact: https://genshin.hoyoverse.com/gift
2. Faça login com sua conta
3. Abra o console do navegador (F12)
4. Copie o conteúdo do arquivo `src/script.js`
5. Cole no console e pressione Enter

## ⚙️ Como funciona

O script automatiza o processo de:
- Ler todos os códigos do arquivo `codes.txt`
- Preencher automaticamente o formulário de resgate
- Submeter cada código com intervalos de segurança
- Ignorar erros e continuar com os próximos códigos

## 📋 Códigos disponíveis

O arquivo `codes.txt` contém mais de 90 códigos promocionais ativos e antigos do Genshin Impact.

## 📝 Notas importantes

- O processo é totalmente automatizado
- Cada código tem um intervalo de 5 segundos entre si
- Códigos já resgatados ou expirados são ignorados automaticamente
- O script roda em segundo plano enquanto você pode fazer outras coisas

## ⚠️ Aviso

Use por sua conta e risco. Este script é apenas para facilitar o processo de resgate de códigos promocionais.
