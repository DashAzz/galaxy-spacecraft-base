<script>
export default {
    name: 'SearchForm',

    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            value: ''
        };
    }
}
</script>

<template lang="pug">
form.d-flex
    input.mr-2.form-control(
        v-model="value"
        type="text"
        :disabled="isLoading"
    )

    button.btn.btn-primary(
        :disabled="isLoading"
        @click="$emit('search', { search: value })"
    ) search
</template>
