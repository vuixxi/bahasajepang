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