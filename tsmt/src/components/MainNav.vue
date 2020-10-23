<template>
    <div>
        <div id="nav">
            <router-link to="/">
                <div id="logo"></div>
            </router-link>

            <div id="toggler" @click="toggleTheme()">
                <svg
                    v-if="darkTheme"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-moon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
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
                    stroke="#000000"
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
    left: 25%;
    right: 25%;
    bottom: 20px;
    width: 25px;
    height: 25px;

    margin: auto;
}

#toggler svg {
    stroke: #f2f2f2;
}
</style>
