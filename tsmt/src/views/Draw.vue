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

            let wrapperId = 0;
            for (const c of classes) {
                const wrapper = document.createElement("div");
                let wrapperHeight = 100;
                wrapper.style.position = "absolute";
                wrapper.style.width = "200px";
                wrapper.style.minHeight = "100px";
                wrapper.style.border = "2px solid black";
                wrapper.style.borderRadius = "5px";
                wrapper.id = `wrapper-${wrapperId}`;

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
                this.dragElement(wrapper);
                wrapperId++;

                drawable.appendChild(wrapper);
            }
        });
    },

    methods: {
        dragElement(elmnt) {
            let pos1 = 0,
                pos2 = 0,
                pos3 = 0,
                pos4 = 0;
            if (document.getElementById(elmnt.id)) {
                // if present, the header is where you move the DIV from:
                document.getElementById(elmnt.id).onmousedown = dragMouseDown;
            } else {
                // otherwise, move the DIV from anywhere inside the DIV:
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = elmnt.offsetTop - pos2 + "px";
                elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
            }

            function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },
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
    justify-content: space-around;

    width: 90%;
    height: 90%;
    margin: auto;

    position: relative;
    top: 20px;
}

.uml-class {
    width: 200px;
    height: 20px;
    border: 2px solid black;
    padding: 10px;
    text-align: center;
}
</style>
