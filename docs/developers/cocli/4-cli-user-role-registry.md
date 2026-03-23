---
slug: user-role-registry
sidebar_position: 4
---

# 用户、角色与容器镜像仓库

本节介绍与组织成员、权限角色以及刻行容器镜像仓库相关的命令。这些能力通常用于管理员或需要在本地使用 Docker 拉取/推送镜像的场景。

:::warning
具体标志位与输出格式请以本机 `cocli user -h`、`cocli role -h`、`cocli registry -h` 及各子命令的 `-h` 为准。
:::

```bash
cocli user -h
cocli role -h
cocli registry -h
```

## 用户 {#user}

`cocli user` 用于查询当前登录身份所在组织（或指定项目）下的用户信息。

### 列举用户 {#user-list}

- **不传 `-p`**：按**组织**范围列举用户。
- **传入 `-p <项目 slug>`**：仅列举该项目下的用户。
- **`--role-code`**：按角色代码过滤（例如 `PROJECT_WRITER`、`ORGANIZATION_ADMIN`）。可与 `cocli role list` 中看到的角色编码对照使用。
- **分页**：与 `record list` 类似，使用 `--page-size`（10–100）与 `--page-token` 翻页；默认每页条数由服务端上限决定，终端会在有下一页时提示 `--page-token`。
- **输出**：`-o` 支持 `table`、`wide`、`json`、`yaml`；`-v` 为更详细的表格列。

```bash
# 组织内用户
cocli user list

# 某项目内用户
cocli user list -p my-project-slug

# 按角色过滤（示例）
cocli user list --role-code PROJECT_WRITER -o json
```

### 查看用户详情 {#user-get}

- **无参数**：尝试获取**当前登录用户**（若接口不可用，请显式传入用户 ID 或资源名）。
- **有参数**：支持用户 **ID**（将解析为 `users/<id>`）或完整资源名（如 `users/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`）。

```bash
cocli user get
cocli user get <user-id>
cocli user get users/<uuid> -o json
```

## 角色 {#role}

`cocli role list` 列出平台中可用的角色定义，便于与 `cocli user list --role-code` 配合使用。

- **`--level`**：可选 `organization` 或 `project`，只看待定层级的角色。
- **分页**：`--page-size`、`--page-token`，行为与 `user list` 一致。
- **输出**：`-o table|wide|json|yaml`，`-v` 更详细。

```bash
cocli role list
cocli role list --level project -o wide
```

## 容器镜像仓库 {#registry}

`cocli registry` 用于获取刻行容器镜像仓库的临时凭证，并可选地调用本机 **Docker** 执行 `docker login`。子命令**不走与普通资源命令相同的全局登录校验**，但仍需本地配置文件中存在可用的登录配置，以便调用 OpenAPI 签发凭证。

### 登录 Docker（推荐） {#registry-login}

根据当前 profile 的 **OpenAPI endpoint** 推断镜像仓库域名（例如 SaaS `openapi.coscene.cn` 对应 `cr.coscene.cn`）；若无法推断，需使用 **`--registry`** 手动指定主机名。

**要求**：本机已安装 Docker，且 `docker` 在 `PATH` 中。

```bash
cocli registry login
cocli registry login --registry cr.example.com
```

### 仅生成临时凭证 {#registry-create-credential}

不调用 Docker，仅向标准输出打印用户名与密码（临时凭证）。默认纯文本两行；也可使用 `-o json` / `yaml` / `table` 便于脚本解析。

```bash
cocli registry create-credential
cocli registry create-credential -o json
```

:::tip
临时密码请视为敏感信息，勿写入版本库或日志；在 CI 中优先使用密钥管理或短期令牌策略。
:::
