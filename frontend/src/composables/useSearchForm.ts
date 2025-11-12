import { GET_ORDERS } from '@/stores/actions'
import { useStore } from '@/stores'
import { useRouter } from 'vue-router'
import { useNotify } from '@/composables/useNotify'
import { NotificationType } from '@/interfaces/INotification'
import { DEFINE_FORM } from '@/stores/mutations'
import { toRef } from 'vue'

export function useSearchForm() {
  const store = useStore()
  const router = useRouter()
  const { notify } = useNotify()
  const form = toRef(store.state.order, 'form')

  const switchDestinies = () => {
    const newForm = {
      ...form.value,
      origin: form.value.destiny,
      destiny: form.value.origin
    }

    store.commit(DEFINE_FORM, JSON.parse(JSON.stringify(newForm)))
  }

  const resetForm = () => {
    store.commit(DEFINE_FORM, {
      origin: { name: '', id: '' },
      destiny: { name: '', id: '' },
      dates: { start: '', end: '' }
    })
  }

  const isValid = (): boolean => {
    return !!form.value.origin.id && !!form.value.destiny.id && !!form.value.dates.start
  }

  const submitSearch = async () => {
    if (!isValid()) {
      notify(
        NotificationType.FALHA,
        'Formulário inválido',
        'Por favor, informe local de partida, destino e data de saída',
      )
      console.error('Formulário inválido')
      return
    }

    try {
      await store.dispatch(GET_ORDERS, JSON.parse(JSON.stringify(form.value)))
      await router.push({ name: 'list-bus-tickets' })
    } catch (error) {
      console.error(error)
      notify(NotificationType.FALHA, 'Erro na busca', 'Não foi possível buscar as passagens')
    } finally {
    }
  }

  return {
    form,
    switchDestinies,
    resetForm,
    submitSearch,
  }
}