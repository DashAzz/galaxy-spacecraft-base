<script>
export default {
    name: 'Pagination',

    props: {
        prev: {
            required: true
        },

        next: {
            required: true
        },

        isLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template lang="pug">
.pagination
    .page-item(:class="{'disabled': isLoading || !prev}")
        button.page-link(
            type="button"
            :disabled="isLoading || !prev"
            @click="$emit('change', prev)"
        ) Prev

    .page-item(:class="{'disabled': isLoading || !next}")
        button.page-link(
            type="button"
            :disabled="isLoading || !next"
            @click="$emit('change', next)"
        ) Next
</template>
