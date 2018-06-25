import { usersDucksExpirationLength, userExpirationLength } from 'config/constants'

export const formatUserInfo = (name, avatar, uid) => {
  return {
    name,
    avatar,
    uid,
  }
}

export const formatDuck = (text, { name, avatar, uid }) => {
  return {
    text,
    name,
    avatar,
    uid,
    timestamp: Date.now(),
  }
}

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

const getMilliseconds = (timestamp) => {
  return new Date().getTime() - new Date(timestamp).getTime()
}

export const staleDucks = (timestamp) => {
  return getMilliseconds(timestamp) > usersDucksExpirationLength
}

export const staleUser = (timestamp) => {
  return getMilliseconds(timestamp) > userExpirationLength
}
