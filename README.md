# トリアエズナマの会　

## Next.js から API を呼び出してみる

### Setup & Install

1. .devcontainer フォルダの作成
2. devcontainer.json ファイルの作成
3. docker-compose.yml ファイルの作成
4. Dockerfile の作成

<b>各ファイルはこのプロジェクトのファイルをコピーしてください</b>

5. Ctrl + Shift + P でコマンドパレットを開き「開発コンテナ:コンテナーで再度開く」を選択

6. Next.js のプロジェクトを作成する

```
npx create-next-app@latest
Ok to proceed? (y)
? What is your project named? › application
? Would you like to use TypeScript? › No / [Yes]
? Would you like to use ESLint? › No / [Yes]
? Would you like to use Tailwind CSS? › [No] / Yes
? Would you like your code inside a `src/` directory? › No / [Yes]
? Would you like to use App Router? (recommended) › No / [Yes]
? Would you like to use Turbopack for `next dev`? › No / [Yes]
? Would you like to customize the import alias (`@/*` by default)? › No / [Yes]
? What import alias would you like configured? › @/*
```

7. Mantine のインストール

```
cd application
yarn add @mantine/core @mantine/hooks @mantine/form
```

※インストールに少し時間がかかります

8. NextAuth.js をインストール

next-auth をインストールする

```
yarn add next-auth@beta
```

.env.local を作成

```
npx auth secret
```

AUTH_URL を設定する

```
AUTH_URL="http://localhost:3000/api/auth"
```

### GoogleAPI の設定手順

1. Google Cloud Platform の設定ページにアクセスする
   https://console.cloud.google.com/apis/dashboard

2. 新しいプロジェクトを作成

3. 開始ボタンをクリックしてプロジェクト構成を入力<br>
   対象の選択で「外部」を選択

4. 連絡先メールアドレスを入力

5. ポリシーに同意

6. OAuth クライアント ID の作成

7. 認証済みの JavaScript 生成元の設定<br>
   http://localhost:3000

8. 認証済みのリダイレクト URI 設定
   http://localhost:3000/api/auth/callback/google

9. クライアント ID とクライアントシークレットを.env.local に設定
   GOOGLE_CLIENT_ID={クライアント ID}
   GOOGLE_CLIENT_SECRET={クライアントシークレット}

### Mantine の初期設定

1. フォルダ作成

- src/components
- src/theme.ts

2. layout.tsx の変更

- src/app/layout.tsx

### NuxtAuth の設定

1. auth.ts を作成
   Google を認証 Provider に指定

2. middleware.ts を作成
   認証されていない時にアクセスされた場合にリダイレクトする先を指定

3. app/api/auth/[...nextauth]/route.ts を作成
   [...nextauth]は Dynamic Segments と呼ばれ、ルート階層が深くなってもリクエストできるような仕組みを作ることができます。

### ログインフォーム作成

useSession(next-auth/react の React Hoock) を使用するとユーザーのログイン状況を管理する事ができます。

### API の作成

例１） app/api/users/route.ts

```
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse {
    // GET /api/users リクエストの処理
}

export function POST(request: NextRequest): NextResponse {
    // POST /api/users リクエストの処理
}
```

例２）app/api/users/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, { params }: { params: { id: string } }): NextResponse {
// GET /api/users/[id] リクエストの処理
}

export function PUT(request: NextRequest, { params }: { params: { id: string } }): NextResponse {
// PUT /api/users/[id] リクエストの処理
}

export function DELETE(request: NextRequest, { params }: { params: { id: string } }): NextResponse {
// DELETE /api/users/[id] リクエストの処理
}

### 参考ページ

https://qiita.com/k-sukesakuma/items/4b56b9e81c1788d38440
https://shirotamaki.hatenablog.com/entry/2023/03/26/155103
