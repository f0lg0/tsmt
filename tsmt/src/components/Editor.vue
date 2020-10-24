<template>
    <div id="editor">
        <textarea
            name="code"
            id="codeEditor"
            @keydown="processKey($event)"
            v-model="payload"
        ></textarea>
    </div>
</template>

<script>
export default {
    data() {
        return {
            payload: "",
        };
    },
    methods: {
        processKey(event) {
            const el = event.target;
            console.log(event.key);
            if (event.key === "Tab") {
                event.preventDefault();

                const start = el.selectionStart;
                const end = el.selectionEnd;

                // set textarea value to: text before caret + tab + text after caret
                el.value =
                    el.value.substring(0, start) +
                    "    " +
                    el.value.substring(end);

                // put caret at right position again
                el.selectionStart = el.selectionEnd = start + 4;
            } else if (event.key === "{") {
                setTimeout(() => {
                    el.value += "}";
                    el.selectionStart = el.selectionEnd = el.selectionStart - 1;
                }, 50);
            }
        },
    },
};
</script>

<style scoped>
#editor {
    position: absolute;
    top: 0;
    left: 70px;

    height: 100vh;
    width: 300px;

    background-color: var(--secondary-color);
}

#codeEditor {
    outline: none;
    resize: none;
    overflow: auto;

    height: 100vh;
    width: 300px;

    background-color: var(--secondary-color);
    border: none;

    color: var(--main-font-color);
    padding: 10px;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--primary-color);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgba(85, 85, 85, 0.4);
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
