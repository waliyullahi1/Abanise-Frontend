<template>
    <div>
        <div v-for="item in paginatedData" :key="item.id">
            <!-- Display your data here -->
        </div>

        <button @click="previousPage" :disabled="currentPage == 1">Previous</button>
        <button @click="nextPage" :disabled="currentPage == totalPages">Next</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
            perPage: 5,
            news: [], // This will hold your news data
        };
    },
    async asyncData() {
        const response = await fetch('Your API URL');
        const data = await response.json();
        return {
            news: data,
        };
    },
    computed: {
        paginatedData() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.news.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.news.length / this.perPage);
        },
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        shortenTitle(title) {
            const maxLength = 50; // Adjust this value as needed
            if (title.length > maxLength) {
                return title.substring(0, maxLength) + '...';
            } else {
                return title;
            }
        }
    },
};
</script>