<template>
  <Modal>
    <DialogHeader>
      <DialogTitle>{{ question }}</DialogTitle>
    </DialogHeader>
    <form @submit.prevent="$emit('close', { answer })">
      <Input name="answer" v-model="answer" />
      <Button class="w-full mt-4">Submit</Button>
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';

import { Button } from './ui/button';

type Payload = { answer: string };

defineEmits<{ close: [Payload] }>();
defineProps<{ question: string }>();

const answer = ref('');
</script>
