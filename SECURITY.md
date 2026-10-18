# Segurança e privacidade

Este é um repositório público destinado a apresentar projetos e competências profissionais.

## Checklist antes de qualquer PR

- [ ] Nenhum token, password, chave privada, cookie, credencial ou ficheiro `.env` real foi incluído.
- [ ] Nenhuma morada residencial, contacto privado ou documento pessoal foi publicado.
- [ ] Nenhuma informação interna de empregadores, clientes ou projetos privados foi incluída.
- [ ] Existe autorização para divulgar imagens e dados de terceiros.
- [ ] Links externos usam `rel="noopener noreferrer"` quando abertos em novas janelas.
- [ ] Dependências e CI foram revistos e têm apenas as permissões necessárias.
- [ ] Textos de apresentação e referências profissionais foram confirmados pelo proprietário.

## Segredos

Utiliza variáveis de ambiente no serviço de hosting, nunca no Git. Variáveis prefixadas com `NEXT_PUBLIC_` são potencialmente expostas ao cliente. Um ficheiro removido continua a poder aparecer no histórico Git; perante fuga, revogar/rodar imediatamente a credencial.

## Reportar problemas

Reporta vulnerabilidades de forma privada ao proprietário via GitHub, quando o canal privado de reporte estiver disponível. Não incluir segredos ou provas de exploração em issues públicas.

## Operação

Antes do lançamento: ativar proteções de branch, alertas de dependências, secret scanning/push protection conforme a disponibilidade da conta e revisão manual de deploy.
