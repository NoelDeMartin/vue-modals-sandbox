import { useModal as _useModal } from '@noeldemartin/vue-modals'

export function useModal<T = never>() {
  const modal = _useModal<T>({ removeOnClose: false })

  return {
    ...modal,
    close(payload?: T) {
      modal.close(payload)

      setTimeout(() => modal.remove(), 300)
    },
  }
}
