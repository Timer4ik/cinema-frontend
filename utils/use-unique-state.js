import { v4 as uuidv4 } from "uuid"

export default function (initialValue = null) {
    return useState(uuidv4(), () => initialValue)
}