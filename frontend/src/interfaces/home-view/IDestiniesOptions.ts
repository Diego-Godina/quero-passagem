export default interface IDestiniesOptions {
  name: string,
  image: string,
  options: {
    city: string,
    price: number,
    link: string
  }[]
}