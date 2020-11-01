<template>
    <div id="home">
        <div id="mainImage">
            <img src="../assets/alien.svg" alt="[ERR] Image not loading" />
        </div>

        <div class="buttonWrapper">
            <div class="btn" @click="$router.push('/draw')">
                <p>New diagram</p>
            </div>
            <p>or</p>
            <div class="btn">
                <p>Load diagram <br />(NOT AVAILABLE YET)</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style scoped>
#home {
    background-color: var(--main-color);
    height: 100vh;
    width: calc(100%-70px);
    margin-left: 70px;
}

#mainImage {
    width: 400px;
    height: 400px;
    margin: auto;
    position: relative;
    top: 100px;
}

#mainImage img {
    width: 100%;
    height: 100%;
}

.buttonWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: auto;
    margin-top: 100px;
    width: 400px;
}

.buttonWrapper p {
    color: var(--main-font-color);
}

.btn {
    width: 200px;
    height: 50px;
    background: var(--main-accent);
    border-radius: 5px;

    cursor: pointer;

    margin-top: 20px;
    margin-bottom: 20px;

    border: 1px solid transparent;

    transition: 0.5s;
}
.btn:hover {
    border: 1px solid var(--main-accent);
    background: inherit;
}

.btn p {
    text-align: center;

    color: white;
    font-weight: 700;
    font-size: 14px;

    margin: 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.btn:hover p {
    color: var(--main-accent);
}
</style>
