// Limits characters in preview text

export const preview = (text) => {
  let textArray = []
  for (let i = 0; i < 150; i++) {
    textArray.push(text[i])
  }
  return textArray.join("")
}
