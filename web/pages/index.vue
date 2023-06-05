<template>
  <div>
    <q-tab-panels v-model="appStore.pageIndex" animated class="min-h-screen">
      <q-tab-panel name="hunters">
        <HunterGroup />
      </q-tab-panel>
      <q-tab-panel name="create">
        <HunterCreate />
      </q-tab-panel>
      <q-tab-panel name="settings">
        <PageSettings />
      </q-tab-panel>
      <q-tab-panel name="hidden">
        <HunterEdit />
      </q-tab-panel>
    </q-tab-panels>
    <div
      class="fixed bottom-0 left-0 right-0 m-2 flex justify-center items-center"
    >
      <div class="relative">
        <div
          :class="appStore.pageIndex == 'hidden' ? ' -left-12 ' : 'left-0'"
          class="absolute h-full flex items-center transition-all duration-250"
        >
          <q-btn
            icon="chevron_left"
            color="blue-grey"
            round
            @click="appStore.pageIndex = 'hunters'"
          />
        </div>
        <q-tabs
          v-model="appStore.pageIndex"
          align="center"
          class="bg-blue-grey rounded-full"
          indicator-color="blue-grey-10"
        >
          <BaseTab name="hunters" icon="contact_page" />
          <BaseTab
            name="create"
            icon="history_edu"
            @click="hunterStore.createHunter()"
          />
          <BaseTab name="settings" icon="settings" />
          <div
            class="absolute inset-0 flex justify-around items-center z-10 pointer-events-none"
          >
            <q-icon
              name="contact_page"
              size="sm"
              class="opacity-0 transition-all duration-500"
              :class="appStore.pageIndex == 'hunters' ? 'opacity-100' : ''"
            />
            <q-icon
              name="history_edu"
              size="sm"
              class="opacity-0 transition-all duration-500"
              :class="appStore.pageIndex == 'create' ? 'opacity-100' : ''"
            />
            <q-icon
              name="settings"
              size="sm"
              class="opacity-0 transition-all duration-500"
              :class="appStore.pageIndex == 'settings' ? 'opacity-100' : ''"
            />
          </div>
        </q-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHunterStore } from "~/stores/hunterStore";
import { useAppStore } from "~/stores/appStore";

const appStore = useAppStore();

const hunterStore = useHunterStore();
</script>

<style scoped lang="scss">
.section {
  margin-top: 2rem;
}
</style>
