import { NotificationType } from '@/interfaces/INotification'
import { NOTIFY } from '@/stores/mutations'
import { useStore } from '@/stores'

export function useNotify() {
  const store = useStore()

  const notify = (type: NotificationType, title: string, text: string): void => {
    store.commit(NOTIFY, {
      title: title,
      text: text,
      type: type
    })
  }

  return {
    notify
  }
}