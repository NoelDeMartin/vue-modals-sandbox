<script setup lang="ts">
import MyModal from './components/MyModal.vue'
import { showModal } from '@noeldemartin/vue-modals'
import { Button } from './components/ui/button'
import { ModalsPortal } from './components/ui/modal'
import { ref } from 'vue'

const modalAnswer = ref<string | undefined>()

async function openModal() {
  const { answer } = await showModal(MyModal, {
    question: 'How many golf balls fit into a Boeing 747?',
  })

  modalAnswer.value = answer
}
</script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center h-screen">
    <Button @click="openModal()">Open Modal</Button>
    <p v-if="modalAnswer">Your answer: {{ modalAnswer }}</p>
  </div>
  <ModalsPortal />
</template>
