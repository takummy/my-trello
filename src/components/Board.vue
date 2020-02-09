<template>
    <div>
        <header>
            My Trello
        </header>
        <main>
            <p class="info-line">All: 0 tasks</p>
            <list-add></list-add>
        </main>
    </div>
</template>

<script>
import ListAdd from './ListAdd.vue'

export default {
    components: {
        ListAdd
    }
}
</script>