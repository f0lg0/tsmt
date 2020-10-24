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
            console.log(payload);
            const drawable = document.getElementById("classesArea");
            drawable.innerHTML = "";

            const classes = Object.keys(payload);

            for (const c of classes) {
                const wrapper = document.createElement("div");
                let wrapperHeight = 100;

                wrapper.style.width = "200px";
                wrapper.style.minHeight = "100px";
                wrapper.style.border = "2px solid black";
                wrapper.style.borderRadius = "5px";

                const classDiv = document.createElement("div");
                classDiv.style.width = "198px";
                classDiv.style.height = "28px";
                classDiv.style.borderBottom = "2px solid black";
                classDiv.innerText = c;
                classDiv.style.textAlign = "center";

                const attributes = document.createElement("div");
                attributes.style.width = "200px";
                attributes.style.padding = "10px";

                for (let i = 0; i < payload[c].length; i++) {
                    const temp = document.createElement("div");
                    temp.innerText =
                        payload[c][i].attribute + ": " + payload[c][i].type;

                    attributes.appendChild(temp);
                    wrapper.style.height = `${wrapperHeight}px`;
                    wrapperHeight += 20;
                }

                wrapper.appendChild(classDiv);
                wrapper.appendChild(attributes);

                drawable.appendChild(wrapper);
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

.uml-class {
    width: 200px;
    height: 20px;
    border: 2px solid black;
    padding: 10px;
    text-align: center;
}
</style>
