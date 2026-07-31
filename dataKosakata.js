const dataKosakata = [
  {
    "kosakata": ["jp", "行く","いく"],
    "arti": ["id", "pergi"],
    "kamus": {"jp": "来年、日本へ行くつもりです。", "id": "Tahun depan saya berencana pergi ke Jepang.", "form": "行く"},
    "ます": {"jp": "毎朝七時に会社へ行きます。", "id": "Setiap pagi saya pergi ke kantor pukul tujuh.", "form": "行きます"},
    "て": {"jp": "郵便局へ行って、荷物を出しました。", "id": "Saya pergi ke kantor pos lalu mengirim paket.", "form": "行って"},
    "た": {"jp": "先週、友達と京都へ行った。", "id": "Minggu lalu saya pergi ke Kyoto bersama teman.", "form": "行った"},
    "ない": {"jp": "雨だから今日は公園へ行かない。", "id": "Karena hujan, hari ini saya tidak pergi ke taman.", "form": "行かない"}
  },
  {
    "kosakata": ["jp", "来る","くる"],
    "arti": ["id", "datang"],
    "kamus": {"jp": "明日、新しい先生が来る。", "id": "Besok guru baru akan datang.", "form": "来る"},
    "ます": {"jp": "毎週金曜日に母が来ます。", "id": "Ibu datang setiap hari Jumat.", "form": "来ます"},
    "て": {"jp": "こちらへ来て、一緒に写真を撮りましょう。", "id": "Kemarilah, mari kita berfoto bersama.", "form": "来て"},
    "た": {"jp": "さっき友達が来た。", "id": "Tadi teman saya datang.", "form": "来た"},
    "ない": {"jp": "バスはまだ来ない。", "id": "Busnya belum datang.", "form": "来ない"}
  },
  {
    "kosakata": ["jp", "帰る","かえる"],
    "arti": ["id", "pulang"],
    "kamus": {"jp": "仕事が終わったら家へ帰る。", "id": "Setelah pekerjaan selesai saya pulang ke rumah.", "form": "帰る"},
    "ます": {"jp": "毎日六時ごろ帰ります。", "id": "Setiap hari saya pulang sekitar pukul enam.", "form": "帰ります"},
    "て": {"jp": "家へ帰って、夕飯を作ります。", "id": "Saya pulang ke rumah lalu memasak makan malam.", "form": "帰って"},
    "た": {"jp": "昨日は早く帰った。", "id": "Kemarin saya pulang lebih awal.", "form": "帰った"},
    "ない": {"jp": "今夜は家へ帰らない。", "id": "Malam ini saya tidak pulang ke rumah.", "form": "帰らない"}
  },
  {
    "kosakata": ["jp", "食べる","たべる"],
    "arti": ["id", "makan"],
    "kamus": {"jp": "野菜をたくさん食べる。", "id": "Saya makan banyak sayuran.", "form": "食べる"},
    "ます": {"jp": "昼休みにお弁当を食べます。", "id": "Saya makan bekal saat istirahat siang.", "form": "食べます"},
    "て": {"jp": "ご飯を食べてから勉強します。", "id": "Saya belajar setelah makan.", "form": "食べて"},
    "た": {"jp": "朝ご飯はもう食べた。", "id": "Saya sudah makan sarapan.", "form": "食べた"},
    "ない": {"jp": "夜は甘い物を食べない。", "id": "Saya tidak makan makanan manis pada malam hari.", "form": "食べない"}
  },
  {
    "kosakata": ["jp", "飲む","のむ"],
    "arti": ["id", "minum"],
    "kamus": {"jp": "水をたくさん飲むことは大切です。", "id": "Penting untuk minum banyak air.", "form": "飲む"},
    "ます": {"jp": "毎朝牛乳を飲みます。", "id": "Saya minum susu setiap pagi.", "form": "飲みます"},
    "て": {"jp": "薬を飲んで、早く寝てください。", "id": "Minulah obat lalu tidurlah lebih awal.", "form": "飲んで"},
    "た": {"jp": "コーヒーを二杯飲んだ。", "id": "Saya minum dua cangkir kopi.", "form": "飲んだ"},
    "ない": {"jp": "お酒は飲まない。", "id": "Saya tidak minum alkohol.", "form": "飲まない"}
  },
  {
    "kosakata": ["jp", "見る","みる"],
    "arti": ["id", "melihat"],
    "kamus": {"jp": "夜に映画を見るのが好きです。", "id": "Saya suka menonton film pada malam hari.", "form": "見る"},
    "ます": {"jp": "毎晩ニュースを見ます。", "id": "Saya menonton berita setiap malam.", "form": "見ます"},
    "て": {"jp": "この写真を見てください。", "id": "Tolong lihat foto ini.", "form": "見て"},
    "た": {"jp": "昨日、その映画を見た。", "id": "Kemarin saya menonton film itu.", "form": "見た"},
    "ない": {"jp": "最近テレビを見ない。", "id": "Akhir-akhir ini saya tidak menonton televisi.", "form": "見ない"}
  },
  {
    "kosakata": ["jp", "聞く","きく"],
    "arti": ["id", "mendengar"],
    "kamus": {"jp": "日本の音楽をよく聞く。", "id": "Saya sering mendengarkan musik Jepang.", "form": "聞く"},
    "ます": {"jp": "分からないときは先生に聞きます。", "id": "Jika tidak mengerti, saya bertanya kepada guru.", "form": "聞きます"},
    "て": {"jp": "最後まで話を聞いてください。", "id": "Tolong dengarkan sampai selesai.", "form": "聞いて"},
    "た": {"jp": "面白い話を聞いた。", "id": "Saya mendengar cerita yang menarik.", "form": "聞いた"},
    "ない": {"jp": "人の話を聞かない。", "id": "Dia tidak mau mendengarkan perkataan orang.", "form": "聞かない"}
  },
  {
    "kosakata": ["jp", "話す","はなす"],
    "arti": ["id", "berbicara"],
    "kamus": {"jp": "日本人と日本語で話す。", "id": "Berbicara dengan orang Jepang menggunakan bahasa Jepang.", "form": "話す"},
    "ます": {"jp": "毎日先生と話します。", "id": "Saya berbicara dengan guru setiap hari.", "form": "話します"},
    "て": {"jp": "もっとゆっくり話してください。", "id": "Tolong berbicaralah lebih pelan.", "form": "話して"},
    "た": {"jp": "昨日、店長と話した。", "id": "Kemarin saya berbicara dengan manajer toko.", "form": "話した"},
    "ない": {"jp": "緊張するとあまり話さない。", "id": "Saat gugup, saya tidak banyak berbicara.", "form": "話さない"}
  },
  {
    "kosakata": ["jp", "書く","かく"],
    "arti": ["id", "menulis"],
    "kamus": {"jp": "毎日、日本語で日記を書く。", "id": "Setiap hari saya menulis buku harian dalam bahasa Jepang.", "form": "書く"},
    "ます": {"jp": "宿題をノートに書きます。", "id": "Saya menulis pekerjaan rumah di buku catatan.", "form": "書きます"},
    "て": {"jp": "名前を書いてから、中に入ってください。", "id": "Silakan tulis nama Anda sebelum masuk.", "form": "書いて"},
    "た": {"jp": "さっきレポートを書いた。", "id": "Tadi saya sudah menulis laporan.", "form": "書いた"},
    "ない": {"jp": "漢字はあまり書かない。", "id": "Saya jarang menulis kanji.", "form": "書かない"}
  },
  {
    "kosakata": ["jp", "読む","よむ"],
    "arti": ["id", "membaca"],
    "kamus": {"jp": "寝る前に本を読む。", "id": "Saya membaca buku sebelum tidur.", "form": "読む"},
    "ます": {"jp": "毎朝、新聞を読みます。", "id": "Setiap pagi saya membaca koran.", "form": "読みます"},
    "て": {"jp": "この文章を読んで、答えてください。", "id": "Bacalah teks ini lalu jawablah.", "form": "読んで"},
    "た": {"jp": "昨日、その小説を読んだ。", "id": "Kemarin saya menonton film itu.", "form": "読んだ"},
    "ない": {"jp": "最近、漫画を読まない。", "id": "Akhir-akhir ini saya tidak membaca manga.", "form": "読まない"}
  },
  {
    "kosakata": ["jp", "買う","かう"],
    "arti": ["id", "membeli"],
    "kamus": {"jp": "新しい靴を買う予定です。", "id": "Saya berencana membeli sepatu baru.", "form": "買う"},
    "ます": {"jp": "スーパーで野菜を買います。", "id": "Saya membeli sayuran di supermarket.", "form": "買います"},
    "て": {"jp": "パンを買って、家へ帰ります。", "id": "Saya membeli roti lalu pulang.", "form": "買って"},
    "た": {"jp": "昨日、新しい傘を買った。", "id": "Kemarin saya membeli payung baru.", "form": "買った"},
    "ない": {"jp": "必要ではないので買わない。", "id": "Karena tidak diperlukan, saya tidak membelinya.", "form": "買わない"}
  },
  {
    "kosakata": ["jp", "売る","うる"],
    "arti": ["id", "menjual"],
    "kamus": {"jp": "この店は野菜を売る。", "id": "Toko ini menjual sayuran.", "form": "売る"},
    "ます": {"jp": "毎朝、市場で魚を売ります。", "id": "Setiap pagi menjual ikan di pasar.", "form": "売ります"},
    "て": {"jp": "古い本を売って、新しい本を買った。", "id": "Saya menjual buku lama lalu membeli buku baru.", "form": "売って"},
    "た": {"jp": "使わない自転車を売った。", "id": "Saya menjual sepeda yang sudah tidak dipakai.", "form": "売った"},
    "ない": {"jp": "この商品は売らない。", "id": "Barang ini tidak dijual.", "form": "売らない"}
  },
  {
    "kosakata": ["jp", "使う","つかう"],
    "arti": ["id", "menggunakan"],
    "kamus": {"jp": "パソコンを使う仕事です。", "id": "Ini adalah pekerjaan yang menggunakan komputer.", "form": "使う"},
    "ます": {"jp": "毎日スマートフォンを使います。", "id": "Saya menggunakan ponsel setiap hari.", "form": "使います"},
    "て": {"jp": "電子辞書を使って勉強します。", "id": "Saya belajar menggunakan kamus elektronik.", "form": "使って"},
    "た": {"jp": "昨日、このペンを使った。", "id": "Kemarin saya menggunakan pena ini.", "form": "使った"},
    "ない": {"jp": "最近、現金を使わない。", "id": "Akhir-akhir ini saya tidak menggunakan uang tunai.", "form": "使わない"}
  },
  {
    "kosakata": ["jp", "作る","つくる"],
    "arti": ["id", "membuat"],
    "kamus": {"jp": "休日によく料理を作る。", "id": "Saya sering memasak pada hari libur.", "form": "作る"},
    "ます": {"jp": "母は毎日お弁当を作ります。", "id": "Ibu membuat bekal setiap hari.", "form": "作ります"},
    "て": {"jp": "カレーを作って、みんなで食べた。", "id": "Saya membuat kari lalu memakannya bersama semua orang.", "form": "作って"},
    "た": {"jp": "自分でケーキを作った。", "id": "Saya membuat kue sendiri.", "form": "作った"},
    "ない": {"jp": "朝ご飯は自分で作らない。", "id": "Saya tidak membuat sarapan sendiri.", "form": "作らない"}
  },
  {
    "kosakata": ["jp", "待つ","まつ"],
    "arti": ["id", "menunggu"],
    "kamus": {"jp": "駅で友達を待つ。", "id": "Menunggu teman di stasiun.", "form": "待つ"},
    "ます": {"jp": "バスを十分待ちます。", "id": "Saya menunggu bus selama sepuluh menit.", "form": "待ちます"},
    "て": {"jp": "少し待ってください。", "id": "Tolong tunggu sebentar.", "form": "待って"},
    "た": {"jp": "一時間も待った。", "id": "Saya menunggu sampai satu jam.", "form": "待った"},
    "ない": {"jp": "時間がないから待たない。", "id": "Karena tidak ada waktu, saya tidak menunggu.", "form": "待たない"}
  },
  {
    "kosakata": ["jp", "持つ","もつ"],
    "arti": ["id", "membawa / memiliki"],
    "kamus": {"jp": "重い荷物を持つ。", "id": "Membawa barang yang berat.", "form": "持つ"},
    "ます": {"jp": "財布はいつも持ちます。", "id": "Saya selalu membawa dompet.", "form": "持ちます"},
    "て": {"jp": "パスポートを持ってきてください。", "id": "Tolong bawa paspornya.", "form": "持って"},
    "た": {"jp": "大きなかばんを持った人が来た。", "id": "Seseorang yang membawa tas besar datang.", "form": "持った"},
    "ない": {"jp": "車を持たない人も多い。", "id": "Banyak juga orang yang tidak memiliki mobil.", "form": "持たない"}
  },
  {
    "kosakata": ["jp", "会う","あう"],
    "arti": ["id", "bertemu"],
    "kamus": {"jp": "明日、駅で友達に会う。", "id": "Besok saya akan bertemu teman di stasiun.", "form": "会う"},
    "ます": {"jp": "月に一回、お客様に会います。", "id": "Saya bertemu pelanggan sebulan sekali.", "form": "会います"},
    "て": {"jp": "久しぶりに先生に会って、うれしかったです。", "id": "Saya senang karena bertemu guru setelah sekian lama.", "form": "会って"},
    "た": {"jp": "昨日、高校の友達に会った。", "id": "Kemarin saya bertemu teman SMA.", "form": "会った"},
    "ない": {"jp": "最近、忙しくて友達に会わない。", "id": "Akhir-akhir ini saya tidak bertemu teman karena sibuk.", "form": "会わない"}
  },
  {
    "kosakata": ["jp", "開ける","あける"],
    "arti": ["id", "membuka"],
    "kamus": {"jp": "朝、窓を開ける。", "id": "Saya membuka jendela pada pagi hari.", "form": "開ける"},
    "ます": {"jp": "店は九時に開けます。", "id": "Toko dibuka pukul sembilan.", "form": "開けます"},
    "て": {"jp": "ドアを開けてください。", "id": "Tolong bukakan pintunya.", "form": "開けて"},
    "た": {"jp": "暑かったので窓を開けた。", "id": "Karena panas, saya membuka jendela.", "form": "開けた"},
    "ない": {"jp": "エアコンをつけるので窓は開けない。", "id": "Karena AC dinyalakan, jendelanya tidak dibuka.", "form": "開けない"}
  },
  {
    "kosakata": ["jp", "閉める","しめる"],
    "arti": ["id", "menutup"],
    "kamus": {"jp": "寝る前にドアを閉める。", "id": "Saya menutup pintu sebelum tidur.", "form": "閉める"},
    "ます": {"jp": "毎日午後六時に店を閉めます。", "id": "Setiap hari toko ditutup pukul enam sore.", "form": "閉めます"},
    "て": {"jp": "窓を閉めてから出かけます。", "id": "Saya pergi setelah menutup jendela.", "form": "閉めて"},
    "た": {"jp": "店長はもう店を閉めた。", "id": "Manajer toko sudah menutup toko.", "form": "閉めた"},
    "ない": {"jp": "暑いのでドアを閉めない。", "id": "Karena panas, pintunya tidak ditutup.", "form": "閉めない"}
  },
  {
    "kosakata": ["jp", "座る","すわる"],
    "arti": ["id", "duduk"],
    "kamus": {"jp": "空いている席に座る。", "id": "Saya duduk di kursi yang kosong.", "form": "座る"},
    "ます": {"jp": "電車ではいつもここに座ります。", "id": "Di kereta saya selalu duduk di sini.", "form": "座ります"},
    "て": {"jp": "どうぞ座ってください。", "id": "Silakan duduk.", "form": "座って"},
    "た": {"jp": "窓の近くに座った。", "id": "Saya duduk di dekat jendela.", "form": "座った"},
    "ない": {"jp": "次で降りるので座らない。", "id": "Karena akan turun di pemberhentian berikutnya, saya tidak duduk.", "form": "座らない"}
  },
  {
    "kosakata": ["jp", "立つ","たつ"],
    "arti": ["id", "berdiri"],
    "kamus": {"jp": "信号の前で立つ。", "id": "Berdiri di depan lampu lalu lintas.", "form": "立つ"},
    "ます": {"jp": "朝礼ではみんな立ちます。", "id": "Saat apel pagi semua orang berdiri.", "form": "立ちます"},
    "て": {"jp": "立って話しましょう。", "id": "Mari berbicara sambil berdiri.", "form": "立って"},
    "た": {"jp": "ベルが鳴るとすぐ立った。", "id": "Begitu bel berbunyi, saya langsung berdiri.", "form": "立った"},
    "ない": {"jp": "足が痛いので立たない。", "id": "Karena kaki saya sakit, saya tidak berdiri.", "form": "立たない"}
  },
  {
    "kosakata": ["jp", "入る","はいる"],
    "arti": ["id", "masuk"],
    "kamus": {"jp": "この店に入る。", "id": "Saya masuk ke toko ini.", "form": "入る"},
    "ます": {"jp": "九時までに教室に入ります。", "id": "Saya masuk ke kelas sebelum pukul sembilan.", "form": "入ります"},
    "て": {"jp": "部屋に入って、電気をつけた。", "id": "Saya masuk ke kamar lalu menyalakan lampu.", "form": "入って"},
    "た": {"jp": "新しい会社に入った。", "id": "Saya masuk ke perusahaan baru.", "form": "入った"},
    "ない": {"jp": "会員ではないので入らない。", "id": "Karena bukan anggota, saya tidak masuk.", "form": "入らない"}
  },
  {
    "kosakata": ["jp", "出る","でる"],
    "arti": ["id", "keluar"],
    "kamus": {"jp": "朝七時に家を出る。", "id": "Saya keluar rumah pukul tujuh pagi.", "form": "出る"},
    "ます": {"jp": "次の駅で電車を出ます。", "id": "Saya keluar dari kereta di stasiun berikutnya.", "form": "出ます"},
    "て": {"jp": "部屋を出て、友達を待った。", "id": "Saya keluar dari kamar lalu menunggu teman.", "form": "出て"},
    "た": {"jp": "五分前に家を出た。", "id": "Saya keluar rumah lima menit yang lalu.", "form": "出た"},
    "ない": {"jp": "今日は外へ出ない。", "id": "Hari ini saya tidak keluar.", "form": "出ない"}
  },
  {
    "kosakata": ["jp", "入れる","いれる"],
    "arti": ["id", "memasukkan"],
    "kamus": {"jp": "かばんに本を入れる。", "id": "Saya memasukkan buku ke dalam tas.", "form": "入れる"},
    "ます": {"jp": "コーヒーに砂糖を入れます。", "id": "Saya memasukkan gula ke dalam kopi.", "form": "入れます"},
    "て": {"jp": "名前を書いて、箱に入れてください。", "id": "Tulis nama Anda lalu masukkan ke dalam kotak.", "form": "入れて"},
    "た": {"jp": "財布をかばんに入れた。", "id": "Saya memasukkan dompet ke dalam tas.", "form": "入れた"},
    "ない": {"jp": "冷蔵庫には何も入れない。", "id": "Saya tidak memasukkan apa pun ke dalam kulkas.", "form": "入れない"}
  },
  {
    "kosakata": ["jp", "出す","だす"],
    "arti": ["id", "mengeluarkan / mengirim"],
    "kamus": {"jp": "今日中に手紙を出す。", "id": "Saya akan mengirim surat hari ini.", "form": "出す"},
    "ます": {"jp": "コンビニでお金を出します。", "id": "Saya mengeluarkan uang di minimarket.", "form": "出します"},
    "て": {"jp": "宿題を出してから帰ってください。", "id": "Silakan kumpulkan PR sebelum pulang.", "form": "出して"},
    "た": {"jp": "さっきメールを出した。", "id": "Tadi saya sudah mengirim email.", "form": "出した"},
    "ない": {"jp": "今日はごみを出さない。", "id": "Hari ini saya tidak membuang sampah.", "form": "出さない"}
  },
  {
    "kosakata": ["jp", "入浴する","にゅうよくする"],
    "arti": ["id", "mandi"],
    "kamus": {"jp": "毎晩寝る前に入浴する。", "id": "Saya mandi setiap malam sebelum tidur.", "form": "入浴する"},
    "ます": {"jp": "ホテルでは夜に入浴します。", "id": "Saya mandi pada malam hari di hotel.", "form": "入浴します"},
    "て": {"jp": "入浴してから寝ます。", "id": "Saya tidur setelah mandi.", "form": "入浴して"},
    "た": {"jp": "昨日はゆっくり入浴した。", "id": "Kemarin saya mandi dengan santai.", "form": "入浴した"},
    "ない": {"jp": "時間がないので入浴しない。", "id": "Karena tidak ada waktu, saya tidak mandi.", "form": "入浴しない"}
  },
  {
    "kosakata": ["jp", "寝る","ねる"],
    "arti": ["id", "tidur"],
    "kamus": {"jp": "毎日十一時に寝る。", "id": "Saya tidur setiap hari pukul sebelas.", "form": "寝る"},
    "ます": {"jp": "疲れた日は早く寝ます。", "id": "Pada hari yang melelahkan saya tidur lebih awal.", "form": "寝ます"},
    "て": {"jp": "少し寝て、元気になった。", "id": "Saya tidur sebentar lalu menjadi segar.", "form": "寝て"},
    "た": {"jp": "昨日は八時間寝た。", "id": "Kemarin saya tidur delapan jam.", "form": "寝た"},
    "ない": {"jp": "コーヒーを飲むと寝ない。", "id": "Jika minum kopi, saya tidak bisa tidur.", "form": "寝ない"}
  },
  {
    "kosakata": ["jp", "起きる","おきる"],
    "arti": ["id", "bangun"],
    "kamus": {"jp": "明日は早く起きる。", "id": "Besok saya akan bangun lebih awal.", "form": "起きる"},
    "ます": {"jp": "毎朝六時に起きます。", "id": "Saya bangun setiap pagi pukul enam.", "form": "起きます"},
    "て": {"jp": "起きてすぐ顔を洗います。", "id": "Setelah bangun saya langsung mencuci muka.", "form": "起きて"},
    "た": {"jp": "今朝は五時に起きた。", "id": "Tadi pagi saya bangun pukul lima.", "form": "起きた"},
    "ない": {"jp": "休みの日は早く起きない。", "id": "Pada hari libur saya tidak bangun pagi.", "form": "起きない"}
  },
  {
    "kosakata": ["jp", "働く","はたらく"],
    "arti": ["id", "bekerja"],
    "kamus": {"jp": "将来、日本で働く。", "id": "Saya ingin bekerja di Jepang pada masa depan.", "form": "働く"},
    "ます": {"jp": "父は病院で働きます。", "id": "Ayah bekerja di rumah sakit.", "form": "働きます"},
    "て": {"jp": "毎日働いて、お金をためています。", "id": "Saya bekerja setiap hari and menabung uang.", "form": "働いて"},
    "た": {"jp": "昨日は十時間働いた。", "id": "Kemarin saya bekerja selama tiga jam.", "form": "働いた"},
    "ない": {"jp": "日曜日は働かない。", "id": "Saya tidak bekerja pada hari Minggu.", "form": "働かない"}
  },
  {
    "kosakata": ["jp", "休む","やすむ"],
    "arti": ["id", "beristirahat / libur"],
    "kamus": {"jp": "疲れたら少し休む。", "id": "Jika lelah saya akan beristirahat.", "form": "休む"},
    "ます": {"jp": "明日は仕事を休みます。", "id": "Besok saya libur kerja.", "form": "休みます"},
    "て": {"jp": "無理をしないで、休んでください。", "id": "Jangan memaksakan diri, silakan beristirahat.", "form": "休んで"},
    "た": {"jp": "昨日は一日休んだ。", "id": "Kemarin saya beristirahat seharian.", "form": "休んだ"},
    "ない": {"jp": "忙しいので休まない。", "id": "Karena sibuk saya tidak beristirahat.", "form": "休まない"}
  },
  {
    "kosakata": ["jp", "勉強する","べんきょうする"],
    "arti": ["id", "belajar"],
    "kamus": {"jp": "毎日日本語を勉強する。", "id": "Saya belajar bahasa Jepang setiap hari.", "form": "勉強する"},
    "ます": {"jp": "夜、図書館で勉強します。", "id": "Saya belajar di perpustakaan pada malam hari.", "form": "勉強します"},
    "て": {"jp": "毎日勉強して、日本語が上手になりました。", "id": "Saya belajar setiap hari sehingga bahasa Jepang saya menjadi lebih baik.", "form": "勉強して"},
    "た": {"jp": "昨日は三時間勉強した。", "id": "Kemarin saya belajar selama tiga jam.", "form": "勉強した"},
    "ない": {"jp": "試験が終わったので今日は勉強しない。", "id": "Karena ujian sudah selesai, hari ini saya tidak belajar.", "form": "勉強しない"}
  },
  {
    "kosakata": ["jp", "教える","おしえる"],
    "arti": ["id", "mengajar / memberi tahu"],
    "kamus": {"jp": "日本語を教える仕事がしたい。", "id": "Saya ingin bekerja sebagai pengajar bahasa Jepang.", "form": "教える"},
    "ます": {"jp": "先生は漢字を教えます。", "id": "Guru mengajarkan kanji.", "form": "教えます"},
    "て": {"jp": "この言葉の意味を教えてください。", "id": "Tolong beri tahu arti kata ini.", "form": "教えて"},
    "た": {"jp": "友達に道を教えた。", "id": "Saya memberi tahu jalan kepada teman.", "form": "教えた"},
    "ない": {"jp": "答えはまだ教えない。", "id": "Jawabannya belum saya beri tahu.", "form": "教えない"}
  },
  {
    "kosakata": ["jp", "覚える","おぼえる"],
    "arti": ["id", "mengingat / menghafal"],
    "kamus": {"jp": "新しい言葉をたくさん覚える。", "id": "Saya menghafal banyak kosakata baru.", "form": "覚える"},
    "ます": {"jp": "毎日五つの漢字を覚えます。", "id": "Saya menghafal lima kanji setiap hari.", "form": "覚えます"},
    "て": {"jp": "この文を覚えてください。", "id": "Tolong hafalkan kalimat ini.", "form": "覚えて"},
    "た": {"jp": "やっとひらがなを全部覚えた。", "id": "Akhirnya saya sudah menghafal semua huruf hiragana.", "form": "覚えた"},
    "ない": {"jp": "使わない言葉はなかなか覚えない。", "id": "Kata-kata yang tidak digunakan sulit diingat.", "form": "覚えない"}
  },
  {
    "kosakata": ["jp", "忘れる","わすれる"],
    "arti": ["id", "lupa"],
    "kamus": {"jp": "大切な約束を忘れることはよくない。", "id": "Tidak baik melupakan janji yang penting.", "form": "忘れる"},
    "ます": {"jp": "ときどき傘を忘れます。", "id": "Saya kadang-kadang lupa membawa payung.", "form": "忘れます"},
    "て": {"jp": "財布を忘れてしまいました。", "id": "Saya tidak sengaja lupa membawa dompet.", "form": "忘れて"},
    "た": {"jp": "宿題を忘れた。", "id": "Saya lupa mengerjakan/membawa PR.", "form": "忘れた"},
    "ない": {"jp": "明日は忘れないようにします。", "id": "Besok saya akan berusaha agar tidak lupa.", "form": "忘れない"}
  },
  {
    "kosakata": ["jp", "習う","ならう"],
    "arti": ["id", "belajar dari seseorang"],
    "kamus": {"jp": "日本語を先生から習う。", "id": "Saya belajar bahasa Jepang dari guru.", "form": "習う"},
    "ます": {"jp": "毎週ピアノを習います。", "id": "Saya belajar piano setiap minggu.", "form": "習います"},
    "て": {"jp": "友達に料理を習って、家でも作りました。", "id": "Saya belajar memasak dari teman lalu mencobanya di rumah.", "form": "習って"},
    "た": {"jp": "学校で敬語を習った。", "id": "Saya belajar bahasa hormat di sekolah.", "form": "習った"},
    "ない": {"jp": "今は車の運転を習わない。", "id": "Agora saya tidak belajar mengemudi.", "form": "習わない"}
  },
  {
    "kosakata": ["jp", "練習する","れんしゅうする"],
    "arti": ["id", "berlatih"],
    "kamus": {"jp": "毎日会話を練習する。", "id": "Saya berlatih percakapan setiap hari.", "form": "練習する"},
    "ます": {"jp": "試合の前によく練習します。", "id": "Saya banyak berlatih sebelum pertandingan.", "form": "練習します"},
    "て": {"jp": "毎日練習して、上手になりました。", "id": "Saya berlatih setiap hari sehingga menjadi lebih mahir.", "form": "練習して"},
    "た": {"jp": "昨日は一時間練習した。", "id": "Kemarin saya berlatih selama satu jam.", "form": "練習した"},
    "ない": {"jp": "練習しないと上手になりません。", "id": "Kalau tidak berlatih, tidak akan menjadi mahir.", "form": "練習しない"}
  },
  {
    "kosakata": ["jp", "運転する","うんてんする"],
    "arti": ["id", "mengemudi"],
    "kamus": {"jp": "将来、日本で車を運転する。", "id": "Suatu hari saya ingin mengemudi mobil di Jepang.", "form": "運転する"},
    "ます": {"jp": "父は毎日車を運転します。", "id": "Ayah mengemudi mobil setiap hari.", "form": "運転します"},
    "て": {"jp": "安全運転して帰ってください。", "id": "Tolong pulang dengan mengemudi secara aman.", "form": "運転して"},
    "た": {"jp": "昨日、三時間運転した。", "id": "Kemarin saya mengemudi selama tiga jam.", "form": "運転した"},
    "ない": {"jp": "お酒を飲んだので運転しない。", "id": "Karena minum alkohol, saya tidak mengemudi.", "form": "運転しない"}
  },
  {
    "kosakata": ["jp", "掃除する","そうじする"],
    "arti": ["id", "membersihkan"],
    "kamus": {"jp": "部屋をきれいに掃除する。", "id": "Saya membersihkan kamar hingga bersih.", "form": "掃除する"},
    "ます": {"jp": "毎週日曜日に掃除します。", "id": "Saya bersih-bersih setiap hari Minggu.", "form": "掃除します"},
    "て": {"jp": "部屋を掃除してから出かけます。", "id": "Saya pergi setelah membersihkan kamar.", "form": "掃除して"},
    "た": {"jp": "朝、部屋を掃除した。", "id": "Pagi tadi saya membersihkan kamar.", "form": "掃除した"},
    "ない": {"jp": "忙しい日は掃除しない。", "id": "Pada hari yang sibuk saya tidak membersihkan rumah.", "form": "掃除しない"}
  },
  {
    "kosakata": ["jp", "洗う","あらう"],
    "arti": ["id", "mencuci"],
    "kamus": {"jp": "食事の前に手を洗う。", "id": "Saya mencuci tangan sebelum makan.", "form": "洗う"},
    "ます": {"jp": "毎日シャツを洗います。", "id": "Saya mencuci kemeja setiap hari.", "form": "洗います"},
    "て": {"jp": "手を洗ってから食べましょう。", "id": "Mari makan setelah mencuci tangan.", "form": "洗って"},
    "た": {"jp": "車をきれいに洗った。", "id": "Saya mencuci mobil hingga bersih.", "form": "洗った"},
    "ない": {"jp": "野菜を洗わないで食べてはいけません。", "id": "Jangan makan sayuran tanpa mencucinya.", "form": "洗わない"}
  },
  {
    "kosakata": ["jp", "料理する","りょうりする"],
    "arti": ["id", "memasak"],
    "kamus": {"jp": "休日は家で料理する。", "id": "Pada hari libur saya memasak di rumah.", "form": "料理する"},
    "ます": {"jp": "毎晩家族のために料理します。", "id": "Saya memasak untuk keluarga setiap malam.", "form": "料理します"},
    "て": {"jp": "一緒に料理して食べましょう。", "id": "Mari memasak dan makan bersama.", "form": "料理して"},
    "た": {"jp": "初めてカレーを料理した。", "id": "Saya memasak kari untuk pertama kalinya.", "form": "料理した"},
    "ない": {"jp": "疲れている日は料理しない。", "id": "Pada hari saat lelah saya tidak memasak.", "form": "料理しない"}
  },
  {
    "kosakata": ["jp", "歩く","あるく"],
    "arti": ["id", "berjalan"],
    "kamus": {"jp": "健康のために毎日歩く。", "id": "Saya berjalan setiap hari demi kesehatan.", "form": "歩く"},
    "ます": {"jp": "駅まで歩きます。", "id": "Saya berjalan kaki sampai stasiun.", "form": "歩きます"},
    "て": {"jp": "歩いて学校へ行きます。", "id": "Saya pergi to sekolah dengan berjalan kaki.", "form": "歩いて"},
    "た": {"jp": "昨日は一時間歩いた。", "id": "Kemarin saya berjalan selama satu jam.", "form": "歩いた"},
    "ない": {"jp": "雨の日はあまり歩かない。", "id": "Saat hari hujan saya jarang berjalan kaki.", "form": "歩かない"}
  },
  {
    "kosakata": ["jp", "走る","はしる"],
    "arti": ["id", "berlari"],
    "kamus": {"jp": "毎朝公園で走る。", "id": "Saya berlari di taman setiap pagi.", "form": "走る"},
    "ます": {"jp": "遅れそうなので走ります。", "id": "Karena sepertinya akan terlambat, saya berlari.", "form": "走ります"},
    "て": {"jp": "急いで走って駅へ向かった。", "id": "Saya berlari dengan cepat menuju stasiun.", "form": "走って"},
    "た": {"jp": "マラソンで五キロ走った。", "id": "Saya berlari lima kilometer dalam maraton.", "form": "走った"},
    "ない": {"jp": "足が痛いので今日は走らない。", "id": "Karena kaki saya sakit, hari ini saya tidak berlari.", "form": "走らない"}
  },
  {
    "kosakata": ["jp", "乗る","のる"],
    "arti": ["id", "naik"],
    "kamus": {"jp": "毎日電車に乗る。", "id": "Saya naik kereta setiap hari.", "form": "乗る"},
    "ます": {"jp": "次のバスに乗ります。", "id": "Saya akan naik bus berikutnya.", "form": "乗ります"},
    "て": {"jp": "電車に乗って会社へ行きます。", "id": "Saya pergi ke kantor dengan naik kereta.", "form": "乗って"},
    "た": {"jp": "初めて新幹線に乗った。", "id": "Saya pertama kali naik shinkansen.", "form": "乗った"},
    "ない": {"jp": "今日はタクシーに乗らない。", "id": "Hari ini saya tidak naik taksi.", "form": "乗らない"}
  },
  {
    "kosakata": ["jp", "降りる","おりる"],
    "arti": ["id", "turun"],
    "kamus": {"jp": "次の駅で降りる。", "id": "Saya turun di stasiun berikutnya.", "form": "降りる"},
    "ます": {"jp": "このバスは病院の前で降ります。", "id": "Saya turun bus ini di depan rumah sakit.", "form": "降ります"},
    "て": {"jp": "電車を降りて、まっすぐ歩いてください。", "id": "Turun dari kereta lalu berjalanlah lurus.", "form": "降りて"},
    "た": {"jp": "一つ前の駅で降りた。", "id": "Saya turun di stasiun sebelumnya.", "form": "降りた"},
    "ない": {"jp": "まだ降りないでください。", "id": "Tolong jangan turun dulu.", "form": "降りない"}
  },
  {
    "kosakata": ["jp", "写真を撮る","しゃしんをとる"],
    "arti": ["id", "memotret"],
    "kamus": {"jp": "旅行ではたくさん写真を撮る。", "id": "Saat bepergian saya mengambil banyak foto.", "form": "写真を撮る"},
    "ます": {"jp": "家族と写真を撮ります。", "id": "Saya berfoto bersama keluarga.", "form": "写真を撮ります"},
    "て": {"jp": "ここで写真を撮ってもいいですか。", "id": "Bolehkah saya mengambil foto di sini?", "form": "写真を撮って"},
    "た": {"jp": "桜の写真をたくさん撮った。", "id": "Saya mengambil banyak foto bunga sakura.", "form": "写真を撮った"},
    "ない": {"jp": "美術館では写真を撮らない。", "id": "Saya tidak mengambil foto di museum.", "form": "写真を撮らない"}
  },
  {
    "kosakata": ["jp", "電話する","でんわする"],
    "arti": ["id", "menelepon"],
    "kamus": {"jp": "家族に電話する。", "id": "Saya menelepon keluarga.", "form": "電話する"},
    "ます": {"jp": "後で会社に電話します。", "id": "Nanti saya akan menelepon kantor.", "form": "電話します"},
    "て": {"jp": "家に着いたら電話してください。", "id": "Tolong telepon setelah sampai di rumah.", "form": "電話して"},
    "た": {"jp": "さっき友達に電話した。", "id": "Tadi saya menelepon teman.", "form": "電話した"},
    "ない": {"jp": "夜遅くは電話しない。", "id": "Saya tidak menelepon larut malam.", "form": "電話しない"}
  },
  {
    "kosakata": ["jp", "手伝う","てつだう"],
    "arti": ["id", "membantu"],
    "kamus": {"jp": "時間があれば家事を手伝う。", "id": "Jika ada waktu, saya membantu pekerjaan rumah.", "form": "手伝う"},
    "ます": {"jp": "困っている人を手伝います。", "id": "Saya membantu orang yang sedang kesulitan.", "form": "手伝います"},
    "て": {"jp": "忙しいので、少し手伝ってください。", "id": "Karena saya sibuk, tolong bantu saya sebentar.", "form": "手伝って"},
    "た": {"jp": "昨日、引っ越しを手伝った。", "id": "Kemarin saya membantu proses pindahan.", "form": "手伝った"},
    "ない": {"jp": "頼まれなかったので手伝わなかった。", "id": "Karena tidak diminta, saya tidak membantu.", "form": "手伝わない"}
  },
  {
    "kosakata": ["jp", "起こす", "おこす"],
    "arti": ["id", "membangunkan"],
    "kamus": {"jp": "毎朝、子供を起こす。", "id": "Setiap pagi, saya membangunkan anak.", "form": "起こす"},
    "ます": {"jp": "明日、６時に起こします。", "id": "Besok, saya akan membangunkan Anda jam 6.", "form": "起こします"},
    "て": {"jp": "遅刻するので早く起こしてください。", "id": "Karena akan terlambat, tolong bangunkan dengan cepat.", "form": "起こして"},
    "た": {"jp": "今朝、早く弟を起こした。", "id": "Pagi ini, saya membangunkan adik laki-laki saya lebih awal.", "form": "起こした"},
    "ない": {"jp": "休日は子供を起こさない。", "id": "Pada hari libur, saya tidak membangunkan anak.", "form": "起こさない"}
  },
  {
    "kosakata": ["jp", "浴びる", "あびる"],
    "arti": ["id", "mandi / mandi dengan gayung/shower"],
    "kamus": {"jp": "朝起きて、シャワーを浴びる。", "id": "Bangun pagi lalu mandi shower.", "form": "浴びる"},
    "ます": {"jp": "毎日、冷たい水を浴びます。", "id": "Setiap hari, saya mandi dengan air dingin.", "form": "浴びます"},
    "て": {"jp": "シャワーを浴びてから寝ます。", "id": "Saya tidur setelah mandi shower.", "form": "浴びて"},
    "た": {"jp": "さっきシャワーを浴びた。", "id": "Tadi saya baru saja mandi shower.", "form": "浴びた"},
    "ない": {"jp": "今日は疲れたので、シャワーを浴びない。", "id": "Karena hari ini lelah, saya tidak mandi shower.", "form": "浴びない"}
  },
  {
    "kosakata": ["jp", "着る", "きる"],
    "arti": ["id", "memakai (pakaian atas/seluruh badan)"],
    "kamus": {"jp": "冬は厚いコートを着る。", "id": "Di musim dingin saya memakai mantel tebal.", "form": "着る"},
    "ます": {"jp": "パーティーでドレスを着ます。", "id": "Saya memakai gaun di pesta.", "form": "着ます"},
    "て": {"jp": "シャツを着て出かけます。", "id": "Saya pergi keluar dengan memakai kemeja.", "form": "着て"},
    "た": {"jp": "昨日買った服を着た。", "id": "Saya memakai baju yang dibeli kemarin.", "form": "着た"},
    "ない": {"jp": "暑いので、ジャケットは着ない。", "id": "Karena panas, saya tidak memakai jaket.", "form": "着ない"}
  },
  {
    "kosakata": ["jp", "脱ぐ", "ぬぐ"],
    "arti": ["id", "melepas (pakaian/sepatu)"],
    "kamus": {"jp": "部屋に入る前に靴を脱ぐ。", "id": "Melepas sepatu sebelum masuk ke ruangan.", "form": "脱ぐ"},
    "ます": {"jp": "暑いのでここでコートを脱ぎます。", "id": "Karena panas, saya melepas mantel di sini.", "form": "脱ぎます"},
    "て": {"jp": "靴を脱いで上がってください。", "id": "Tolong lepas sepatu Anda dan masuklah.", "form": "脱いで"},
    "た": {"jp": "雨に濡れた服をすぐに脱いだ。", "id": "Saya segera melepas pakaian yang basah karena hujan.", "form": "脱いだ"},
    "ない": {"jp": "まだ寒いので、上着を脱がない。", "id": "Karena masih dingin, saya tidak melepas jaket.", "form": "脱がない"}
  },
  {
    "kosakata": ["jp", "履く", "はく"],
    "arti": ["id", "memakai (sepatu/celana/bawah)"],
    "kamus": {"jp": "歩きやすい靴を履く。", "id": "Saya memakai sepatu yang nyaman untuk berjalan.", "form": "履く"},
    "ます": {"jp": "学校へ行く時はスニーカーを履きます。", "id": "Saat pergi ke sekolah, saya memakai sepatu kets.", "form": "履きます"},
    "て": {"jp": "新しい靴を履いて出かける。", "id": "Saya pergi keluar dengan memakai sepatu baru.", "form": "履いて"},
    "た": {"jp": "昨日はスカートを履いた。", "id": "Kemarin saya memakai rok.", "form": "履いた"},
    "ない": {"jp": "家の中では靴下を履かない。", "id": "Di dalam rumah, saya tidak memakai kaus kaki.", "form": "履かない"}
  },
  {
    "kosakata": ["jp", "被る", "かぶる"],
    "arti": ["id", "memakai (di atas kepala/topi)"],
    "kamus": {"jp": "日差しが強いので帽子を被る。", "id": "Karena sinar matahari terik, saya memakai topi.", "form": "被る"},
    "ます": {"jp": "外出する時は帽子を被ります。", "id": "Saat pergi keluar, saya memakai topi.", "form": "被ります"},
    "て": {"jp": "ヘルメットを被って自転車に乗る。", "id": "Saya naik sepeda dengan memakai helm.", "form": "被って"},
    "た": {"jp": "お気に入りの帽子を被った。", "id": "Saya memakai topi favorit saya.", "form": "被った"},
    "ない": {"jp": "室内では帽子を被らない。", "id": "Di dalam ruangan, saya tidak memakai topi.", "form": "被らない"}
  },
  {
    "kosakata": ["jp", "つける", "つける"],
    "arti": ["id", "menyalakan / memasang"],
    "kamus": {"jp": "暗くなったら電気をつける。", "id": "Jika menjadi gelap, saya menyalakan lampu.", "form": "つける"},
    "ます": {"jp": "暑いのでエアコンをつけます。", "id": "Karena panas, saya menyalakan AC.", "form": "つけます"},
    "て": {"jp": "ニュースを見たいのでテレビをつけてください。", "id": "Tolong nyalakan TV karena saya ingin menonton berita.", "form": "つけて"},
    "た": {"jp": "部屋の電気をつけた。", "id": "Saya telah menyalakan lampu kamar.", "form": "つけた"},
    "ない": {"jp": "涼しいのでエアコンをつけない。", "id": "Karena sejuk, saya tidak menyalakan AC.", "form": "つけない"}
  },
  {
    "kosakata": ["jp", "消す", "けす"],
    "arti": ["id", "mematikan / menghapus"],
    "kamus": {"jp": "寝る前にテレビを消す。", "id": "Sebelum tidur, saya mematikan TV.", "form": "消す"},
    "ます": {"jp": "黒板の字を消します。", "id": "Saya menghapus tulisan di papan tulis.", "form": "消します"},
    "て": {"jp": "電気を消して寝てください。", "id": "Tolong matikan lampu lalu tidur.", "form": "消して"},
    "た": {"jp": "ストーブの火を消した。", "id": "Saya telah mematikan api kompor.", "form": "消した"},
    "ない": {"jp": "まだ見ているので、テレビを消さない。", "id": "Karena masih menonton, saya tidak mematikan TV.", "form": "消さない"}
  },
  {
    "kosakata": ["jp", "開く", "あく"],
    "arti": ["id", "terbuka"],
    "kamus": {"jp": "風でドアが開く。", "id": "Pintu terbuka karena angin.", "form": "開く"},
    "ます": {"jp": "朝９時に店が開きます。", "id": "Toko akan buka pada jam 9 pagi.", "form": "開きます"},
    "て": {"jp": "ドアが開いて、猫が入ってきた。", "id": "Pintu terbuka, dan kucing masuk.", "form": "開いて"},
    "た": {"jp": "突然、窓が開いた。", "id": "Tiba-tiba, jendela terbuka.", "form": "開いた"},
    "ない": {"jp": "鍵がかかっていて、ドアが開かない。", "id": "Pintunya terkunci sehingga tidak bisa terbuka.", "form": "開かない"}
  },
  {
    "kosakata": ["jp", "閉まる", "しまる"],
    "arti": ["id", "tertutup / tutup"],
    "kamus": {"jp": "自動ドアが閉まる。", "id": "Pintu otomatis tertutup.", "form": "閉まる"},
    "ます": {"jp": "この店は午後８時に閉まります。", "id": "Toko ini tutup pada jam 8 malam.", "form": "閉まります"},
    "て": {"jp": "ドアが閉まって、電車が動いた。", "id": "Pintu tertutup, dan kereta bergerak.", "form": "閉まって"},
    "た": {"jp": "強風で窓がバンと閉まった。", "id": "Jendela tertutup dengan keras karena angin kencang.", "form": "閉まった"},
    "ない": {"jp": "荷物が挟まって、ドアが閉まらない。", "id": "Karena ada barang yang terjepit, pintu tidak mau tertutup.", "form": "閉まらない"}
  },
  {
    "kosakata": ["jp", "洗濯する", "せんたくする"],
    "arti": ["id", "mencuci (pakaian)"],
    "kamus": {"jp": "週末に服を洗濯する。", "id": "Di akhir pekan, saya mencuci baju.", "form": "洗濯する"},
    "ます": {"jp": "毎日、タオルを洗濯します。", "id": "Setiap hari, saya mencuci handuk.", "form": "洗濯します"},
    "て": {"jp": "服を洗濯して、外に干します。", "id": "Saya mencuci baju, lalu menjemurnya di luar.", "form": "洗濯して"},
    "た": {"jp": "今朝、シーツを洗濯した。", "id": "Pagi ini, saya telah mencuci seprai.", "form": "洗濯した"},
    "ない": {"jp": "雨の日は洗濯しない。", "id": "Pada hari hujan, saya tidak mencuci baju.", "form": "洗濯しない"}
  },
  {
    "kosakata": ["jp", "片付ける", "かたづける"],
    "arti": ["id", "membereskan / merapikan"],
    "kamus": {"jp": "部屋を綺麗に片付ける。", "id": "Merapikan kamar dengan bersih.", "form": "片付ける"},
    "ます": {"jp": "食事の後、お皿を片付けます。", "id": "Setelah makan, saya membereskan piring.", "form": "片付けます"},
    "て": {"jp": "遊んだ後は、おもちゃを片付けてください。", "id": "Setelah bermain, tolong bereskan mainannya.", "form": "片付けて"},
    "た": {"jp": "昨日、机の上を片付けた。", "id": "Kemarin, saya membereskan atas meja.", "form": "片付けた"},
    "ない": {"jp": "疲れたので、今日は片付けない。", "id": "Karena lelah, hari ini saya tidak beres-beres.", "form": "片付けない"}
  },
  {
    "kosakata": ["jp", "捨てる", "すてる"],
    "arti": ["id", "membuang"],
    "kamus": {"jp": "ゴミ箱にゴミを捨てる。", "id": "Membuang sampah ke tempat sampah.", "form": "捨てる"},
    "ます": {"jp": "古い雑誌を捨てます。", "id": "Saya akan membuang majalah lama.", "form": "捨てます"},
    "て": {"jp": "この紙は捨ててください。", "id": "Tolong buang kertas ini.", "form": "捨てて"},
    "た": {"jp": "壊れた時計を捨てた。", "id": "Saya telah membuang jam yang rusak.", "form": "捨てた"},
    "ない": {"jp": "まだ使えるので捨てない。", "id": "Karena masih bisa dipakai, saya tidak membuangnya.", "form": "捨てない"}
  },
  {
    "kosakata": ["jp", "並べる", "ならべる"],
    "arti": ["id", "menata (berjajar) / membariskan"],
    "kamus": {"jp": "本棚に本を並べる。", "id": "Menata buku di rak buku.", "form": "並べる"},
    "ます": {"jp": "テーブルにお皿を並べます。", "id": "Saya menata piring di atas meja.", "form": "並べます"},
    "て": {"jp": "ここに椅子を並べてください。", "id": "Tolong jajarkan kursi di sini.", "form": "並べて"},
    "た": {"jp": "店の前に商品を並べた。", "id": "Saya telah menata produk di depan toko.", "form": "並べた"},
    "ない": {"jp": "邪魔になるので、ここには自転車を並べない。", "id": "Karena menghalangi, saya tidak menjejerkan sepeda di sini.", "form": "並べない"}
  },
  {
    "kosakata": ["jp", "置く", "おく"],
    "arti": ["id", "meletakkan / menaruh"],
    "kamus": {"jp": "机の上にカバンを置く。", "id": "Meletakkan tas di atas meja.", "form": "置く"},
    "ます": {"jp": "荷物はここに置きます。", "id": "Saya meletakkan barang bawaan di sini.", "form": "置きます"},
    "て": {"jp": "鍵はそこら辺に置いてください。", "id": "Tolong letakkan kunci di sekitar sana.", "form": "置いて"},
    "た": {"jp": "さっき、ここにスマホを置いた。", "id": "Tadi, saya meletakkan ponsel di sini.", "form": "置いた"},
    "ない": {"jp": "大切なものはここに置かない。", "id": "Saya tidak meletakkan barang berharga di sini.", "form": "置かない"}
  },
  {
    "kosakata": ["jp", "取る", "とる"],
    "arti": ["id", "mengambil"],
    "kamus": {"jp": "棚から本を取る。", "id": "Mengambil buku dari rak.", "form": "取る"},
    "ます": {"jp": "会議中にメモを取ります。", "id": "Saya mengambil catatan (mencatat) selama rapat.", "form": "取ります"},
    "て": {"jp": "すみません、その塩を取ってください。", "id": "Permisi, tolong ambilkan garam itu.", "form": "取って"},
    "た": {"jp": "ポケットから財布を取った。", "id": "Saya mengambil dompet dari saku.", "form": "取った"},
    "ない": {"jp": "人の物は取らない。", "id": "Saya tidak mengambil barang milik orang lain.", "form": "取らない"}
  },
  {
    "kosakata": ["jp", "持って行く", "もっていく"],
    "arti": ["id", "membawa pergi"],
    "kamus": {"jp": "学校へお弁当を持って行く。", "id": "Membawa bekal pergi ke sekolah.", "form": "持って行く"},
    "ます": {"jp": "明日、カメラを持って行きます。", "id": "Besok, saya akan membawa kamera.", "form": "持って行きます"},
    "て": {"jp": "雨が降るかもしれないので、傘を持って行ってください。", "id": "Karena mungkin akan hujan, tolong bawa payung.", "form": "持って行って"},
    "た": {"jp": "パーティーにケーキを持って行った。", "id": "Saya telah membawa kue ke pesta.", "form": "持って行った"},
    "ない": {"jp": "重いので、教科書は持って行かない。", "id": "Karena berat, saya tidak membawa buku pelajaran.", "form": "持って行かない"}
  },
  {
    "kosakata": ["jp", "持って来る", "もってくる"],
    "arti": ["id", "membawa datang"],
    "kamus": {"jp": "友達がうちにゲームを持って来る。", "id": "Teman membawa game datang ke rumah saya.", "form": "持って来る"},
    "ます": {"jp": "明日の授業に辞書を持って来ます。", "id": "Saya akan membawa kamus ke pelajaran besok.", "form": "持って来ます"},
    "て": {"jp": "パーティーに飲み物を持って来てください。", "id": "Tolong bawa minuman ke pesta.", "form": "持って来て"},
    "た": {"jp": "昨日、彼がお土産を持って来た。", "id": "Kemarin, dia membawa oleh-oleh ke sini.", "form": "持って来た"},
    "ない": {"jp": "今日は傘を持って来ない。", "id": "Hari ini, saya tidak membawa payung ke sini.", "form": "持って来ない"}
  },
  {
    "kosakata": ["jp", "答える", "こたえる"],
    "arti": ["id", "menjawab"],
    "kamus": {"jp": "先生の質問に答える。", "id": "Menjawab pertanyaan guru.", "form": "答える"},
    "ます": {"jp": "今からあなたの質問に答えます。", "id": "Mulai sekarang saya akan menjawab pertanyaan Anda.", "form": "答えます"},
    "て": {"jp": "大きな声で答えてください。", "id": "Tolong jawab dengan suara keras.", "form": "答えて"},
    "た": {"jp": "インタビューに正直に答えた。", "id": "Saya telah menjawab wawancara dengan jujur.", "form": "答えた"},
    "ない": {"jp": "わからないので何も答えない。", "id": "Karena tidak tahu, saya tidak menjawab apa-apa.", "form": "答えない"}
  },
  {
    "kosakata": ["jp", "質問する", "しつもんする"],
    "arti": ["id", "bertanya / mengajukan pertanyaan"],
    "kamus": {"jp": "わからないことを先生に質問する。", "id": "Menanyakan hal yang tidak dimengerti kepada guru.", "form": "質問する"},
    "ます": {"jp": "会議の最後に質問します。", "id": "Saya akan bertanya di akhir rapat.", "form": "質問します"},
    "て": {"jp": "疑問があれば、すぐに質問してください。", "id": "Jika ada keraguan, tolong segera bertanyalah.", "form": "質問して"},
    "た": {"jp": "昨日、先輩に仕事について質問した。", "id": "Kemarin, saya bertanya kepada senior tentang pekerjaan.", "form": "質問した"},
    "ない": {"jp": "恥ずかしいので、あまり質問しない。", "id": "Karena malu, saya tidak terlalu banyak bertanya.", "form": "質問しない"}
  },
  {
    "kosakata": ["jp", "説明する", "せつめいする"],
    "arti": ["id", "menjelaskan"],
    "kamus": {"jp": "新しいパソコンの使い方を説明する。", "id": "Menjelaskan cara menggunakan komputer baru.", "form": "説明する"},
    "ます": {"jp": "今からルールの変更について説明します。", "id": "Mulai sekarang saya akan menjelaskan tentang perubahan aturan.", "form": "説明します"},
    "て": {"jp": "遅刻した理由を説明してください。", "id": "Tolong jelaskan alasan terlambat.", "form": "説明して"},
    "た": {"jp": "昨日、お客様に商品を説明した。", "id": "Kemarin, saya telah menjelaskan produk kepada pelanggan.", "form": "説明した"},
    "ない": {"jp": "時間がありませんから、今は説明しない。", "id": "Karena tidak ada waktu, sekarang saya tidak akan menjelaskan.", "form": "説明しない"}
  },
  {
    "kosakata": ["jp", "理解する", "りかいする"],
    "arti": ["id", "memahami / mengerti"],
    "kamus": {"jp": "相手の気持ちを理解する。", "id": "Memahami perasaan lawan bicara.", "form": "理解する"},
    "ます": {"jp": "彼の言っていることを理解します。", "id": "Saya memahami apa yang dia katakan.", "form": "理解します"},
    "て": {"jp": "現在の状況を理解してください。", "id": "Tolong pahami situasi saat ini.", "form": "理解して"},
    "た": {"jp": "説明を読んで、内容を深く理解した。", "id": "Setelah membaca penjelasan, saya memahami isinya dengan mendalam.", "form": "理解した"},
    "ない": {"jp": "なぜ彼が怒っているのか理解しない。", "id": "Saya tidak mengerti mengapa dia marah.", "form": "理解しない"}
  },
  {
    "kosakata": ["jp", "使える", "つかえる"],
    "arti": ["id", "bisa menggunakan / dapat dipakai"],
    "kamus": {"jp": "このアプリはとても便利で使える。", "id": "Aplikasi ini sangat praktis dan bisa digunakan.", "form": "使える"},
    "ます": {"jp": "このカードは海外でも使えます。", "id": "Kartu ini bisa digunakan di luar negeri juga.", "form": "使えます"},
    "て": {"jp": "古いパソコンがまだ使えて嬉しい。", "id": "Saya senang komputer lama masih bisa digunakan.", "form": "使えて"},
    "た": {"jp": "Wi-Fiが繋がって、インターネットが使えた。", "id": "Wi-Fi terhubung, dan internet bisa digunakan.", "form": "使えた"},
    "ない": {"jp": "パスワードを忘れて、パソコンが使えない。", "id": "Karena lupa kata sandi, komputer tidak bisa digunakan.", "form": "使えない"}
  },
  {
    "kosakata": ["jp", "できる", "できる"],
    "arti": ["id", "bisa / dapat / mampu"],
    "kamus": {"jp": "日本語を少し話すことができる。", "id": "Bisa berbicara bahasa Jepang sedikit.", "form": "できる"},
    "ます": {"jp": "明日のパーティーに参加できます。", "id": "Saya bisa berpartisipasi dalam pesta besok.", "form": "できます"},
    "て": {"jp": "仕事が早くできて、とても助かった。", "id": "Pekerjaannya bisa selesai cepat, saya sangat tertolong.", "form": "できて"},
    "た": {"jp": "今日のテストはよくできた。", "id": "Ujian hari ini bisa dikerjakan dengan baik.", "form": "できた"},
    "ない": {"jp": "忙しくて、今日はゲームができない。", "id": "Karena sibuk, hari ini saya tidak bisa bermain game.", "form": "できない"}
  },
  {
    "kosakata": ["jp", "始める", "はじめる"],
    "arti": ["id", "memulai (objek + を)"],
    "kamus": {"jp": "新しい仕事を始める。", "id": "Memulai pekerjaan baru.", "form": "始める"},
    "ます": {"jp": "明日からダイエットを始めます。", "id": "Mulai besok saya akan memulai diet.", "form": "始めます"},
    "て": {"jp": "準備ができたら、テストを始めてください。", "id": "Jika persiapannya sudah selesai, tolong mulai ujiannya.", "form": "始めて"},
    "た": {"jp": "先月、ピアノを習い始めた。", "id": "Bulan lalu, saya mulai belajar piano.", "form": "始めた"},
    "ない": {"jp": "全員集まるまで会議を始めない。", "id": "Sampai semua orang berkumpul, saya tidak akan memulai rapat.", "form": "始めない"}
  },
  {
    "kosakata": ["jp", "始まる", "はじまる"],
    "arti": ["id", "dimulai (subjek + が)"],
    "kamus": {"jp": "もうすぐ映画が始まる。", "id": "Sebentar lagi filmnya akan dimulai.", "form": "始まる"},
    "ます": {"jp": "日本語の授業は９時に始まります。", "id": "Pelajaran bahasa Jepang akan dimulai pada jam 9.", "form": "始まります"},
    "て": {"jp": "コンサートが始まって、音楽が聞こえた。", "id": "Konser dimulai, dan musik terdengar.", "form": "始まって"},
    "た": {"jp": "予定より早く試合が始まった。", "id": "Pertandingan dimulai lebih cepat dari jadwal.", "form": "始まった"},
    "ない": {"jp": "先生が来ないので、授業がなかなか始まらない。", "id": "Karena guru tidak datang, pelajaran tidak kunjung dimulai.", "form": "始まらない"}
  },
  {
    "kosakata": ["jp", "終わる", "おわる"],
    "arti": ["id", "selesai / berakhir (subjek + が)"],
    "kamus": {"jp": "午後５時に仕事が終わる。", "id": "Pekerjaan selesai pada jam 5 sore.", "form": "終わる"},
    "ます": {"jp": "この番組は１０時に終わります。", "id": "Acara ini akan selesai pada jam 10.", "form": "終わります"},
    "て": {"jp": "早く仕事が終わって、家に帰った。", "id": "Pekerjaan cepat selesai, dan saya pulang ke rumah.", "form": "終わって"},
    "た": {"jp": "楽しい夏休みが昨日終わった。", "id": "Liburan musim panas yang menyenangkan telah berakhir kemarin.", "form": "終わった"},
    "ない": {"jp": "宿題が多くて、なかなか終わらない。", "id": "Karena PR-nya banyak, sulit untuk cepat selesai.", "form": "終わらない"}
  },
  {
    "kosakata": ["jp", "終える", "おえる"],
    "arti": ["id", "menyelesaikan / mengakhiri (objek + を)"],
    "kamus": {"jp": "今日の仕事を終える。", "id": "Menyelesaikan pekerjaan hari ini.", "form": "終える"},
    "ます": {"jp": "３時までにすべての宿題を終えます。", "id": "Saya akan menyelesaikan semua PR sebelum jam 3.", "form": "終えます"},
    "て": {"jp": "早く食事を終えて、出かけましょう。", "id": "Mari kita cepat selesaikan makan dan pergi keluar.", "form": "終えて"},
    "た": {"jp": "大学のすべての授業を終えた。", "id": "Saya telah menyelesaikan semua kelas di universitas.", "form": "終えた"},
    "ない": {"jp": "まだ準備を終えないまま、出発した。", "id": "Saya berangkat tanpa menyelesaikan persiapan.", "form": "終えない"}
  },
  {
    "kosakata": ["jp", "曲がる", "まがる"],
    "arti": ["id", "berbelok / bengkok (subjek + が / objek + を + 曲がる)"],
    "kamus": {"jp": "次の角を右に曲がる。", "id": "Berbelok ke kanan di tikungan berikutnya.", "form": "曲がる"},
    "ます": {"jp": "あの交差点を左に曲がります。", "id": "Saya akan berbelok ke kiri di perempatan itu.", "form": "曲がります"},
    "て": {"jp": "まっすぐ行って、右に曲がってください。", "id": "Jalan lurus, lalu tolong berbelok ke kanan.", "form": "曲がって"},
    "た": {"jp": "道を間違えて、左に曲がった。", "id": "Saya salah jalan dan berbelok ke kiri.", "form": "曲がった"},
    "ない": {"jp": "この道はまっすぐで曲がらない。", "id": "Jalan ini lurus dan tidak berbelok.", "form": "曲がらない"}
  },
  {
    "kosakata": ["jp", "渡る", "わたる"],
    "arti": ["id", "menyeberang"],
    "kamus": {"jp": "歩道橋を渡る。", "id": "Menyeberangi jembatan penyeberangan.", "form": "渡る"},
    "ます": {"jp": "青信号になったら道を渡ります。", "id": "Kalau lampu hijau, saya akan menyeberang jalan.", "form": "渡ります"},
    "て": {"jp": "その橋を渡って、まっすぐ行ってください。", "id": "Tolong seberangi jembatan itu dan jalan lurus.", "form": "渡って"},
    "た": {"jp": "危ない道を急いで渡った。", "id": "Saya buru-buru menyeberangi jalan yang berbahaya.", "form": "渡った"},
    "ない": {"jp": "赤信号の時は道を渡らない。", "id": "Saat lampu merah, saya tidak menyeberang jalan.", "form": "渡らない"}
  },
  {
    "kosakata": ["jp", "曲げる", "まげる"],
    "arti": ["id", "membengkokkan / menekuk (objek + を)"],
    "kamus": {"jp": "体操で膝を曲げる。", "id": "Menekuk lutut saat senam.", "form": "曲げる"},
    "ます": {"jp": "体を前に曲げます。", "id": "Saya menekuk tubuh ke depan.", "form": "曲げます"},
    "て": {"jp": "痛くないところまで腕を曲げてください。", "id": "Tolong tekuk lengan Anda sampai batas yang tidak sakit.", "form": "曲げて"},
    "た": {"jp": "工作で針金を曲げた。", "id": "Saya membengkokkan kawat untuk prakarya.", "form": "曲げた"},
    "ない": {"jp": "怪我をしているので、足を曲げない。", "id": "Karena terluka, saya tidak menekuk kaki.", "form": "曲げない"}
  },
  {
    "kosakata": ["jp", "止まる", "とまる"],
    "arti": ["id", "berhenti (subjek + が)"],
    "kamus": {"jp": "駅に電車が止まる。", "id": "Kereta berhenti di stasiun.", "form": "止まる"},
    "ます": {"jp": "このバスは病院の前に止まります。", "id": "Bus ini akan berhenti di depan rumah sakit.", "form": "止まります"},
    "て": {"jp": "車が止まってから、降りてください。", "id": "Tolong turun setelah mobil berhenti.", "form": "止まって"},
    "た": {"jp": "突然、時計が止まった。", "id": "Tiba-tiba, jam tangan berhenti.", "form": "止まった"},
    "ない": {"jp": "咳がなかなか止まらない。", "id": "Batuknya tidak kunjung berhenti.", "form": "止まらない"}
  },
  {
    "kosakata": ["jp", "止める", "とめる"],
    "arti": ["id", "menghentikan / memberhentikan (objek + を)"],
    "kamus": {"jp": "駐車場に車を止める。", "id": "Memarkir/menghentikan mobil di tempat parkir.", "form": "止める"},
    "ます": {"jp": "ここでタクシーを止めます。", "id": "Saya akan menghentikan taksi di sini.", "form": "止めます"},
    "て": {"jp": "危ないから、機械を止めてください。", "id": "Karena berbahaya, tolong hentikan mesinnya.", "form": "止めて"},
    "た": {"jp": "門の前に自転車を止めた。", "id": "Saya memarkir/menghentikan sepeda di depan gerbang.", "form": "止めた"},
    "ない": {"jp": "邪魔になるので、ここに車を止めない。", "id": "Karena menghalangi, saya tidak memarkir mobil di sini.", "form": "止めない"}
  },
  {
    "kosakata": ["jp", "急ぐ", "いそぐ"],
    "arti": ["id", "bergegas / buru-buru"],
    "kamus": {"jp": "遅刻しそうなので急ぐ。", "id": "Karena sepertinya akan terlambat, saya bergegas.", "form": "急ぐ"},
    "ます": {"jp": "時間がないので急ぎます。", "id": "Karena tidak ada waktu, saya akan bergegas.", "form": "急ぎます"},
    "て": {"jp": "急いで駅に向かってください。", "id": "Tolong bergegas menuju stasiun.", "form": "急いで"},
    "た": {"jp": "約束の時間に遅れないように急いだ。", "id": "Saya bergegas agar tidak terlambat dari waktu janjian.", "form": "急いだ"},
    "ない": {"jp": "まだ時間があるので、急がない。", "id": "Karena masih ada waktu, saya tidak buru-buru.", "form": "急がない"}
  },
  {
    "kosakata": ["jp", "遅れる", "おくれる"],
    "arti": ["id", "terlambat"],
    "kamus": {"jp": "明日の会議に遅れる。", "id": "Terlambat untuk rapat besok.", "form": "遅れる"},
    "ます": {"jp": "事故で電車が遅れます。", "id": "Kereta akan terlambat karena kecelakaan.", "form": "遅れます"},
    "て": {"jp": "授業に遅れて、すみません。", "id": "Maaf, saya terlambat ke kelas.", "form": "遅れて"},
    "た": {"jp": "寝坊して学校に遅れた。", "id": "Saya bangun kesiangan dan terlambat ke sekolah.", "form": "遅れた"},
    "ない": {"jp": "明日の約束には絶対に遅れない。", "id": "Saya pasti tidak akan terlambat pada janji besok.", "form": "遅れない"}
  },
  {
    "kosakata": ["jp", "働き始める", "はたらきはじめる"],
    "arti": ["id", "mulai bekerja"],
    "kamus": {"jp": "来月から新しい会社で働き始める。", "id": "Mulai bekerja di perusahaan baru dari bulan depan.", "form": "働き始める"},
    "ます": {"jp": "私は９時から働き始めます。", "id": "Saya mulai bekerja dari jam 9.", "form": "働き始めます"},
    "て": {"jp": "すぐに働き始めてください。", "id": "Tolong segera mulai bekerja.", "form": "働き始めて"},
    "た": {"jp": "去年から日本で働き始めた。", "id": "Saya mulai bekerja di Jepang sejak tahun lalu.", "form": "働き始めた"},
    "ない": {"jp": "まだ準備ができていないので働き始めない。", "id": "Karena belum siap, saya belum mulai bekerja.", "form": "働き始めない"}
  },
  {
    "kosakata": ["jp", "残業する", "ざんぎょうする"],
    "arti": ["id", "kerja lembur"],
    "kamus": {"jp": "今日は仕事が多いので残業する。", "id": "Karena hari ini banyak pekerjaan, saya kerja lembur.", "form": "残業する"},
    "ます": {"jp": "毎日、夜の８時まで残業します。", "id": "Setiap hari, saya kerja lembur sampai jam 8 malam.", "form": "残業します"},
    "て": {"jp": "残業して、このレポートを終わらせます。", "id": "Saya akan kerja lembur dan menyelesaikan laporan ini.", "form": "残業して"},
    "た": {"jp": "昨日は遅くまで残業した。", "id": "Kemarin saya kerja lembur sampai larut.", "form": "残業した"},
    "ない": {"jp": "今日は疲れたので残業しない。", "id": "Karena hari ini lelah, saya tidak kerja lembur.", "form": "残業しない"}
  },
  {
    "kosakata": ["jp", "休憩する", "きゅうけいする"],
    "arti": ["id", "beristirahat"],
    "kamus": {"jp": "疲れたら、少し休憩する。", "id": "Jika lelah, saya beristirahat sebentar.", "form": "休憩する"},
    "ます": {"jp": "１２時から１時間休憩します。", "id": "Saya beristirahat selama 1 jam dari jam 12.", "form": "休憩します"},
    "て": {"jp": "喫茶店で休憩して、コーヒーを飲みましょう。", "id": "Mari beristirahat di kafe dan minum kopi.", "form": "休憩して"},
    "た": {"jp": "公園のベンチで休憩した。", "id": "Saya beristirahat di bangku taman.", "form": "休憩した"},
    "ない": {"jp": "忙しいので、今日は休憩しない。", "id": "Karena sibuk, hari ini saya tidak beristirahat.", "form": "休憩しない"}
  },
  {
    "kosakata": ["jp", "連絡する", "れんらくする"],
    "arti": ["id", "menghubungi"],
    "kamus": {"jp": "後で彼に連絡する。", "id": "Nanti saya akan menghubunginya.", "form": "連絡する"},
    "ます": {"jp": "明日、また連絡します。", "id": "Besok, saya akan menghubungi lagi.", "form": "連絡します"},
    "て": {"jp": "着いたら、私に連絡してください。", "id": "Jika sudah tiba, tolong hubungi saya.", "form": "連絡して"},
    "た": {"jp": "昨日、家族に連絡した。", "id": "Kemarin saya menghubungi keluarga.", "form": "連絡した"},
    "ない": {"jp": "用事がないので、彼には連絡しない。", "id": "Karena tidak ada urusan, saya tidak menghubunginya.", "form": "連絡しない"}
  },
  {
    "kosakata": ["jp", "確認する", "かくにんする"],
    "arti": ["id", "memastikan / mengecek / mengonfirmasi"],
    "kamus": {"jp": "出発する前に荷物を確認する。", "id": "Mengecek barang bawaan sebelum berangkat.", "form": "確認する"},
    "ます": {"jp": "今からスケジュールを確認します。", "id": "Mulai sekarang saya akan mengecek jadwal.", "form": "確認します"},
    "て": {"jp": "この書類の内容を確認してください。", "id": "Tolong cek isi dokumen ini.", "form": "確認して"},
    "た": {"jp": "会議の時間を確認した。", "id": "Saya telah memastikan waktu rapat.", "form": "確認した"},
    "ない": {"jp": "時間がないので、今は確認しない。", "id": "Karena tidak ada waktu, saya tidak mengeceknya sekarang.", "form": "確認しない"}
  },
  {
    "kosakata": ["jp", "予約する", "よやくする"],
    "arti": ["id", "memesan / reservasi"],
    "kamus": {"jp": "インターネットでホテルを予約する。", "id": "Memesan hotel melalui internet.", "form": "予約する"},
    "ます": {"jp": "明日のレストランを予約します。", "id": "Saya akan memesan restoran untuk besok.", "form": "予約します"},
    "て": {"jp": "早めに飛行機のチケットを予約してください。", "id": "Tolong pesan tiket pesawat lebih awal.", "form": "予約して"},
    "た": {"jp": "来月の旅行のためにホテルを予約した。", "id": "Saya telah memesan hotel untuk liburan bulan depan.", "form": "予約した"},
    "ない": {"jp": "まだ予定がわからないので予約しない。", "id": "Karena jadwalnya belum pasti, saya tidak memesan.", "form": "予約しない"}
  },
  {
    "kosakata": ["jp", "案内する", "あんないする"],
    "arti": ["id", "memandu / mengantar (guide)"],
    "kamus": {"jp": "友達に町を案内する。", "id": "Memandu teman berkeliling kota.", "form": "案内する"},
    "ます": {"jp": "私が工場の中を案内します。", "id": "Saya akan memandu di dalam pabrik.", "form": "案内します"},
    "て": {"jp": "お客様を席へ案内してください。", "id": "Tolong antar tamu ke tempat duduknya.", "form": "案内して"},
    "た": {"jp": "昨日、観光客を京都に案内した。", "id": "Kemarin, saya memandu turis ke Kyoto.", "form": "案内した"},
    "ない": {"jp": "道がよくわからないので、案内しない。", "id": "Karena kurang tahu jalannya, saya tidak memandu.", "form": "案内しない"}
  },
  {
    "kosakata": ["jp", "言う", "いう"],
    "arti": ["id", "berkata / mengatakan"],
    "kamus": {"jp": "自分の意見を言う。", "id": "Mengatakan pendapat sendiri.", "form": "言う"},
    "ます": {"jp": "本当のことを言います。", "id": "Saya mengatakan hal yang sebenarnya.", "form": "言います"},
    "て": {"jp": "もう一度言ってください。", "id": "Tolong katakan sekali lagi.", "form": "言って"},
    "た": {"jp": "昨日、彼に本当のことを言った。", "id": "Kemarin saya mengatakan hal sebenarnya kepadanya.", "form": "言った"},
    "ない": {"jp": "嘘は言わない。", "id": "Saya tidak mengatakan kebohongan.", "form": "言わない"}
  },
  {
    "kosakata": ["jp", "答える", "こたえる"],
    "arti": ["id", "menjawab"],
    "kamus": {"jp": "先生の質問に答える。", "id": "Menjawab pertanyaan guru.", "form": "答える"},
    "ます": {"jp": "今からあなたの質問に答えます。", "id": "Mulai sekarang saya akan menjawab pertanyaan Anda.", "form": "答えます"},
    "て": {"jp": "大きな声で答えてください。", "id": "Tolong jawab dengan suara keras.", "form": "答えて"},
    "た": {"jp": "インタビューに正直に答えた。", "id": "Saya telah menjawab wawancara dengan jujur.", "form": "答えた"},
    "ない": {"jp": "わからないので何も答えない。", "id": "Karena tidak tahu, saya tidak menjawab apa-apa.", "form": "答えない"}
  },
  {
    "kosakata": ["jp", "呼ぶ", "よぶ"],
    "arti": ["id", "memanggil"],
    "kamus": {"jp": "タクシーを呼ぶ。", "id": "Memanggil taksi.", "form": "呼ぶ"},
    "ます": {"jp": "友達を家に呼びます。", "id": "Saya memanggil/mengundang teman ke rumah.", "form": "呼びます"},
    "て": {"jp": "医者を呼んでください。", "id": "Tolong panggil dokter.", "form": "呼んで"},
    "た": {"jp": "遠くから友達を呼んだ。", "id": "Saya memanggil teman dari kejauhan.", "form": "呼んだ"},
    "ない": {"jp": "誰も呼具つもりはない。", "id": "Saya tidak berniat memanggil siapa pun.", "form": "呼ばない"}
  },
  {
    "kosakata": ["jp", "呼ばれる", "よばれる"],
    "arti": ["id", "dipanggil"],
    "kamus": {"jp": "名前を呼ばれる。", "id": "Nama saya dipanggil.", "form": "呼ばれる"},
    "ます": {"jp": "病院で名前を呼ばれます。", "id": "Nama saya dipanggil di rumah sakit.", "form": "呼ばれます"},
    "て": {"jp": "先生に呼ばれて、職員室に行った。", "id": "Dipanggil oleh guru, saya pergi ke ruang guru.", "form": "呼ばれて"},
    "た": {"jp": "昨日、社長に呼ばれた。", "id": "Kemarin, saya dipanggil oleh direktur.", "form": "呼ばれた"},
    "ない": {"jp": "今日は誰にも呼ばれない。", "id": "Hari ini saya tidak dipanggil oleh siapa pun.", "form": "呼ばれない"}
  },
  {
    "kosakata": ["jp", "伝える", "つたえる"],
    "arti": ["id", "menyampaikan"],
    "kamus": {"jp": "感謝の気持ちを伝える。", "id": "Menyampaikan rasa terima kasih.", "form": "伝える"},
    "ます": {"jp": "後で彼にメッセージを伝えます。", "id": "Nanti saya akan menyampaikan pesan kepadanya.", "form": "伝えます"},
    "て": {"jp": "田中さんに「よろしく」と伝えてください。", "id": "Tolong sampaikan salam saya kepada Tanaka-san.", "form": "伝えて"},
    "た": {"jp": "大事な連絡をみんなに伝えた。", "id": "Saya telah menyampaikan informasi penting kepada semua orang.", "form": "伝えた"},
    "ない": {"jp": "まだ誰にもこの秘密を伝えない。", "id": "Saya belum menyampaikan rahasia ini kepada siapa pun.", "form": "伝えない"}
  },
  {
    "kosakata": ["jp", "相談する", "そうだんする"],
    "arti": ["id", "berkonsultasi / berdiskusi"],
    "kamus": {"jp": "悩みを友達に相談する。", "id": "Membicarakan/berkonsultasi tentang masalah kepada teman.", "form": "相談する"},
    "ます": {"jp": "明日、先生に相談します。", "id": "Besok saya akan berkonsultasi dengan guru.", "form": "相談します"},
    "て": {"jp": "一人で悩まないで、私に相談してください。", "id": "Jangan dipikirkan sendiri, tolong berkonsultasilah dengan saya.", "form": "相談して"},
    "た": {"jp": "進路について親と相談した。", "id": "Saya berkonsultasi dengan orang tua mengenai masa depan.", "form": "相談した"},
    "ない": {"jp": "誰にも相談しない。", "id": "Saya tidak berkonsultasi dengan siapa pun.", "form": "相談しない"}
  },
  {
    "kosakata": ["jp", "頼む", "たのむ"],
    "arti": ["id", "meminta / memohon / memesan"],
    "kamus": {"jp": "友達に助けを頼む。", "id": "Meminta bantuan kepada teman.", "form": "頼む"},
    "ます": {"jp": "レストランでコーヒーを頼みます。", "id": "Saya memesan kopi di restoran.", "form": "頼みます"},
    "て": {"jp": "この仕事を彼に頼んでください。", "id": "Tolong minta dia untuk mengerjakan tugas ini.", "form": "頼んで"},
    "た": {"jp": "昨日、彼に買い物をお願いした（頼んだ）。", "id": "Kemarin, saya meminta tolong belanja kepadanya.", "form": "頼んだ"},
    "ない": {"jp": "自分でできるので、誰にも頼まない。", "id": "Karena bisa sendiri, saya tidak meminta tolong ke siapa pun.", "form": "頼まない"}
  },
  {
    "kosakata": ["jp", "手伝ってもらう", "てつだってもらう"],
    "arti": ["id", "dibantu / mendapat bantuan (dari orang lain)"],
    "kamus": {"jp": "引っ越しを友達に手伝ってもらう。", "id": "Mendapat bantuan pindahan dari teman.", "form": "手伝ってもらう"},
    "ます": {"jp": "宿題を兄に手伝ってもらいます。", "id": "Saya dibantu kakak laki-laki mengerjakan PR.", "form": "手伝ってもらいます"},
    "て": {"jp": "友達に手伝ってもらって、荷物を運んだ。", "id": "Dibantu oleh teman, saya membawa barang bawaan.", "form": "手伝ってもらって"},
    "た": {"jp": "昨日、彼に仕事を手伝ってもらった。", "id": "Kemarin, saya dibantu olehnya dalam pekerjaan.", "form": "手伝ってもらった"},
    "ない": {"jp": "今日は誰も手伝ってもらわない。", "id": "Hari ini saya tidak meminta bantuan dari siapa pun.", "form": "手伝ってもらわない"}
  },
  {
    "kosakata": ["jp", "ある", "ある"],
    "arti": ["id", "ada (benda mati / tidak bernyawa)"],
    "kamus": {"jp": "机の上に megane（眼鏡）がある。", "id": "Ada kacamata di atas meja.", "form": "ある"},
    "ます": {"jp": "明日、試験があります。", "id": "Besok ada ujian.", "form": "あります"},
    "て": {"jp": "時間があって、よかったです。", "id": "Baguslah/syukurlah karena ada waktu.", "form": "あって"},
    "た": {"jp": "昨日、大切な約束があった。", "id": "Kemarin ada janji penting.", "form": "あった"},
    "ない": {"jp": "今日は何も予定がない。", "id": "Hari ini tidak ada rencana apa pun.", "form": "ない"}
  },
  {
    "kosakata": ["jp", "いる", "いる"],
    "arti": ["id", "ada (benda hidup / bernyawa)"],
    "kamus": {"jp": "部屋に猫がいる。", "id": "Ada kucing di dalam kamar.", "form": "いる"},
    "ます": {"jp": "あそこに田中さんがいます。", "id": "Di sana ada Tanaka-san.", "form": "います"},
    "て": {"jp": "友達が家にいて、賑やかだ。", "id": "Ada teman di rumah, jadi ramai.", "form": "いて"},
    "た": {"jp": "公園に子供がたくさんいた。", "id": "Dulu/tadi ada banyak anak-anak di taman.", "form": "いた"},
    "ない": {"jp": "今、事務所には誰もいない。", "id": "Sekarang tidak ada siapa-siapa di kantor.", "form": "いない"}
  },
  {
    "kosakata": ["jp", "要る", "いる"],
    "arti": ["id", "memerlukan / membutuhkan"],
    "kamus": {"jp": "ビザを取るのにパスポートが要る。", "id": "Membutuhkan paspor untuk membuat visa.", "form": "要る"},
    "ます": {"jp": "旅行に行くのにお金が要ります。", "id": "Membutuhkan uang untuk pergi berlibur.", "form": "要ります"},
    "て": {"jp": "ハサミが要って、友達に借りた。", "id": "Membutuhkan gunting, jadi saya meminjam dari teman.", "form": "要って"},
    "た": {"jp": "手続きにハンコが要った。", "id": "Kemarin/tadi membutuhkan stempel untuk prosedur tersebut.", "form": "要った"},
    "ない": {"jp": "この書類はもう要らない。", "id": "Dokumen ini sudah tidak diperlukan lagi.", "form": "要らない"}
  },
  {
    "kosakata": ["jp", "困る", "こまる"],
    "arti": ["id", "kesusahan / bingung / mengalami kesulitan"],
    "kamus": {"jp": "財布を忘れて困る。", "id": "Kesusahan karena lupa membawa dompet.", "form": "困る"},
    "ます": {"jp": "言葉が通じなくて困ります。", "id": "Saya kesusahan karena tidak bisa saling berkomunikasi.", "form": "困ります"},
    "て": {"jp": "道に迷って困っている。", "id": "Saya sedang kesusahan/bingung karena tersesat.", "form": "困って"},
    "た": {"jp": "雨に降られて困った。", "id": "Kemarin/tadi saya kesusahan karena kehujanan.", "form": "困った"},
    "ない": {"jp": "お金があるので、何も困らない。", "id": "Karena ada uang, saya tidak mengalami kesulitan apa pun.", "form": "困らない"}
  },
  {
    "kosakata": ["jp", "心配する", "しんぱいする"],
    "arti": ["id", "khawatir / mencemaskan"],
    "kamus": {"jp": "子供の将来を心配する。", "id": "Khawatir akan masa depan anak.", "form": "心配する"},
    "ます": {"jp": "テストの結果を心配します。", "id": "Saya khawatir dengan hasil ujian.", "form": "心配します"},
    "て": {"jp": "そんなに心配しないでください。", "id": "Tolong jangan sekhawatir itu.", "form": "心配して"},
    "た": {"jp": "連絡がなくて、とても心配した。", "id": "Karena tidak ada kabar, saya sangat khawatir.", "form": "心配した"},
    "ない": {"jp": "彼は大丈夫だから、心配しない。", "id": "Karena dia tidak apa-apa, saya tidak khawatir.", "form": "心配しない"}
  },
  {
    "kosakata": ["jp", "安心する", "あんしんする"],
    "arti": ["id", "lega / merasa tenang"],
    "kamus": {"jp": "無事に着いて安心する。", "id": "Merasa lega karena tiba dengan selamat.", "form": "安心する"},
    "ます": {"jp": "合格して安心しました。", "id": "Saya merasa lega karena lulus.", "form": "安心します"},
    "て": {"jp": "声を聞いて安心してください。", "id": "Tolong merasa tenanglah setelah mendengar suaranya.", "form": "安心て"},
    "た": {"jp": "手術が成功して安心した。", "id": "Saya merasa lega karena operasinya berhasil.", "form": "安心した"},
    "ない": {"jp": "まだ結果がわからないので安心しない。", "id": "Karena belum tahu hasilnya, saya tidak bisa tenang.", "form": "安心しない"}
  },
  {
    "kosakata": ["jp", "疲れる", "つかれる"],
    "arti": ["id", "lelah / capek"],
    "kamus": {"jp": "長時間歩くと疲れる。", "id": "Jika berjalan waktu lama, terasa lelah.", "form": "疲れる"},
    "ます": {"jp": "今日はたくさん働いて疲れました。", "id": "Hari ini saya lelah karena bekerja banyak.", "form": "疲れます"},
    "て": {"jp": "疲れて、すぐに寝てしまった。", "id": "Karena lelah, saya langsung tertidur.", "form": "疲れて"},
    "た": {"jp": "昨日の運動で体が疲れた。", "id": "Badan merasa lelah karena olahraga kemarin.", "form": "疲れた"},
    "ない": {"jp": "少ししか歩いていないので疲れない。", "id": "Karena baru berjalan sedikit, saya tidak lelah.", "form": "疲れない"}
  },
  {
    "kosakata": ["jp", "痛む", "いたむ"],
    "arti": ["id", "sakit / nyeri"],
    "kamus": {"jp": "虫歯で歯が痛む。", "id": "Gigi terasa sakit/nyeri karena berlubang.", "form": "痛む"},
    "ます": {"jp": "頭が強く痛みます。", "id": "Kepala saya terasa sangat sakit.", "form": "痛みます"},
    "て": {"jp": "お腹が痛んで、動けない。", "id": "Perut terasa sakit sehingga tidak bisa bergerak.", "form": "痛んで"},
    "た": {"jp": "昨日から足が痛んだ。", "id": "Sejak kemarin kaki terasa sakit.", "form": "痛んだ"},
    "ない": {"jp": "薬を飲んだので、もう痛まない。", "id": "Karena sudah minum obat, sekarang tidak sakit lagi.", "form": "痛まない"}
  },
  {
    "kosakata": ["jp", "なる", "なる"],
    "arti": ["id", "menjadi"],
    "kamus": {"jp": "将来、医者になる。", "id": "Di masa depan, saya ingin menjadi dokter.", "form": "なる"},
    "ます": {"jp": "来月、２０歳になります。", "id": "Bulan depan, saya akan menjadi (berumur) 20 tahun.", "form": "なります"},
    "て": {"jp": "暗くなって、何も見えない。", "id": "Menjadi gelap, sehingga tidak kelihatan apa-apa.", "form": "なって"},
    "た": {"jp": "天気は急に寒くなった。", "id": "Cuaca tiba-tiba menjadi dingin.", "form": "なった"},
    "ない": {"jp": "どれだけ練習しても上手にならない。", "id": "Sebanyak apa pun berlatih, saya tidak kunjung menjadi mahir.", "form": "ならない"}
  },
  {
    "kosakata": ["jp", "変わる", "かわる"],
    "arti": ["id", "berubah (subjek + が)"],
    "kamus": {"jp": "季節が変わる。", "id": "Musim berubah.", "form": "変わる"},
    "ます": {"jp": "信号の色が赤に変わります。", "id": "Warna lampu lalu lintas berubah menjadi merah.", "form": "変わります"},
    "て": {"jp": "時代が変わって、生活が便利になった。", "id": "Zaman berubah, dan kehidupan menjadi praktis.", "form": "変わって"},
    "た": {"jp": "彼の意見が急に変わった。", "id": "Pendapatnya tiba-tiba berubah.", "form": "変わった"},
    "ない": {"jp": "昔から何も変わらない。", "id": "Dari dulu tidak ada yang berubah.", "form": "変わらない"}
  },
  {
    "kosakata": ["jp", "変える", "かえる"],
    "arti": ["id", "mengubah (objek + を)"],
    "kamus": {"jp": "髪型を変える。", "id": "Mengubah gaya rambut.", "form": "変える"},
    "ます": {"jp": "パスワードを定期的変えます。", "id": "Saya mengubah kata sandi secara berkala.", "form": "変えます"},
    "て": {"jp": "予定を変更して（変えて）、旅行に行く。", "id": "Mengubah jadwal lalu pergi berlibur.", "form": "変えて"},
    "た": {"jp": "昨日、スマホのカバーを変えた。", "id": "Kemarin, saya mengubah casing ponsel.", "form": "変えた"},
    "ない": {"jp": "自分の考えを変えない。", "id": "Saya tidak akan mengubah pemikiran saya.", "form": "変えない"}
  },
  {
    "kosakata": ["jp", "増える", "ふえる"],
    "arti": ["id", "bertambah / meningkat (subjek + が)"],
    "kamus": {"jp": "人口が増える。", "id": "Jumlah penduduk bertambah.", "form": "増える"},
    "ます": {"jp": "最近、日本語を勉強する人が増えます。", "id": "Belakangan ini, orang yang belajar bahasa Jepang bertambah.", "form": "増えます"},
    "て": {"jp": "体重が増えて、服が入らなくなった。", "id": "Berat badan bertambah, sehingga baju tidak muat lagi.", "form": "増えて"},
    "た": {"jp": "この街は外国人が増えた。", "id": "Kota ini telah bertambah jumlah orang asingnya.", "form": "増えた"},
    "ない": {"jp": "給料が全然増えない。", "id": "Gaji tidak bertambah sama sekali.", "form": "増えない"}
  },
  {
    "kosakata": ["jp", "増やす", "ふやす"],
    "arti": ["id", "menambah / meningkatkan (objek + を)"],
    "kamus": {"jp": "貯金を増やす。", "id": "Menambah tabungan.", "form": "増やす"},
    "ます": {"jp": "運動して筋肉を増やします。", "id": "Saya berolahraga dan menambah otot.", "form": "増やします"},
    "て": {"jp": "本を読んで、語彙を増やしてください。", "id": "Tolong baca buku dan tambahlah kosakata Anda.", "form": "増やして"},
    "た": {"jp": "アルバイトの時間を増やした。", "id": "Saya telah menambah jam kerja paruh waktu.", "form": "増やした"},
    "ない": {"jp": "これ以上、無駄な出費を増やさない。", "id": "Saya tidak akan menambah pengeluaran tak berguna lebih dari ini.", "form": "増やさない"}
  },
  {
    "kosakata": ["jp", "減る", "へる"],
    "arti": ["id", "berkurang (subjek + が)"],
    "kamus": {"jp": "お腹が減る。", "id": "Perut menjadi lapar (berkurang isinya).", "form": "減る"},
    "ます": {"jp": "冬は貯金が減ります。", "id": "Di musim dingin, tabungan berkurang.", "form": "減ります"},
    "て": {"jp": "体重が減って、体が軽くなった。", "id": "Berat badan berkurang, dan tubuh menjadi ringan.", "form": "減って"},
    "た": {"jp": "事故の数が前より減った。", "id": "Jumlah kecelakaan berkurang dari sebelumnya.", "form": "減った"},
    "ない": {"jp": "いくら使ってもお金が減らない。", "id": "Sebanyak apa pun dipakai, uangnya tidak berkurang.", "form": "減らない"}
  },
  {
    "kosakata": ["jp", "減らす", "へらす"],
    "arti": ["id", "mengurangi (objek + を)"],
    "kamus": {"jp": "体重を減らすために運動する。", "id": "Berolahraga untuk mengurangi berat badan.", "form": "減らす"},
    "ます": {"jp": "砂糖の量を減らします。", "id": "Saya mengurangi takaran gula.", "form": "減らします"},
    "て": {"jp": "塩分を減らして、健康に気をつけましょう。", "id": "Mari kurangi kadar garam dan menjaga kesehatan.", "form": "減らして"},
    "た": {"jp": "無駄な買い物を減らした。", "id": "Saya telah mengurangi belanjaan yang tidak berguna.", "form": "減らした"},
    "ない": {"jp": "睡眠時間は減らさないほうがいい。", "id": "Sebaiknya tidak mengurangi waktu tidur.", "form": "減らさない"}
  },
  {
    "kosakata": ["jp", "あげる", "あげる"],
    "arti": ["id", "memberi (kepada orang lain)"],
    "kamus": {"jp": "友達にプレゼントをあげる。", "id": "Memberi hadiah kepada teman.", "form": "あげる"},
    "ます": {"jp": "母の日に花をあげます。", "id": "Saya akan memberi bunga pada Hari Ibu.", "form": "あげます"},
    "て": {"jp": "お菓子をみんなにあげてください。", "id": "Tolong berikan kue ke semua orang.", "form": "あげて"},
    "た": {"jp": "昨日、弟におもちゃをあげた。", "id": "Kemarin saya memberi mainan kepada adik laki-laki.", "form": "あげた"},
    "ない": {"jp": "もう誰も何もあげない。", "id": "Saya tidak akan memberi apa pun lagi kepada siapa pun.", "form": "あげない"}
  },
  {
    "kosakata": ["jp", "もらう", "もらう"],
    "arti": ["id", "menerima / mendapat"],
    "kamus": {"jp": "誕生日プレゼントをもらう。", "id": "Menerima hadiah ulang tahun.", "form": "もらう"},
    "ます": {"jp": "給料をもらいます。", "id": "Saya menerima gaji.", "form": "もらいます"},
    "て": {"jp": "許可をもらってから出かける。", "id": "Saya pergi keluar setelah mendapat izin.", "form": "もらって"},
    "た": {"jp": "友達に素敵なお土産をもらった。", "id": "Saya mendapat oleh-oleh bagus dari teman.", "form": "もらった"},
    "ない": {"jp": "彼からは何ももらわない。", "id": "Saya tidak menerima apa pun darinya.", "form": "もらわない"}
  },
  {
    "kosakata": ["jp", "くれる", "くれる"],
    "arti": ["id", "memberi (orang lain memberi kepada saya/keluarga saya)"],
    "kamus": {"jp": "友達が本をくれる。", "id": "Teman memberi saya buku.", "form": "くれる"},
    "ます": {"jp": "先生がアドバイスをくれます。", "id": "Guru memberi saya nasihat.", "form": "くれます"},
    "て": {"jp": "親切にしてくれてありがとう。", "id": "Terima kasih telah baik kepada saya.", "form": "くれて"},
    "た": {"jp": "昨日、彼がお菓子をくれた。", "id": "Kemarin dia memberi saya kue.", "form": "くれた"},
    "ない": {"jp": "彼は何もくれない。", "id": "Dia tidak memberi saya apa pun.", "form": "くれない"}
  },
  {
    "kosakata": ["jp", "返す", "かえす"],
    "arti": ["id", "mengembalikan"],
    "kamus": {"jp": "図書館に本を返す。", "id": "Mengembalikan buku ke perpustakaan.", "form": "返す"},
    "ます": {"jp": "明日、借りたお金を返します。", "id": "Besok saya akan mengembalikan uang yang dipinjam.", "form": "返します"},
    "て": {"jp": "使ったら元の場所へ返してください。", "id": "Setelah dipakai, tolong kembalikan ke tempat semula.", "form": "返して"},
    "た": {"jp": "先週借りたDVDを返した。", "id": "Saya telah mengembalikan DVD yang dipinjam minggu lalu.", "form": "返した"},
    "ない": {"jp": "約束の日にまだ返さない。", "id": "Saya belum mengembalikannya pada hari yang dijanjikan.", "form": "返さない"}
  },
  {
    "kosakata": ["jp", "借りる", "かりる"],
    "arti": ["id", "meminjam"],
    "kamus": {"jp": "図書館で本を借りる。", "id": "Meminjam buku di perpustakaan.", "form": "借りる"},
    "ます": {"jp": "友達から自転車を借ります。", "id": "Saya meminjam sepeda dari teman.", "form": "借ります"},
    "て": {"jp": "傘を借りて帰った。", "id": "Saya meminjam payung lalu pulang.", "form": "借りて"},
    "た": {"jp": "昨日、銀行でお金を借りた。", "id": "Kemarin saya meminjam uang di bank.", "form": "借りた"},
    "ない": {"jp": "人からはお金を借りない。", "id": "Saya tidak meminjam uang dari orang lain.", "form": "借りない"}
  },
  {
    "kosakata": ["jp", "貸す", "かす"],
    "arti": ["id", "meminjamkan"],
    "kamus": {"jp": "友達に消しゴムを貸す。", "id": "Meminjamkan penghapus kepada teman.", "form": "貸す"},
    "ます": {"jp": "私のペンを貸します。", "id": "Saya akan meminjamkan pulpen saya.", "form": "貸します"},
    "て": {"jp": "ちょっと辞書を貸してください。", "id": "Tolong pinjamkan kamusnya sebentar.", "form": "貸して"},
    "た": {"jp": "彼に車を貸した。", "id": "Saya telah meminjamkan mobil kepadanya.", "form": "貸した"},
    "ない": {"jp": "大切な物だから誰にも貸さない。", "id": "Karena barang berharga, saya tidak meminjamkannya kepada siapa pun.", "form": "貸さない"}
  },
  {
    "kosakata": ["jp", "払う", "はらう"],
    "arti": ["id", "membayar"],
    "kamus": {"jp": "現金で代金を払う。", "id": "Membayar biaya dengan uang tunai.", "form": "払う"},
    "ます": {"jp": "クレジットカードで払います。", "id": "Saya akan membayar dengan kartu kredit.", "form": "払います"},
    "て": {"jp": "レジでお金を払ってください。", "id": "Tolong bayar uangnya di kasir.", "form": "払って"},
    "た": {"jp": "昨日、家賃を払った。", "id": "Kemarin saya telah membayar uang sewa rumah.", "form": "払った"},
    "ない": {"jp": "お金がないので、まだ払わない。", "id": "Karena tidak ada uang, saya belum membayar.", "form": "払わない"}
  },
  {
    "kosakata": ["jp", "選ぶ", "えらぶ"],
    "arti": ["id", "memilih"],
    "kamus": {"jp": "プレゼントを選ぶ。", "id": "Memilih hadiah.", "form": "選ぶ"},
    "ます": {"jp": "メニューから好きな料理を選びます。", "id": "Saya memilih masakan yang disukai dari menu.", "form": "選びます"},
    "て": {"jp": "一番いいものを選んでください。", "id": "Tolong pilih yang paling bagus.", "form": "選んで"},
    "た": {"jp": "新しい服を選んだ。", "id": "Saya telah memilih baju baru.", "form": "選んだ"},
    "ない": {"jp": "迷っていて、まだ選ばない。", "id": "Because bingung, saya belum memilih.", "form": "選ばない"}
  },
  {
    "kosakata": ["jp", "届ける", "とどける"],
    "arti": ["id", "mengirimkan / menyampaikan / mengantarkan"],
    "kamus": {"jp": "荷物を家に届ける。", "id": "Mengantarkan barang ke rumah.", "form": "届ける"},
    "ます": {"jp": "明日、書類をオフィスに届けます。", "id": "Besok saya akan mengantarkan dokumen ke kantor.", "form": "届けます"},
    "て": {"jp": "警察に落とし物を届けてください。", "id": "Tolong laporkan/serahkan barang hilang ke polisi.", "form": "届けて"},
    "た": {"jp": "手紙を届けてくれた。", "id": "Dia telah mengantarkan surat.", "form": "届けた"},
    "ない": {"jp": "今日は荷物を届けない。", "id": "Hari ini saya tidak mengantarkan barang.", "form": "届けない"}
  },
  {
    "kosakata": ["jp", "届く", "とどく"],
    "arti": ["id", "sampai / tiba (barang/surat, subjek + が)"],
    "kamus": {"jp": "注文した荷物が届く。", "id": "Barang yang dipesan sampai.", "form": "届く"},
    "ます": {"jp": "明日、手紙が届きます。", "id": "Besok suratnya akan sampai.", "form": "届きます"},
    "て": {"jp": "荷物が届いて、安心した。", "id": "Barangnya sampai, saya merasa lega.", "form": "届いて"},
    "た": {"jp": "今朝、荷物が届いた。", "id": "Pagi ini barangnya sudah sampai.", "form": "届いた"},
    "ない": {"jp": "まだ荷物が届かない。", "id": "Barangnya belum juga sampai.", "form": "届かない"}
  },
  {
    "kosakata": ["jp", "送る", "おくる"],
    "arti": ["id", "mengirim / mengantar (orang)"],
    "kamus": {"jp": "友達にメールを送る。", "id": "Mengirim email kepada teman.", "form": "送る"},
    "ます": {"jp": "車で駅まで送ります。", "id": "Saya akan mengantar ke stasiun dengan mobil.", "form": "送ります"},
    "て": {"jp": "写真をメールで送ってください。", "id": "Tolong kirim foto lewat email.", "form": "送って"},
    "た": {"jp": "昨日、両親に荷物を送った。", "id": "Kemarin saya mengirim barang ke orang tua.", "form": "送った"},
    "ない": {"jp": "今日は何も送らない。", "id": "Hari ini saya tidak mengirim apa-apa.", "form": "送らない"}
  },
  {
    "kosakata": ["jp", "切る", "きる"],
    "arti": ["id", "memotong / mematikan (telepon/listrik)"],
    "kamus": {"jp": "ハサミで紙を切る。", "id": "Memotong kertas dengan gunting.", "form": "切る"},
    "ます": {"jp": "包丁で野菜を切ります。", "id": "Saya memotong sayuran dengan pisau dapur.", "form": "切ります"},
    "て": {"jp": "電話を切って、もう一度かけてください。", "id": "Tolong tutup/matikan teleponnya lalu telepon sekali lagi.", "form": "切って"},
    "た": {"jp": "昨日、髪を切った。", "id": "Kemarin saya memotong rambut.", "form": "切った"},
    "ない": {"jp": "爪を切らない。", "id": "Saya tidak memotong kuku.", "form": "切らない"}
  },
  {
    "kosakata": ["jp", "押す", "おす"],
    "arti": ["id", "menekan / mendorong"],
    "kamus": {"jp": "エレベーターのボタンを押す。", "id": "Menekan tombol lift.", "form": "押す"},
    "ます": {"jp": "ここにハンコを押します。", "id": "Saya membubuhkan/menekan stempel di sini.", "form": "押します"},
    "て": {"jp": "ドアを強く押してください。", "id": "Tolong dorong pintunya dengan kuat.", "form": "押して"},
    "た": {"jp": "スイッチを押した。", "id": "Saya telah menekan sakelar/tombol.", "form": "押した"},
    "ない": {"jp": "無理に押さない。", "id": "Saya tidak mendorong secara paksa.", "form": "押さない"}
  },
  {
    "kosakata": ["jp", "引く", "ひく"],
    "arti": ["id", "menarik / mengurang"],
    "kamus": {"jp": "ドアを引く。", "id": "Menarik pintu.", "form": "引く"},
    "ます": {"jp": "辞書を引きます。", "id": "Saya membuka/mencari di kamus.", "form": "引きます"},
    "て": {"jp": "綱を引いて、遊ぶ。", "id": "Menarik tali lalu bermain.", "form": "引いて"},
    "た": {"jp": "風邪を引いた。", "id": "Saya kena flu/masuk angin.", "form": "引いた"},
    "ない": {"jp": "線を引かない。", "id": "Saya tidak menarik/membuat garis.", "form": "引かない"}
  },
  {
    "kosakata": ["jp", "並ぶ", "ならぶ"],
    "arti": ["id", "mengantre / berbaris"],
    "kamus": {"jp": "店の前に並ぶ。", "id": "Mengantre di depan toko.", "form": "並ぶ"},
    "ます": {"jp": "列に並びます。", "id": "Saya berbaris dalam antrean.", "form": "並びます"},
    "て": {"jp": "順番に並んで待ってください。", "id": "Tolong berbaris secara teratur dan tunggu.", "form": "並んで"},
    "た": {"jp": "チケットを買うために一時間並んだ。", "id": "Saya mengantre selama satu jam untuk membeli tiket.", "form": "並んだ"},
    "ない": {"jp": "混んでいるので並ばない。", "id": "Karena ramai, saya tidak mengantre.", "form": "並ばない"}
  },
  {
    "kosakata": ["jp", "集める", "あつめる"],
    "arti": ["id", "mengumpulkan"],
    "kamus": {"jp": "趣味で切手を集める。", "id": "Mengumpulkan perangko sebagai hobi.", "form": "集める"},
    "ます": {"jp": "情報を集めます。", "id": "Saya mengumpulkan informasi.", "form": "集めます"},
    "て": {"jp": "書類を集めて、提出してください。", "id": "Tolong kumpulkan dokumen dan kumpulkan/serahkan.", "form": "集めて"},
    "た": {"jp": "寄付金をたくさん集めた。", "id": "Saya telah mengumpulkan banyak uang donasi.", "form": "集めた"},
    "ない": {"jp": "古いものは集めない。", "id": "Saya tidak mengumpulkan barang-barang lama.", "form": "集めない"}
  },
  {
    "kosakata": ["jp", "調べる", "しらべる"],
    "arti": ["id", "memeriksa / menyelidiki / mencari tahu"],
    "kamus": {"jp": "辞書で言葉の意味を調べる。", "id": "Mencari arti kata di kamus.", "form": "調べる"},
    "ます": {"jp": "インターネットで電車の時間を調べます。", "id": "Saya mencari tahu jadwal kereta di internet.", "form": "調べます"},
    "て": {"jp": "詳しく調べてみてください。", "id": "Tolong coba periksa/cari tahu secara terperinci.", "form": "調べて"},
    "た": {"jp": "昨日、ホテルの予約方法を調べた。", "id": "Kemarin, saya mencari tahu cara reservasi hotel.", "form": "調べた"},
    "ない": {"jp": "興味がないので調べない。", "id": "Karena tidak tertarik, saya tidak mencari tahu.", "form": "調べない"}
  },
  {
    "kosakata": ["jp", "考える", "かんがえる"],
    "arti": ["id", "memikirkan / memikirkan solusi"],
    "kamus": {"jp": "将来について考える。", "id": "Memikirkan tentang masa depan.", "form": "考える"},
    "ます": {"jp": "問題の解決策を考えます。", "id": "Saya akan memikirkan jalan keluar dari masalah ini.", "form": "考えます"},
    "て": {"jp": "よく考えてから答えてください。", "id": "Tolong jawab setelah memikirkannya baik-baik.", "form": "考えて"},
    "た": {"jp": "いいアイデアを考えた。", "id": "Saya telah memikirkan ide yang bagus.", "form": "考えた"},
    "ない": {"jp": "何も考えないで寝る。", "id": "Tidur tanpa memikirkan apa pun.", "form": "考えない"}
  },
  {
    "kosakata": ["jp", "続ける", "つづける"],
    "arti": ["id", "melanjutkan / meneruskan"],
    "kamus": {"jp": "毎日勉強を続ける。", "id": "Melanjutkan belajar setiap hari.", "form": "続ける"},
    "ます": {"jp": "これからも仕事を続けます。", "id": "Saya akan terus melanjutkan pekerjaan ini ke depannya.", "form": "続けます"},
    "て": {"jp": "あきらめないで、仕事を続けてください。", "id": "Jangan menyerah, tolong lanjutkan pekerjaannya.", "form": "続けて"},
    "た": {"jp": "三年間、サッカーを続けた。", "id": "Saya telah melanjutkan/bermain sepak bola selama tiga tahun.", "form": "続けた"},
    "ない": {"jp": "無理なら続けないほうがいい。", "id": "Jika mustahil, sebaiknya tidak dilanjutkan.", "form": "続けない"}
  },
  {
    "kosakata": ["jp", "決める", "きめる"],
    "arti": ["id", "menentukan / memutuskan"],
    "kamus": {"jp": "旅行の行き先を決める。", "id": "Menentukan tujuan wisata.", "form": "決める"},
    "ます": {"jp": "明日、メニューを決めます。", "id": "Besok saya akan memutuskan menunya.", "form": "決めます"},
    "て": {"jp": "自分で考えて決めてください。", "id": "Tolong pikirkan dan putuskan sendiri.", "form": "決めて"},
    "た": {"jp": "進路を自分で決めた。", "id": "Saya memutuskan jalan masa depan saya sendiri.", "form": "決めた"},
    "ない": {"jp": "まだ何も決めない。", "id": "Saya belum memutuskan apa pun.", "form": "決めない"}
  },
  {
    "kosakata": ["jp", "着く", "つく"],
    "arti": ["id", "tiba / sampai"],
    "kamus": {"jp": "もうすぐ駅に着く。", "id": "Sebentar lagi sampai di stasiun.", "form": "着く"},
    "ます": {"jp": "９時に会社に着きます。", "id": "Saya akan tiba di kantor pada jam 9.", "form": "着きます"},
    "て": {"jp": "着いてから、連絡してください。", "id": "Tolong hubungi saya setelah sampai.", "form": "着いて"},
    "た": {"jp": "無事にホテルに着いた。", "id": "Saya telah tiba di hotel dengan selamat.", "form": "着いた"},
    "ない": {"jp": "バスが遅れて、なかなか着かない。", "id": "Busnya terlambat sehingga tidak kunjung sampai.", "form": "着かない"}
  },
  {
    "kosakata": ["jp", "乗り換える", "のりかえる"],
    "arti": ["id", "transit / berganti kendaraan"],
    "kamus": {"jp": "新宿駅で電車を乗り換える。", "id": "Berganti kereta di Stasiun Shinjuku.", "form": "乗り換える"},
    "ます": {"jp": "次の駅でバスに乗り換えます。", "id": "Saya akan berganti ke bus di stasiun berikutnya.", "form": "乗り換えます"},
    "て": {"jp": "地下鉄に乗り換えて行きます。", "id": "Saya pergi dengan berganti ke kereta bawah tanah.", "form": "乗り換えて"},
    "た": {"jp": "途中で新幹線に乗り換えた。", "id": "Di tengah perjalanan saya berganti ke Shinkansen.", "form": "乗り換えた"},
    "ない": {"jp": "直通だから乗り換えない。", "id": "Karena langsung, saya tidak berganti kendaraan.", "form": "乗り換えない"}
  },
  {
    "kosakata": ["jp", "呼ぶ", "よぶ"],
    "arti": ["id", "memanggil / mengundang"],
    "kamus": {"jp": "友達を家に呼ぶ。", "id": "Memanggil/mengundang teman ke rumah.", "form": "呼ぶ"},
    "ます": {"jp": "タクシーを呼びます。", "id": "Saya akan memanggil taksi.", "form": "呼びます"},
    "て": {"jp": "大きな声で呼んでください。", "id": "Tolong panggil dengan suara keras.", "form": "呼んで"},
    "た": {"jp": "昨日、医者を呼んだ。", "id": "Kemarin saya memanggil dokter.", "form": "呼んだ"},
    "ない": {"jp": "誰も呼ばない。", "id": "Saya tidak memanggil siapa pun.", "form": "呼ばない"}
  },
  {
    "kosakata": ["jp", "伝わる", "つたわる"],
    "arti": ["id", "tersampaikan / tersiar"],
    "kamus": {"jp": "気持ちが相手に伝わる。", "id": "Perasaan tersampaikan kepada lawan bicara.", "form": "伝わる"},
    "ます": {"jp": "熱意が皆に伝わります。", "id": "Antusiasme akan tersampaikan kepada semua orang.", "form": "伝わります"},
    "て": {"jp": "想いが伝わって、嬉しい。", "id": "Saya senang karena perasaan saya tersampaikan.", "form": "伝わって"},
    "た": {"jp": "ニュースがすぐに伝わった。", "id": "Berita itu segera tersiar/tersampaikan.", "form": "伝わった"},
    "ない": {"jp": "言葉が違って、意味が伝わらない。", "id": "Karena bahasanya berbeda, maknanya tidak tersampaikan.", "form": "伝わらない"}
  },
  {
    "kosakata": ["jp", "知らせる", "しらせる"],
    "arti": ["id", "memberitahukan / mengabarkan"],
    "kamus": {"jp": "結果をメールで知らせる。", "id": "Memberitahukan hasil melalui email.", "form": "知らせる"},
    "ます": {"jp": "予定が決まったら知らせます。", "id": "Saya akan memberitahu jika jadwal sudah diputuskan.", "form": "知らせます"},
    "て": {"jp": "時間を私に知らせてください。", "id": "Tolong beritahukan waktunya kepada saya.", "form": "知らせて"},
    "た": {"jp": "昨日、変更をみんなに知らせた。", "id": "Kemarin saya telah memberitahukan perubahannya kepada semua orang.", "form": "知らせた"},
    "ない": {"jp": "まだ確定していないので知らせない。", "id": "Karena belum pasti, saya tidak memberitahukannya.", "form": "知らせない"}
  },
  {
    "kosakata": ["jp", "住む", "すむ"],
    "arti": ["id", "tinggal / bermukim"],
    "kamus": {"jp": "東京に住む。", "id": "Tinggal di Tokyo.", "form": "住む"},
    "ます": {"jp": "静かな町に住みます。", "id": "Saya tinggal di kota yang tenang.", "form": "住みます"},
    "て": {"jp": "日本に住んで、３年になる。", "id": "Sudah 3 tahun saya tinggal di Jepang.", "form": "住んで"},
    "た": {"jp": "昔、大阪に住んでいた（住んだ）。", "id": "Dulu saya pernah tinggal di Osaka.", "form": "住んだ"},
    "ない": {"jp": "都会には住まない。", "id": "Saya tidak tinggal di kota besar.", "form": "住まない"}
  },
  {
    "kosakata": ["jp", "生きる", "いきる"],
    "arti": ["id", "hidup"],
    "kamus": {"jp": "自由に生きる。", "id": "Hidup dengan bebas.", "form": "生きる"},
    "ます": {"jp": "力強く生きます。", "id": "Saya akan hidup dengan kuat.", "form": "生きます"},
    "て": {"jp": "懸命に生きて、夢を叶える。", "id": "Hidup bersungguh-sungguh dan mewujudkan impian.", "form": "生きて"},
    "た": {"jp": "彼は100歳まで生きた。", "id": "Dia telah hidup sampai usia 100 tahun.", "form": "生きた"},
    "ない": {"jp": "目標がないと、面白く生きられない（生きない）。", "id": "Tanpa tujuan, hidup terasa tidak menyenangkan.", "form": "生きない"}
  },
  {
    "kosakata": ["jp", "死ぬ", "しぬ"],
    "arti": ["id", "mati / meninggal"],
    "kamus": {"jp": "人は誰でもいつか死ぬ。", "id": "Semua orang suatu saat akan mati.", "form": "死ぬ"},
    "ます": {"jp": "植物が水不足で死にます（枯れます）。", "id": "Tanaman mati karena kekurangan air.", "form": "死にます"},
    "て": {"jp": "金魚が死んで、悲しい。", "id": "Saya sedih karena ikan koki mati.", "form": "死んで"},
    "た": {"jp": "去年、飼っていた犬が死んだ。", "id": "Tahun lalu, anjing peliharaan saya mati.", "form": "死んだ"},
    "ない": {"jp": "この虫は簡単には死なない。", "id": "Serangga ini tidak mudah mati.", "form": "死なない"}
  },
  {
    "kosakata": ["jp", "間に合う", "まにあう"],
    "arti": ["id", "keburu / tepat waktu"],
    "kamus": {"jp": "電車の時間に間に合う。", "id": "Tepat waktu untuk jadwal kereta.", "form": "間に合う"},
    "ます": {"jp": "走れば９時に間に合います。", "id": "Kalau berlari, akan keburu jam 9.", "form": "間に合います"},
    "て": {"jp": "間に合って、よかった。", "id": "Baguslah karena bisa keburu/tepat waktu.", "form": "間に合って"},
    "た": {"jp": "急いだので会議に間に合った。", "id": "Karena bergegas, saya tepat waktu menghadiri rapat.", "form": "間に合った"},
    "ない": {"jp": "渋滞でバスが間に合わない。", "id": "Bus tidak keburu/terlambat karena kemacetan.", "form": "間に合わない"}
  },
  {
    "kosakata": ["jp", "遅刻する", "ちこくする"],
    "arti": ["id", "terlambat"],
    "kamus": {"jp": "学校に遅刻する。", "id": "Terlambat datang ke sekolah.", "form": "遅刻する"},
    "ます": {"jp": "寝坊すると遅刻します。", "id": "Kalau bangun kesiangan akan terlambat.", "form": "遅刻します"},
    "て": {"jp": "遅刻して、先生に怒られた。", "id": "Saya terlambat dan dimarahi guru.", "form": "遅刻して"},
    "た": {"jp": "昨日、電車が遅れて遅刻した。", "id": "Kemarin kereta terlambat sehingga saya datang terlambat.", "form": "遅刻した"},
    "ない": {"jp": "明日は絶対に遅刻しない。", "id": "Besok saya pasti tidak akan terlambat.", "form": "遅刻しない"}
  },
  {
    "kosakata": ["jp", "思う", "おもう"],
    "arti": ["id", "berpikir / menganggap / merasa"],
    "kamus": {"jp": "正しいと思う。", "id": "Saya berpikir itu benar.", "form": "思う"},
    "ます": {"jp": "そう思います。", "id": "Saya berpikir demikian.", "form": "思います"},
    "て": {"jp": "ずっとあなたのことを思っている。", "id": "Saya selalu memikirkanmu.", "form": "思って"},
    "た": {"jp": "無理だと思った。", "id": "Saya tadinya berpikir itu tidak mungkin.", "form": "思った"},
    "ない": {"jp": "そうは思わない。", "id": "Saya tidak berpikir begitu.", "form": "思わない"}
  },
  {
    "kosakata": ["jp", "感じる", "かんじる"],
    "arti": ["id", "merasakan"],
    "kamus": {"jp": "春の訪れを感じる。", "id": "Merasakan kedatangan musim semi.", "form": "感じる"},
    "ます": {"jp": "少し痛みを感じます。", "id": "Saya merasa sedikit sakit.", "form": "感じます"},
    "て": {"jp": "不安を感じて、眠れない。", "id": "Saya merasa cemas dan tidak bisa tidur.", "form": "感じて"},
    "た": {"jp": "彼の優しさを感じた。", "id": "Saya merasakan kebaikannya.", "form": "感じた"},
    "ない": {"jp": "特に危険を感じない。", "id": "Saya tidak merasa bahaya secara khusus.", "form": "感じない"}
  },
  {
    "kosakata": ["jp", "笑う", "わらう"],
    "arti": ["id", "tertawa / tersenyum"],
    "kamus": {"jp": "面白い話を聞いて笑う。", "id": "Tertawa mendengar cerita lucu.", "form": "笑う"},
    "ます": {"jp": "彼女はいつも明るく笑います。", "id": "Dia selalu tertawa dengan ceria.", "form": "笑います"},
    "て": {"jp": "そんなに笑わないでください。", "id": "Tolong jangan tertawa seperti itu.", "form": "笑って"},
    "た": {"jp": "テレビを見て大声で笑った。", "id": "Saya tertawa keras melihat TV.", "form": "笑った"},
    "ない": {"jp": "今日は一度も笑わない。", "id": "Hari ini saya tidak tertawa sekali pun.", "form": "笑わない"}
  },
  {
    "kosakata": ["jp", "泣く", "なく"],
    "arti": ["id", "menangis"],
    "kamus": {"jp": "悲しい映画を見て泣く。", "id": "Menangis menonton film sedih.", "form": "泣く"},
    "ます": {"jp": "赤ちゃんがよく泣きます。", "id": "Bayi sering menangis.", "form": "泣きます"},
    "て": {"jp": "泣かないで、話してください。", "id": "Jangan menangis, tolong bicaralah.", "form": "泣いて"},
    "た": {"jp": "悔しくて泣いた。", "id": "Saya menangis karena kesal/kecewa.", "form": "泣いた"},
    "ない": {"jp": "どんなに辛くても泣かない。", "id": "Secapa apa pun, saya tidak akan menangis.", "form": "泣かない"}
  },
  {
    "kosakata": ["jp", "怒る", "おこる"],
    "arti": ["id", "marah"],
    "kamus": {"jp": "嘘をつかれて怒る。", "id": "Marah karena dibohongi.", "form": "怒る"},
    "ます": {"jp": "父はめったに怒りません。", "id": "Ayah saya jarang sekali marah.", "form": "怒ります"},
    "て": {"jp": "そんなに怒らないでください。", "id": "Tolong jangan marah seperti itu.", "form": "怒って"},
    "た": {"jp": "宿題を忘れて先生に怒られた（怒った）。", "id": "Saya dimarahi guru (atau: guru marah) karena lupa PR.", "form": "怒った"},
    "ない": {"jp": "彼は優しくて全然怒らない。", "id": "Dia baik hati dan tidak pernah marah sama sekali.", "form": "怒らない"}
  },
  {
    "kosakata": ["jp", "始まる", "はじまる"],
    "arti": ["id", "dimulai (subjek + が)"],
    "kamus": {"jp": "もうすぐ授業が始まる。", "id": "Sebentar lagi pelajaran akan dimulai.", "form": "始まる"},
    "ます": {"jp": "会議は１０時に始まります。", "id": "Rapat dimulai jam 10.", "form": "始まります"},
    "て": {"jp": "映画が始まって、静かになった。", "id": "Film dimulai, dan menjadi hening.", "form": "始まって"},
    "た": {"jp": "雨が急に降り始まった（始まった）。", "id": "Acara/kegiatan telah dimulai.", "form": "始まった"},
    "ない": {"jp": "時間になっても始まらない。", "id": "Meskipun sudah waktunya, belum kunjung dimulai.", "form": "始まらない"}
  },
  {
    "kosakata": ["jp", "終わる", "おわる"],
    "arti": ["id", "selesai / berakhir (subjek + が)"],
    "kamus": {"jp": "午後５時に仕事が終わる。", "id": "Pekerjaan selesai jam 5 sore.", "form": "終わる"},
    "ます": {"jp": "テストは３時に終わります。", "id": "Ujian akan selesai jam 3.", "form": "終わります"},
    "て": {"jp": "授業が終わってから遊ぶ。", "id": "Bermain setelah pelajaran selesai.", "form": "終わって"},
    "た": {"jp": "夏休みが昨日終わった。", "id": "Liburan musim panas telah berakhir kemarin.", "form": "終わった"},
    "ない": {"jp": "宿題がまだ終わらない。", "id": "PR-nya belum selesai juga.", "form": "終わらない"}
  },
  {
    "kosakata": ["jp", "開く", "あく"],
    "arti": ["id", "terbuka"],
    "kamus": {"jp": "風で窓が開く。", "id": "Jendela terbuka karena angin.", "form": "開く"},
    "ます": {"jp": "デパートは１０時に開きます。", "id": "Department store buka jam 10.", "form": "開きます"},
    "て": {"jp": "ドアが開いて、人が入ってきた。", "id": "Pintu terbuka dan orang masuk.", "form": "開いて"},
    "た": {"jp": "自動ドアが開いた。", "id": "Pintu otomatis terbuka.", "form": "開いた"},
    "ない": {"jp": "鍵がかかっていて開かない。", "id": "Terkunci sehingga tidak bisa terbuka.", "form": "開かない"}
  },
  {
    "kosakata": ["jp", "閉まる", "しまる"],
    "arti": ["id", "tertutup / tutup"],
    "kamus": {"jp": "夜遅くに店が閉まる。", "id": "Toko tutup pada larut malam.", "form": "閉まる"},
    "ます": {"jp": "銀行は４時に閉まります。", "id": "Bank tutup pada jam 4.", "form": "閉まります"},
    "て": {"jp": "ドアが閉まって、出発した。", "id": "Pintu tertutup lalu berangkat.", "form": "閉まって"},
    "た": {"jp": "お店はもう閉まった。", "id": "Tokonya sudah tutup.", "form": "閉まった"},
    "ない": {"jp": "壊れていてドアが閉まらない。", "id": "Karena rusak, pintunya tidak mau tertutup.", "form": "閉まらない"}
  },
  {
    "kosakata": ["jp", "治る", "なおる"],
    "arti": ["id", "sembuh / pulih (penyakit/luka)"],
    "kamus": {"jp": "薬を飲めば風邪が治る。", "id": "Jika minum obat, flu akan sembuh.", "form": "治る"},
    "ます": {"jp": "すぐに病気が治ります。", "id": "Penyakitnya akan segera sembuh.", "form": "治ります"},
    "て": {"jp": "怪我が治って、安心した。", "id": "Luka sudah sembuh, saya merasa lega.", "form": "治って"},
    "た": {"jp": "おかげさまで病気が治った。", "id": "Berkat doa/bantuan Anda, penyakitnya sudah sembuh.", "form": "治った"},
    "ない": {"jp": "なかなか風邪が治らない。", "id": "Flunya tak kunjung sembuh.", "form": "治らない"}
  },
  {
    "kosakata": ["jp", "治す", "なおす"],
    "arti": ["id", "menyembuhkan / mengobati"],
    "kamus": {"jp": "医者が病気を治す。", "id": "Dokter menyembuhkan penyakit.", "form": "治す"},
    "ます": {"jp": "虫歯を治します。", "id": "Saya mengobati/menyembuhkan gigi berlubang.", "form": "治します"},
    "て": {"jp": "しっかりと風邪を治してください。", "id": "Tolong sembuhkan flumu dengan benar.", "form": "治して"},
    "た": {"jp": "休養して体を治した。", "id": "Saya beristirahat dan memulihkan/menyembuhkan tubuh.", "form": "治した"},
    "ない": {"jp": "自分で病気を治せない（治さない）。", "id": "Tidak mengobati penyakit secara mandiri.", "form": "治さない"}
  },
  {
    "kosakata": ["jp", "する", "する"],
    "arti": ["id", "melakukan / mengerjakan"],
    "kamus": {"jp": "毎日運動をする。", "id": "Melakukan olahraga setiap hari.", "form": "する"},
    "ます": {"jp": "これから宿題をします。", "id": "Mulai sekarang saya akan mengerjakan PR.", "form": "します"},
    "て": {"jp": "準備をして、出かけます。", "id": "Saya melakukan persiapan lalu pergi keluar.", "form": "して"},
    "た": {"jp": "昨日、サッカーをした。", "id": "Kemarin saya bermain/melakukan sepak bola.", "form": "した"},
    "ない": {"jp": "今日は何も勉強しない。", "id": "Hari ini saya tidak melakukan pelajaran/belajar apa pun.", "form": "しない"}
  },
  {
    "kosakata": ["jp", "始まっている", "はじまっている"],
    "arti": ["id", "sudah dimulai / sedang berlangsung"],
    "kamus": {"jp": "会場に着いた時、既に映画が始まっている。", "id": "Saat tiba di lokasi, filmnya sudah dimulai.", "form": "始まっている"},
    "ます": {"jp": "会議はもう始まっています。", "id": "Rapatnya sudah dimulai.", "form": "始まっています"},
    "て": {"jp": "授業が始まっているので、静かにしてください。", "id": "Karena pelajaran sudah dimulai, tolong tenang.", "form": "始まっていて"},
    "た": {"jp": "その時、イベントはもう始まっていた。", "id": "Pada saat itu, acaranya sudah dimulai.", "form": "始まっていた"},
    "ない": {"jp": "まだ試合は始まっていない。", "id": "Pertandingannya belum dimulai.", "form": "始まっていない"}
  },
  {
    "kosakata": ["jp", "終わっている", "おわっている"],
    "arti": ["id", "sudah selesai"],
    "kamus": {"jp": "家に着く頃には、番組が終っている。", "id": "Saat sampai rumah, acara televisinya sudah selesai.", "form": "終わっている"},
    "ます": {"jp": "テストはもう終わっています。", "id": "Ujiannya sudah selesai.", "form": "終わっています"},
    "て": {"jp": "仕事が we終わり（終わって）いるので、帰ってもいいです。", "id": "Karena pekerjaan sudah selesai, Anda boleh pulang.", "form": "終わっていて"},
    "た": {"jp": "受付時間は既に終わっていた。", "id": "Waktu pendaftaran sudah selesai pada saat itu.", "form": "終わっていた"},
    "ない": {"jp": "まだ宿題は終わっていない。", "id": "PR-nya belum selesai.", "form": "終わっていない"}
  },
  {
    "kosakata": ["jp", "亡くなる", "なくなる"],
    "arti": ["id", "meninggal dunia (bentuk halus dari 死ぬ)"],
    "kamus": {"jp": "人はいつか亡くなる。", "id": "Manusia suatu saat akan meninggal dunia.", "form": "亡くなる"},
    "ます": {"jp": "先月、祖父が亡くなりました。", "id": "Bulan lalu, kakek saya meninggal dunia.", "form": "亡くなりました"},
    "て": {"jp": "有名人が亡くなって、とても悲しい。", "id": "Tokoh terkenal meninggal dunia, saya sangat sedih.", "form": "亡くなって"},
    "た": {"jp": "昨年、愛犬が亡くなった。", "id": "Tahun lalu, anjing kesayangan saya meninggal dunia.", "form": "亡くなった"},
    "ない": {"jp": "幸い、事故での死者は亡くなっていない（出ていない）。", "id": "Beruntung, tidak ada korban yang meninggal dalam kecelakaan.", "form": "亡くならない"}
  },
  {
    "kosakata": ["jp", "育てる", "そだてる"],
    "arti": ["id", "merawat / membesarkan / mendidik"],
    "kamus": {"jp": "愛情を持って子供を育てる。", "id": "Membesarkan anak dengan kasih sayang.", "form": "育てる"},
    "ます": {"jp": "庭で野菜や花を育てます。", "id": "Saya merawat/menanam sayur dan bunga di halaman.", "form": "育てます"},
    "て": {"jp": "大切に植物を育ててください。", "id": "Tolong rawat tanaman ini dengan baik.", "form": "育てて"},
    "た": {"jp": "両親が私を立派に育てた。", "id": "Orang tua telah membesarkan saya dengan baik.", "form": "育てた"},
    "ない": {"jp": "ペットを育てる余裕がない。", "id": "Saya tidak memiliki kelonggaran untuk merawat hewan peliharaan.", "form": "育てない"}
  },
  {
    "kosakata": ["jp", "育つ", "そだつ"],
    "arti": ["id", "tumbuh / berkembang / dibesarkan"],
    "kamus": {"jp": "豊かな自然の中で育つ。", "id": "Tumbuh di tengah alam yang asri.", "form": "育つ"},
    "ます": {"jp": "子供は元気に育ちます。", "id": "Anak-anak tumbuh dengan sehat.", "form": "育ちます"},
    "て": {"jp": "順調に育っていて、うれしい。", "id": "Saya senang karena tumbuh dengan lancar.", "form": "育って"},
    "た": {"jp": "私は田舎で育った。", "id": "Saya dibesarkan di desa.", "form": "育った"},
    "ない": {"jp": "日当たりが悪いと植物がうまく育たない。", "id": "Jika kurang pencahayaan matahari, tanaman tidak akan tumbuh dengan baik.", "form": "育たない"}
  },
  {
    "kosakata": ["jp", "見せる", "みせる"],
    "arti": ["id", "memperlihatkan / menunjukkan"],
    "kamus": {"jp": "友達に写真を見せる。", "id": "Memperlihatkan foto kepada teman.", "form": "見せる"},
    "ます": {"jp": "パスポートを見せます。", "id": "Saya menunjukkan paspor.", "form": "見せます"},
    "て": {"jp": "切符を見せてください。", "id": "Tolong perlihatkan tiketnya.", "form": "見せて"},
    "た": {"jp": "昨日、彼に新しい服を見せた。", "id": "Kemarin saya memperlihatkan baju baru kepadanya.", "form": "見せた"},
    "ない": {"jp": "秘密だから誰にも見せない。", "id": "Karena rahasia, saya tidak memperlihatkannya kepada siapa pun.", "form": "見せない"}
  },
  {
    "kosakata": ["jp", "見つける", "みつける"],
    "arti": ["id", "menemukan (mengejar/mencari, subjek sengaja)"],
    "kamus": {"jp": "無くした鍵を見つける。", "id": "Menemukan kunci yang hilang.", "form": "見つける"},
    "ます": {"jp": "いい仕事を見つけます。", "id": "Saya akan menemukan pekerjaan yang bagus.", "form": "見つけます"},
    "て": {"jp": "間違いを見つけて、直してください。", "id": "Tolong temukan kesalahannya dan perbaiki.", "form": "見つけて"},
    "た": {"jp": "図書館で面白い本を見つけた。", "id": "Saya menemukan buku menarik di perpustakaan.", "form": "見つけた"},
    "ない": {"jp": "いくら探しても見つからない（見つけない）。", "id": "Berapa kali pun dicari, saya tidak menemukannya.", "form": "見つけない"}
  },
  {
    "kosakata": ["jp", "見つかる", "みつかる"],
    "arti": ["id", "ditemukan / ketemu"],
    "kamus": {"jp": "無くした財布が見つかる。", "id": "Dompet yang hilang ketemu.", "form": "見つかる"},
    "ます": {"jp": "すぐに犯人が見つかります。", "id": "Pelakunya akan segera ditemukan.", "form": "見つかります"},
    "て": {"jp": "鍵が見つかって、よかった。", "id": "Baguslah kuncinya sudah ketemu.", "form": "見つかって"},
    "た": {"jp": "昨日、消えた書類が見つかった。", "id": "Kemarin dokumen yang hilang sudah ditemukan.", "form": "見つかった"},
    "ない": {"jp": "まだいい部屋が見つからない。", "id": "Kamar yang bagus belum juga ketemu.", "form": "見つからない"}
  },
  {
    "kosakata": ["jp", "落とす", "おとす"],
    "arti": ["id", "menjatuhkan / menghilangkan (karena tidak sengaja)"],
    "kamus": {"jp": "ポケットから鍵を落とす。", "id": "Menjatuhkan kunci dari saku.", "form": "落とす"},
    "ます": {"jp": "スピードを落とします。", "id": "Saya menurunkan/mengurangi kecepatan.", "form": "落とします"},
    "て": {"jp": "コップを落として、割ってしまった。", "id": "Saya menjatuhkan gelas dan memecahkannya.", "form": "落として"},
    "た": {"jp": "道でお金を落とした。", "id": "Saya menjatuhkan/menghilangkan uang di jalan.", "form": "落とした"},
    "ない": {"jp": "大切な物だから絶対に落とさない。", "id": "Karena barang berharga, saya tidak akan menjatuhkannya.", "form": "落とさない"}
  },
  {
    "kosakata": ["jp", "落ちる", "おちる"],
    "arti": ["id", "jatuh / gugur"],
    "kamus": {"jp": "木から葉っぱが落ちる。", "id": "Daun gugur/jatuh dari pohon.", "form": "落ちる"},
    "ます": {"jp": "試験に落ちます。", "id": "Gagal/jatuh dalam ujian.", "form": "落ちます"},
    "て": {"jp": "お皿が落ちて、割れた。", "id": "Piringnya jatuh dan pecah.", "form": "落ちて"},
    "た": {"jp": "階段から落ちた。", "id": "Saya jatuh dari tangga.", "form": "落ちた"},
    "ない": {"jp": "この汚れは洗っても落ちない。", "id": "Noda ini tidak akan hilang/jatuh meskipun dicuci.", "form": "落ちない"}
  },
  {
    "kosakata": ["jp", "払い戻す", "はらいもどす"],
    "arti": ["id", "mengembalikan uang / refund"],
    "kamus": {"jp": "チケットの代金を払い戻す。", "id": "Mengembalikan uang pembelian tiket.", "form": "払い戻す"},
    "ます": {"jp": "キャンセルした場合、全額払い戻します。", "id": "Jika dibatalkan, kami akan mengembalikan uang secara penuh.", "form": "払い戻します"},
    "て": {"jp": "窓口で手数料を払い戻してください。", "id": "Tolong lakukan refund biaya di loket.", "form": "払い戻して"},
    "た": {"jp": "使わなかった切符を払い戻した。", "id": "Saya telah melakukan refund tiket yang tidak terpakai.", "form": "払い戻した"},
    "ない": {"jp": "購入後の返金は払い戻さない（行わない）。", "id": "Kami tidak mengembalikan uang setelah pembelian.", "form": "払い戻さない"}
  },
  {
    "kosakata": ["jp", "直す", "なおす"],
    "arti": ["id", "memperbaiki / mengoreksi"],
    "kamus": {"jp": "壊れた時計を直す。", "id": "Memperbaiki jam yang rusak.", "form": "直す"},
    "ます": {"jp": "文章の間違いを直します。", "id": "Saya mengoreksi/memperbaiki kesalahan pada kalimat.", "form": "直します"},
    "て": {"jp": "発音を直してください。", "id": "Tolong koreksi pelafalan saya.", "form": "直して"},
    "た": {"jp": "自分で自転車を直した。", "id": "Saya memperbaiki sepeda sendiri.", "form": "直した"},
    "ない": {"jp": "簡単には直せない（直さない）。", "id": "Saya tidak memperbaikinya secara sembarangan.", "form": "直さない"}
  },
  {
    "kosakata": ["jp", "降る", "ふる"],
    "arti": ["id", "turun (hujan/salju)"],
    "kamus": {"jp": "午後から雨が降る。", "id": "Hujan akan turun mulai siang hari.", "form": "降る"},
    "ます": {"jp": "冬には雪が降ります。", "id": "Salju turun di musim dingin.", "form": "降ります"},
    "て": {"jp": "雨が降っていて、出かけられない。", "id": "Karena hujan sedang turun, saya tidak bisa pergi keluar.", "form": "降っていて"},
    "た": {"jp": "昨日は一日中雨が降った。", "id": "Kemarin hujan turun seharian.", "form": "降った"},
    "ない": {"jp": "今日は雨が降らない。", "id": "Hari ini hujan tidak turun.", "form": "降らない"}
  },
  {
    "kosakata": ["jp", "咲く", "さく"],
    "arti": ["id", "mekar"],
    "kamus": {"jp": "春になると桜が咲く。", "id": "Bunga sakura mekar ketika musim semi tiba.", "form": "咲く"},
    "ます": {"jp": "庭できれいな花が咲きます。", "id": "Bunga yang indah mekar di halaman.", "form": "咲きます"},
    "て": {"jp": "花が咲いて、とてもきれいです。", "id": "Bunganya mekar dan sangat indah.", "form": "咲いて"},
    "た": {"jp": "公園のチューリップが咲いた。", "id": "Bunga tulip di taman telah mekar.", "form": "咲いた"},
    "ない": {"jp": "まだこの花は咲かない。", "id": "Bunga ini belum mekar.", "form": "咲かない"}
  },
  {
    "kosakata": ["jp", "曇る", "くもる"],
    "arti": ["id", "berawan"],
    "kamus": {"jp": "午後から空が曇る。", "id": "Langit akan berawan mulai siang hari.", "form": "曇る"},
    "ます": {"jp": "明日は一日中曇ります。", "id": "Besok akan berawan seharian.", "form": "曇ります"},
    "て": {"jp": "空が曇っていて、今にも雨が降りそうだ。", "id": "Langit sedang berawan dan sepertinya hujan akan segera turun.", "form": "曇っていて"},
    "た": {"jp": "夕方から急に曇った。", "id": "Mulai sore hari langit tiba-tiba berawan.", "form": "曇った"},
    "ない": {"jp": "今日は少しも曇らない。", "id": "Hari ini langit tidak berawan sedikit pun.", "form": "曇らない"}
  },
  {
    "kosakata": ["jp", "晴れる", "はれる"],
    "arti": ["id", "cerah"],
    "kamus": {"jp": "明日は空が晴れる。", "id": "Besok langit akan cerah.", "form": "晴れる"},
    "ます": {"jp": "午後はいい天気に晴れます。", "id": "Siang hari cuaca akan menjadi cerah.", "form": "晴れます"},
    "て": {"jp": "空が晴れて、気持ちがいい。", "id": "Langit cerah dan rasanya menyenangkan.", "form": "晴れて"},
    "た": {"jp": "雨が止んで、空が晴れた。", "id": "Hujan berhenti dan langit menjadi cerah.", "form": "晴れた"},
    "ない": {"jp": "今日は全然晴れない。", "id": "Hari ini sama sekali tidak cerah.", "form": "晴れない"}
  },
  {
    "kosakata": ["jp", "泳ぐ", "およぐ"],
    "arti": ["id", "berenang"],
    "kamus": {"jp": "夏に海で泳ぐ。", "id": "Berenang di laut pada musim panas.", "form": "泳ぐ"},
    "ます": {"jp": "毎週プールで泳ぎます。", "id": "Saya berenang di kolam renang setiap minggu.", "form": "泳ぎます"},
    "て": {"jp": "気持ちよく泳いでいる。", "id": "Sedang berenang dengan nyaman.", "form": "泳いで"},
    "た": {"jp": "昨日、友達と一緒に泳いだ。", "id": "Kemarin saya berenang bersama teman.", "form": "泳いだ"},
    "ない": {"jp": "私は泳げない（泳がない）。", "id": "Saya tidak berenang.", "form": "泳がない"}
  },
  {
    "kosakata": ["jp", "登る", "のぼる"],
    "arti": ["id", "mendaki / naik"],
    "kamus": {"jp": "休日に山に登る。", "id": "Mendaki gunung di hari libur.", "form": "登る"},
    "ます": {"jp": "富士山に登ります。", "id": "Saya mendaki Gunung Fuji.", "form": "登ります"},
    "て": {"jp": "階段を登って、上に行く。", "id": "Naik tangga lalu pergi ke atas.", "form": "登って"},
    "た": {"jp": "去年、高い山に登った。", "id": "Tahun lalu saya mendaki gunung yang tinggi.", "form": "登った"},
    "ない": {"jp": "疲れているので登らない。", "id": "Karena lelah, saya tidak mendaki.", "form": "登らない"}
  },
  {
    "kosakata": ["jp", "注文する", "ちゅうもんする"],
    "arti": ["id", "memesan / memesan barang atau makanan"],
    "kamus": {"jp": "レストランで料理を注文する。", "id": "Memesan makanan di restoran.", "form": "注文する"},
    "ます": {"jp": "ネットで新しい本を注文します。", "id": "Saya memesan buku baru secara online.", "form": "注文します"},
    "て": {"jp": "メニューを見て、注文してください。", "id": "Tolong lihat menu dan silakan memesan.", "form": "注文して"},
    "た": {"jp": "昨日、服をオンラインで注文した。", "id": "Kemarin saya memesan pakaian secara online.", "form": "注文した"},
    "ない": {"jp": "お腹が空いていないので注文しない。", "id": "Karena tidak lapar, saya tidak memesan.", "form": "注文しない"}
  }
]

const pembagianKatakerja = {
  "kehidupan sehari hari": [
    "起きる",
    "起こす",
    "寝る",
    "入浴する",
    "浴びる",
    "着る",
    "脱ぐ",
    "履く",
    "被る",
    "食べる",
    "飲む",
    "料理する",
    "洗う",
    "歩く",
    "走る",
    "休む",
    "する",
    "疲れる",
    "笑う",
    "泣く",
    "怒る",
    "思う",
    "感じる",
    "生きる",
    "亡くなる",
    "死ぬ"
  ],

  "rumah": [
    "開ける",
    "閉める",
    "開く",
    "閉まる",
    "入る",
    "出る",
    "入れる",
    "出す",
    "つける",
    "消す",
    "掃除する",
    "洗濯する",
    "片付ける",
    "置く",
    "取る",
    "並べる",
    "並ぶ",
    "捨てる",
    "切る",
    "押す",
    "引く",
    "作る",
    "見せる",
    "落とす",
    "落ちる"
  ],

  "belanja": [
    "買う",
    "売る",
    "払う",
    "選ぶ",
    "借りる",
    "貸す",
    "返す",
    "届ける",
    "届く",
    "送る",
    "払い戻す"
  ],

  "restoran": [
    "食べる",
    "飲む",
    "料理する",
    "注文する",
    "払う",
    "注文する"
  ],

  "rumah sakit": [
    "治る",
    "治す",
    "痛む",
    "入浴する",
    "疲れる"
  ],

  "sekolah": [
    "勉強する",
    "教える",
    "習う",
    "覚える",
    "忘れる",
    "練習する",
    "質問する",
    "答える",
    "説明する",
    "理解する",
    "使える",
    "できる",
    "書く",
    "読む",
    "調べる",
    "考える",
    "続ける",
    "決める",
    "始める",
    "始まる",
    "終わる",
    "終える",
    "見せる"
  ],

  "tempat kerja": [
    "働く",
    "働き始める",
    "残業する",
    "休憩する",
    "連絡する",
    "確認する",
    "予約する",
    "案内する",
    "相談する",
    "手伝う",
    "手伝ってもらう",
    "使う",
    "作る",
    "運転する",
    "集める",
    "直す",
    "持つ",
    "持って行く",
    "持って来る"
  ],

  "transportasi": [
    "行く",
    "来る",
    "帰る",
    "乗る",
    "降りる",
    "乗り換える",
    "着く",
    "曲がる",
    "曲げる",
    "渡る",
    "止まる",
    "止める",
    "急ぐ",
    "遅れる",
    "間に合う",
    "遅刻する",
    "運転する",
    "写真を撮る",
    "登る"
  ],

  "komunikasi": [
    "話す",
    "聞く",
    "言う",
    "呼ぶ",
    "呼ばれる",
    "会う",
    "電話する",
    "伝える",
    "伝わる",
    "知らせる",
    "頼む",
    "相談する",
    "説明する",
    "質問する",
    "答える",
    "見せる",
    "もらう",
    "あげる",
    "くれる"
  ],

  "perasaan": [
    "思う",
    "感じる",
    "安心する",
    "心配する",
    "困る",
    "疲れる",
    "笑う",
    "泣く",
    "怒る",
    "忘れる",
    "覚える"
  ],

  "perubahan keadaan": [
    "なる",
    "変わる",
    "変える",
    "増える",
    "増やす",
    "減る",
    "減らす",
    "育てる",
    "育つ",
    "見つける",
    "見つかる",
    "治る",
    "治す",
    "始まっている",
    "終わっている",
    "住む",
    "要る",
    "ある",
    "いる",
    "降る",
    "晴れる",
    "曇る",
    "咲く",
    "泳ぐ"
  ],

  "kelompok1": [
    "行く",
    "帰る",
    "飲む",
    "聞く",
    "話す",
    "書く",
    "読む",
    "買う",
    "売る",
    "使う",
    "作る",
    "待つ",
    "持つ",
    "会う",
    "座る",
    "立つ",
    "入る",
    "出す",
    "働く",
    "休む",
    "習う",
    "洗う",
    "歩く",
    "走る",
    "乗る",
    "写真を撮る",
    "手伝う",
    "起こす",
    "脱ぐ",
    "履く",
    "被る",
    "消す",
    "開く",
    "閉まる",
    "捨てる",
    "置く",
    "取る",
    "持って行く",
    "持って来る",
    "始まる",
    "終わる",
    "曲がる",
    "渡る",
    "曲げる",
    "止まる",
    "止める",
    "急ぐ",
    "言う",
    "呼ぶ",
    "頼む",
    "ある",
    "要る",
    "困る",
    "痛む",
    "なる",
    "変わる",
    "増える",
    "増やす",
    "減る",
    "減らす",
    "返す",
    "払う",
    "選ぶ",
    "届く",
    "送る",
    "切る",
    "押す",
    "引く",
    "並ぶ",
    "着く",
    "伝わる",
    "住む",
    "生きる",
    "死ぬ",
    "間に合う",
    "思う",
    "笑う",
    "泣く",
    "怒る",
    "治る",
    "育つ",
    "落とす",
    "落ちる",
    "直す",
    "降る",
    "咲く",
    "曇る",
    "泳ぐ",
    "登る",
    "亡くなる"
  ],

  "kelompok2": [
    "食べる",
    "見る",
    "来る",
    "開ける",
    "閉める",
    "出る",
    "入れる",
    "寝る",
    "起きる",
    "教える",
    "覚える",
    "忘れる",
    "運転する",
    "降りる",
    "浴びる",
    "着る",
    "つける",
    "洗濯する",
    "片付ける",
    "並べる",
    "答える",
    "理解する",
    "使える",
    "できる",
    "始める",
    "終える",
    "遅れる",
    "呼ばれる",
    "伝える",
    "心配する",
    "安心する",
    "疲れる",
    "変える",
    "あげる",
    "もらう",
    "くれる",
    "借りる",
    "貸す",
    "届ける",
    "集める",
    "調べる",
    "考える",
    "続ける",
    "決める",
    "知らせる",
    "感じる",
    "治す",
    "育てる",
    "見せる",
    "見つける",
    "見つかる",
    "晴れる"
  ],

  "kelompok3": [
    "する",
    "来る",
    "入浴する",
    "勉強する",
    "練習する",
    "掃除する",
    "料理する",
    "電話する",
    "質問する",
    "説明する",
    "運転する",
    "働き始める",
    "残業する",
    "休憩する",
    "連絡する",
    "確認する",
    "予約する",
    "案内する",
    "相談する",
    "手伝ってもらう",
    "洗濯する",
    "心配する",
    "安心する",
    "遅刻する",
    "始まっている",
    "終わっている",
    "払い戻す",
    "注文する"
  ]
};