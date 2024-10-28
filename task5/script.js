let duplicateField = document.querySelector('#duplicateField')
let text = document.querySelector('#text')


addEventListener('keydown', function() {
     duplicateField.textContent = text.value
})

document.querySelector('#button').addEventListener('click', function() {
  console.log('duplicateField')
  text.value = ''
  duplicateField.textContent = ''
})