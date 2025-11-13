import IDestiniesOptions from '@/interfaces/home-view/IDestiniesOptions'

export const CHOOSE_DESTINIES: IDestiniesOptions[] = [
  {
    'name': 'São Paulo',
    'image': 'sao-paulo.jpg',
    'options': [
      {
        'city': 'Rio de janeiro, RJ',
        'price': 89,
        'link' : '/onibus/rio-de-janeiro-rj-para-sao-paulo-sp'
      },
      {
        'city': 'Belo Horizonte, MG',
        'price': 154,
        'link' : '/onibus/belo-horizonte-mg-para-sao-paulo-sp'
      },
      {
        'city': 'Ribeirão Preto, SP',
        'price': 144,
        'link' : '/onibus/ribeirao-preto-sp-para-sao-paulo-sp'
      },
      {
        'city': 'Sorocaba, SP',
        'price': 44,
        'link' : '/onibus/sorocaba-sp-para-sao-paulo-sp'
      },
    ]
  },
  {
    'name': 'Rio De Janeiro',
    'image': 'rio-de-janeiro.jpg',
    'options': [
      {
        'city': 'São Paulo, SP',
        'price': 89,
        'link' : '/onibus/sao-paulo-sp-para-rio-de-janeiro-novo-rio-rj'
      },
      {
        'city': 'Belo Horizonte, MG',
        'price': 69,
        'link' : '/onibus/belo-horizonte-mg-para-rio-de-janeiro-novo-rio-rj'
      },
      {
        'city': 'Brasília, DF',
        'price': 349,
        'link' : '/onibus/brasilia-df-para-rio-de-janeiro-novo-rio-rj'
      },
      {
        'city': 'Cabo Frio, RJ',
        'price': 67,
        'link' : '/onibus/cabo-frio-rj-para-rio-de-janeiro-novo-rio-rj'
      },
    ]
  },
  {
    'name': 'Curitiba',
    'image': 'curitiba.jpg',
    'options': [
      {
        'city': 'Florianópolis, SC',
        'price': 53,
        'link' : '/onibus/florianopolis-sc-para-curitiba-pr'
      },
      {
        'city': 'Porto Alegre, RS',
        'price': 68,
        'link' : '/onibus/porto-alegre-rs-para-curitiba-pr'
      },
      {
        'city': 'Rio de Janeiro, RJ',
        'price': 53,
        'link' : '/onibus/rio-de-janeiro-rj-para-curitiba-pr'
      },
      {
        'city': 'Joinville, SC',
        'price': 25,
        'link' : '/onibus/joinville-sc-para-curitiba-pr'
      },
    ]
  }
]