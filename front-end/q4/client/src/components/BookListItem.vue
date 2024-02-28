<template>
  <div class="book-item">
    <div class="details">
      <div class="title">
        <router-link :to="`/book/${book.slug}`">
          <h2>{{ index + 1 }}. {{ book.title }}</h2>
        </router-link>
        <p>({{ book.rating }}/10)</p>
      </div>
      <p class="author">{{ book.author }}</p>
      <p>{{ truncate(book.synopsis) }}</p>
      <div class="upvotes">
        <button>Upvote</button>
        <p>Upvoted: {{ book.upvotes }} times</p>
      </div>
    </div>
    <router-link :to="`/book/${book.slug}`">
      <img :src="book.cover" :alt="book.title" class="book-cover" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Book } from "../types/Book";

// Define props
const props = defineProps<{
  book: Book;
  index: Number;
}>();

/**
 * Truncates text to a specified length (default 200 characters)
 */
function truncate(text, length = 200) {
  return text.length > length ? text.substring(0, length) + "..." : text;
}
</script>

<style lang="scss" scoped>
.book-item {
  display: flex;
  padding: $spacing-container-large;

  .title {
    display: flex;
    align-items: center;
  }

  .author {
    font-style: italic;
  }

  .book-cover {
    max-width: 100px;
    height: auto;
  }

  .upvotes {
    display: flex;
  }
}
</style>
