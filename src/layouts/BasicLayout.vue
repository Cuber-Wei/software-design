<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <div v-if="route.path === '/center'" class="userCenterView">
        <UserCenterView />
      </div>
      <a-layout-content v-else class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer"> My Online Judge</a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalHeader from "@/components/GlobalHeader.vue";
import { useRoute } from "vue-router";
import UserCenterView from "@/views/UserCenterView.vue";

export default defineComponent({
  components: { UserCenterView, GlobalHeader },
  setup() {
    return {
      route: useRoute(),
    };
  },
});
</script>

<style scoped>
#basicLayout {
}

#basicLayout .header {
  box-shadow: #aaa 1px 1px 4px;
}

#basicLayout .content {
  border-radius: 16px;
  margin: 0.5rem 1rem;
  padding: 20px;
  box-shadow: #aaa 1px 1px 4px;
}

#basicLayout .footer {
  background-color: white;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  box-shadow: #aaa 1px 1px 4px;
}

.userCenterView {
  display: flex;
  flex: 1;
  margin-bottom: 1rem;
}
</style>
