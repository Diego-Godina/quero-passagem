import ISearchForm from '@/interfaces/ISearchForm'
import { GET_ORDERS } from '@/stores/actions'
import { useStore } from '@/stores'
import { useRouter } from 'vue-router'
import { useNotify } from '@/composables/useNotify'
import { NotificationType } from '@/interfaces/INotification'
import { DEFINE_FORM } from '@/stores/mutations'
import { computed, ref } from 'vue'

export function useSearchForm() {
  const store = useStore()
  const router = useRouter()
  const { notify } = useNotify()

  const isLoading = ref(false)

  const form = computed<ISearchForm>({
    get: () => store.state.order.form,
    set: (value: ISearchForm) => { store.commit(DEFINE_FORM, {...value}) },
  })

  const switchDestinies = () => {
    form.value = {
      ...form.value,
      origin: form.value.destiny,
      destiny: form.value.origin
    }
  }

  const resetForm = () => {
    form.value = {
      origin: { name: '', id: '' },
      destiny: { name: '', id: '' },
      dates: { start: '', end: '' },
    }
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
      console.warn('Formulário inválido')
      return
    }

    isLoading.value = true
    try {
      await store.dispatch(GET_ORDERS, form)
      await router.push({ name: 'list-bus-tickets' })
    } catch (error) {
      console.warn(error)
      notify(NotificationType.FALHA, 'Erro na busca', 'Não foi possível buscar as passagens')
    } finally {
      isLoading.value = false
    }
  }

  return {
    form,
    isLoading,
    switchDestinies,
    resetForm,
    isValid,
    submitSearch,
  }
}