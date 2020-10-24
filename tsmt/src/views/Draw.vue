<template>
    <div>
        <Editor />
        <div id="canva">
            <div id="classesArea"></div>
        </div>
    </div>
</template>

<script>
import Editor from "../components/Editor";
import EventBus from "../utils/EventBus";

export default {
    data() {
        return {
            drawable: null,
        };
    },
    created() {
        EventBus.$on("parsedPayload", (payload) => {
            const drawable = document.getElementById("classesArea");
            drawable.innerHTML = "";

            const classes = Object.keys(payload);

            for (const c of classes) {
                const classDiv = document.createElement("div");
                classDiv.style.width = "200px";
                classDiv.style.height = "300px";
                classDiv.style.border = "2px solid black";
                classDiv.style.padding = "15px";
                classDiv.innerText = c;

                drawable.appendChild(classDiv);
            }
        });
    },

    afterMount() {
        this;
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

#classesArea {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    width: 600px;
    height: 90vh;
    margin: auto;

    position: relative;
    top: 70px;
}
</style>
