<template>
  <BaseCard
    body-class="bg-gray-500"
    footer-class="px-0 pb-0"
    :hide-footer="!isInput"
  >
    <template #header>
      <div class="text-sm">
        {{ resource.name }}
      </div>
    </template>
    <template #default>
      <q-card-section
        class="flex justify-center items-center bg-blue-grey w-full"
      >
        <div class="relative">
          <img
            class="relative z-0 resource-img drop-shadow-md max-h-16"
            :src="`/img/resources/${resource.img}`"
          />
          <span v-if="isInput && !prominent" class="value">{{
            resource.value
          }}</span>
          <span v-if="prominent" class="value prominent">{{
            resource.value
          }}</span>
        </div>
      </q-card-section>
    </template>
    <template #footer>
      <div class="grid grid-cols-2 gap-2 w-full justify-between">
        <BaseButton @click="minus"> - </BaseButton>
        <BaseButton @click="plus"> + </BaseButton>
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Resource } from "~/stores/Resources";
import { useHunterStore } from "~/stores/hunterStore";

const props = defineProps({
  resource: {
    type: Object as () => Resource,
    required: true,
  },
  isInput: {
    type: Boolean,
    default: true,
  },
  prominent: {
    type: Boolean,
    default: false,
  },
});

const hunterStore = useHunterStore();

const minus = () => {
  hunterStore.minusResource(props.resource.id);
};

const plus = () => {
  hunterStore.plusResource(props.resource.id);
};
</script>

<style scoped lang="scss">
.resource-img {
  $bs: 1px;
  $nbs: $bs * -1;
  filter: var(--tw-drop-shadow) drop-shadow($nbs $nbs 0 #000)
    drop-shadow($bs $nbs 0 #000) drop-shadow($nbs $bs 0 #000)
    drop-shadow($bs $bs 0 #000);
}
</style>
