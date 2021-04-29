// 1. Select all elements
const form = document.getElementById("new-item-form")
const input = document.getElementById("item-input")
const list = document.getElementById("list")

// 2. When I submit the form add a new element
form.addEventListener("submit", e => {
  e.preventDefault()

  // 1. Create a new item
  const item = document.createElement("div")
  item.innerText = input.value
  item.classList.add("list-item")

  // 2. Add that item to the list
  list.appendChild(item)

  // 3. Clear input
  input.value = ""

  // 4. Setup event listener to delete item when clicked
  item.addEventListener("click", () => {
    item.remove()
  })
})
