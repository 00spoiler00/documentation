<script>
export default {

    props: ['title'],

    setup(props) {
        console.log(props.title)
    }
}
</script>

<template>
    <h1>{{ title }}</h1>
</template>