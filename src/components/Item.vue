<script>
export default {
    name: 'Item',

    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<template lang="pug">
.list-group-item.list-group-item-action
    h5.mb1
        router-link(:to="`/starships/${item.id}`") {{item.name}}

    p.mb-1 {{item.model}}
    small Manufacturer: {{item.manufacturer}}
</template>
