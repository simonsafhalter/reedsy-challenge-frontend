<template>
  <div class="book-list">
    <h1>Top books of all time</h1>
    <input
      class="search-input"
      type="text"
      v-model="searchQuery"
      placeholder="Search books..."
    />
    <div class="pagination">
      <button
        @click="currentPage = Math.max(currentPage - 1, 1)"
        :disabled="currentPage <= 1"
      >
        &lt;
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        @click="currentPage = Math.min(currentPage + 1, totalPages)"
        :disabled="currentPage >= totalPages"
      >
        &gt;
      </button>
    </div>
    <ul>
      <li v-for="book in paginatedBooks" :key="book.slug">
        <BookListItem :book="book" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { getAllBooks } from "../api/books";
import BookListItem from "./BookListItem.vue";
import type { Book } from "../types/Book";

const books = ref<Book[]>([]);
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = ref(3);

onMounted(async () => {
  const response: Book[] = await getAllBooks();
  if (Array.isArray(response.books)) {
    books.value = response.books;
  } else {
    console.error(response);
  }
});

const filteredBooks = computed(() => {
  return books.value.filter((book: Book) => {
    return (
      book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      book.synopsis.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

const paginatedBooks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredBooks.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredBooks.value.length / itemsPerPage.value);
});

// Reset to the first page on search query change
watch(searchQuery, () => {
  currentPage.value = 1;
});
</script>

<style lang="scss">
.book-list {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);

  li {
    background-color: $background-color-primary;

    &:nth-child(odd) {
      background-color: $background-color-secondary;
    }
  }

  .search-input {
    color: $text-color-primary;
    background-color: $background-color-secondary;
    padding: 10px;
    font-weight: bold;
    border: none;
    border-bottom: solid 2px $color-primary;
    width: 100%;
  }

  .pagination {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
  }
}
</style>
