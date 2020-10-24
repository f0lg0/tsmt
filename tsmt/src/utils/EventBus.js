import Vue from "vue";

const EventBus = new Vue({
    methods: {
        broadcastRender() {
            this.$emit("render");
        },

        broadcastParsedPayload(payload) {
            this.$emit("parsedPayload", payload);
        },
    },
});

export default EventBus;
