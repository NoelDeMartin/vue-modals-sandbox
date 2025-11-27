<template>
  <Dialog :open="modal.visible.value" @update:open="$event || close()">
    <DialogContent>
      <slot />

      <ModalComponent v-if="child" :is="child" />
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useModal, ModalComponent } from '@noeldemartin/vue-modals'

const { child, ...modal } = useModal({ removeOnClose: false })

function close() {
  modal.close()

  setTimeout(() => modal.remove(), 300)
}
</script>
