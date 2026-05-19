# Arquitetura do Projeto - Nutrição Landing Page

## Visão Geral

Este projeto é uma landing page moderna para Pedro Lucena - Nutricionista, construída com Next.js 14+, React 18 e TypeScript.

## Stack Tecnológico

### Frontend
- **Framework:** Next.js 14 (App Router)
- **React:** 18.2+
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Linting:** ESLint
- **Formatting:** Prettier

### Backend
- **Runtime:** Node.js (via Next.js API Routes)
- **Email:** Nodemailer
- **Validation:** Zod (para futuro)

### DevOps
- **Version Control:** Git + GitHub
- **Deployment:** Vercel (automático)
- **CI/CD:** GitHub Actions
- **Testing:** Jest + React Testing Library

## Estrutura de Pastas

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout global
│   ├── globals.css        # Estilos globais
│   └── api/
│       └── contact/       # API routes
│
├── components/            # Componentes React
│   ├── layout/           # Header, Footer
│   ├── sections/         # Seções da página
│   ├── common/           # Componentes reutilizáveis
│   └── forms/            # Formulários
│
├── hooks/                # Custom React Hooks
├── lib/                  # Utilitários
├── styles/               # CSS global
└── utils/                # Funções auxiliares
```

## Padrões de Código

### Componentes

Todos os componentes seguem o padrão:
- **Client Components:** Use `'use client'` no topo
- **Naming:** PascalCase para nomes de arquivos
- **Estrutura:** Props interface + componente com tipo

```typescript
'use client';

interface ComponentProps {
  title: string;
  onClick: () => void;
}

export default function Component({ title, onClick }: ComponentProps) {
  return <div>{title}</div>;
}
```

### Estilos

- **Tailwind CSS:** Classes utilitárias primárias
- **CSS Modules:** Para componentes com estilos localizados (futuro)
- **Design Tokens:** Cores e espaçamentos em `globals.css`

### API Routes

- **Validação:** TypeScript em frontend, validação em backend
- **Rate Limiting:** Implementado para proteger contra abuse
- **Error Handling:** Responses estruturadas com status codes

## Fluxo de Deploy

1. **Desenvolvimento:** `npm run dev` → http://localhost:3000
2. **Build:** `npm run build` → Verificação de tipos + compilação
3. **Deploy:** `git push origin main` → Vercel detecta e faz deploy automático

## Performance

### Otimizações Implementadas
- ✅ Code Splitting automático
- ✅ Image Optimization (Next Image)
- ✅ Font Optimization
- ✅ CSS Minification
- ✅ Gzip Compression

### Métricas Alvo (Web Vitals)
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## Segurança

### Implementado
- ✅ HTTPS (Vercel)
- ✅ Rate Limiting (API)
- ✅ Input Sanitization
- ✅ CSRF Protection (Cookie-based)
- ✅ Security Headers (Next.js)

### Futuro
- [ ] Rate Limiting com Redis
- [ ] Database com autenticação
- [ ] API Key management
- [ ] Audit logging

## Variáveis de Ambiente

Veja `.env.example` para configuração completa.

### Principais
- `SMTP_*`: Configuração de email
- `NEXT_PUBLIC_API_URL`: URL da API

## Roadmap

### V2.0
- [ ] Dashboard admin
- [ ] Agendamento de consultas
- [ ] Sistema de pagamento
- [ ] Blog/Artigos
- [ ] Testimonials dinâmicos

### V3.0
- [ ] App mobile (React Native)
- [ ] Chat em tempo real
- [ ] Integrações com APIs fitness
- [ ] Sistema de prescrições

## Contribuindo

1. Crie uma branch: `git checkout -b feature/sua-feature`
2. Faça commits: `git commit -m "feat: descrição"`
3. Push: `git push origin feature/sua-feature`
4. Crie um PR no GitHub

## Suporte

Para dúvidas sobre a arquitetura, contate: contato@pedrolucena.com
