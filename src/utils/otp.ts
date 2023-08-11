import { customAlphabet } from 'nanoid'

export const generateOTP = (): string => {
  const nanoid = customAlphabet('1234567890', 6)
  return nanoid()
}
