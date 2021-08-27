<template>
    <div class="container">
        <div class="column">
            <div class="element">
                <img src="../../assets/images/DAAGallery/test.png">
                <div class="overlay">CAPTIONS</div>
            </div>
            <div class="element">
                <img src="../../assets/images/DAAGallery/test.png">
                 <div class="overlay">CAPTIONS</div>

            </div>
        </div>
        <div class="column">
            <div class="element">
                <img src="../../assets/images/DAAGallery/test.png">
 <div class="overlay">CAPTIONS</div>
            </div>
            <div class="element">
                <img src="../../assets/images/DAAGallery/test.png">
                 <div class="overlay">CAPTIONS</div>
            </div>
        </div>
        <div class="column">
            <div class="element">
                <img src="../../assets/images/DAAGallery/test.png">
                 <div class="overlay">CAPTIONS</div>
            </div>
            <div class="element">
                <img src="../../assets/images/DAAGallery/test.png">
                 <div class="overlay">CAPTIONS</div>
            </div>
        </div>
        <div class="column">
            <div class="element">
                <img src="../../assets/images/DAAGallery/test.png">
                 <div class="overlay">CAPTIONS</div>
            </div>
            <div class="element">
                <img src="../../assets/images/DAAGallery/test.png">
                 <div class="overlay">CAPTIONS</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ImageGrid"
}
</script>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .column {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin-bottom: 2.5%;

    }
    .element {
        width: 40%;
        position: relative;
    }
    .element img {
        width: 100%;
    }
    .overlay {
        position: absolute;
        bottom: 0;
        height: 20%;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        font-weight: 800;
    }
    @media screen and (max-width: 768px) {
        .overlay {
            font-size: 16px
        }
        .column {
            margin-bottom: 10%;
        }
        .element {
            width: 45%
        }
    }

</style>