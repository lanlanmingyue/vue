<div class="col-sm-3">
      <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
<script>
  import Sidebar from '../../components/Sidebar.vue'

  export default {
    components: { 'sidebar': Sidebar },
  }
</script>