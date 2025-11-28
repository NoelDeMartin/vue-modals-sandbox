<template>
  <Modal>
    <DialogHeader>
      <DialogTitle>{{ question }}</DialogTitle>
    </DialogHeader>
    <form @submit.prevent="close({ answer })">
      <Input name="answer" v-model="answer" />
      <Button class="w-full mt-4">Submit</Button>
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { Button } from './ui/button'
import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Modal, useModal } from '@/components/ui/modal'
import { ref } from 'vue'

type Payload = { answer: string }

defineEmits<{ close: [Payload] }>()
defineProps<{ question: string }>()

const { close } = useModal<Payload>()
const answer = ref('')
</script>
