<template>
  <div>
    {{ mountains }}
    <ul v-for="mountain in mountains" :key="mountain.id">
        <li>{{ mountain.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData( {  } ) {
    const mountains = await fetch(
      'https://glenleatennisclub.com.au/backend/newapi/read.php'
    )

    return { mountains }
  }
}
</script>
