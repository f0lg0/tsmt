<template>
    <div>
        <div id="nav">
            <router-link to="/">
                <div id="logo"></div>
            </router-link>

            <button id="toggler" @click="toggleTheme()">Theme</button>
        </div>
    </div>
</template>

<script>
import SharedMethods from "../utils/shared";

export default {
    methods: {
        toggleTheme() {
            SharedMethods.toggleTheme();
        },
    },
};
</script>

<style scoped>
#nav {
    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
    width: 70px;
    background: #000;
}

#logo {
    height: 40px;
    width: 40px;
    background-color: var(--main-accent);
    border-radius: 50%;
    margin: auto;
    margin-top: 20px;

    cursor: pointer;
}

#toggler {
    position: absolute;
    bottom: 0;
}
</style>
