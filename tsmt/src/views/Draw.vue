<template>
    <div>
        <Editor />
        <div id="canva"></div>
    </div>
</template>

<script>
import Editor from "../components/Editor";
import EventBus from "../utils/EventBus";

export default {
    created() {
        EventBus.$on("parsedPayload", (payload) => {
            const classes = Object.keys(payload);

            for (const c of classes) {
                const classDiv = document.createElement("div");
                classDiv.style.width = "100px";
                classDiv.style.height = "100px";
                classDiv.style.border = "1px solid red";
                classDiv.innerText = c;

                document.getElementById("canva").appendChild(classDiv);
            }
        });
    },
    components: {
        Editor,
    },
};
</script>

<style scoped>
#canva {
    background-color: var(--main-color);
    height: 100vh;
    width: calc(100%-370px);
    margin-left: 370px;
}

p {
    color: white;
}
</style>
