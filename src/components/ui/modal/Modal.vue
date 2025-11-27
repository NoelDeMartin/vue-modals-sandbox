<template>
  <Dialog :open="visible" @update:open="$event || close()">
    <DialogContent>
      <slot />

      <ModalComponent v-if="child" :is="child" />
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ModalComponent } from '@noeldemartin/vue-modals'
import { useModal } from './utils'

const { child, visible, close } = useModal()
</script>
