import type IBreadcrumb from '@/interfaces/list-view/IBreadcrumb.ts'

export const BREADCRUMBS: IBreadcrumb[] = [
  {
    name: 'Passagem de ida',
    link: '/',
    active: true,
  },
  {
    name: 'Passagem de volta',
    link: '/',
    active: false,
  },
  {
    name: 'Pagamento',
    link: '/',
    active: false,
  },
]
