export interface LoginModalProps {
  isPopup: boolean
  showLoginModal: () => void
}

export type Inputs = {
  userName: string
  password: string
}

export type IFormProps = {
  readonly username?: string
  readonly password?: string
  readonly box1?: string
}
