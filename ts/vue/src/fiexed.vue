<template>
    <div class="content">
        <div class="card">
            <h3 class="title">Users with JS</h3>
            <input
                v-model="search"
                type="text"
                placeholder="Enter ID"
                class="input mb-4 w-full" />
            <div class="relative min-h-[454px]">
                <div
                    v-for="user in filterUsers"
                    :key="user.index"
                    class="flex items-center border-gray-300 border mb-2 rounded-md py-2 px-4"
                >
                    <p class="mr-4">{{user.index}}</p>
                    <img :src="user.avatar" :alt="user.name" class="w-10 h-10 rounded-full aspect-square object-cover" />
                    <p class="ml-2">{{user.name}}</p>
                </div>
                <Loading :visible="visible" />
            </div>

            <div class="flex items-center justify-center mt-4">
                <p
                    v-for="n in 5"
                    :key="n"
                    class="page"
                    :class="{ 'bg-blue-500 text-white': n === currentPage, 'select-none opacity-70': visible }"
                    @click="onChangePage(n)"
                >
                    {{n}}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';

    import Loading from './Loading.vue';

    interface User {
        index: number;
        name: string;
        avatar: string;
    }

    const users = ref<User[]>([]);
    const currentPage = ref(1);
    const visible = ref(false);
    const search = ref('');

    onMounted(() => {
        const searchParams = new URLSearchParams(window.location.search);
        currentPage.value = +(searchParams.get('page') || 1);
        fetchData();
    });

    const filterUsers = computed(() => {
        if (search.value) {
            return users.value.filter(user => user.index === +search.value);
        } else {
            return users.value;
        }
    })

    async function fetchData() {
        visible.value = true;
        const response = await fetch(`https://62d796c849c87ff2af38af47.mockapi.io/api/v1/users?limit=7&page=${currentPage.value}`);
        const data = await response.json();
        users.value = data;
        visible.value = false;
    }

    function onChangePage(pageNo: number) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('page', pageNo.toString());
        window.history.replaceState(null, '', `?${searchParams.toString()}`);
        currentPage.value = pageNo;
        fetchData();
    }
</script>
