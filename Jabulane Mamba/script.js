    (function() {
        const btns = document.querySelectorAll('.tab-btn');
        const panes = document.querySelectorAll('.tab-pane');

        function switchTab(tabId) {
            panes.forEach(pane => pane.classList.remove('active-pane'));
            btns.forEach(btn => btn.classList.remove('active'));
            document.getElementById(tabId).classList.add('active-pane');
            const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
            if (activeBtn) activeBtn.classList.add('active');
        }

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                if (tabId) switchTab(tabId);
            });
        });
    })();
