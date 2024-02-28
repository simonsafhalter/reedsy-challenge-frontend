<template>
  <div v-if="book" class="book-details">
    <div class="header">
      <h1>{{ book.title }}</h1>
      <div class="upvotes">
        <span>Upvoted: {{ book.upvotes }} times</span>
        <button v-if="book.upvoted" class="selected">Upvoted</button>
        <button v-else>Upvote</button>
      </div>
    </div>
    <p class="author">{{ book.author }}</p>
    <div class="image-wrapper">
      <img :src="book.cover" :alt="`Cover of ${book.title}`" />
    </div>
    <h2>Synopsis</h2>
    <p class="synopsis">{{ book.synopsis }}</p>
    <div class="rating">Rating: {{ book.rating }}</div>

    <BookComments :slug="book.slug" />
  </div>
  <p v-else>{{ state }}</p>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { format } from "date-fns";
import { getBookBySlug } from "../../api/books";
import type { Book } from "../../types/Book";
import BookComments from "./BookComments.vue";

const route = useRoute();
const book = ref<Book | null>(null);
const state = ref<string>("Loading");

onMounted(async () => {
  const slug = route.params.slug;
  if (typeof slug === "string") {
    // Fetch the book
    const response: Book | string = await getBookBySlug(slug);

    if (response?.slug) {
      book.value = response;
    } else {
      state.value = "Book not found";
    }
  }
});
</script>

<style lang="scss" scoped>
.book-details {
  background-color: $background-color-secondary;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
  min-height: 100vh;
  padding: $spacing-container-large;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .author {
    font-style: italic;
  }
  .image-wrapper {
    text-align: center;
    margin: $spacing-container-medium 0;
  }
  img {
    max-width: 400px;
    height: auto;
  }

  .synopsis {
    margin-bottom: $spacing-container-large;
  }
  .rating {
    font-weight: bold;
  }

  .upvotes {
    span {
      margin-right: 10px;
    }
  }

  .comments {
  }
}
</style>
