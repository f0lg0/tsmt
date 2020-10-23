const SharedMethods = {
    initTheme: function() {
        if (localStorage.getItem("theme") === "dark-theme") {
            this.setTheme("dark-theme");
        } else {
            this.setTheme("light-theme");
        }
    },

    toggleTheme: function() {
        if (localStorage.getItem("theme") === "dark-theme") {
            this.setTheme("light-theme");
        } else {
            this.setTheme("dark-theme");
        }
    },

    setTheme: function(theme) {
        localStorage.setItem("theme", theme);
        document.documentElement.className = theme;
    },
};

export default SharedMethods;
