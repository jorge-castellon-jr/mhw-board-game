<template>
  <div class="flex flex-col space-y-4">
    <!-- list hunters as BaseButton from hunterStore -->
    <BaseButton
      v-for="hunter in hunterStore.hunters"
      :key="hunter.id"
      :to="`/hunter/${hunter.id}`"
      shadow="lg"
      size="hunter"
      @click="hunterStore.setCurrentHunter(hunter.id)"
    >
      <div class="flex w-full justify-between text-gray-600">
        <div class="flex flex-col items-start">
          <div>
            <span class="text-gray-400">Hunter:</span>
            {{ hunter.hunter_name || "Hunter" }}
          </div>
          <div>
            <span class="text-gray-400">Palico:</span>
            {{ hunter.palico_name || "No Name" }}
          </div>
        </div>
        <div class="flex flex-col items-end">
          <div>
            {{ hunter.campaign_name || "" }}
          </div>
          <div>
            <span class="text-gray-400">Day:</span> {{ hunter.day_tracker }}
          </div>
        </div>
      </div>
    </BaseButton>
    <div class="absolute w-full left-0 bottom-0 p-2 bg-orange-900/75">
      <BaseButton
        class="w-full"
        to="/hunter"
        @click="createHunter"
        shadow="lg"
        size="lg"
      >
        Create Hunter
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHunterStore } from "~/stores/hunterStore";

const router = useRouter();

const hunterStore = useHunterStore();
const createHunter = () => {
  hunterStore.createHunter();
};
</script>

<style scoped>
.section {
  margin-top: 2rem;
}
</style>
