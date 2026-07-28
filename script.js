

// ==========================================
// 3. STATE GLOBAL
// ==========================================
let kategoriAktif = 'all';
let isPlaying = false;
let isPaused = false;
let currentWordIndex = 0;
let currentPartIndex = 0;
let playSessionId = 0;

const formKeys = ['kamus', 'ます', 'て', 'た', 'ない'];

// Variable Quiz
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;

// ==========================================
// 4. SUARA & SPEECH SYNTHESIS
// ==========================================
function speakAsync(text, lang = 'ja-JP') {
    return new Promise((resolve) => {
        if (!('speechSynthesis' in window) || !text) {
            resolve();
            return;
        }
        
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.7;

        utterance.onend = () => resolve();
        utterance.onerror = () => resolve();

        window.speechSynthesis.speak(utterance);
    });
}

// ==========================================
// 5. FILTER & RENDER LIST
// ==========================================
function setupDropdownKategori() {
    const select = document.getElementById('selectKategori');
    if (!select) return;

    select.innerHTML = '<option value="all">Semua Kategori</option>';

    // Mengambil kunci (nama kategori) dari pembagianKatakerja
    Object.keys(pembagianKatakerja).forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        // Membuat huruf pertama kapital agar tampilan rapi
        opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        select.appendChild(opt);
    });

    select.addEventListener('change', (e) => {
        kategoriAktif = e.target.value;
        stopAudio();
        renderData();
    });
}

function getFilteredData() {
    if (kategoriAktif === 'all') return dataKosakata;

    const targetVerbs = pembagianKatakerja[kategoriAktif] || [];
    
    // Filter kosakata berdasarkan apakah Kanji (kosakata[1]) ada di daftar kategori
    return dataKosakata.filter(item => {
        const kanji = item.kosakata && item.kosakata[1];
        return targetVerbs.includes(kanji);
    });
}

function renderData() {
    const container = document.getElementById('list-container');
    if (!container) return;

    container.innerHTML = '';
    const activeData = getFilteredData();

    if (activeData.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #777; margin-top: 20px;">Tidak ada kosakata dalam kategori ini.</p>';
        return;
    }

    activeData.forEach((item, wIndex) => {
        const divItem = document.createElement('div');
        divItem.className = 'list-item';
        divItem.style.cssText = "border: 1px solid #ddd; margin-bottom: 15px; padding: 12px; border-radius: 8px; background: #fff;";

        // Title Row
        let htmlContent = `
            <div class="sentence-row kosakata-title" id="item-${wIndex}-0" style="padding: 6px; border-radius: 4px;">
                <button class="play-btn" onclick="playFromHere(${wIndex}, 0)" title="Mulai dari sini">🔊</button>
                <strong style="font-size: 1.1em;">${item.kosakata[1]}（${item.kosakata[2]}）</strong> - <span>${item.arti[1]}</span>
            </div>
        `;

        // Sub-rows
        formKeys.forEach((key, pIndex) => {
            const partNum = pIndex + 1;
            const formObj = item[key];
            if (formObj) {
                htmlContent += `
                    <div class="sentence-row" id="item-${wIndex}-${partNum}" style="padding: 6px; margin-top: 4px; border-radius: 4px;">
                        <button class="play-btn" onclick="playFromHere(${wIndex}, ${partNum})" title="Mulai dari sini">🔊</button>
                        <strong>${formObj.form}:</strong> ${formObj.jp} <br>
                        <span style="margin-left: 35px; color: #555; font-size: 0.9em;">${formObj.id}</span>
                    </div>
                `;
            }
        });

        divItem.innerHTML = htmlContent;
        container.appendChild(divItem);
    });
}

// ==========================================
// 6. HIGHLIGHT & AUDIO PLAYBACK LOOP
// ==========================================
function clearHighlights() {
    document.querySelectorAll('.sentence-row').forEach(el => {
        el.style.backgroundColor = 'transparent';
    });
}

function highlightItem(wIndex, pIndex) {
    clearHighlights();
    const el = document.getElementById(`item-${wIndex}-${pIndex}`);
    if (el) {
        el.style.backgroundColor = '#e2f0ff';
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

async function runPlayLoop() {
    playSessionId++;
    const currentSession = playSessionId;

    isPlaying = true;
    isPaused = false;
    updateUI();

    const activeData = getFilteredData();
    const readID = document.getElementById('chk-indonesia')?.checked;

    while (isPlaying && currentWordIndex < activeData.length) {
        if (playSessionId !== currentSession) return;

        const item = activeData[currentWordIndex];

        while (currentPartIndex < 6) {
            if (playSessionId !== currentSession || !isPlaying) return;

            while (isPaused) {
                await new Promise(r => setTimeout(r, 200));
                if (playSessionId !== currentSession || !isPlaying) return;
            }

            highlightItem(currentWordIndex, currentPartIndex);

            let textJP = '';
            let textID = '';

            if (currentPartIndex === 0) {
                textJP = `${item.kosakata[1]}。${item.kosakata[2]}`;
                textID = item.arti[1];
            } else {
                const key = formKeys[currentPartIndex - 1];
                if (item[key]) {
                    textJP = item[key].jp;
                    textID = item[key].id;
                }
            }

            if (textJP) {
                await speakAsync(textJP, 'ja-JP');
                await new Promise(r => setTimeout(r, 300));
            }

            if (readID && textID && isPlaying && !isPaused) {
                await speakAsync(textID, 'id-ID');
                await new Promise(r => setTimeout(r, 500));
            }

            currentPartIndex++;
        }

        currentPartIndex = 0;
        currentWordIndex++;
    }

    stopAudio();
}

window.playFromHere = function(wIndex, pIndex) {
    window.speechSynthesis.cancel();
    currentWordIndex = wIndex;
    currentPartIndex = pIndex;
    runPlayLoop();
};

function pauseAudio() {
    if (isPlaying && !isPaused) {
        isPaused = true;
        window.speechSynthesis.pause();
    } else if (isPlaying && isPaused) {
        isPaused = false;
        window.speechSynthesis.resume();
    }
    updateUI();
}

function stopAudio() {
    isPlaying = false;
    isPaused = false;
    playSessionId++;
    window.speechSynthesis.cancel();
    clearHighlights();
    currentWordIndex = 0;
    currentPartIndex = 0;
    updateUI();
}

function updateUI() {
    const btnPlay = document.getElementById('btn-play-all');
    const btnPause = document.getElementById('btn-pause');
    const btnStop = document.getElementById('btn-stop');

    if (btnPlay) btnPlay.disabled = isPlaying;
    if (btnPause) {
        btnPause.disabled = !isPlaying;
        btnPause.textContent = isPaused ? '▶ Resume' : '⏸ Pause';
    }
    if (btnStop) btnStop.disabled = !isPlaying;
}

// ==========================================
// 7. FITUR QUIZ
// ==========================================
window.openQuiz = function() {
    stopAudio();
    document.getElementById('quiz-modal').style.display = 'block';
    document.getElementById('quiz-setup').style.display = 'block';
    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
};

window.closeQuiz = function() {
    window.speechSynthesis.cancel();
    document.getElementById('quiz-modal').style.display = 'none';
};

function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

window.startQuiz = function(amount) {
    const activeData = getFilteredData();
    if (!activeData || activeData.length === 0) {
        alert("Tidak ada data kosakata pada kategori ini untuk dijadikan quiz!");
        return;
    }

    let limit = Math.min(amount, activeData.length);
    let shuffledData = shuffleArray(activeData);

    quizQuestions = [];
    currentQuizIndex = 0;
    quizScore = 0;

    for (let i = 0; i < limit; i++) {
        const item = shuffledData[i];
        const randomFormKey = formKeys[Math.floor(Math.random() * formKeys.length)];
        const formObj = item[randomFormKey] || item['kamus'];

        const correctAnswer = formObj.form;

        // 1. Mengubah kata kunci di dalam kalimat soal Jepang menjadi "......"
        const maskedJpText = formObj.jp.replaceAll(correctAnswer, '......');

        // Opsi pilihan jawaban lain (pilihan acak)
        const distractorPool = activeData
            .filter(d => d.kosakata[1] !== item.kosakata[1])
            .map(d => (d[randomFormKey] ? d[randomFormKey].form : d.kosakata[1]));

        const options = shuffleArray([
            correctAnswer,
            ...shuffleArray(distractorPool).slice(0, 3)
        ]);

        quizQuestions.push({
            jpText: maskedJpText,      // Teks yang ditampilkan (dengan ......)
            rawJpText: formObj.jp,     // Kalimat asli utuh untuk dibaca audio saat tombol ditekan
            idText: formObj.id,
            correctAnswer: correctAnswer,
            options: options
        });
    }

    document.getElementById('quiz-setup').style.display = 'none';
    document.getElementById('quiz-active').style.display = 'block';
    renderQuestion();
};

function renderQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        showQuizResult();
        return;
    }

    const q = quizQuestions[currentQuizIndex];
    document.getElementById('quiz-progress').textContent = `Soal ${currentQuizIndex + 1} / ${quizQuestions.length}`;
    document.getElementById('quiz-text-jp').textContent = q.jpText;
    document.getElementById('quiz-text-id').textContent = q.idText;

    const nextBtn = document.getElementById('btn-next-question');
    if (nextBtn) nextBtn.style.display = 'none';

    const container = document.getElementById('quiz-options-container');
    container.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt-btn';
        btn.style.cssText = "display: block; width: 100%; margin: 8px 0; padding: 10px; font-size: 1em; text-align: left; cursor: pointer; border-radius: 5px; border: 1px solid #ccc;";
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt, btn);
        container.appendChild(btn);
    });

    // 2. Autoplay dihapus dari sini agar suara tidak langsung berbunyi
}

window.speakQuestion = function() {
    const q = quizQuestions[currentQuizIndex];
    if (q) {
        window.speechSynthesis.cancel();
        // Membacakan kalimat utuh asli (rawJpText) saat tombol 🔊 ditekan
        speakAsync(q.rawJpText || q.jpText, 'ja-JP');
    }
};

function checkAnswer(selectedOption, selectedBtn) {
    const q = quizQuestions[currentQuizIndex];
    const container = document.getElementById('quiz-options-container');
    const buttons = container.querySelectorAll('button');

    buttons.forEach(btn => btn.disabled = true);

    if (selectedOption === q.correctAnswer) {
        speakAsync(selectedOption, 'ja-JP');
        selectedBtn.style.backgroundColor = '#28a745';
        selectedBtn.style.color = '#fff';
        quizScore += 10;
    } else {
        speakAsync(selectedOption, 'ja-JP');
        selectedBtn.style.backgroundColor = '#dc3545';
        selectedBtn.style.color = '#fff';

        buttons.forEach(btn => {
            if (btn.textContent === q.correctAnswer) {
                btn.style.backgroundColor = '#28a745';
                btn.style.color = '#fff';
            }
        });
    }

    const nextBtn = document.getElementById('btn-next-question');
    if (nextBtn) nextBtn.style.display = 'inline-block';
}

window.nextQuestion = function() {
    currentQuizIndex++;
    renderQuestion();
};

function showQuizResult() {
    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';

    const totalPossibleScore = quizQuestions.length * 10;
    document.getElementById('quiz-score').textContent = `${quizScore} / ${totalPossibleScore}`;

    let feedback = "Bagus sekali! Teruskan belajarnya!";
    if (quizScore < totalPossibleScore * 0.6) {
        feedback = "Jangan menyerah! Ayo coba latihan lagi.";
    }
    document.getElementById('quiz-feedback').textContent = feedback;
}

// ==========================================
// 8. INISIALISASI SAAT HALAMAN DIMUAT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    setupDropdownKategori();
    renderData();

    document.getElementById('btn-play-all')?.addEventListener('click', () => {
        currentWordIndex = 0;
        currentPartIndex = 0;
        runPlayLoop();
    });

    document.getElementById('btn-pause')?.addEventListener('click', pauseAudio);
    document.getElementById('btn-stop')?.addEventListener('click', stopAudio);
    document.getElementById('btn-open-quiz')?.addEventListener('click', openQuiz);
});