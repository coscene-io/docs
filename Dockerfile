# production environment
FROM caddy:2.10.2-alpine
WORKDIR /build

COPY /build ./
COPY /Caddyfile ./

EXPOSE 8080
CMD ["caddy", "run"]
