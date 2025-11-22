export default interface ISeat {
  seat: string | null
  position: {
    x: number
    y: number
    z: number
  }
  occupied?: boolean
  type: string
}
