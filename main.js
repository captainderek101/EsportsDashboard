import { createApp } from 'https://unpkg.com/petite-vue?module';

createApp({
    dark: false,

    toggleDark() {
        this.dark = !this.dark;
    },

    onMounted() {
        // Log page access
        console.log("Mounted!");
    }
}).mount("#app");