---
slug: user-role-registry
sidebar_position: 4
---

# Users, Roles, and Container Registry

This page covers commands for organization members, role definitions, and the coScene container registry. They are typically used by administrators or anyone who needs to pull/push images with Docker locally.

:::warning
For exact flags and output formats, run `cocli user -h`, `cocli role -h`, `cocli registry -h`, and `-h` on each subcommand on your machine.
:::

```bash
cocli user -h
cocli role -h
cocli registry -h
```

## Users {#user}

`cocli user` queries users in the organization (or a specific project) for the currently logged-in identity.

### List users {#user-list}

- **Without `-p`**: list users at the **organization** scope.
- **With `-p <project slug>`**: list users in that project only.
- **`--role-code`**: filter by role code (e.g. `PROJECT_WRITER`, `ORGANIZATION_ADMIN`). Cross-check codes with `cocli role list`.
- **Pagination**: use `--page-size` (10–100) and `--page-token`, similar to `record list`; the CLI prints a suggested `--page-token` when more pages exist.
- **Output**: `-o` supports `table`, `wide`, `json`, and `yaml`; `-v` enables more columns.

```bash
# Organization users
cocli user list

# Users in a project
cocli user list -p my-project-slug

# Filter by role (example)
cocli user list --role-code PROJECT_WRITER -o json
```

### Get user details {#user-get}

- **No argument**: fetch the **current authenticated user** (if that fails, pass a user ID or resource name explicitly).
- **With argument**: accepts a user **ID** (resolved to `users/<id>`) or a full resource name such as `users/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.

```bash
cocli user get
cocli user get <user-id>
cocli user get users/<uuid> -o json
```

## Roles {#role}

`cocli role list` lists available role definitions, useful together with `cocli user list --role-code`.

- **`--level`**: optional `organization` or `project` to restrict the level.
- **Pagination**: `--page-size` and `--page-token`, same idea as `user list`.
- **Output**: `-o table|wide|json|yaml`, `-v` for more detail.

```bash
cocli role list
cocli role list --level project -o wide
```

## Container registry {#registry}

`cocli registry` obtains short-lived credentials for the coScene container registry and can invoke local **Docker** to run `docker login`. These subcommands use a different auth gate than most resource commands, but you still need a valid profile in your config file so the OpenAPI client can issue credentials.

### Docker login (recommended) {#registry-login}

The registry host is inferred from the profile **OpenAPI endpoint** (e.g. SaaS `openapi.coscene.cn` → `cr.coscene.cn`). If inference fails, pass **`--registry`** with the hostname.

**Requires**: Docker installed and `docker` on your `PATH`.

```bash
cocli registry login
cocli registry login --registry cr.example.com
```

### Print credentials only {#registry-create-credential}

Does not call Docker; prints username and password (temporary credential) to stdout. Default is plain text; use `-o json`, `yaml`, or `table` for scripting.

```bash
cocli registry create-credential
cocli registry create-credential -o json
```

:::tip
Treat temporary passwords as secrets—do not commit them or log them. In CI, prefer a secret store or short-lived tokens.
:::
