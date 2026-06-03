# production environment
FROM caddy:2.11.4-alpine
WORKDIR /build

COPY /build ./
COPY /Caddyfile ./

EXPOSE 8080
CMD ["caddy", "run"]
