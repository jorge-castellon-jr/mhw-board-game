<template>
  <div>
    <Combobox>
      <div class="relative">
        <ComboboxInput
          @change="query = $event.target.value"
          placeholder="Search to add a resource"
          class="input"
        />
        <ComboboxButton
          class="absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <MagnifyingGlassIcon class="w-4 h-4 inline" aria-hidden="true" />
        </ComboboxButton>
      </div>
      <TransitionRoot
        enter="transition ease-out duration-100 z-10"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-100 z-10"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        @after-leave="query = ''"
      >
        <ComboboxOptions
          class="resources-group dropdown"
          :class="top ? 'top' : ''"
        >
          <ComboboxOption
            v-for="resource in filteredResources"
            :key="resource.id"
            :value="resource"
          >
            <ResourceItem
              :resource="resource"
              :is-input="false"
              @click="addResource(resource)"
            />
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </Combobox>
  </div>
</template>

<script setup lang="ts">
import { Resource } from "~/stores/Resources";
import { useHunterStore } from "~/stores/hunterStore";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

const { top } = defineProps({
  top: {
    type: Boolean,
    default: false,
  },
});

const hunterStore = useHunterStore();

const all_resources = hunterStore.all_resources;
const query = ref("");
const filteredResources = computed(() =>
  query.value === ""
    ? all_resources
    : all_resources.filter((resource) => {
        return resource.name.toLowerCase().includes(query.value.toLowerCase());
      })
);
const addResource = (resource: Resource) => {
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
