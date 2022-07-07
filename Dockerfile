FROM jarredsumner/bun:edge
COPY . .
ENTRYPOINT ["bun", "./server.ts"]