        (function() {
            const tabs = document.querySelectorAll('.tab-btn');
            const panes = document.querySelectorAll('.tab-pane');

            function activateTab(tabId) {
  
                panes.forEach(pane => {
                    pane.classList.remove('active-pane');
                });
         
                tabs.forEach(btn => {
                    btn.classList.remove('active');
                });
         
                const activePane = document.getElementById(tabId);
                if (activePane) activePane.classList.add('active-pane');

                const activeButton = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
                if (activeButton) activeButton.classList.add('active');
            }

            tabs.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const tabId = btn.getAttribute('data-tab');
                    if (tabId) {
                        activateTab(tabId);
                    }
                });
            });

            const defaultTab = document.querySelector('.tab-btn.active');
            if (!defaultTab || !document.querySelector('.tab-pane.active-pane')) {
                activateTab('aboutTab');
            }
        })();
    