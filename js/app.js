import { HomeView, initHomeEvents } from './views/HomeView.js';
import { NetworkView } from './views/NetworkView.js';
import { ToolsView } from './views/ToolsView.js';
import { ProfileView } from './views/ProfileView.js';

const app = {
    init() {
        console.log('App Initializing...');
        this.cacheDOM();
        this.bindEvents();
        this.render('home'); // Default view
    },

    cacheDOM() {
        this.mainContent = document.getElementById('main-content');
        this.navItems = document.querySelectorAll('.nav-item');
    },

    bindEvents() {
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const targetBtn = e.target.closest('.nav-item');
                const page = targetBtn.dataset.target;

                this.updateNav(targetBtn);
                this.render(page);
            });
        });
    },

    updateNav(targetBtn) {
        this.navItems.forEach(btn => btn.classList.remove('active'));
        targetBtn.classList.add('active');
    },

    render(page) {
        let content = '';
        switch (page) {
            case 'home':
                content = HomeView();
                break;
            case 'networks':
                content = NetworkView();
                break;
            case 'tools':
                content = ToolsView();
                break;
            case 'profile':
                content = ProfileView();
                break;
            default:
                content = HomeView();
        }

        this.mainContent.innerHTML = content;

        // Initialize view-specific events
        if (page === 'home') {
            initHomeEvents();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
