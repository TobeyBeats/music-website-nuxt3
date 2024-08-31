<template>
    <div id="layout-full-page-no-cursor-follower">
        <Navbar/>
        <main>
            <slot/>
        </main>
        <Footbar />
    </div>
</template>

<style lang="scss" scoped>
#layout-full-page-no-cursor-follower {
    --max-content-width: 1420px;
    --space-sides: 50px;
    --navbar-height: 80px;
    --footbar-height: 80px;

    @media screen and (max-width: 550px) {
        --footbar-height: 100px;
    }

    @media screen and (max-width: 440px) {
        --footbar-height: 120px;
    }

    @media screen and (max-width: 380px) {
        --space-sides: 35px;
        --footbar-height: 140px;
    }

    @media screen and (max-width: 330px) {
        --space-sides: 30px;
    }

    main {
        max-width: 100%;
        padding-inline: 0px;
        margin-top: calc(var(--navbar-height) + var(--space-sides));
        margin-inline: 0px;
        padding-bottom: calc(var(--footbar-height) + var(--space-sides));
    }
}
</style>
