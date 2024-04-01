<template>
    <div>
        <h1>Movies</h1>
        <div class="max-w-sm mx-auto" v-if="isLoading"><span class="text-2xl">is Loading</span></div>
        <div class="grid grid-cols-3 gap-4" v-else>
            <MovieCard v-for="movie in movieList" :movie="movie" :key="movie.id" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MovieCard from '@/components/MovieCard.vue';

    const movieList = ref([]);
    const isLoading = ref(true)

    onMounted(() => {
        fetch('http://localhost:3000/movies')
            .then(res => res.json())
            .then(movies => {
                movieList.value = movies;
                isLoading.value = false
            })
    })
</script>