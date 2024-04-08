<template>
    <div>
      <!-- First div for the first item -->
      <div v-if="news.length > 0">
        <h2 class="title">{{ news[0].title }}</h2>
        <!-- Display other data of the first item here -->
      </div>
  
      <!-- Second div for the rest of the items -->
      <div v-for="(item, index) in paginatedData" :key="item.id" v-if="index < 5">
        <h2 class="title">{{ item.title }}</h2>
        <!-- Display other data here -->
      </div>
  
      <!-- Your pagination buttons here -->
    </div>
  </template>
  
  <script>
  export default {
    // Your data, asyncData, computed properties, and other methods here
  
    computed: {
      paginatedData() {
        const start = (this.currentPage - 1) * this.perPage + 1; // Start from the second item
        const end = start + this.perPage;
        return this.news.slice(start, end);
      },
  
      // Your totalPages computed property here
    },
  
    // Your methods here
  };
  </script>
  