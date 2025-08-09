// 共通JavaScript機能

document.addEventListener('DOMContentLoaded', function() {
    // アプリ名からテーマクラスを設定
    const path = window.location.pathname;
    const body = document.body;
    
    if (path.includes('/gohan/')) {
        body.classList.add('theme-gohan');
    } else if (path.includes('/Okoru/')) {
        body.classList.add('theme-okoru');
    } else if (path.includes('/areatta/')) {
        body.classList.add('theme-areatta');
    }
    
    // スムーススクロール
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 最終更新日の自動設定（オプション）
    const updateDate = document.querySelector('.update-date');
    if (updateDate && updateDate.textContent.includes('AUTO')) {
        const today = new Date().toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        updateDate.textContent = `最終更新日：${today}`;
    }
});
