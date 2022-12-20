const createElement = (tag, { classList, innerText, attributes }) => {
  const element = document.createElement(tag)
  if (classList) element.classList = classList
  if (innerText) element.innerText = innerText

  for (const key in attributes) {
    if (Object.hasOwnProperty.call(attributes, key)) {
      element.setAttribute(key, attributes[key])
    }
  }
  return element
}

export { createElement }
