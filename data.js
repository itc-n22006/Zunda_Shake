// data.js

const quizData = [
    {
        "question": "DNSを略さずに言うと",
        "answer": "Domain Name System"
    },
    {
        "question": "umaskとは",
        "answer": "新規に作成されるファイルやディレクトリのアクセス権限を指定するコマンド"
    },
    {
        "question": "HTMLを略さずに言うと",
        "answer": "HyperText Markup Language"
    },
    {
        "question": "アーカイブとは",
        "answer": "専用の保存領域に安全にデータを保存すること"
    },
    // 新しい問題を追加
    {
        "question": "クエリ(Query)とは",
        "answer": "ソフトウェアに対するデータの問い合わせや要求などを意味する"
    },
    {
        "question": "インデントとは",
        "answer": "文章の行頭に空白を挿入して先頭の文字を右に押しやること"
    },
    {
        "question": "DNSサーバの役割は",
        "answer": "IPアドレスとドメイン名の紐付けを管理したり、IPアドレスとドメイン名の変換をやってくれるコンピュータのこと"
    },
    {
        "question": "chmod と chown の違いは",
        "answer": "chmod は誰が何を出来るかを定義し、chown はファイルの所有者を変更するために使用される"
    },
    {
        "question": "アーキテクチャ(architecture)とは",
        "answer": "抽象的あるいは基本的な構造や設計、動作原理、実現方式などを表す"
    },
    {
        "question": "メモリとストレージの違いは",
        "answer": "メモリはデータなどの一時的な保管場所であるが、ストレージはアプリケーションやデータを永久的に保管しておく場所"
    },
    {
        "question": "イーサネットとは",
        "answer": "パソコンやゲーム機といったデバイスに、ケーブルを使ってインターネット接続する通信規格のひとつ"
    },
    {
        "question": "デーモンとは",
        "answer": "UNIX系のOSなどにおける常駐プログラムの呼び名"
    },
    {
        "question": "SSLとは",
        "answer": "2台のサーバー間で送信されるデータを暗号化することによりインターネット接続を保護する標準的なテクノロジー、Secure Sockets Layer"
    },
    {
        "question": "クラウドサーバとは",
        "answer": "ネットワーク経由で使う形態になっているサーバ、あるいは仮想サーバのこと"
    },
    {
        "question": "SQLとは",
        "answer": "データベース作成と操作のための標準言語、Structured Query Language"
    },
    {
        "question": "APIとはどんなものか",
        "answer": "データなどを、他のプログラムから呼び出して利用するための手順やデータ形式などを定めた規約のこと、Application Programming Interface"
    },
    {
        "question": "KVMを略さずに言うと",
        "answer": "Kernel-based Virtual Machine  仮想マシンを作成できるソフトウェア機能"
    },
    {
        "question": "スキーマ(schema)とは",
        "answer": "何かの「構造」を指す用語"
    },
    {
        "question": "プロパティ(property)とは",
        "answer": "対象の持つ設定や状態、属性のこと"
    }, {
        "question": "Nullとは",
        "answer": "なんのデータも含まれない状態のこと"
    },
    {
        "question": "Sambaとは",
        "answer": "Windowsネットワークの諸機能をWindows以外のシステムで利用できるようにするソフトウェア"
    },
    {
        "question": "NFSを略さずに言うと",
        "answer": "Network File System"
    },
    {
        "question": "サブネットマスクとは",
        "answer": "IPアドレスのうち、ネットワークアドレスとホストアドレスを識別するための数値"
    },
    {
        "question": "パーミッション設定とは",
        "answer": "「書き込み」「読み取り」「実行」の制限設定を行うこと"
    },
    {
        "question": "アーカイブとは",
        "answer": "専用の保存領域に安全にデータを保存すること"
    },
    {
        "question": "ハイパーバイザとは",
        "answer": "バーチャルマシンを実行するための仮想化技術のこと、仮想化ソフトとほぼ同義"
    },
    {
        "question": "BPOを略さずに言うと",
        "answer": "Business Process Outsourcing(アウトソーシング)"
    },
    {
        "question": "Kernelとは",
        "answer": "Linuxの中核部分、ハードウェアとソフトウェアの連携担当"
    },
    {
        "question": "BIOSを略さずに言うと",
        "answer": "Basic Input Output System"
    },
    {
        "question": "RAMを略さずに言うと",
        "answer": "Random Access Memory"
    },
    {
        "question": "CPUとはどんなもの",
        "answer": "コンピュータの頭脳で、計算とデータ処理を担当(Central Processing Unit)"
    },
    {
        "question": "プロトコル(Protocol)とは",
        "answer": "コンピュータやデバイス間の通信規則"
    },
    {
        "question": "PHPの正式名称は",
        "answer": "Hypertext Preprocessor(Web系のプログラムを作るときによく使われるプログラム言語"
    },
    {
        "question": "NAT を略さずに言うと",
        "answer": "Network Address Translation, 全世界で通用するIPアドレス(グローバルIPアドレス)と仲間内でのみ通用するIPアドレス(プライベートIPアドレス)を紐付けて変換する技術"
    },
    {
        "question": "ハッシュ値とは",
        "answer": "入力に対応する適当な値"
    },
    {
        "question": "アパッチ(Apache)とは",
        "answer": "世界的に使用される著名なWebサーバソフトの1つ"
    },
    {
        "question": "パラメータ(parameter)とは",
        "answer": "システムに影響を与える、外から入ってくる値"
    },
    {
        "question": "FQDNとは",
        "answer": "DNSなどのホスト名、ドメイン名などすべてを省略せずに指定した記述形式のこと、Fully Qualified Domain Name"
    },
    {
        "question": "ビルドとは",
        "answer": "プログラムのソースコードをあれやこれやして実際のプログラムを作る作業のこと"
    },
    {
        "question": "デプロイとは",
        "answer": "作ったプログラムをしかるべき場所においたり、あれやこれやの設定をしたりして、使える状態にすること"
    },
];