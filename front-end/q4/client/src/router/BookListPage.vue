<template>
  <div>
    <BookList v-if="books" :books="books" />
    <p v-else>{{ state }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getAllBooks } from "@/api/books";
import BookList from "@/components/BookList.vue";
import type { Book } from "@/types/Book";

const books = ref<Book[]>([]);
const state = ref<string>("Loading");

/**
 * Responsible for fetching a list of books and managing the state.
 */
onMounted(async () => {
  // Fetch book list
  const response: Book[] = await getAllBooks();

  if (!Array.isArray(response.books)) {
    state.value = response;
    return;
  }

  books.value = response.books;
});
</script>
