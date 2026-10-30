# Workflow de Commit e Push Automático

- Sempre que concluir uma alteração relevante no código ou atender a uma solicitação do usuário:
  1. Validar a integridade do código (`npm.cmd run build`).
  2. Adicionar as alterações (`git add -A`).
  3. Fazer commit com uma mensagem descritiva em português ou inglês do que foi alterado.
  4. Executar `git push origin main` para que o repositório no GitHub seja atualizado e o Lovable faça o deploy automático da nova versão.
- Nunca reescrever histórico do git (evitar force push, rebase ou squash de commits já enviados), preservando a sincronização com o Lovable.
