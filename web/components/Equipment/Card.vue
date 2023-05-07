<template>
  <BaseCard v-if="equipment" body-class="bg-gray-500" hideFooter>
    <template #header>
      <div class="text-sm">
        {{ equipment.name }}
      </div>
    </template>
    <template #default>
      <div class="flex items-center justify-center space-x-4 mb-2">
        <div v-if="equipment.set" class="relative">
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
      <div
        v-if="equipment.stats"
        class="flex items-center justify-around flex-wrap"
      >
        <div v-for="stat in equipment.stats" class="relative flex items-center">
          <template v-if="stat.damage">
            <div class="relative">
              <img
                class="drop-shadow-md max-h-16"
                :src="`/img/equipment/damage.png`"
              />
              <span class="value stat">
                {{ stat.damage }}
              </span>
            </div>
            <span class="text-white ml-1">x {{ stat.value }}</span>
          </template>
          <template v-else>
            <img
              v-if="stat.element"
              class="drop-shadow-md max-h-[50px]"
              :src="`/img/equipment/fire.png`"
            />
            <img
              v-else
              class="drop-shadow-md max-h-[50px]"
              :src="`/img/equipment/armor.png`"
            />
            <span class="value stat">
              {{ stat.element || stat.value }}
            </span>
          </template>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { Equipment, StartingEquipment } from "~/stores/Equipment";

const { equipment } = defineProps({
  equipment: {
    type: [Object as () => Equipment, Object as () => StartingEquipment],
    required: true,
  },
});
</script>

<style scoped>
.stat {
  @apply inset-0 flex justify-center items-center text-lg;
}
</style>
