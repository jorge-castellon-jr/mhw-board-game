<template>
  <div>
    <BaseInput
      v-model="query"
      placeholder="Search to add a resource"
      input-class="text-center text-white"
      rounded
      dense
    />
    <div
      class="fixed inset-2 top-24 bottom-28 bg-grey-9 p-2 rounded-2xl transition-opacity duration-300 grid grid-cols-2 gap-2 resources-group scroll"
      :class="popup ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <ResourceItem
        v-for="item in filteredResources"
        :key="item.id"
        :resource="item"
        :is-input="false"
        @click="addResource(item)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Resource } from "~/stores/Resources";
import { useHunterStore } from "~/stores/hunterStore";

const { top } = defineProps({
  top: {
    type: Boolean,
    default: false,
  },
});

const hunterStore = useHunterStore();

const all_resources = hunterStore.all_resources;
const popup = ref(false);
const query = ref("");
watch(query, () => {
  if (query.value === "") {
    popup.value = false;
    return;
  }
  popup.value = true;
});
const filteredResources = computed(() =>
  query.value === ""
    ? all_resources
    : all_resources.filter((resource) => {
        return resource.name.toLowerCase().includes(query.value.toLowerCase());
      })
);
const addResource = (resource: Resource) => {
  query.value = "";
  hunterStore.addResource(resource);
};
</script>

<style scoped lang="scss">
.dropdown {
  @apply absolute left-4 right-4 bg-white p-2 shadow-2xl z-20 rounded-md mt-2;
  &.top {
    @apply fixed top-20 bottom-28 overflow-scroll left-2 right-2 border border-gray-200;
  }
}
</style>
