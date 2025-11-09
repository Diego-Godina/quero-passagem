export default interface IStop {
  'id'?: string,
  'name': string,
  'url'?: string,
  'type'?: string,
  'substops'?: IStop[] | null
}