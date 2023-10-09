<template>
  <div class="header">
    <h1>Notes</h1>
    <button class="addNotesButton" @click="showModal = true">+</button>
  </div>
  <div class="notes">
    <NoteItem
      v-for="noteData in notesData"
      :key="noteData.id"
      :noteMessage="noteData.noteMessage"
      :date="noteData.date"
      :color="noteData.color"
    />
  </div>
  <ModalComponent v-if="showModal" @close="closeModal" :modalErrorMessage="modalErrorMessage">
    <textarea type="text" class="inputField" v-model.trim="noteContent"></textarea>
    <button class="save-note-btn" @click="saveNote">Save</button>
  </ModalComponent>
</template>

<script setup>
import { ref, reactive } from 'vue'
import NoteItem from './components/NoteItem.vue'
import ModalComponent from './components/ModalComponent.vue'

const getRandomColor = () => {
  return 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
}

let showModal = ref(false)
let noteContent = ref('')
let notesData = reactive([])
let modalErrorMessage = ref('')

const closeModal = () => {
  showModal.value = false
  noteContent.value = ''
  modalErrorMessage.value = ''
}

const saveNote = () => {
  if (noteContent.value.length < 10) {
    modalErrorMessage.value =
      "Your note is less than 10 characters length and can't be saved. Click x if you want to exit and not save a note"
    console.log('error', noteContent.value)
    return
  } else {
    console.log('can proceed to save')
    showModal.value = false
    notesData.push({
      id: Math.floor(Math.random() * 100000),
      noteMessage: noteContent.value,
      date: new Date(),
      color: getRandomColor()
    })
    noteContent.value = ''
    modalErrorMessage.value = ''
  }
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.addNotesButton {
  background-color: black;
  border-radius: 50%;
  border: none;
  text-align: center;
  width: 40px;
  height: 40px;
  color: white;
}
.inputField {
  width: 100%;
  height: 8rem;
  font-family: 'Courier New', Courier, monospace;
  text-align: left;
  vertical-align: top;
  padding: 0;
}
.save-note-btn {
  background-color: purple;
  width: 100%;
  padding: 0.25rem;
  color: white;
  border: none;
  margin-top: 0.5rem;
}
.notes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  gap: 0.5rem;
}
</style>
