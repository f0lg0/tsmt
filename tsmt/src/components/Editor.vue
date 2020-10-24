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
import EventBus from "../utils/EventBus";

export default {
    data() {
        return {
            payload: "",
        };
    },

    created() {
        EventBus.$on("render", () => {
            this.render(this.payload);
        });
    },
    methods: {
        processKey(event) {
            const el = event.target;
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

        render(payload) {
            payload = payload.split("\n");
            let parsed = {};

            let prevClass = "";
            payload.forEach((loc) => {
                try {
                    if (
                        new RegExp("class" + " " + "\\w+" + " " + "{").test(loc)
                    ) {
                        loc = loc.split(" ");
                        parsed[loc[1]] = [];
                        prevClass = loc[1];
                    } else if (loc !== "}" && loc !== "\n" && loc !== "") {
                        const parsedAttribute = loc.substring(4).split(":");

                        parsed[prevClass].push({
                            attribute: parsedAttribute[0],
                            type: parsedAttribute[1]
                                .replace(";", "")
                                .replace(" ", ""),
                        });
                    } else if (loc === "}") {
                        prevClass = "";
                    }
                } catch {
                    console.log("[ERR] Syntax Error");
                }
            });

            console.log(parsed);
            EventBus.broadcastParsedPayload(parsed);
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

    color: var(--secondary-font-color);
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
