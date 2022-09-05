const messageInput = document.getElementById('message-input')
const clearInputBtn = document.getElementById('clear-input-btn')
const textOutputContainer = document.getElementById('text-output-container')
const settingsPanel = document.getElementById('settings-panel')
const settingsPanelOpenBtn = document.getElementById('settings-panel-open-btn')
const settingsPanelCloseBtn = document.getElementById('settings-panel-close-btn')
const fontFamilySelect = document.getElementById('font-family-select')
const fontSizeSelect = document.getElementById('font-size-select')
const changeTextColor = document.getElementById('change-text-color')
const changeBackgroundColor = document.getElementById('change-bg-color')



// Window load events
window.addEventListener('load', () =>
{
   clearTextFields()
})

// EVENT LISTENERS //
messageInput.addEventListener('input', updateMessage)
clearInputBtn.addEventListener('click', clearTextFields)
settingsPanelOpenBtn.addEventListener('click', openSettingsPanel)
settingsPanelCloseBtn.addEventListener('click', closeSettingsPanel)
changeBackgroundColor.addEventListener('change', changeBgColor)


// FUNCTIONS //
// Update Message
function updateMessage()
{
   textOutputContainer.textContent = messageInput.value
}

// Clear text fields
function clearTextFields()
{
   messageInput.value = ''
   textOutputContainer.textContent = ''
}

// Open Settings Panel
function openSettingsPanel()
{
   settingsPanel.classList.add('open')
}

// Close Settings Panel
function closeSettingsPanel()
{
   settingsPanel.classList.remove('open')
}

// Update Background Color
function changeBgColor()
{
   console.log(changeBackgroundColor.value)
}