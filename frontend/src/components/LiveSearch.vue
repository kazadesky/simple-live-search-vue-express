<template>
  <div>
    <input type="text" v-model="query" @input="fetchResults" placeholder="Search..." />
    <ul v-if="results.length">
      <li v-for="result in results" :key="result.id">{{ result.name }}</li>
    </ul>
    <p v-else>No results found</p>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash/debounce';

export default {
  data() {
    return {
      query: '', // Query pencarian
      results: [] // Hasil pencarian
    };
  },
  methods: {
    // async fetchResults() {
    //   if (this.query.trim() === '') {
    //     this.results = [];
    //     return;
    //   }

    //   try {
    //     const response = await axios.get(`http://localhost:3000/search?q=${this.query}`);
    //     this.results = response.data;
    //   } catch (error) {
    //     console.error("Error fetching results:", error);
    //   }
    // },

    fetchResults: debounce(async function () {
      if (this.query.trim() === '') {
        this.results = [];
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/search?q=${this.query}`);
        this.results = response.data;
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    }, 300)
  }
};
</script>

<style>
/* Tambahkan styling sesuai kebutuhan */
input {
  padding: 8px;
  width: 100%;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px 0;
}
</style>
