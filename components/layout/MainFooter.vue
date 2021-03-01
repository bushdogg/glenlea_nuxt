<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            Glenlea Tennis Club
                        </a>
                    </li>
                    <li>
                        <a href="/contacts">
                            Key Contacts
                        </a>
                    </li>
                    <li>
                        <a href="/locations">
                            Locations
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{year}}, Developed by
                <a href="http://lushit.tech" target="_blank" rel="noopener" class="text-success">bushdogg</a>
            </div>
        </div>
    </footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
    },
    data(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
<style>
</style>
