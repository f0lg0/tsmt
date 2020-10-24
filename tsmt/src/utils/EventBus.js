import Vue from "vue";

const EventBus = new Vue({
    methods: {
        broadcastRender() {
            this.$emit("render");
        },
    },
});

export default EventBus;
