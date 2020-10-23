<template>
    <div id="app">
        <router-view />
        <MainNav />
    </div>
</template>

<script>
import SharedMethods from "./utils/shared";
SharedMethods.initTheme();

import MainNav from "./components/MainNav";

export default {
    components: {
        MainNav,
    },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#app {
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.light-theme {
    --main-color: #fff;
    --secondary-color: #f4f5f7;
    --main-font-color: #444547;
    --secondary-font-color: #000;
    --error-red: #e60000;
    --main-accent: #5c55f7;
}

.dark-theme {
    --main-color: #343434;
    --secondary-color: #2d2d2d;
    --main-font-color: #929292;
    --secondary-font-color: #fff;
    --error-red: #e60000;
    --main-accent: #5c55f7;
}
</style>
