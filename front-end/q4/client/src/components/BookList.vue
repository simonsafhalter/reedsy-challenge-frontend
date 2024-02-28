<template>
  <div class="book-list">
    <h1>Top books of all time</h1>
    <ul>
      <li v-for="(book, index) in books" :key="book.slug">
        <BookListItem :book="book" :index="index" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getAllBooks } from "../api/booksApi";
import BookListItem from "./BookListItem.vue";
import type { Book } from "../types/Book";

// reactive state
const books = ref<Book[]>([]);

// lifecycle hooks
onMounted(async () => {
  const response = await getAllBooks();
  console.log(response);
  if (Array.isArray(response.books)) {
    books.value = response.books;
  } else {
    console.error(response);
  }
});
</script>

<style lang="scss">
.book-list {
  margin: 0 25%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);

  li {
    background-color: $background-color-primary;

    &:nth-child(odd) {
      background-color: $background-color-secondary;
    }
  }
}
</style>
