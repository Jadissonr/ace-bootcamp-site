# Blog da ACE Bootcamp: como publicar

O blog fica em **acebootcamp.com.br/blog/** e é gerado pelo Jekyll (nativo do GitHub Pages).
Os artigos são editados pelo painel **Pages CMS**, sem precisar mexer em código.

## 1. Acesso (feito uma única vez)

1. O dono do repositório adiciona a pessoa como colaboradora no GitHub:
   **Settings → Collaborators → Add people** (permissão de escrita).
2. A pessoa aceita o convite que chega por e-mail.
3. Entra em **https://app.pagescms.org**, clica em **Sign in with GitHub** e escolhe o repositório
   `Jadissonr/ace-bootcamp-site`.
4. No primeiro acesso, o Pages CMS pede para instalar o app dele no repositório.
   Quem instala é o **dono** do repositório (uma vez só).

O Pages CMS é gratuito.

## 2. Publicar um artigo

1. No painel, abra **Artigos do blog** e clique no botão de adicionar um novo artigo.
2. Preencha os campos:

| Campo | Para que serve |
| --- | --- |
| **Título do artigo** | H1 do artigo e título dos cards. |
| **URL do artigo (slug)** | Endereço do artigo: `acebootcamp.com.br/blog/<slug>/`. Só minúsculas, números e hífens. Evite mudar depois de publicado. |
| **Meta description** | Resumo que aparece no Google e nos cards (até 160 caracteres). |
| **Data de publicação** | Ordem dos artigos. Datas no futuro só entram no site na próxima publicação depois dessa data. |
| **Categoria** | Usada no filtro do blog e nos artigos relacionados. |
| **Tags** | Assuntos do artigo. |
| **Imagem de capa** e **texto alternativo** | Capa 16:9 (ideal 1600×900, até 300 KB) e a descrição dela. |
| **Texto do artigo** | Use **Título 2** para seções e **Título 3** para subseções. Não use Título 1. |
| **SEO: title** | Opcional. Se vazio, usa "Título do artigo \| ACE Bootcamp". |
| **SEO: imagem para compartilhamento** | Opcional. Se vazio, usa a capa. |
| **SEO: URL canônica** | Só para conteúdo já publicado em outro site. |
| **SEO: ocultar do Google (noindex)** | Tira o artigo do Google, do sitemap e da listagem. |
| **Data da última atualização** | Aparece como "Atualizado em" e informa o Google. |
| **Publicado** | Desmarque para salvar como rascunho. |

3. Salve. O artigo vai para o ar em cerca de 1 a 2 minutos.

## 3. O que é automático

- Página de listagem com destaque do artigo mais recente e filtro por categoria.
- Tempo de leitura, data em português, botões de compartilhar e chamada para o WhatsApp no fim do artigo.
- Artigos relacionados (mesma categoria primeiro).
- SEO técnico: title, meta description, canonical, Open Graph, dados estruturados
  (`BlogPosting` e `BreadcrumbList`), `sitemap.xml` atualizado e feed RSS em `/blog/feed.xml`.

## 4. Onde ficam os arquivos (para desenvolvimento)

| Arquivo | Função |
| --- | --- |
| `_posts/` | Os artigos (um arquivo `.md` por artigo). |
| `assets/img/blog/` | Imagens enviadas pelo painel. |
| `blog/index.html` | Página de listagem do blog. |
| `_layouts/post.html` | Modelo do artigo. |
| `_includes/seo.html` | Tags de SEO e dados estruturados. |
| `assets/css/blog.css` | Visual do blog. |
| `.pages.yml` | Campos do painel Pages CMS (inclusive a lista de categorias). |
| `sitemap.xml` | Sitemap gerado automaticamente a cada publicação. |

O artigo `_posts/2026-10-28-modelo-de-artigo.md` é um **modelo salvo como rascunho**:
não aparece no site e pode ser apagado ou reaproveitado.
