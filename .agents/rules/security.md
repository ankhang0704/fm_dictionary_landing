# Security Guidelines — Web Landing Page

---

1. **No Hardcoded Secrets**: Keep all third-party API keys or webhook URLs in `.env.local`.
2. **Form Sanitization**: Validate and trim all client contact form inputs. Escape user text before rendering.
3. **Safe External Links**: Add `rel="noopener noreferrer"` and `target="_blank"` on all external links (App Store, GitHub, LinkedIn).
