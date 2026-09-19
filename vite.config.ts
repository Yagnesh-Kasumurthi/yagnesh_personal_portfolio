import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import contactHandler from './api/contact.ts';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [
      react(),
      {
        name: 'contact-api-dev-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/contact') {
              if (req.method === 'OPTIONS') {
                res.statusCode = 200;
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
                res.end();
                return;
              }

              if (req.method === 'POST') {
                let rawBody = '';
                req.on('data', (chunk) => {
                  rawBody += chunk;
                });
                req.on('end', async () => {
                  try {
                    (req as any).body = rawBody ? JSON.parse(rawBody) : {};
                  } catch {
                    (req as any).body = {};
                  }

                  const mockRes = {
                    setHeader(key: string, value: string) {
                      res.setHeader(key, value);
                      return this;
                    },
                    status(statusCode: number) {
                      res.statusCode = statusCode;
                      return this;
                    },
                    json(payload: any) {
                      res.setHeader('Content-Type', 'application/json');
                      res.end(JSON.stringify(payload));
                      return this;
                    },
                    end() {
                      res.end();
                      return this;
                    },
                  };

                  await contactHandler(req, mockRes);
                });
                return;
              }
            }
            next();
          });
        },
      },
    ],
  };
});

