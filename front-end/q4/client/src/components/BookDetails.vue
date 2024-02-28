<template>
  <div v-if="book" class="book-details">
    <div class="header">
      <h1>{{ book.title }}</h1>
      <span>Upvoted: {{ book.upvotes }} times</span>
      <button>Upvote</button>
    </div>
    <p>{{ book.author }}</p>
    <img :src="book.cover" :alt="`Cover of ${book.title}`" />
    <h2>Synopsis</h2>
    <p>{{ book.synopsis }}</p>
    <div>Rating: {{ book.rating }}</div>
  </div>
  <p v-else>Loading...</p>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getBookBySlug } from "../api/booksApi";
import type { Book } from "../types/Book";

const route = useRoute();
const book = ref<Book | null>(null);

onMounted(async () => {
  const slug = route.params.slug;
  if (typeof slug === "string") {
    const response = await getBookBySlug(slug);
    if (!Array.isArray(response)) {
      book.value = response;
    } else {
      console.error("Book not found");
    }
  }
});
</script>

<style scoped>
.book-details img {
  max-width: 200px;
  height: auto;
}
</style>
