<script>
export default {
    name: 'NotFound'
}
</script>

<template lang="pug">
.not-found
    .not-found__content
        h1 Page not found
        p Unfortunately, this page is not on the site or it no longer exists.
        router-link(to="/starships") Go to the list of starships
</template>

<style lang="scss" scoped>
.not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 3rem 0;

    &__content {
        text-align: center;
    }
}
</style>
