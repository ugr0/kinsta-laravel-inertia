<script setup>
import KinstaLayout from "../Layouts/KinstaLayout.vue";

defineProps({
  articles: Object,
});
</script>

<template>
    <KinstaLayout>
      <h2>Read our latest articles</h2>

      <section>
        // Looping over articles
        <article v-for="article in articles" :key="article.id">
          <div>
            <img src="/images/kinsta-logo.png" alt="Article thumbnail" />
          </div>

          <h3>{{article.title}}</h3>
          <p>{{article.excerpt}}</p>

          <a href="#">Read more</a>
        </article>
      </section>
    </KinstaLayout>
</template>
