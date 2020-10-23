<template>
    <div>
        <Editor />
        <div id="canva">
            <p>canva</p>
        </div>
    </div>
</template>

<script>
import Editor from "../components/Editor";

export default {
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
