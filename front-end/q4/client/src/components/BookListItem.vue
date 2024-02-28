<template>
  <div class="book-item">
    <div class="details">
      <div class="title">
        <router-link :to="`/book/${book.slug}`">
          <h2>{{ book.rank }}. {{ book.title }}</h2>
        </router-link>
        <p>({{ book.rating }}/10)</p>
      </div>
      <p class="author">{{ book.author }}</p>
      <p class="synopsis">{{ truncate(book.synopsis) }}</p>
      <div class="upvotes">
        <button v-if="book.upvoted" class="selected">Upvoted</button>
        <button v-else>Upvote</button>
        <p>Upvoted {{ book.upvotes }} times</p>
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
@import "../styles/mixins.scss";

.book-item {
  display: flex;
  padding: $spacing-container-large;

  @include mobile-flex-column();

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    h2 {
      margin-right: 10px;
    }
  }

  .details {
    padding-right: 10px;
  }

  .author {
    font-style: italic;
    margin-bottom: 15px;
  }

  .book-cover {
    max-width: 135px;
    height: auto;
  }

  .synopsis {
    margin-bottom: 15px;
  }

  .upvotes {
    display: flex;
    align-items: center;

    button {
      margin-right: 10px;
    }
  }
}
</style>
