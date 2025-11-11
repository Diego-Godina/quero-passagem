import { reactive } from 'vue'

interface SearchLocation {
  name: string
  id: string
}

interface SearchForm {
  origin: SearchLocation
  destiny: SearchLocation
  dates: { start: string; end: string }
}

export function useSearchForm() {
  const form = reactive<SearchForm>({
    origin: { name: '', id: '' },
    destiny: { name: '', id: '' },
    dates: { start: '', end: '' }
  })

  const switchDestinies = () => {
    [form.origin, form.destiny] = [form.destiny, form.origin]
  }

  const resetForm = () => {
    form.origin = { name: '', id: '' }
    form.destiny = { name: '', id: '' }
    form.dates = { start: '', end: '' }
  }

  const isValid = () => {
    return !!form.origin.id && !!form.destiny.id && !!form.dates.start
  }

  return {
    form,
    switchDestinies,
    resetForm,
    isValid
  }
}