# 阶段1：构建应用
FROM node:22-slim AS builder

# 设置工作目录
WORKDIR /app

# 设置 pnpm 镜像源（使用淘宝源加速）
ENV PNPM_REGISTRY=https://registry.npmmirror.com \
    PNPM_STORE_DIR=/pnpm-store

# 安装 pnpm（使用 corepack 内置方式）
RUN corepack enable && \
    pnpm config set store-dir $PNPM_STORE_DIR && \
    pnpm config set registry $PNPM_REGISTRY

# 复制依赖文件（利用缓存层）
COPY package.json pnpm-lock.yaml ./

# 安装依赖（使用 frozen-lockfile 确保一致性）
RUN pnpm install --frozen-lockfile

# 复制所有源代码
COPY . .

# 构建应用（假设构建命令为 'pnpm build'）
RUN pnpm run build-only

# 阶段2：部署
FROM nginx:alpine

# 删除默认配置
RUN rm -rf /etc/nginx/conf.d/default.conf

# 复制自定义 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d

# 从构建阶段复制产物（假设输出目录为 dist）
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]