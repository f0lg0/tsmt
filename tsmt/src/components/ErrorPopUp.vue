<template>
    <div id="err" v-if="display">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-circle-x"
            width="35"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#c50000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <path d="M10 10l4 4m0 -4l-4 4" />
        </svg>

        <div class="err-msg">
            <p>
                <span style="font-weight: bold; font-size: 18px; color: #000"
                    >Error</span
                >
                <br />
                Syntax error
            </p>
        </div>

        <!-- blank space -->
        <div id="void"></div>

        <div id="close" @click="$emit('display-popup', false)">
            <p>CLOSE</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            display: true,
        };
    },
};
</script>

<style scoped>
#err {
    position: fixed;
    bottom: 20px;
    left: 100px;
    width: 300px;
    height: 70px;

    background: #fff;
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.25);

    border-radius: 10px;
    border-left: 10px solid var(--error-red);

    display: flex;
    flex-direction: row;
    align-content: center;
}

#err svg {
    height: 100%;
    margin-left: 10px;
}

.err-msg {
    height: 100%;
    margin-left: 15px;
    text-align: left;
}

.err-msg p {
    margin: 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 14px;
    color: rgb(133, 133, 133);
}

#void {
    width: 70px;
}
#close {
    right: 0;
    border-left: 1px solid rgb(204, 204, 204);
    width: 65px;

    cursor: pointer;
}

#close p {
    margin: 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 11px;
    letter-spacing: 1px;
    color: rgb(133, 133, 133);
    margin-left: 10px;
}
</style>
