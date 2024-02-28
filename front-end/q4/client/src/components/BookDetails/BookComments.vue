<template>
  <div class="comments">
    <div class="post-comment">
      <textarea
        v-model="newComment"
        placeholder="Leave a comment..."
      ></textarea>
      <button @click="addComment(newComment)">Post Comment</button>
    </div>
    <h2>Comments</h2>
    <span v-if="comments.length === 0">No comments</span>
    <ul v-else>
      <li v-for="comment in comments" :key="comment.id">
        <span>{{ formatDate(comment.createdAt) }}</span>
        <p>{{ comment.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { format } from "date-fns";
import { fetchComments, postComment } from "../../api/comments";
import { Comment } from "../../types/Comment";

const comments = ref<Comment[]>([]);
const newComment = ref("");

// Define props
const props = defineProps<{
  slug: string;
}>();

onMounted(async () => {
  comments.value = await fetchComments(props.slug);
});

async function addComment() {
  if (newComment.value?.length && newComment.value.trim()) {
    const posted = await postComment(props.slug, newComment.value);

    comments.value.push(posted);
    // Reset the input field
    newComment.value = "";
  }
}

function formatDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return format(dateObj, "yyyy-MM-dd HH:mm:ss");
}
</script>
