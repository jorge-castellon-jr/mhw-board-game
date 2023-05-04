<template>
  <BaseCard v-if="equipment" body-class="bg-gray-500" hideFooter>
    <template #header>
      <div class="text-sm">
        {{ equipment.name }}
      </div>
    </template>
    <template #default>
      <div class="flex items-center justify-around">
        <div class="relative">
          <img
            class="drop-shadow-md max-h-[50px]"
            :src="`/img/set/${equipment.set}`"
          />
        </div>
        <div>
          <img
            class="drop-shadow-md"
            :src="`/img/equipment/${equipment.img}`"
          />
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { Equipment } from "~/stores/Equipment";

const props = defineProps({
  equipment: {
    type: Object as () => Equipment,
    required: true,
  },
});
</script>

<style scoped></style>
