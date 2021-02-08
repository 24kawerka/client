import { io } from 'socket.io-client'
const ENDPOINT = "https://lit-brushlands-23738.herokuapp.com/"
const socket = io(ENDPOINT)
export { socket }