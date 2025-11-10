export enum NotificationType {
  SUCESSO,
  FALHA,
  ATENCAO,
}
export interface INotification {
  id: number
  title: string,
  text: string
  type: NotificationType,
}