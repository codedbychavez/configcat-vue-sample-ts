<template>
  <div class="my-app">
    <div class="container">
      <Welcome />
      <FeatureWrapper
        featureKey="myFirstFeatureFlag"
        @flag-value-changed="handleFlagValueChange"
      >
        <TheNewFeature />
        <template #else>
          <!-- What you want to be displayed when the feature flag is turned off. You can add anything in this block like html elements or other vue components -->
          <div class="feature-not-available-wrapper">
            <p>
              Sorry this feature is not available. Your feature flag is off.
            </p>
          </div>
        </template>
        <template #loading>
          <!-- What you want to be displayed while the feature flag is loading. You can add anything in this block like html elements or other vue components -->
          <div class="loading-wrapper">
            <p>Loading...</p>
          </div>
        </template>
      </FeatureWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';

import { FeatureWrapper } from 'configcat-vue-ts';
import TheNewFeature from '@/components/TheNewFeature.vue';
import Welcome from '@/components/TheWelcome.vue';

const state = reactive({
  userObject: {
    identifier: 'john@example.com',
  },
});

const handleFlagValueChange = (flagValue: boolean) => {
  console.log('Flag value changed to: ', flagValue);
};

</script>

<style scoped>
.my-app {
  display: flex;
  justify-content: center;
}

.feature-not-available-wrapper {
  background-color: orange;
  padding: 1rem 2rem;
  border-left: 0.4rem solid orangered;
}
</style>
