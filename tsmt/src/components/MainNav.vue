<template>
    <div>
        <div id="nav">
            <router-link to="/">
                <div id="logo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-home-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="5 12 3 12 12 3 21 12 19 12" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <rect x="10" y="12" width="4" height="4" />
                    </svg>
                </div>
            </router-link>

            <div id="render" v-if="$route.path != '/'">
                <svg
                    @click="emitRender()"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-player-play"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#f2f2f2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 4v16l13 -8z" />
                </svg>
            </div>

            <div id="toggler" @click="toggleTheme()">
                <svg
                    v-if="darkTheme"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-moon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#f2f2f2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 3c0.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
                    />
                </svg>

                <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-sun"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#f2f2f2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="4" />
                    <path
                        d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import SharedMethods from "../utils/shared";
import EventBus from "../utils/EventBus";

export default {
    data() {
        return {
            darkTheme:
                localStorage.getItem("theme") === "dark-theme" ? true : false,
        };
    },
    methods: {
        toggleTheme() {
            SharedMethods.toggleTheme();
            this.darkTheme = !this.darkTheme;
        },

        emitRender() {
            EventBus.broadcastRender();
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

#logo svg {
    margin: 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#toggler {
    position: absolute;
    left: 25%;
    right: 25%;
    bottom: 20px;
    width: 25px;
    height: 25px;

    margin: auto;
}

#render {
    width: 30px;
    height: 28px;

    margin: auto;
    margin-top: 50px;

    cursor: pointer;
}

#render svg {
    fill: #f2f2f2;
    transition: 0.5s;
}

#render svg:hover {
    fill: transparent;
}
</style>
