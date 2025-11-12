<script setup lang="ts">
  import { computed } from 'vue'
  import type ITopDestinies from '@/interfaces/home-view/ITopDestinies.ts'
  import BoxContent from '@/components/layouts/BoxContent.vue'

  const topDestinies = computed<ITopDestinies[]>(() => {
    return [
      {
        'title': 'Top Destinos',
        'options': [
          {
            'name': 'Ônibus Rio de Janeiro',
            'link': '/para-rio-de-janeiro-rj'
          },
          {
            'name': 'Ônibus São Paulo',
            'link': '/para-sao-paulo-sp'
          },
          {
            'name': 'Ônibus Brasília',
            'link': '/para-brasilia-df'
          },
          {
            'name': 'Ônibus Campinas',
            'link': '/para-campinas-todas-sp'
          },
          {
            'name': 'Ônibus Londrina',
            'link': '/para-londrina-pr'
          },
          {
            'name': '+ Destinos',
            'link': '/destinos'
          }
        ]
      },
      {
        'title': 'Top Viações',
        'options': [
          {
            'name': 'Passagens Cometa',
            'link': '/auto-viacao-cometa'
          },
          {
            'name': 'Passagens Gontijo',
            'link': '/auto-viacao-gontijo'
          },
          {
            'name': 'Passagens 1001',
            'link': '/auto-viacao-1001'
          },
          {
            'name': 'Passagens Águia Branca',
            'link': '/auto-viacao-aguia-branca'
          },
          {
            'name': 'Passagens Pássaro Marrom',
            'link': '/auto-viacao-passaro-marrom'
          },
          {
            'name': '+ Viações',
            'link': '/viacoes'
          },
        ]
      },
      {
        'title': 'Top Rodoviárias',
        'options': [
          {
            'name': 'Rodoviária São Paulo - Tietê',
            'link': '/rodoviaria-de-tiete-sp'
          },
          {
            'name': 'Rodoviária Rio de Janeiro - Novo Rio',
            'link': '/rodoviaria-de-novo-rio'
          },
          {
            'name': 'Rodoviária Belo Horizonte - Gov. Israel Pinheiro (Tergip)',
            'link': '/rodoviaria-de-belo-horizonte-mg'
          },
          {
            'name': 'Rodoviária Curitiba',
            'link': '/rodoviaria-de-curitiba-pr'
          },
          {
            'name': 'Rodoviária São Paulo - Barra Funda',
            'link': '/rodoviaria-de-sao-paulo-barra-funda-sp'
          },
          {
            'name': '+ Rodoviárias',
            'link': '/rodoviarias'
          },
        ]
      }
    ]
  })
</script>

<template>
  <section class="box-top-destinies">
    <BoxContent>
      <div class="d-flex justify-content-between">
        <div
          v-for="topDestiny in topDestinies"
          :key="topDestiny.title"
          class="d-flex flex-column gap-3"
        >
          <div class="title-top-destiny">{{ topDestiny.title }}</div>
          <div class="d-flex flex-column gap-2">
            <div
              v-for="(option, index) in topDestiny.options"
              :key="option.name"
              :class="{ 'is-last': index === topDestiny.options.length - 1 }"
            >
              <RouterLink
                class="link-top-destiny"
                :to="option.link"
              >
                {{ option.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </BoxContent>
  </section>
</template>

<style scoped>
  .box-top-destinies {
    background-color: #0d2240;
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .is-last {
    font-weight: 600;
  }

  .link-top-destiny {
    color: #fff;
    font-size: 1.1rem;
    line-height: 1.4rem;
  }

  .title-top-destiny {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.3rem;
    text-transform: uppercase;
  }
</style>
