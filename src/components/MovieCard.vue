<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
        <div class="flex justify-center pt-3">
            <img :src="movie.poster" :alt="movie.title" class="rounded-t-lg">
        </div>
        <div class="p-5">
            <RouterLink :to="{name:'MovieDetails', params: {id: movie.id}}">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {{ movie.title }}
                </h5>
            </RouterLink>
            <span class="mr-4">{{ movie.year }}</span>
            <span>{{ movie.runtime }}</span>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        movie: Object
    })
</script>
