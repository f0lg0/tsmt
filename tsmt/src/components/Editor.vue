<template>
    <div id="editor">
        <textarea name="code" id="codeEditor"></textarea>
    </div>
</template>

<script>
export default {};
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
