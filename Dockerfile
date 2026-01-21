# 1단계: 의존성 설치
FROM node:24-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package*.json ./
RUN npm ci

# 2단계: 빌드
FROM node:24-alpine AS builder
WORKDIR /app

# 의존성 복사
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js 빌드 (standalone 모드 사용)
RUN npm run build

# 3단계: 프로덕션 런타임 (최소 이미지)
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# 성능을 위한 Next.js telemetry 비활성화
ENV NEXT_TELEMETRY_DISABLED 1

# 보안을 위한 non-root 사용자 생성
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 빌드 결과물 복사
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 파일 권한 설정
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# 애플리케이션 실행
CMD ["node", "server.js"]