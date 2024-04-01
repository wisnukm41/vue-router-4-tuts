<template>
    <section class="p-5 m-6 bg-white">
        <div class="container" v-if="isLoading">is Loading...</div>
        <div class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row" v-else>
            <div class="flex justify-center xl:w-1/2">
                <img :src="queryMovie.poster" :alt="queryMovie.title"
                    class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-fill rounded-md"
                >
            </div>

            <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl">{{ queryMovie.title }}</h2>
                <span class="p-2 m-2 rounded-md bg-slate-300 text-slate-800">{{ queryMovie.year }}</span>
                <span class="p-2 m-2 rounded-md bg-slate-300 text-slate-800">{{ queryMovie.runtime }}</span>

                <div class="mt-6 sm:-mx-2">
                    <div class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                        <button class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-slate-200 bg-slate-800"
                            @click="$router.back()"
                        >
                            <span class="mx-2">Go Back</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const queryMovie = ref({})
const isLoading = ref(true)
const router = useRouter();

const props = defineProps({
    id : {
        type : String,
        required : true
    }
})

onMounted(() => {
    fetch("http://localhost:3000/movies/" + props.id)
       .then((res) => { 
            if(res.status == 404) {
                router.push({ name : "NotFound" })
            }
            return res.json()
        })
       .then((movie) => {
            queryMovie.value = movie;
            isLoading.value = false;
        });

    
})
</script>