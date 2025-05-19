// mencegah link ditahan
document.ondragstart = function () {
	return false;
};

const kosakata_mnn = [
	{
		id: "第1課",
		content: [
			{x: "私", y: "わたし", z: "Saya"},
			{x: "あなた", y: "あなた", z: "Anda"},
			{x: "あの人", y: "あのひと", z: "Orang itu"},
			{x: "あの方", y: "あのかた", z: "Beliau"},
			{x: "先生", y: "せんせい", z: "Guru"},
			{x: "教師", y: "きょうし", z: "Guru"},
			{x: "学生", y: "がくせい", z: "Pelajar"},
			{x: "会社員", y: "かいしゃいん", z: "Karyawan perusahaan"},
			{x: "社員", y: "しゃいん", z: "Karyawan"},
			{x: "銀行員", y: "ぎんこういん", z: "Pegawai bank"},
			{x: "医者", y: "いしゃ", z: "Dokter"},
			{x: "研究者", y: "けんきゅうしゃ", z: "Peneliti"},
			{x: "大学", y: "だいがく", z: "Universitas"},
			{x: "病院", y: "びょういん", z: "Rumah sakit"},
			{x: "誰", y: "だれ", z: "Siapa"},
			{x: "どなた", y: "どなた", z: "Siapa (sopan)"},
			{x: "何歳", y: "なんさい", z: "Umur berapa"},
			{x: "おいくつ", y: "おいくつ", z: "Umur berapa"},
			{x: "はい", y: "はい", z: "Iya"},
			{x: "いいえ", y: "いいえ", z: "Tidak"}
		]
	},
	{
		id: "第2課",
		content: [
			{x: "これ", y: "これ", z: "Ini"},
			{x: "それ", y: "それ", z: "Itu (dekat)"},
			{x: "あれ", y: "あれ", z: "Itu (jauh)"},
			{x: "本", y: "ほん", z: "Buku"},
			{x: "辞書", y: "じしょ", z: "Kamus"},
			{x: "雑誌", y: "ざっし", z: "Majalah"},
			{x: "新聞", y: "しんぶん", z: "Koran"},
			{x: "ノート", y: "ノート", z: "Note"},
			{x: "手帳", y: "てちょう", z: "Buku catatan"},
			{x: "名刺", y: "めいし", z: "Kartu nama"},
			{x: "カード", y: "カード", z: "Kartu"},
			{x: "鉛筆", y: "えんぴつ", z: "Pensil"},
			{x: "ボールペン", y: "ボールペン", z: "Ballpoint"},
			{x: "シャープペンシル", y: "シャープペンシル", z: "Pensil mekanik"},
			{x: "かぎ", y: "かぎ", z: "Kunci"},
			{x: "時計", y: "とけい", z: "Jam"},
			{x: "傘", y: "かさ", z: "Payung"},
			{x: "かばん", y: "かばん", z: "Tas"},
			{x: "テレビ", y: "テレビ", z: "TV"},
			{x: "ラジオ", y: "ラジオ", z: "Radio"},
			{x: "カメラ", y: "カメラ", z: "Kamera"},
			{x: "コンピューター", y: "コンピューター", z: "Komputer"},
			{x: "車", y: "くるま", z: "Mobil"},
			{x: "机", y: "つくえ", z: "Meja"},
			{x: "いす", y: "いす", z: "Kursi"},
			{x: "チョコレート", y: "チョコレート", z: "Coklat"},
			{x: "コーヒー", y: "コーヒー", z: "Kopi"},
			{x: "お土産", y: "おみやげ", z: "Oleh-oleh"},
			{x: "英語", y: "えいご", z: "Bahasa Inggris"},
			{x: "日本語", y: "にほんご", z: "Bahasa Jepang"},
			{x: "何", y: "なに", z: "Apa"}
		]
	},
	{
	id: "第3課",
		content: [
			{x: "ここ", y: "ここ", z: "Disini"},
			{x: "そこ", y: "そこ", z: "Disitu"},
			{x: "あそこ", y: "あそこ", z: "Disana"},
			{x: "どこ", y: "どこ", z: "Dimana"},
			{x: "こちら", y: "こちら", z: "Di sebelah sini"},
			{x: "そちら", y: "そちら", z: "Di sebelah situ"},
			{x: "あちら", y: "あちら", z: "Di sebelah sana"},
			{x: "どちら", y: "どちら", z: "Di sebelah mana"},
			{x: "教室", y: "きょうしつ", z: "Ruang kelas"},
			{x: "食堂", y: "しょくどう", z: "Kantin"},
			{x: "事務所", y: "じむしょ", z: "Kantor"},
			{x: "会議室", y: "かいぎしつ", z: "Ruang rapat"},
			{x: "受付", y: "うけつけ", z: "Resepsionist"},
			{x: "ロビー", y: "ロビー", z: "Lobi"},
			{x: "部屋", y: "へや", z: "Kamar"},
			{x: "トイレ", y: "トイレ", z: "Toilet"},
			{x: "お手洗い", y: "おてあらい", z: "WC"},
			{x: "階段", y: "かいだん", z: "Tangga"},
			{x: "エレベーター", y: "エレベーター", z: "Lift"},
			{x: "エスカレーター", y: "エスカレーター", z: "Ekskalator"},
			{x: "自動販売機", y: "じどうはんばいき", z: "Mesin jual otomatis"},
			{x: "電話", y: "でんわ", z: "Telepon"},
			{x: "お国", y: "おくに", z: "Negara"},
			{x: "会社", y: "かいしゃ", z: "Perusahaan"},
			{x: "家", y: "うち", z: "Rumah"},
			{x: "靴", y: "くつ", z: "Sepatu"},
			{x: "ネクタイ", y: "ネクタイ", z: "Dasi"},
			{x: "ワイン", y: "ワイン", z: "Wine"},
			{x: "売り場", y: "うりば", z: "Tempat penjualan"},
			{x: "地下", y: "ちか", z: "Bawah tanah"},
			{x: "何階", y: "なんがい", z: "Lantai berapa"},
			{x: "いくら", y: "いくら", z: "Berapa"}
		]
	},
	{
		id: "第4課",
		content: [
			{x: "起きます", y: "おきます", z: "Bangun tidur"},
			{x: "寝ます", y: "ねます", z: "Tidur"},
			{x: "働きます", y: "はたらきます", z: "Bekerja"},
			{x: "休みます", y: "やすみます", z: "Libur, istirahat"},
			{x: "勉強します", y: "べんきょうします", z: "Belajar"},
			{x: "終わります", y: "おわります", z: "Selesai"},
			{x: "会議をします", y: "かいぎをします", z: "Rapat"},
			{x: "デパート", y: "デパート", z: "Departemen"},
			{x: "銀行", y: "ぎんこう", z: "Bank"},
			{x: "郵便局", y: "ゆうびんきょく", z: "Kantor pos"},
			{x: "図書館", y: "としょかん", z: "Perpustakaan"},
			{x: "美術館", y: "びじゅつかん", z: "Gedung kesenian"},
			{x: "今", y: "いま", z: "Sekarang"},
			{x: "半", y: "はん", z: "Setengah"},
			{x: "何時", y: "なんじ", z: "Jam berapa"},
			{x: "何分", y: "なんぷん", z: "Berapa menit"},
			{x: "午前", y: "ごぜん", z: "A.M"},
			{x: "午後", y: "ごご", z: "P.M"},
			{x: "朝", y: "あさ", z: "Pagi"},
			{x: "昼", y: "ひる", z: "Siang"},
			{x: "夜", y: "よる", z: "Malam"},
			{x: "一昨日", y: "おととい", z: "Kemarin lusa"},
			{x: "昨日", y: "きのう", z: "Kemarin"},
			{x: "今日", y: "きょう", z: "Hari ini"},
			{x: "明日", y: "あした", z: "Besok"},
			{x: "明後日", y: "あさって", z: "Besok lusa"},
			{x: "今朝", y: "けさ", z: "Tadi pagi"},
			{x: "今晩", y: "こんばん", z: "Malam ini"},
			{x: "休み", y: "やすみ", z: "Libur"},
			{x: "昼休み", y: "ひるやすみ", z: "Istirahat siang"},
			{x: "試験", y: "しけん", z: "Ujian"},
			{x: "会議", y: "かいぎ", z: "Rapat"},
			{x: "映画", y: "えいが", z: "Film"},
			{x: "毎朝", y: "まいあさ", z: "Setiap pagi"},
			{x: "毎晩", y: "まいばん", z: "Setiap malam"},
			{x: "毎日", y: "まいにち", z: "Setiap hari"},
			{x: "番号", y: "ばんごう", z: "Nomor"},
			{x: "何番", y: "なんばん", z: "Nomor berapa"}
		]
	},
	{
		id: "第5課",
		content: [
			{x: "行きます", y: "いきます", z: "Pergi"},
			{x: "来ます", y: "きます", z: "Datang"},
			{x: "帰ります", y: "かえります", z: "Pulang"},
			{x: "学校", y: "がっこう", z: "Sekolah"},
			{x: "スーパー", y: "スーパー", z: "Supermarket"},
			{x: "駅", y: "えき", z: "Stasiun"},
			{x: "飛行機", y: "ひこうき", z: "Pesawat"},
			{x: "船", y: "ふね", z: "Kapal"},
			{x: "電車", y: "でんしゃ", z: "Kereta listrik"},
			{x: "地下鉄", y: "ちかてつ", z: "Kereta bawah tanah"},
			{x: "新幹線", y: "しんかんせん", z: "Kereta super cepat"},
			{x: "バス", y: "バス", z: "Bis"},
			{x: "タクシー", y: "タクシー", z: "Taksi"},
			{x: "自転車", y: "じてんしゃ", z: "Sepeda"},
			{x: "人", y: "ひと", z: "Orang"},
			{x: "友達", y: "ともだち", z: "Teman"},
			{x: "彼", y: "かれ", z: "Dia laki laki"},
			{x: "彼女", y: "かのじょ", z: "Dia perempuan"},
			{x: "家族", y: "かぞく", z: "Keluarga"},
			{x: "先週", y: "せんしゅう", z: "Minggu lalu"},
			{x: "今週", y: "こんしゅう", z: "Minggu ini"},
			{x: "来週", y: "らいしゅう", z: "Minggu depan"},
			{x: "先月", y: "せんげつ", z: "Bulan lalu"},
			{x: "今月", y: "こんげつ", z: "Bulan ini"},
			{x: "来月", y: "らいげつ", z: "Bulan depan"},
			{x: "去年", y: "きょねん", z: "Tahun lalu"},
			{x: "今年", y: "ことし", z: "Tahun ini"},
			{x: "来年", y: "らいねん", z: "Tahun depan"},
			{x: "誕生日", y: "たんじょうび", z: "Hari ulang tahun"}
		]
	},
	{
		id: "第6課",
		content: [
			{x: "食べます", y: "たべます", z: "Makan"},
			{x: "飲みます", y: "のみます", z: "Minum"},
			{x: "吸います", y: "すいます", z: "Merokok"},
			{x: "見ます", y: "みます", z: "Melihat"},
			{x: "聞きます", y: "ききます", z: "Mendengar"},
			{x: "読みます", y: "よみます", z: "Membaca"},
			{x: "書きます", y: "かきます", z: "Menulis"},
			{x: "買います", y: "かいます", z: "Membeli"},
			{x: "撮ります", y: "とります", z: "Mengambil"},
			{x: "会います", y: "あいます", z: "Bertemu"},
			{x: "ご飯", y: "ごはん", z: "Nasi"},
			{x: "朝ご飯", y: "あさごはん", z: "Sarapan"},
			{x: "昼ご飯", y: "ひるごはん", z: "Makan siang"},
			{x: "晩ご飯", y: "ばんごはん", z: "Makan malam"},
			{x: "パン", y: "パン", z: "Roti"},
			{x: "卵", y: "たまご", z: "Telur"},
			{x: "肉", y: "にく", z: "Daging"},
			{x: "魚", y: "さかな", z: "Ikan"},
			{x: "野菜", y: "やさい", z: "Sayuran"},
			{x: "果物", y: "くだもの", z: "Buah-buahan"},
			{x: "水", y: "みず", z: "Air"},
			{x: "お茶", y: "おちゃ", z: "Teh hijau"},
			{x: "紅茶", y: "こうちゃ", z: "Teh"},
			{x: "牛乳", y: "ぎゅうにゅう", z: "Susu sapi"},
			{x: "ジュース", y: "ジュース", z: "Jus"},
			{x: "ビール", y: "ビール", z: "Bir"},
			{x: "お酒", y: "おさけ", z: "Sake"},
			{x: "たばこ", y: "たばこ", z: "Rokok"},
			{x: "手紙", y: "てがみ", z: "Surat"},
			{x: "レポート", y: "レポート", z: "Laporan"},
			{x: "写真", y: "しゃしん", z: "Foto"},
			{x: "ビデオ", y: "ビデオ", z: "Video"},
			{x: "店", y: "みせ", z: "Toko"},
			{x: "庭", y: "にわ", z: "Halaman"},
			{x: "宿題", y: "しゅくだい", z: "PR"},
			{x: "テニス", y: "テニス", z: "Tenis"},
			{x: "サッカー", y: "サッカー", z: "Sepak bola"},
			{x: "お花見", y: "おはなみ", z: "Menikmati bunga sakura"},
			{x: "一緒に", y: "いっしょに", z: "Bersama-sama"},
			{x: "ちょっと", y: "ちょっと", z: "Sebentar, sedikit"},
			{x: "いつも", y: "いつも", z: "Selalu"},
			{x: "時々", y: "ときどき", z: "Kadang-kadang"},
			{x: "それから", y: "それから", z: "Kemudian, setelah itu"}
		]
	},
	{
		id: "第7課",
		content: [
			{x: "切ります", y: "きります", z: "Memotong"},
			{x: "送ります", y: "おくります", z: "Mengirim"},
			{x: "あげます", y: "あげます", z: "Memberi"},
			{x: "もらいます", y: "もらいます", z: "Menerima"},
			{x: "貸します", y: "かします", z: "Meminjamkan"},
			{x: "借ります", y: "かります", z: "Meminjam"},
			{x: "教えます", y: "おしえます", z: "Mengajar, memberi tahu"},
			{x: "習います", y: "ならいます", z: "Belajar, berlatih"},
			{x: "電話をかけます", y: "でんわをかけます", z: "Menelpon"},
			{x: "手", y: "て", z: "Tangan"},
			{x: "はし", y: "はし", z: "Sumpit"},
			{x: "スプーン", y: "スプーン", z: "Sendok"},
			{x: "ナイフ", y: "ナイフ", z: "Pisau"},
			{x: "フォーク", y: "フォーク", z: "Garpu"},
			{x: "はさみ", y: "はさみ", z: "Gunting"},
			{x: "パソコン", y: "パソコン", z: "Laptop"},
			{x: "ケータイ", y: "ケータイ", z: "HP"},
			{x: "メール", y: "メール", z: "Email"},
			{x: "年賀状", y: "ねんがじょう", z: "Kartu tahun baru"},
			{x: "パンチ", y: "パンチ", z: "Pelubang kertas"},
			{x: "ホッチキス", y: "ホッチキス", z: "Stepler"},
			{x: "セロテープ", y: "セロテープ", z: "Selotip"},
			{x: "消しゴム", y: "けしゴム", z: "Penghapus karet"},
			{x: "紙", y: "かみ", z: "Kertas"},
			{x: "花", y: "はな", z: "Bunga"},
			{x: "シャツ", y: "シャツ", z: "Kemeja"},
			{x: "プレゼント", y: "プレゼント", z: "Hadiah"},
			{x: "荷物", y: "にもつ", z: "Barang bawaan"},
			{x: "お金", y: "おかね", z: "Uang"},
			{x: "切符", y: "きっぷ", z: "Karcis"},
			{x: "クリスマス", y: "クリスマス", z: "Natal"},
			{x: "父", y: "ちち", z: "Ayah"},
			{x: "母", y: "はは", z: "Ibu"},
			{x: "お父さん", y: "おとうさん", z: "Ayah orang lain"},
			{x: "お母さん", y: "おかあさん", z: "Ibu orang lain"},
			{x: "もう", y: "もう", z: "Sudah"},
			{x: "まだ", y: "まだ", z: "Belum"},
			{x: "これから", y: "これから", z: "Mulai saat ini"}
		]
	},
	{
		id: "第8課",
		content: [
			{x: "ハンサム", y: "ハンサム", z: "Tampan"},
			{x: "綺麗", y: "きれい", z: "Cantik, bersih"},
			{x: "静か", y: "しずか", z: "Sepi"},
			{x: "賑やか", y: "にぎやか", z: "Ramai"},
			{x: "有名", y: "ゆうめい", z: "Terkenal"},
			{x: "親切", y: "しんせつ", z: "Ramah"},
			{x: "元気", y: "げんき", z: "Sehat"},
			{x: "暇", y: "ひま", z: "Senggang"},
			{x: "便利", y: "べんり", z: "Praktis"},
			{x: "すてき", y: "すてき", z: "Bagus"},
			{x: "大きい", y: "おおきい", z: "Besar"},
			{x: "小さい", y: "ちいさい", z: "Kecil"},
			{x: "新しい", y: "あたらしい", z: "Baru"},
			{x: "古い", y: "ふるい", z: "Lama, kuno"},
			{x: "いい", y: "いい", z: "Bagus"},
			{x: "悪い", y: "わるい", z: "Buruk"},
			{x: "熱い", y: "あつい", z: "Panas"},
			{x: "寒い", y: "さむい", z: "Dingin"},
			{x: "冷たい", y: "つめたい", z: "Dingin (benda)"},
			{x: "難しい", y: "むずかしい", z: "Sulit"},
			{x: "優しい", y: "やさしい", z: "Baik hati"},
			{x: "高い", y: "たかい", z: "Tinggi, mahal"},
			{x: "安い", y: "やすい", z: "Murah"},
			{x: "低い", y: "ひくい", z: "Rendah"},
			{x: "面白い", y: "おもしろい", z: "Menarik"},
			{x: "美味しい", y: "おいしい", z: "Enak"},
			{x: "忙しい", y: "いそがしい", z: "Sibuk"},
			{x: "楽しい", y: "たのしい", z: "Senang"},
			{x: "白い", y: "しろい", z: "Putih"},
			{x: "黒い", y: "くろい", z: "Hitam"},
			{x: "赤い", y: "あかい", z: "Merah"},
			{x: "青い", y: "あおい", z: "Biru"},
			{x: "桜", y: "さくら", z: "Bunga sakura"},
			{x: "山", y: "やま", z: "Gunung"},
			{x: "町", y: "まち", z: "Kota"},
			{x: "食べ物", y: "たべもの", z: "Makanan"},
			{x: "所", y: "ところ", z: "Tempat"},
			{x: "寮", y: "りょう", z: "Asrama"},
			{x: "レストラン", y: "レストラン", z: "Restoran"},
			{x: "生活", y: "せいかつ", z: "Kehidupan"},
			{x: "お仕事", y: "おしごと", z: "Pekerjaan"},
			{x: "どう", y: "どう", z: "Bagaimana"},
			{x: "どんな", y: "どんな", z: "Yang bagaimana"},
			{x: "とても", y: "とても", z: "Sangat"},
			{x: "あまり", y: "あまり", z: "Tidak begitu"},
			{x: "そして", y: "そして", z: "Kemudian"}
		]
	},
	{
		id: "第9課",
		content: [
			{x: "分かります", y: "わかります", z: "Mengerti"},
			{x: "あります", y: "あります", z: "Ada"},
			{x: "好き", y: "すき", z: "Suka"},
			{x: "嫌い", y: "きらい", z: "Benci"},
			{x: "上手", y: "じょうず", z: "Hebat"},
			{x: "下手", y: "へた", z: "Tidak mahir"},
			{x: "飲み物", y: "のみもの", z: "Minuman"},
			{x: "料理", y: "りょうり", z: "Masakan"},
			{x: "スポーツ", y: "スポーツ", z: "Olahraga"},
			{x: "野球", y: "やきゅう", z: "Baseball"},
			{x: "ダンス", y: "ダンス", z: "Dansa"},
			{x: "旅行", y: "りょこう", z: "Wisata"},
			{x: "音楽", y: "おんがく", z: "Musik"},
			{x: "歌", y: "うた", z: "Lagu"},
			{x: "クラシック", y: "クラシック", z: "Klasik"},
			{x: "ジャス", y: "ジャス", z: "Jazz"},
			{x: "コンサート", y: "コンサート", z: "Konser"},
			{x: "カラオケ", y: "カラオケ", z: "Karaoke"},
			{x: "歌舞伎", y: "かぶき", z: "Drama tradisional Jepang"},
			{x: "絵", y: "え", z: "Gambar"},
			{x: "字", y: "じ", z: "Huruf"},
			{x: "漢字", y: "かんじ", z: "Huruf kanji"},
			{x: "ひらがな", y: "ひらがな", z: "Huruf hiragana"},
			{x: "カタカナ", y: "カタカナ", z: "Huruf katakana"},
			{x: "ローマ字", y: "ローマじ", z: "Huruf kanji"},
			{x: "細かいお金", y: "こまかいおかね", z: "Uang koin"},
			{x: "チケット", y: "チケット", z: "Tiket"},
			{x: "時間", y: "じかん", z: "Waktu"},
			{x: "用事", y: "ようじ", z: "Urusan"},
			{x: "約束", y: "やくそく", z: "Janji"},
			{x: "アルバイト", y: "アルバイト", z: "Kerja paruh waktu"},
			{x: "ご主人", y: "ごしゅじん", z: "Suami orang lain"},
			{x: "奥さん", y: "おくさん", z: "Istri orang lain"},
			{x: "夫", y: "おっと", z: "Suami"},
			{x: "妻", y: "つま", z: "Istri"},
			{x: "子供", y: "こども", z: "Anak"},
			{x: "よく", y: "よく", z: "Dengan baik"},
			{x: "だいたい", y: "だいたい", z: "Kira-kira"},
			{x: "たくさん", y: "たくさん", z: "Banyak"},
			{x: "すこし", y: "すこし", z: "Sedikit"},
			{x: "全然", y: "ぜんぜん", z: "Sama sekali"},
			{x: "はやく", y: "はやく", z: "Dengan cepat"},
			{x: "どうして", y: "どうして", z: "Kenapa"}
		]
	},
	{
		id: "第10課",
		content: [
			{x: "あります", y: "あります", z: "Ada (benda mati)"},
			{x: "います", y: "います", z: "Ada (benda hidup)"},
			{x: "色々", y: "いろいろ", z: "Berbagai / macam-macam"},
			{x: "男の子", y: "おとこのこ", z: "Anak laki-laki"},
			{x: "女の子", y: "おんなのこ", z: "Anak perempuan"},
			{x: "男の人", y: "おとこのひと", z: "Orang laki-laki"},
			{x: "女の人", y: "おんなのひと", z: "Orang perempuan"},
			{x: "犬", y: "いぬ", z: "Anjing"},
			{x: "猫", y: "ねこ", z: "Kucing"},
			{x: "パンダ", y: "パンダ", z: "Panda"},
			{x: "象", y: "ぞう", z: "Gajah"},
			{x: "気", y: "き", z: "Perasaan"},
			{x: "物", y: "もの", z: "Barang"},
			{x: "電池", y: "でんち", z: "Baterai"},
			{x: "箱", y: "はこ", z: "Kotak"},
			{x: "スイッチ", y: "スイッチ", z: "Tombol, sakelar"},
			{x: "冷蔵庫", y: "れいぞうこ", z: "Kulkas"},
			{x: "テーブル", y: "テーブル", z: "Meja"},
			{x: "ベッド", y: "ベッド", z: "Kasur"},
			{x: "棚", y: "たな", z: "Lemari"},
			{x: "ドア", y: "ドア", z: "Pintu"},
			{x: "窓", y: "まど", z: "Jendela"},
			{x: "ポスト", y: "ポスト", z: "Kotak pos"},
			{x: "ビル", y: "びる", z: "Gedung"},
			{x: "コンビニ", y: "こんびに", z: "Minimarket"},
			{x: "公園", y: "こうえん", z: "Taman"},
			{x: "喫茶店", y: "きっさてん", z: "Kedai kopi"},
			{x: "県", y: "けん", z: "Prefektur"},
			{x: "上", y: "うえ", z: "Atas"},
			{x: "下", y: "した", z: "Bawah"},
			{x: "前", y: "まえ", z: "Depan"},
			{x: "後ろ", y: "うしろ", z: "Belakang"},
			{x: "右", y: "みぎ", z: "Kanan"},
			{x: "左", y: "ひだり", z: "Kiri"},
			{x: "中", y: "なか", z: "Tengah"},
			{x: "外", y: "そと", z: "Luar"},
			{x: "隣", y: "となり", z: "Samping"},
			{x: "近く", y: "ちかく", z: "Dekat"},
			{x: "間", y: "あいだ", z: "Diantara"}
		]
	},
	{
		id: "第11課",
		content: [
			{x: "掛かります", y: "かかります", z: "Memerlukan waktu"},
			{x: "休みます", y: "やすみます", z: "Libur"},
			{x: "りんご", y: "りんご", z: "Apel"},
			{x: "みかん", y: "みかん", z: "Jeruk"},
			{x: "サンドイッチ", y: "サンドイッチ", z: "Sandwich"},
			{x: "カレーライス", y: "カレーライス", z: "Nasi kare"},
			{x: "アイスクリーム", y: "アイスクリーム", z: "Es krim"},
			{x: "切手", y: "きって", z: "Perangko"},
			{x: "はがき", y: "はがき", z: "Kartu pos"},
			{x: "封筒", y: "ふうとう", z: "Amplop"},
			{x: "両親", y: "りょうしん", z: "Orang tua"},
			{x: "兄弟", y: "きょうだい", z: "Saudara"},
			{x: "姉", y: "あね", z: "Kakak perempuan"},
			{x: "兄", y: "あに", z: "Kakak laki laki"},
			{x: "妹", y: "いもうと", z: "Adik perempuan"},
			{x: "弟", y: "おとうと", z: "Adik laki laki"},
			{x: "外国", y: "がいこく", z: "Luar negeri"},
			{x: "留学生", y: "りゅうがくせい", z: "Studi luar negeri"},
			{x: "クラス", y: "クラス", z: "Kelas"},
			{x: "ぐらい", y: "ぐらい", z: "Kira-kira"},
			{x: "どのくらい", y: "どのくらい", z: "Berapa lama"},
			{x: "全部で", y: "ぜんぶで", z: "Semuanya"},
			{x: "みんな", y: "みんな", z: "Semua"},
			{x: "だけ", y: "だけ", z: "Hanya, Saja"}
		]
	},
	{
		id: "第12課",
		content: [
			{x: "簡単", y: "かんたん", z: "Mudah"},
			{x: "遠い", y: "とおい", z: "Jauh"},
			{x: "近い", y: "ちかい", z: "Dekat"},
			{x: "早い", y: "はやい", z: "Cepat"},
			{x: "遅い", y: "おそい", z: "Lambat"},
			{x: "多い", y: "おおい", z: "Banyak"},
			{x: "少ない", y: "すくない", z: "Sedikit"},
			{x: "暖かい", y: "あたたかい", z: "Hangat"},
			{x: "涼しい", y: "すずしい", z: "Sejuk"},
			{x: "甘い", y: "あまい", z: "Manis"},
			{x: "辛い", y: "からい", z: "Pedas"},
			{x: "重い", y: "おもい", z: "Berat"},
			{x: "軽い", y: "かるい", z: "Ringan"},
			{x: "いい", y: "いい", z: "Bagus"},
			{x: "季節", y: "きせつ", z: "Musim"},
			{x: "春", y: "はる", z: "Musim semi"},
			{x: "夏", y: "なつ", z: "Musim panas"},
			{x: "秋", y: "あき", z: "Musim gugur"},
			{x: "冬", y: "ふゆ", z: "Musim dingin"},
			{x: "天気", y: "てんき", z: "Cuaca"},
			{x: "雨", y: "あめ", z: "Hujan"},
			{x: "雪", y: "ゆき", z: "Salju"},
			{x: "曇り", y: "くもり", z: "Mendung"},
			{x: "ホテル", y: "ホテル", z: "Hotel"},
			{x: "空港", y: "くうこう", z: "Bandara"},
			{x: "海", y: "うみ", z: "Laut"},
			{x: "世界", y: "せかい", z: "Dunia"},
			{x: "パーティー", y: "パーティー", z: "Pesta"},
			{x: "「お」祭り", y: "おまつり", z: "Perayaan"},
			{x: "豚肉", y: "ぶたにく", z: "Daging babi"},
			{x: "鶏肉", y: "とりにく", z: "Daging ayam"},
			{x: "牛肉", y: "ぎゅうにく", z: "Daging sapi"},
			{x: "レモン", y: "レモン", z: "Lemon"},
			{x: "生け花", y: "いけばな", z: "Seni merangkai bunga"},
			{x: "紅葉", y: "もみじ", z: "Daun maple"},
			{x: "どちら", y: "どちら", z: "Yang mana"},
			{x: "どちらも", y: "どちらも", z: "Yang manapun"},
			{x: "一番", y: "いちばん", z: "Paling"},
			{x: "ずっと", y: "ずっと", z: "Terus menerus"},
			{x: "初めて", y: "はじめて", z: "Pertama kali"}
		]
	},
	{
		id: "第13課",
		content: [
			{x: "遊びます", y: "あそびます", z: "Bermain"},
			{x: "泳ぎます", y: "およぎます", z: "Berenang"},
			{x: "迎えます", y: "むかえます", z: "Menjemput"},
			{x: "結婚します", y: "けっこんします", z: "Menikah"},
			{x: "買い物します", y: "かいものします", z: "Berbelanja"},
			{x: "食事します", y: "しょくじします", z: "Makan bersama"},
			{x: "散歩します", y: "さんぽします", z: "Jalan-jalan"},
			{x: "大変", y: "たいへん", z: "Sulit, sukar"},
			{x: "欲しい", y: "ほしい", z: "Ingin"},
			{x: "広い", y: "ひろい", z: "Luas"},
			{x: "狭い", y: "せまい", z: "Sempit"},
			{x: "プール", y: "プール", z: "Kolam renang"},
			{x: "川", y: "かわ", z: "Sungai"},
			{x: "美術", y: "びじゅつ", z: "Seni"},
			{x: "釣り", y: "つり", z: "Pancing"},
			{x: "スキー", y: "スキー", z: "Ski"},
			{x: "週末", y: "しゅうまつ", z: "Akhir pekan"},
			{x: "「お」正月", y: "おしょうがつ", z: "Tahun baru"},
			{x: "ごろ", y: "ごろ", z: "~kira-kira"},
			{x: "何か", y: "なにか", z: "Sesuatu"},
			{x: "どこか", y: "どこか", z: "Suatu tempat"}
		]
	},
	{
		id: "第14課",
		content: [
			{x: "つけます", y: "つけます", z: "Menyalakan"},
			{x: "消します", y: "けします", z: "Mematikan, menghapus"},
			{x: "開けます", y: "あけます", z: "Membuka"},
			{x: "閉めます", y: "しめます", z: "Menutup"},
			{x: "急ぎます", y: "いそぎます", z: "Bergegas"},
			{x: "待ちます", y: "まちます", z: "Menunggu"},
			{x: "持ちます", y: "もちます", z: "Membawa"},
			{x: "取ります", y: "とります", z: "Mengambil"},
			{x: "手伝います", y: "てつだいます", z: "Membantu"},
			{x: "呼びます", y: "よびます", z: "Memanggil"},
			{x: "話します", y: "はなします", z: "Berbicara"},
			{x: "使います", y: "つかいます", z: "Menggunakan"},
			{x: "止めます", y: "とめます", z: "Berhenti"},
			{x: "見せます", y: "みせます", z: "Memperlihatkan"},
			{x: "教えます", y: "おしえます", z: "Mengajarkan, memberitahu"},
			{x: "座ります", y: "すわります", z: "Duduk"},
			{x: "立ちます", y: "たちます", z: "Berdiri"},
			{x: "入ります", y: "はいります", z: "Masuk"},
			{x: "出ます", y: "でます", z: "Keluar"},
			{x: "降ります", y: "ふります", z: "Turun"},
			{x: "コピーします", y: "コピーします", z: "Mengkopi"},
			{x: "電気", y: "でんき", z: "Listrik"},
			{x: "エアコン", y: "エアコン", z: "AC"},
			{x: "パスポート", y: "パスポート", z: "Paspor"},
			{x: "名前", y: "なまえ", z: "Nama"},
			{x: "住所", y: "じゅうしょ", z: "Alamat"},
			{x: "地図", y: "ちず", z: "Peta"},
			{x: "塩", y: "しお", z: "Garam"},
			{x: "砂糖", y: "さとう", z: "Gula"},
			{x: "問題", y: "もんだい", z: "Masalah, soal"},
			{x: "答え", y: "こたえ", z: "Jawaban"},
			{x: "読み方", y: "よみかた", z: "Cara baca"},
			{x: "まっすぐ", y: "まっすぐ", z: "Lurus, terus"},
			{x: "ゆっくり", y: "ゆっくり", z: "Pelan-pelan"},
			{x: "すぐ", y: "すぐ", z: "Segera"},
			{x: "また", y: "また", z: "Lagi"},
			{x: "あとで", y: "あとで", z: "Nanti"},
			{x: "もうすこし", y: "もうすこし", z: "Sedikit lagi"},
			{x: "もう", y: "もう", z: "Lagi"}
		]
	},
	{
		id: "第15課",
		content: [
			{x: "置きます", y: "おきます", z: "Meletakkan"},
			{x: "作ります", y: "つくります", z: "Membuat"},
			{x: "売ります", y: "うります", z: "Menjual"},
			{x: "知ります", y: "しります", z: "Mengetahui"},
			{x: "住みます", y: "すみます", z: "Tinggal"},
			{x: "研究します", y: "けんきゅうします", z: "Meneliti"},
			{x: "資料", y: "しりょう", z: "Bahan, data"},
			{x: "カタログ", y: "カタログ", z: "Katalog"},
			{x: "時刻表", y: "じこくひょう", z: "Jadwal"},
			{x: "服", y: "ふく", z: "Pakaian"},
			{x: "製品", y: "せいひん", z: "Produk"},
			{x: "ソフト", y: "ソフト", z: "Perangkat lunak"},
			{x: "電気辞書", y: "でんきじしょ", z: "Kamus elektronik"},
			{x: "経済", y: "けいざい", z: "Ekonomi"},
			{x: "市役所", y: "しやくしょ", z: "Kantor wali kota"},
			{x: "高校", y: "こうこう", z: "SMA"},
			{x: "歯医者", y: "はいしゃ", z: "Dokter gigi"},
			{x: "独身", y: "どくしん", z: "Bujangan"}
		]
	},
	{
		id: "第16課",
		content: [
			{x: "乗ります", y: "のります", z: "Naik"},
			{x: "降ります", y: "おります", z: "Turun"},
			{x: "乗り換えます", y: "のりかえます", z: "Pindah kendaraan"},
			{x: "浴びます", y: "あびます", z: "Mandi"},
			{x: "入れます", y: "いれます", z: "Memasukkan"},
			{x: "出します", y: "だします", z: "Mengeluarkan, membuang"},
			{x: "下ろします", y: "おろします", z: "Mengambil, menurunkan"},
			{x: "入ります", y: "はいります", z: "Masuk"},
			{x: "出ます", y: "でます", z: "Keluar"},
			{x: "押します", y: "おします", z: "Menekan, mendorong"},
			{x: "飲みます", y: "のみます", z: "Minum"},
			{x: "始めます", y: "はじめます", z: "Memulai"},
			{x: "見学します", y: "けんがくします", z: "Meninjau"},
			{x: "電話します", y: "でんわします", z: "Menelpon"},
			{x: "若い", y: "わかい", z: "Muda"},
			{x: "長い", y: "ながい", z: "Panjang"},
			{x: "短い", y: "みじかい", z: "Pendek"},
			{x: "明るい", y: "あかるい", z: "Terang"},
			{x: "暗い", y: "くらい", z: "Gelap"},
			{x: "体", y: "からだ", z: "Tubuh, badan"},
			{x: "頭", y: "あたま", z: "Kepala"},
			{x: "髪", y: "かみ", z: "Rambut"},
			{x: "顔", y: "かお", z: "Wajah"},
			{x: "目", y: "め", z: "Mata"},
			{x: "耳", y: "みみ", z: "Telinga"},
			{x: "花", y: "はな", z: "Hidung"},
			{x: "口", y: "くち", z: "Mulut"},
			{x: "歯", y: "は", z: "Gigi"},
			{x: "お腹", y: "おなか", z: "Perut"},
			{x: "足", y: "あし", z: "Kaki"},
			{x: "背", y: "せ", z: "Punggung"},
			{x: "サービス", y: "サービス", z: "Pelayanan"},
			{x: "ジョギング", y: "ジョギング", z: "Jogging"},
			{x: "シャワー", y: "シャワー", z: "Shower"},
			{x: "緑", y: "みどり", z: "Hijau"},
			{x: "お寺", y: "おてら", z: "Wihara"},
			{x: "神社", y: "じんじゃ", z: "Kuil shinto"},
			{x: "どうやって", y: "どうやって", z: "Dengan cara bagaimana"},
			{x: "どれ", y: "どれ", z: "Yang mana"},
		]
	},
	{
		id: "第17課",
		content: [
			{x: "覚えます", y: "おぼえます", z: "Mengingat"},
			{x: "忘れます", y: "わすれます", z: "Lupa"},
			{x: "亡くします", y: "なくします", z: "Menghilangkan"},
			{x: "払います", y: "はらいます", z: "Membayar"},
			{x: "返します", y: "かえします", z: "Mengembalikan"},
			{x: "出かけます", y: "でかけます", z: "Keluar"},
			{x: "脱ぎます", y: "ぬぎます", z: "Melepas (pakaian)"},
			{x: "持って行きます", y: "もっていきます", z: "Membawa pergi"},
			{x: "持って来ます", y: "もってきます", z: "Membawa datang"},
			{x: "心配します", y: "しんぱいします", z: "Khawatir"},
			{x: "残業します", y: "ざんぎょうします", z: "Lembur"},
			{x: "出張します", y: "しゅっちょうします", z: "Dinas"},
			{x: "大切", y: "たいせつ", z: "Penting"},
			{x: "大丈夫", y: "だいじょうぶ", z: "Tidak apa-apa"},
			{x: "危ない", y: "あぶない", z: "Bahaya"},
			{x: "禁煙", y: "きんえん", z: "Dilarang merokok"},
			{x: "健康", y: "けんこう", z: "Kesehatan"},
			{x: "保険証", y: "ほけんしょう", z: "Kartu asuransi kesehatan"},
			{x: "熱", y: "ねつ", z: "Demam"},
			{x: "病気", y: "びょうき", z: "Sakit"},
			{x: "薬", y: "くすり", z: "Obat"},
			{x: "「お」ふろ", y: "おふろ", z: "Kamar mandi"},
			{x: "上着", y: "うわぎ", z: "Jaket"},
			{x: "下着", y: "したぎ", z: "Pakaian dalam"},
			{x: "ですから", y: "ですから", z: "Oleh karena itu"}
		]
	},
	{
		id: "第18課",
		content: [
			{x: "できます", y: "できます", z: "Bisa, dapat"},
			{x: "洗います", y: "あらいます", z: "Mencuci"},
			{x: "弾きます", y: "ひきます", z: "Bermain"},
			{x: "歌います", y: "うたいます", z: "Menyanyi"},
			{x: "集めます", y: "あつめます", z: "Mengumpulkan"},
			{x: "捨てます", y: "すてます", z: "Membuang"},
			{x: "換えます", y: "かえます", z: "Mengganti"},
			{x: "運転します", y: "うんてんします", z: "Menyetir, mengendarai"},
			{x: "予約します", y: "よやくします", z: "Memesan"},
			{x: "ピアノ", y: "ピアノ", z: "Piano"},
			{x: "現金", y: "げんきん", z: "Uang tunai"},
			{x: "趣味", y: "しゅみ", z: "Hobi"},
			{x: "日記", y: "にっき", z: "Diary"},
			{x: "お祈り", y: "おいのり", z: "Berdoa"},
			{x: "課長", y: "かちょう", z: "Kepala seksi"},
			{x: "部長", y: "ぶちょう", z: "Kepala bagian"},
			{x: "社長", y: "しゃちょう", z: "Direktur"},
			{x: "動物", y: "どうぶつ", z: "Binatang"},
			{x: "馬", y: "うま", z: "Kuda"},
			{x: "インターネット", y: "インターネット", z: "Internet"},
			{x: "特に", y: "とくに", z: "Terutama"}
		]
	},
	{
		id: "第19課",
		content: [
			{x: "登ります", y: "のぼります", z: "Naik"},
			{x: "泊まります", y: "とまります", z: "Menginap"},
			{x: "掃除します", y: "そうじします", z: "Membersihkan"},
			{x: "洗濯します", y: "せんたくします", z: "Mencuci"},
			{x: "無理", y: "むり", z: "Tidak mungkin"},
			{x: "眠い", y: "ねむい", z: "Mengantuk"},
			{x: "強い", y: "つよい", z: "Kuat"},
			{x: "弱い", y: "よわい", z: "Lemah"},
			{x: "練習", y: "れんしゅう", z: "Latihan"},
			{x: "ゴルフ", y: "ゴルフ", z: "Golf"},
			{x: "相撲", y: "すもう", z: "Sumo"},
			{x: "ひ", y: "ひ", z: "Hari"},
			{x: "調子", y: "ちょうし", z: "Kondisi"},
			{x: "一度", y: "いちど", z: "Sekali"},
			{x: "一度も", y: "いちども", z: "Sekalipun"},
			{x: "だんだん", y: "だんだん", z: "Lama kelamaan, berangsur angsur"},
			{x: "もうすぐ", y: "もうすぐ", z: "Sebentar lagi"},
			{x: "おかげさまで", y: "おかげさまで", z: "Berkat doa anda"},
			{x: "でも", y: "でも", z: "Tetapi"},
			{x: "乾杯", y: "かんぱい", z: "Toast"},
			{x: "ダイエット", y: "ダイエット", z: "Diet"}
		]
	},
	{
		id: "第20課",
		content: [
			{x: "要ります", y: "いります", z: "Membutuhkan, memerlukan"},
			{x: "調べます", y: "しらべます", z: "Memeriksa, meneliti"},
			{x: "修理します", y: "しゅうりします", z: "Memperbaiki"},
			{x: "僕", y: "ぼく", z: "Saya"},
			{x: "君", y: "きみ", z: "Kamu"},
			{x: "言葉", y: "ことば", z: "Kosakata"},
			{x: "着物", y: "きもの", z: "Kimono"},
			{x: "ビザ", y: "ビザ", z: "Visa"},
			{x: "初め", y: "はじめ", z: "Awal"},
			{x: "終わり", y: "おわり", z: "Akhir"},
			{x: "こっち", y: "こっち", z: "Disini"},
			{x: "そっち", y: "そっち", z: "Disana"},
			{x: "あっち", y: "あっち", z: "Disana"},
			{x: "どっち", y: "どっち", z: "Dimana"}
		]
	},
	{
		id: "第21課",
		content: [
			{x: "思います", y: "おもいます", z: "Berpikir"},
			{x: "言います", y: "いいます", z: "Berkata"},
			{x: "勝ちます", y: "かちます", z: "Menang"},
			{x: "負けます", y: "まけます", z: "Kalah"},
			{x: "あります", y: "あります", z: "Ada"},
			{x: "役に立ちます", y: "やくにたちます", z: "Bermanfaat"},
			{x: "動きます", y: "うごきます", z: "Bergerak"},
			{x: "やめます", y: "やめます", z: "Berhenti (kerja)"},
			{x: "気を付けます", y: "きをつけます", z: "Hati-hati"},
			{x: "留学します", y: "りゅうがくします", z: "Studi di luar negeri"},
			{x: "無駄", y: "むだ", z: "Sia-sia"},
			{x: "不便", y: "ふべん", z: "Tidak praktis"},
			{x: "すごい", y: "すごい", z: "Hebat"},
			{x: "本当", y: "ほんとう", z: "Benar, betul"},
			{x: "うそ", y: "うそ", z: "Bohong"},
			{x: "自動車", y: "じどうしゃ", z: "Mobil"},
			{x: "交通", y: "こうつう", z: "Lalu lintas"},
			{x: "物価", y: "ぶっか", z: "Harga barang"},
			{x: "放送", y: "ほうそう", z: "Siaran langsung"},
			{x: "ニュース", y: "ニュース", z: "Berita"},
			{x: "アニメ", y: "アニメ", z: "Animasi"},
			{x: "マンガ", y: "マンガ", z: "Komik"},
			{x: "デザイン", y: "デザイン", z: "Desain"},
			{x: "夢", y: "ゆめ", z: "Mimpi"},
			{x: "天才", y: "てんさい", z: "Genius"},
			{x: "試合", y: "しあい", z: "Pertandingan"},
			{x: "意見", y: "いけん", z: "Pendapat"},
			{x: "話", y: "はなし", z: "Cerita"},
			{x: "地球", y: "ちきゅう", z: "Bumi"},
			{x: "月", y: "つき", z: "Bulan"},
			{x: "最近", y: "さいきん", z: "Akhir-akhir ini"},
			{x: "多分", y: "たぶん", z: "Mungkin"},
			{x: "きっと", y: "きっと", z: "Pasti"},
			{x: "本当に", y: "ほんとうに", z: "Benarkah"},
			{x: "そんなに", y: "そんなに", z: "Tidak begitu"},
			{x: "について", y: "について", z: "Tentang"},
			{x: "もちろん", y: "もちろん", z: "Tentu saja"}
		]
	},
	{
		id: "第22課",
		content: [
			{x: "来ます", y: "きます", z: "Datang"},
			{x: "はきます", y: "はきます", z: "Memakai (sepatu, celana)"},
			{x: "かぶります", y: "かぶります", z: "Memakai (topi)"},
			{x: "かけます", y: "かけます", z: "Memakai (dasi)"},
			{x: "します", y: "します", z: "Melakukan"},
			{x: "うまれます", y: "うまれます", z: "Lahir"},
			{x: "私達", y: "わたしたち", z: "Kami"},
			{x: "コート", y: "コート", z: "Mantal"},
			{x: "セーター", y: "セーター", z: "Sweater"},
			{x: "スーツ", y: "スーツ", z: "Pakaian setelan"},
			{x: "帽子", y: "ぼうし", z: "Topi"},
			{x: "眼鏡", y: "めがね", z: "Kacamata"},
			{x: "ケーキ", y: "ケーキ", z: "Kue"},
			{x: "【お】弁当", y: "おべんとう", z: "Bekal"},
			{x: "ロボット", y: "ロボット", z: "Robot"},
			{x: "ユーモア", y: "ユーモア", z: "Humor"},
			{x: "都合", y: "つごう", z: "Kondisi"},
			{x: "よく", y: "よく", z: "Sering kali"}
		]
	},
	{
		id: "第23課",
		content: [
			{x: "聞きます", y: "ききます", z: "Mendengar"},
			{x: "回します", y: "まわします", z: "Memutar"},
			{x: "引きます", y: "ひきます", z: "Menarik"},
			{x: "換えます", y: "かえます", z: "Mengubah"},
			{x: "触ります", y: "さわります", z: "Menyentuh"},
			{x: "曲がります", y: "まがります", z: "Belok"},
			{x: "出ます", y: "でます", z: "Keluar"},
			{x: "歩きます", y: "あるきます", z: "Berjalan kaki"},
			{x: "渡ります", y: "わたります", z: "Menyebrang"},
			{x: "寂しい", y: "さびしい", z: "Sepi"},
			{x: "「お」湯", y: "おゆ", z: "Air panas"},
			{x: "音", y: "おと", z: "Suara"},
			{x: "サイズ", y: "サイズ", z: "Ukuran"},
			{x: "故障", y: "こしょう", z: "Rusak"},
			{x: "道", y: "みち", z: "Jalan"},
			{x: "交差点", y: "こうさてん", z: "Perempatan"},
			{x: "信号", y: "しんごう", z: "Lampu lalu lintas"},
			{x: "角", y: "かど", z: "Belokan /tikungan"},
			{x: "橋", y: "はし", z: "Jembatan"},
			{x: "駐車場", y: "ちゅうしゃじょう", z: "Tempat parkir"},
			{x: "建物", y: "たてもの", z: "Bangunan"}
		]
	},
	{
		id: "第24課",
		content: [
			{x: "くれます", y: "くれます", z: "Diberikan"},
			{x: "直します", y: "なおします", z: "Mengoreksi"},
			{x: "連れて行きます", y: "つれていきます", z: "Mengantar pergi/ membawa"},
			{x: "連れて来ます", y: "つれてきます", z: "Mengantar datang /membawa"},
			{x: "送ります", y: "おくります", z: "Mengirim"},
			{x: "紹介します", y: "しょうかいします", z: "Memperkenalkan"},
			{x: "案内します", y: "あんないします", z: "Mengantarkan"},
			{x: "説明します", y: "せつめいします", z: "Menjelaskan"},
			{x: "おじいさん", y: "おじいさん", z: "Kakek"},
			{x: "おばあさん", y: "おばあさん", z: "Nenek"},
			{x: "準備", y: "じゅんび", z: "Persiapan"},
			{x: "引っ越し", y: "ひっこし", z: "Pindah rumah"},
			{x: "「お」菓子", y: "おかし", z: "Cemilan/kue"},
			{x: "ホームステイ", y: "ホームステイ", z: "Homestay"},
			{x: "全部", y: "ぜんぶ", z: "Semua"},
			{x: "自分", y: "じぶん", z: "Diri sendiri"}
		]
	},
	{
		id: "第25課",
		content: [
			{x: "考えます", y: "かんがえます", z: "Berpikir"},
			{x: "着きます", y: "つきます", z: "Sampai/tiba"},
			{x: "取ります", y: "とります", z: "Mengambil"},
			{x: "足ります", y: "たります", z: "Cukup"},
			{x: "田舎", y: "いなか", z: "Kampung"},
			{x: "チャンス", y: "チャンス", z: "Kesempatan"},
			{x: "もし", y: "もし", z: "Kalau"},
			{x: "意味", y: "いみ", z: "Arti"}
		]
	},
	{
		id: "動詞 1",
		content: [
			{x: "会います", y: "あいます", z: "Bertemu"},
			{x: "洗います", y: "あらいます", z: "Mencuci"},
			{x: "言います", y: "いいます", z: "Berkata"},
			{x: "歌います", y: "うたいます", z: "Menyanyi"},
			{x: "思います", y: "おもいます", z: "Berpikir"},
			{x: "買います", y: "かいます", z: "Membeli"},
			{x: "吸います", y: "すいます", z: "Menghisap"},
			{x: "使います", y: "つかいます", z: "Menggunakan"},
			{x: "手伝います", y: "てつだいます", z: "Membantu"},
			{x: "習います", y: "ならいます", z: "Mempelajari"},
			{x: "払います", y: "はらいます", z: "Membayar"},
			{x: "もらいます", y: "もらいます", z: "Menerima"},
			{x: "います", y: "います", z: "Ada (benda hidup)"},
			{x: "行きます", y: "いきます", z: "Pergi"},
			{x: "連れて行きます", y: "つれていきます", z: "Mengantar pergi/ membawa"},
			{x: "勝ちます", y: "かちます", z: "Menang"},
			{x: "立ちます", y: "たちます", z: "Berdiri"},
			{x: "待ちます", y: "まちます", z: "Menunggu"},
			{x: "持ちます", y: "もちます", z: "Membawa"},
			{x: "役に立ちます", y: "やくにたちます", z: "Bermanfaat"},
			{x: "あります", y: "あります", z: "Ada (benda mati)"},
			{x: "要ります", y: "いります", z: "Membutuhkan, memerlukan"},
			{x: "売ります", y: "うります", z: "Menjual"},
			{x: "送ります", y: "おくります", z: "Mengirim"},
			{x: "終わります", y: "おわります", z: "Selesai"},
			{x: "帰ります", y: "かえります", z: "Pulang"},
			{x: "掛かります", y: "かかります", z: "Memerlukan waktu"},
			{x: "かぶります", y: "かぶります", z: "Memakai (topi)"},
			{x: "切ります", y: "きります", z: "Memotong"},
			{x: "触ります", y: "さわります", z: "Menyentuh"},
			{x: "知ります", y: "しります", z: "Mengetahui"},
			{x: "座ります", y: "すわります", z: "Duduk"},
			{x: "作ります", y: "つくります", z: "Membuat"},
			{x: "泊まります", y: "とまります", z: "Menginap"},
			{x: "撮ります", y: "とります", z: "Mengambil"},
			{x: "取ります", y: "とります", z: "Mengambil"},
			{x: "登ります", y: "のぼります", z: "Naik"},
			{x: "乗ります", y: "のります", z: "Naik"},
			{x: "入ります", y: "はいります", z: "Masuk"},
			{x: "降ります", y: "ふります", z: "Turun"},
			{x: "曲がります", y: "まがります", z: "Belok"},
			{x: "分かります", y: "わかります", z: "Mengerti"},
			{x: "渡ります", y: "わたります", z: "Menyebrang"},
			{x: "歩きます", y: "あるきます", z: "Berjalan kaki"},
			{x: "動きます", y: "うごきます", z: "Bergerak"},
			{x: "置きます", y: "おきます", z: "Meletakkan"},
			{x: "書きます", y: "かきます", z: "Menulis"},
			{x: "聞きます", y: "ききます", z: "Mendengar"},
			{x: "着きます", y: "つきます", z: "Sampai/tiba"},
			{x: "はきます", y: "はきます", z: "Memakai (sepatu, celana)"},
			{x: "働きます", y: "はたらきます", z: "Bekerja"},
			{x: "弾きます", y: "ひきます", z: "Bermain"},
			{x: "引きます", y: "ひきます", z: "Menarik"},
			{x: "持って行きます", y: "もっていきます", z: "Membawa pergi"},
			{x: "急ぎます", y: "いそぎます", z: "Bergegas"},
			{x: "泳ぎます", y: "およぎます", z: "Berenang"},
			{x: "脱ぎます", y: "ぬぎます", z: "Melepas (pakaian)"},
			{x: "遊びます", y: "あそびます", z: "Bermain"},
			{x: "呼びます", y: "よびます", z: "Memanggil"},
			{x: "住みます", y: "すみます", z: "Tinggal"},
			{x: "飲みます", y: "のみます", z: "Minum"},
			{x: "休みます", y: "やすみます", z: "Libur, istirahat"},
			{x: "読みます", y: "よみます", z: "Membaca"},
			{x: "下ろします", y: "おろします", z: "Mengambil, menurunkan"},
			{x: "押します", y: "おします", z: "Menekan, mendorong"},
			{x: "返します", y: "かえします", z: "Mengembalikan"},
			{x: "貸します", y: "かします", z: "Meminjamkan"},
			{x: "消します", y: "けします", z: "Mematikan, menghapus"},
			{x: "出します", y: "だします", z: "Mengeluarkan, membuang"},
			{x: "直します", y: "なおします", z: "Mengoreksi"},
			{x: "亡くします", y: "なくします", z: "Menghilangkan"},
			{x: "話します", y: "はなします", z: "Berbicara"},
			{x: "回します", y: "まわします", z: "Memutar"}
		]
	},
	{
		id: "動詞 2",
		content: [
			{x: "起きます", y: "おきます", z: "Bangun tidur"},
			{x: "浴びます", y: "あびます", z: "Mandi"},
			{x: "降ります", y: "おります", z: "Turun"},
			{x: "借ります", y: "かります", z: "Meminjam"},
			{x: "足ります", y: "たります", z: "Cukup"},
			{x: "できます", y: "できます", z: "Bisa, dapat"},
			{x: "見ます", y: "みます", z: "Melihat"},
			{x: "開けます", y: "あけます", z: "Membuka"},
			{x: "あげます", y: "あげます", z: "Memberi"},
			{x: "集めます", y: "あつめます", z: "Mengumpulkan"},
			{x: "入れます", y: "いれます", z: "Memasukkan"},
			{x: "生まれます", y: "うまれます", z: "Lahir"},
			{x: "教えます", y: "おしえます", z: "Mengajarkan, memberitahu"},
			{x: "覚えます", y: "おぼえます", z: "Mengingat"},
			{x: "換えます", y: "かえます", z: "Mengganti, Mengubah"},
			{x: "かけます", y: "かけます", z: "Memakai (dasi)"},
			{x: "考えます", y: "かんがえます", z: "Berpikir"},
			{x: "気を付けます", y: "きをつけます", z: "Hati-hati"},
			{x: "くれます", y: "くれます", z: "Diberikan"},
			{x: "閉めます", y: "しめます", z: "Menutup"},
			{x: "調べます", y: "しらべます", z: "Memeriksa, meneliti"},
			{x: "捨てます", y: "すてます", z: "Membuang"},
			{x: "食べます", y: "たべます", z: "Makan"},
			{x: "つけます", y: "つけます", z: "Menyalakan"},
			{x: "止めます", y: "とめます", z: "Berhenti"},
			{x: "出ます", y: "でます", z: "Keluar"},
			{x: "出かけます", y: "でかけます", z: "Keluar"},
			{x: "寝ます", y: "ねます", z: "Tidur"},
			{x: "乗り換えます", y: "のりかえます", z: "Pindah kendaraan"},
			{x: "始めます", y: "はじめます", z: "Memulai"},
			{x: "負けます", y: "まけます", z: "Kalah"},
			{x: "見せます", y: "みせます", z: "Memperlihatkan"},
			{x: "迎えます", y: "むかえます", z: "Menjemput"},
			{x: "止めます", y: "やめます", z: "Berhenti (kerja)"},
			{x: "忘れます", y: "わすれます", z: "Lupa"}
		]
	},
	{
		id: "動詞 3",
		content: [
			{x: "アルバイトします", y: "アルバイトします", z: "Kerja paruh waktu"},
			{x: "案内します", y: "あんないします", z: "Mengantarkan"},
			{x: "生け花します", y: "いけばなします", z: "Seni merangkai bunga"},
			{x: "運転します", y: "うんてんします", z: "Menyetir, mengendarai"},
			{x: "お祈りします", y: "おいのりします", z: "Berdoa"},
			{x: "お花見します", y: "おはなみします", z: "Menikmati bunga sakura"},
			{x: "会議します", y: "かいぎします", z: "Melakukan rapat"},
			{x: "買い物します", y: "かいものします", z: "Berbelanja"},
			{x: "見学します", y: "けんがくします", z: "Meninjau"},
			{x: "研究します", y: "けんきゅうします", z: "Meneliti"},
			{x: "結婚します", y: "けっこんします", z: "Menikah"},
			{x: "コピーします", y: "コピーします", z: "Mengkopi"},
			{x: "故障します", y: "こしょうします", z: "Rusak"},
			{x: "ゴルフします", y: "ゴルフします", z: "Bermain golf"},
			{x: "散歩します", y: "さんぽします", z: "Jalan-jalan"},
			{x: "サッカーします", y: "サッカーします", z: "Bermain sepak bola"},
			{x: "します", y: "します", z: "Melakukan"},
			{x: "スキーします", y: "スキーします", z: "Bermain ski"},
			{x: "スポーツします", y: "スポーツします", z: "Berolahraga"},
			{x: "宿題します", y: "しゅくだいします", z: "Mengerjakan PR"},
			{x: "仕事します", y: "しごとします", z: "Bekerja"},
			{x: "食事します", y: "しょくじします", z: "Makan bersama"},
			{x: "テニスします", y: "テニスします", z: "Bermain tenis"},
			{x: "ダンスします", y: "ダンスします", z: "Berdansa"},
			{x: "釣りします", y: "つりします", z: "Memancing"},
			{x: "電話をかけます", y: "でんわをかけます", z: "Menelpon"},
			{x: "電話します", y: "でんわします", z: "Menelpon"},
			{x: "話します", y: "はなしします", z: "Bercerita"},
			{x: "パーティーします", y: "パーティーします", z: "Berpesta"},
			{x: "引っ越しします", y: "ひっこしします", z: "Pindah rumah"},
			{x: "勉強します", y: "べんきょうします", z: "Belajar"},
			{x: "残業します", y: "ざんぎょうします", z: "Lembur"},
			{x: "試合します", y: "しあいします", z: "Bertanding"},
			{x: "心配します", y: "しんぱいします", z: "Khawatir"},
			{x: "修理します", y: "しゅうりします", z: "Memperbaiki"},
			{x: "出張します", y: "しゅっちょうします", z: "Dinas"},
			{x: "準備します", y: "じゅんびします", z: "Mempersiapkan"},
			{x: "紹介します", y: "しょうかいします", z: "Memperkenalkan"},
			{x: "ジョギングします", y: "ジョギングします", z: "Jogging"},
			{x: "相撲します", y: "すもうします", z: "Bermain sumo"},
			{x: "説明します", y: "せつめいします", z: "Menjelaskan"},
			{x: "洗濯します", y: "せんたくします", z: "Mencuci"},
			{x: "掃除します", y: "そうじします", z: "Membersihkan"},
			{x: "留学します", y: "りゅうがくします", z: "Studi di luar negeri"},
			{x: "料理します", y: "りょうりします", z: "Memasak"},
			{x: "旅行します", y: "りょこうします", z: "Berwisata"},
			{x: "練習します", y: "れんしゅうします", z: "Berlatih"},
			{x: "野球します", y: "やきゅうします", z: "Bermain baseball"},
			{x: "約束します", y: "やくそくします", z: "Berjanji"},
			{x: "予約します", y: "よやくします", z: "Memesan"},
			{x: "来ます", y: "きます", z: "Datang"},
			{x: "連れて来ます", y: "つれてきます", z: "Mengantar datang /membawa"},
			{x: "持って来ます", y: "もってきます", z: "Membawa datang"}
		]
	},
	{
		id: "い形容詞",
		content: [
			{x: "青い", y: "あおい", z: "Biru"},
			{x: "赤い", y: "あかい", z: "Merah"},
			{x: "明るい", y: "あかるい", z: "Terang"},
			{x: "暖かい", y: "あたたかい", z: "Hangat"},
			{x: "新しい", y: "あたらしい", z: "Baru"},
			{x: "熱い", y: "あつい", z: "Panas"},
			{x: "危ない", y: "あぶない", z: "Bahaya"},
			{x: "甘い", y: "あまい", z: "Manis"},
			{x: "いい", y: "いい", z: "Bagus"},
			{x: "忙しい", y: "いそがしい", z: "Sibuk"},
			{x: "美味しい", y: "おいしい", z: "Enak"},
			{x: "多い", y: "おおい", z: "Banyak"},
			{x: "大きい", y: "おおきい", z: "Besar"},
			{x: "遅い", y: "おそい", z: "Lambat"},
			{x: "重い", y: "おもい", z: "Berat"},
			{x: "面白い", y: "おもしろい", z: "Menarik"},
			{x: "辛い", y: "からい", z: "Pedas"},
			{x: "軽い", y: "かるい", z: "Ringan"},
			{x: "暗い", y: "くらい", z: "Gelap"},
			{x: "黒い", y: "くろい", z: "Hitam"},
			{x: "寂しい", y: "さびしい", z: "Sepi"},
			{x: "寒い", y: "さむい", z: "Dingin"},
			{x: "白い", y: "しろい", z: "Putih"},
			{x: "少ない", y: "すくない", z: "Sedikit"},
			{x: "すごい", y: "すごい", z: "Hebat"},
			{x: "涼しい", y: "すずしい", z: "Sejuk"},
			{x: "狭い", y: "せまい", z: "Sempit"},
			{x: "高い", y: "たかい", z: "Tinggi, mahal"},
			{x: "楽しい", y: "たのしい", z: "Senang"},
			{x: "小さい", y: "ちいさい", z: "Kecil"},
			{x: "近い", y: "ちかい", z: "Dekat"},
			{x: "冷たい", y: "つめたい", z: "Dingin (benda)"},
			{x: "強い", y: "つよい", z: "Kuat"},
			{x: "遠い", y: "とおい", z: "Jauh"},
			{x: "長い", y: "ながい", z: "Panjang"},
			{x: "眠い", y: "ねむい", z: "Mengantuk"},
			{x: "早い", y: "はやい", z: "Cepat"},
			{x: "欲しい", y: "ほしい", z: "Ingin"},
			{x: "低い", y: "ひくい", z: "Rendah"},
			{x: "広い", y: "ひろい", z: "Luas"},
			{x: "古い", y: "ふるい", z: "Lama, kuno"},
			{x: "短い", y: "みじかい", z: "Pendek"},
			{x: "難しい", y: "むずかしい", z: "Sulit"},
			{x: "若い", y: "わかい", z: "Muda"},
			{x: "悪い", y: "わるい", z: "Buruk"},
			{x: "優しい", y: "やさしい", z: "Baik hati"},
			{x: "安い", y: "やすい", z: "Murah"},
			{x: "弱い", y: "よわい", z: "Lemah"}
		]
	},
	{
		id: "な形容詞",
		content: [
			{x: "色々", y: "いろいろ", z: "Berbagai / macam-macam"},
			{x: "簡単", y: "かんたん", z: "Mudah"},
			{x: "嫌い", y: "きらい", z: "Benci"},
			{x: "綺麗", y: "きれい", z: "Cantik, bersih"},
			{x: "元気", y: "げんき", z: "Sehat"},
			{x: "静か", y: "しずか", z: "Sepi"},
			{x: "親切", y: "しんせつ", z: "Ramah"},
			{x: "上手", y: "じょうず", z: "Hebat"},
			{x: "好き", y: "すき", z: "Suka"},
			{x: "すてき", y: "すてき", z: "Bagus"},
			{x: "大切", y: "たいせつ", z: "Penting"},
			{x: "大丈夫", y: "だいじょうぶ", z: "Tidak apa-apa"},
			{x: "大変", y: "たいへん", z: "Sulit, sukar"},
			{x: "にぎやか", y: "にぎやか", z: "Ramai"},
			{x: "ハンサム", y: "ハンサム", z: "Tampan"},
			{x: "暇", y: "ひま", z: "Senggang"},
			{x: "不便", y: "ふべん", z: "Tidak praktis"},
			{x: "下手", y: "へた", z: "Tidak mahir"},
			{x: "便利", y: "べんり", z: "Praktis"},
			{x: "無駄", y: "むだ", z: "Sia-sia"},
			{x: "無理", y: "むり", z: "Tidak mungkin"},
			{x: "有名", y: "ゆうめい", z: "Terkenal"}
		]
	}
];

let containerIndex = document.querySelector(".container-index");
let containerBig = document.querySelector(".container-big");
let containerX = document.querySelector(".container-x");

//containerIndex
containerIndex.innerHTML = `
<section class="container-index">
	<div class="container">
		<h1 class="container-header">花クラス</h1>
		<div class="item">
			<div class="item-header"><span>JLPT</span></div>
			<span name="MNNKosakata" class="button button1">MNNの言葉</span>
			<span name="MNNKosakataKuis" class="button button1">MNNの言葉テスト</span>
		</div>
	</div>
</section>
`;


// Sembunyikan Tombol Premium
let containerHeader = document.querySelector(".container-header");
let premiumHidden = document.querySelector(".premium-hidden");
let clickCount = 0; // Variabel untuk menghitung jumlah klik ganda
containerHeader.addEventListener("dblclick", function() {
	clickCount++; // Meningkatkan hitungan setiap kali ada klik ganda
	
	// Jika sudah 5 kali klik ganda, tampilkan elemen yang tersembunyi
	if (clickCount >= 1000000) {
		premiumHidden.classList.remove("none");
	}
});

// Tombol menu hanya untuk admin
let adm = document.querySelectorAll(".adm");
for (let i = 0; i < adm.length; i++) {
	if (!((windowWidth === 424 && (windowHeight === 470 || windowHeight === 514 || windowHeight === 782 || windowHeight === 838)) || (windowWidth === 360 && windowHeight === 724))) {
		adm[i].textContent += "プレミアム";
		adm[i].style.pointerEvents = "none";
	}
}


// Event jika salah satu menu diklik
let spain = document.querySelectorAll(".container-index .item span.button")
let pageId, url;
for (let i = 0; i < spain.length; i++) {
	spain[i].addEventListener("click", function() {
		
		pageId = spain[i].getAttribute("name");
		url = `#${pageId}`;
		
		let a = document.createElement('a');
		a.href = url;
		a.click();
		history.pushState(null, null, url)
		window.addEventListener('popstate', function (event) {
			if (location.hash == url) {
				history.pushState(null, null, location.pathname);  // Menghapus hash jika ada
				containerBig.classList.remove("show");
				containerX.innerHTML = "";
				a.remove();
			}
		});
		
		
		containerBig.classList.add("show");
		containerX.scrollTop = 0;
		
		if (pageId == "MNNKosakata") {
			
			let objCheck;
			objCheck = kosakata_mnn;
			
			containerX.innerHTML = `
				<section id="${pageId}">
					<div class="grup-container">
						<div class="header">
							<span class="text-header">花クラス</span>
							<p>N5 の 言葉</p>
						</div>
						<div class="card-group"></div>
					</div>
					<div class="card-container hidden">
						<div class="button-container">
							<button class="close-button">戻る</button>
							<button class="shuffle-button">ランダム</button>
							<button class="reset-button">戻す</button>
						</div>
						<div class="cards"></div>
					</div>
				</section>
			`;
			
			const grupContainer = document.querySelector('.grup-container');
			const cardContainer = document.querySelector('.card-container');
			const cardsDiv = document.querySelector('.cards');
			const closeButton = document.querySelector('.close-button');
			const shuffleButton = document.querySelector('.shuffle-button');
			const resetButton = document.querySelector('.reset-button');
			const cardGroup = document.querySelector('.card-group');
			let currentGroup = [];
			let originalGroup = [];
			
			// Membuat tombol untuk setiap grup
			for (let i = 0; i < objCheck.length; i++) {
				const button = document.createElement('button');
				button.innerText = `${objCheck[i].id}`;
				button.className = 'group-button';
				button.addEventListener('click', () => showGroup(i));
				cardGroup.appendChild(button);
			}
			
			// Fungsi untuk menampilkan grup
			function showGroup(groupIndex) {
				cardsDiv.innerHTML = ''; // Bersihkan isi cardsDiv
				
				// Simpan salinan grup asli ke originalGroup
				originalGroup = [...objCheck[groupIndex].content];
				currentGroup = [...originalGroup]; // Mulai dengan urutan asli
				
				containerX.scrollTop = 0;
				
				displayCards(currentGroup); // Tampilkan kartu dengan urutan asli
				grupContainer.classList.add('hidden');
				cardContainer.classList.remove('hidden');
				setTimeout(() => cardContainer.classList.add('visible'), 10); // Animasi tampil
			}
			
			// Fungsi untuk menampilkan kartu
			function displayCards(group) {
				group.forEach(card => {
					const cardElement = document.createElement('div');
					cardElement.className = 'card';
					
					cardElement.innerHTML = `
						<div class="card-inner">
							<div class="card-front">
								<p>${card.x}</p>
							</div>
							<div class="card-back">
								<p>${card.y}</p>
								<p>${card.z}</p>
							</div>
						</div>
					`;
					
					// Event listener untuk membalik kartu
					cardElement.addEventListener('click', () => {
						const cardInner = cardElement.querySelector('.card-inner');
						cardInner.classList.toggle('flipped');
						cardElement.classList.toggle('active'); // Toggle untuk border hijau
					});
					
					cardsDiv.appendChild(cardElement);
				});
			}
		
			
			// Tombol shuffle (acak)
			shuffleButton.addEventListener('click', () => {
				// Reset status kartu (flipped dan active)
				cardsDiv.querySelectorAll('.card').forEach(cardElement => {
					const cardInner = cardElement.querySelector('.card-inner');
					cardInner.classList.remove('flipped');
					cardElement.classList.remove('active');
				});
				
				// Acak isi currentGroup
				currentGroup.sort(() => Math.random() - 0.5);
				
				// Bersihkan isi cardsDiv
				cardsDiv.innerHTML = ''; 
				
				// Tampilkan kartu yang sudah diacak
				displayCards(currentGroup); 
			});
			
			// Tombol reset
			resetButton.addEventListener('click', () => {
				// Reset status kartu (flipped dan active)
				cardsDiv.querySelectorAll('.card').forEach(cardElement => {
					const cardInner = cardElement.querySelector('.card-inner');
					cardInner.classList.remove('flipped');
					cardElement.classList.remove('active');
				});
				
				// Kembalikan ke urutan asli
				currentGroup = [...originalGroup]; // Menggunakan salinan asli
				
				// Bersihkan isi cardsDiv
				cardsDiv.innerHTML = ''; 
				
				// Tampilkan kembali kartu
				displayCards(currentGroup); 
			});
			
			// Tombol close
			closeButton.addEventListener('click', () => {
				// Reset currentGroup ke originalGroup saat grup di戻る
				currentGroup = [...originalGroup]; // Pastikan kembali ke urutan asli
				
				// Hapus status flipped dan active pada kartu
				cardsDiv.querySelectorAll('.card').forEach(cardElement => {
					const cardInner = cardElement.querySelector('.card-inner');
					cardInner.classList.remove('flipped');
					cardElement.classList.remove('active');
				});
				
				cardContainer.classList.remove('visible'); // Animasi 戻る
				setTimeout(() => {
					cardContainer.classList.add('hidden');
					grupContainer.classList.remove('hidden');
				}, 300); // Tunggu animasi selesai
			});
		 
		}
		
		
		
		
		
		
		else if (pageId == "MNNKosakataKuis") {
			let sectId, headerDesc, objCheck, textCard;
			sectId = pageId;
			headerDesc = "皆 の 日本語 の 言葉 テスト";
			objCheck = kosakata_mnn;
			
			containerX.innerHTML = `
					<section id="${sectId}">
						<div id="button-container">
							<header class="header">
								<span class="text-header">花クラス</span>
								<p>${headerDesc}</p>
							</header>
							<div id="btn-content"></div>
						</div>
						<div class="quiz-select none">
							<div class="select-item">
								<div class="select-head">
									<span class="select-title">ティップ</span>
								</div>
								<div class="select-body">
									<span class="type-item btn" data-type="id-jp">ID-JP</span>
									<span class="type-item btn" data-type="jp-id">JP-ID</span>
									<span class="type-item btn" data-type="cn-jp">CN-JP</span>
									<span class="type-item btn" data-type="id-cn">ID-CN</span>
									<span class="type-item btn" data-type="jp-cn">JP-CN</span>
									<span class="type-item btn" data-type="cn-id">CN-ID</span>
								</div>
							</div>
							<div class="select-item">
								<div class="select-head">
									<span class="select-title">レベル</span>
								</div>
								<div class="select-body">
									<span class="level-item btn" data-time="10" data-level="level1">レベル1</span>
									<span class="level-item btn" data-time="5" data-level="level2">レベル2</span>
									<span class="level-item btn" data-time="3" data-level="level3">レベル3</span>
								</div>
							</div>
							<div class="select-footer">
								<span class="play-quiz btn disabled">始めよう</span>
							</div>
						</div>
						<div id="quiz-container" style="display: none;">
							<div class="header header-x"></div>
							<div id="timer">時間0秒</div>
							<div id="quiz"></div>
							<div class="btn-group">
								<button class="submit-btn" disabled>答えを確認する</button>
								<button class="none back-btn">戻る</button>
							</div>
							<div id="result"></div>
							<div class="failed"></div>
						</div>
					</section>
			`;
			
			let quizSelect = document.querySelector(".quiz-select");
			let typeItem = document.querySelectorAll(".type-item");
			let levelItem = document.querySelectorAll(".level-item");
			let submitBtn = document.querySelector(".submit-btn");
			let backBtn = document.querySelector(".back-btn");
			let header = document.querySelector(".header-x");
			let failed = document.querySelector(".failed");
			let playQuiz = document.querySelector(".play-quiz");
			let currentBabIndex, timerInterval, timeLeft;
			submitBtn.disabled = true;
			
			let lvl;
			let lvlClick = false;
			
			
			// Fungsi utama untuk load menu
			function loadMainMenu() {
				const btnContent = document.getElementById('btn-content');
				btnContent.innerHTML = objCheck.map((bab, index) =>
					`<button class="start-quiz-btn" data-bab-index="${index}">${bab.id}</button>`
					).join('');
				
				// Menambahkan event listener pada setiap tombol
				const buttons = document.querySelectorAll('.start-quiz-btn');
				buttons.forEach(button => {
					button.addEventListener('click', (event) => {
						const babIndex = event.target.getAttribute('data-bab-index');
						startQuiz(babIndex);  // Memulai kuis saat tombol diklik
						quizSelect.classList.remove("none");
					});
				});
			}
			loadMainMenu();
			
			submitBtn.addEventListener('click', checkAnswer);
			backBtn.addEventListener('click', backToMain);
			
			// Fungsi untuk mulai kuis
			function startQuiz(babIndex) {
				currentBabIndex = babIndex;
				const bab = objCheck[babIndex];
				//header.innerHTML = bab.id;
				document.getElementById('button-container').style.display = 'none';
				document.getElementById('result').textContent = '';
			//	loadQuestions(bab);
				loadLevel(bab);
				submitBtn.disabled = true;
				submitBtn.classList.remove("none");
				backBtn.classList.add("none");
			}
			
			let x, y, z;
			let lvlText;
			let quizLength = 0;
			let dataType, dataLevel;
			let typeIndex = -1;
			let levelIndex = -1;
			// Fungsi untuk load level
			function loadLevel(bab) {
				for (let i =  0; i < typeItem.length; i++) {
					typeItem[i].addEventListener("click", function() {
						typeIndex = i;
						dataType = typeItem[i].getAttribute("data-type");
							 if (dataType == "id-jp") { x = "z"; y = "y"; z = "y"; }
						else if (dataType == "jp-id") { x = "y"; y = "z"; z = "x"; }
						else if (dataType == "cn-jp") { x = "x"; y = "y"; z = "z"; }
						else if (dataType == "id-cn") { x = "z"; y = "x"; z = "y"; }
						else if (dataType == "jp-cn") { x = "y"; y = "x"; z = "z"; }
						else if (dataType == "cn-id") { x = "x"; y = "z"; z = "y"; }
						
						typeItem.forEach(function(e) {
							e.classList.remove("active");
						}); typeItem[i].classList.add("active");
						
						if (!dataType == "" && !dataLevel == "") {
							playQuiz.classList.remove("disabled");
						}
					});
				}
				for (let i =  0; i < levelItem.length; i++) {
					levelItem[i].addEventListener("click", function() {
						levelIndex = i;
						dataLevel = levelItem[i].getAttribute("data-level");
						if (dataLevel == "level1") {
							timeLeft = bab.content.length * 10;
							lvlText = levelItem[i].innerText;
						} else if (dataLevel == "level2") {
							timeLeft = bab.content.length * 5;
							lvlText = levelItem[i].innerText;
						} else if (dataLevel == "level3") {
							timeLeft = bab.content.length * 3;
							lvlText = levelItem[i].innerText;
						}
						
						levelItem.forEach(function(e) {
							e.classList.remove("active");
						}); levelItem[i].classList.add("active");
						
						if (!dataType == "" && !dataLevel == "") {
							playQuiz.classList.remove("disabled");
						}
					});
				}
				playQuiz.addEventListener("click", function() {
					typeItem[typeIndex].classList.remove("active");
					levelItem[levelIndex].classList.remove("active");
					loadQuestions(bab);
					labelClick();
					resetTimer();
					quizSelect.classList.add("none");
					document.getElementById('quiz-container').style.display = 'block';
					header.innerHTML = typeItem[typeIndex].innerText + lvlText + bab.id;
				});
			}
			
			let q, a;
			let getData;
			const quizDiv = document.getElementById('quiz');
			// Fungsi untuk load soal dan pilihan jawaban
			function loadQuestions(bab) {
				
				quizDiv.innerHTML = '';
				// Acak urutan soal sebelum ditampilkan
				const shuffledQuestions = shuffleArray(bab.content);
				
				shuffledQuestions.forEach((question, index) => {
					
					q = question[x];
					a = question[y];
					quizLength = bab.content.length;
					
					// Mengacak pilihan jawaban untuk setiap soal
					const options = getShuffledOptions(bab.content, a);
					
				//	if (index < quizLength)
					quizDiv.innerHTML += 
					'<div class="question">' +
						'<div class="num">' + (index + 1) + '</div>' + 
						'<div class="quest">' + q + '</div>' +
						options.map(function(option) {
						return '<label>' +
									'<input type="radio" class="answer" name="answer' + index + '" value="' + option + '">' +
									option +
								'</label>';
						}).join('') + // Gabungkan semua pilihan menjadi satu string
						'<div id="feedback' + index + '" class="feedback"></div>' +
					'</div>';
				});
				
				// Menambahkan event listener untuk radio button
				const radioButtons = document.querySelectorAll('.answer');
				radioButtons.forEach(radio => {
					radio.addEventListener('change', enableSubmitButton);
				});
				
			}
			
			// Fungsi untuk menambahkan event listener pada label
			function labelClick() {
				let labels = document.querySelectorAll("label");
				
				// Loop untuk menambahkan event listener pada setiap label
				labels.forEach((label) => {
					let input = label.querySelector('input[type="radio"]');
					
					// Cek jika input radio ada dan beri event listener
					if (input) {
						// Dapatkan nama dari input radio untuk memfilter
						let radioName = input.getAttribute('name');
						
						// Tambahkan event listener
						label.addEventListener("click", () => {
							document.querySelectorAll(`label input[name="${radioName}"]`).forEach(function(eLabel) {
								eLabel.parentElement.classList.remove("hover");
							}); label.classList.add("hover");
						});
					}
				});
			}
			
			// Fungsi untuk mengacak pilihan jawaban
			function getShuffledOptions(questions, correctAnswer) {
				let wrongAnswers;
				wrongAnswers = questions.filter(q => q[y] !== correctAnswer).map(q => q[y]);
				
				// Pilih 3 jawaban salah secara acak (pastikan hanya memilih 3 pilihan yang salah)
				const randomWrongAnswers = shuffleArray(wrongAnswers).slice(0, 3);
				// Gabungkan jawaban yang benar dan 3 jawaban yang salah
				const options = [correctAnswer, ...randomWrongAnswers];
				// Acak seluruh pilihan jawaban
				return shuffleArray(options); // Mengacak pilihan
			}
			
			// Fungsi untuk mengacak array
			function shuffleArray(arr) {
				return arr.sort(() => Math.random() - 0.5);
			}
			
			// Fungsi untuk enable tombol Cek Jawaban
			function enableSubmitButton() {
				const allAnswered = [...document.querySelectorAll('.question')]
				.every((q, i) => document.querySelector(`input[name="answer${i}"]:checked`));
				submitBtn.disabled = !allAnswered;
			}
			
			// Fungsi untuk memulai timer
			function resetTimer() {
				const timerDiv = document.getElementById('timer');
				timerDiv.textContent = `時間${timeLeft}秒`;
				clearInterval(timerInterval); // Clear previous interval if any
				timerInterval = setInterval(() => {
					if (timeLeft < 0) {
						clearInterval(timerInterval);
						submitBtn.disabled = false;
						submitBtn.click(); // Auto-click "Cek Jawaban"
					} else {
						timerDiv.textContent = `時間${timeLeft--}秒`;
					}
				}, 1000);
			}
			
			// Fungsi untuk mengecek jawaban
			function checkAnswer() {
				submitBtn.disabled = true;
				submitBtn.classList.add("none");
				backBtn.classList.remove("none");
				clearInterval(timerInterval);
				const bab = objCheck[currentBabIndex];
				const questions = document.querySelectorAll('.question');
				let correctCount = 0;
				let f = "";
				let correctAnswer = {};
				let correctFailed = {};
				questions.forEach((q, i) => {
					const selected = document.querySelector(`input[name="answer${i}"]:checked`);
					const feedbackDiv = document.getElementById(`feedback${i}`);
					
					correctAnswer = bab.content[i][y];
					correctFailed = bab.content[i][x];
					
					if (selected) {
						if (selected.value === correctAnswer) {
							correctCount++;
							feedbackDiv.textContent = '正しい';
							feedbackDiv.style.color = 'green';
						} else {
							feedbackDiv.innerHTML = `間違いです。正しい答えは<u>${correctAnswer}</u>`;
							feedbackDiv.style.color = 'red';
							f += `<div class="item"><b>${correctFailed}</b><b>${correctAnswer}</b></div>`;
						}
					} else {
						feedbackDiv.innerHTML = `まだ答えていません。正しい答えは<u>${correctAnswer}</u>`;
						feedbackDiv.style.color = 'orange';
						f += `<div class="item"><b>${correctFailed}</b><b>${correctAnswer}</b></div>`;
					}
				});
				if (f !== undefined) {
					failed.innerHTML = f;
				}
				
				if (lvlText == "Level 1") {
					lvlText = "レベル1";
				} else if (lvlText == "Level 2") {
					lvlText = "レベル2";
				} else if (lvlText == "Level 3") {
					lvlText = "レベル3";
				}
				document.getElementById('result').innerHTML = `<p style="font-size:1.8rem;color:darkgreen;margin-bottom:0.4rem;">${typeItem[typeIndex].innerText} ${lvlText + bab.id}</p>あなたは${questions.length}問中${correctCount}問を正しく答えました。`;
				//document.getElementById('result').innerHTML = `<p style="font-size:1.8rem;color:darkgreen;margin-bottom:0.4rem;">${lvlText + bab.id}</p>Anda menjawab ${correctCount} dari ${questions.length} pertanyaan dengan benar.`;
				quizDiv.style.pointerEvents = "none";
			}
			
			// Fungsi untuk kembali ke menu utama
			function backToMain() {
				let c = confirm("本当にクイズページを終了してもよろしいですか。");
				if (c) {
					failed.innerHTML = "";
					clearInterval(timerInterval);
					document.getElementById('button-container').style.display = 'block';
					document.getElementById('quiz-container').style.display = 'none';
					document.getElementById('result').textContent = '';
					quizDiv.style.pointerEvents = "";
					dataType = "";
					dataLevel = "";
					playQuiz.classList.add("disabled");
				}
			}
		}
		
	});
}