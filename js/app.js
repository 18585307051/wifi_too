// Main App Logic with Global Namespace
window.App = window.App || {};

window.App.Core = {
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
        const { HomeView, NetworkView, ToolsView, ProfileView, initHomeEvents, initProfileEvents } = window.App;

        switch (page) {
            case 'home':
                content = HomeView ? HomeView() : 'Loading...';
                break;
            case 'networks':
                content = NetworkView ? NetworkView() : 'Loading...';
                break;
            case 'tools':
                content = ToolsView ? ToolsView() : 'Loading...';
                break;
            case 'profile':
                content = ProfileView ? ProfileView() : 'Loading...';
                break;
            default:
                content = HomeView ? HomeView() : 'Loading...';
        }

        this.mainContent.innerHTML = content;

        // Initialize view-specific events
        if (page === 'home' && initHomeEvents) {
            initHomeEvents();
        } else if (page === 'networks' && window.App.initNetworkEvents) {
            window.App.initNetworkEvents();
        } else if (page === 'profile' && initProfileEvents) {
            initProfileEvents();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.App.Core.init();
});


