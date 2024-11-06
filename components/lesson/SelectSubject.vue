<template>
  <div>
    <!-- Dropdown to select a subject -->
    <div class="text-left input-containers ani bite">
      <label for="name" class="mx-3">
        <span class="text-[13px] px-1 font-semibold relative top-3 mb-5 bg-white w-fit">{{ label }}</span>
      </label>

      <select
        v-model="selectedSubject"
        @change="addSubject"
        ref="inputRef"
        :disabled="disabled"
        class="w-full px-2 h-[2.6rem] outline focus:shadow-blue-400 shadow-sm focus:border focus:border-blue-700 mt-1 font-sem rounded-[.2rem] text-[15px] outline-none border-gray-300 border py-[.3rem]"
      >
        <option disabled value="">Select a subject</option>
        <option v-for="subject in availableSubjects" :key="subject.id" :value="subject">
          {{ subject.name }}
        </option>
      </select>
    </div>

    <!-- Display selected subjects with cancel button -->
    <div class="mt-4 whitespace-normal gap-2 w-full flex flex-wrap">
      <div v-for="subject in selectedSubjects" :key="subject.id" class="subject-tag px-2 flex overflow-hidden border-blue-700 selected-subjects border rounded-full w-fit">
        {{ subject.name }}
        <button @click="removeSubject(subject.id)" class="px-1">x</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  selectedSubjects: {
    type: Array,
    default: () => []
  },
  error: Boolean,
  field: Array,
  disabled: Boolean,
  placeholder: String,
  min: Number,
  max: Number,
  label: String
});

const emit = defineEmits(['update:selectedSubjects']);

const availableSubjects = [
  { id: 1, name: "Mathematics" },
  { id: 2, name: "English Language" },
  { id: 3, name: "Physics" },
  { id: 4, name: "Chemistry" },
  { id: 5, name: "Literature in English" },
  { id: 6, name: "Biology" },
  { id: 7, name: "Government" },
  { id: 8, name: "Commerce" }
];

const selectedSubject = ref("");

function addSubject() {
  if (selectedSubject.value && selectedSubject.value.id && selectedSubject.value.name) {
    if (!props.selectedSubjects.some(sub => sub.id === selectedSubject.value.id)) {
      emit('update:selectedSubjects', [...props.selectedSubjects, selectedSubject.value]);
    }
    selectedSubject.value = ""; // Reset dropdown to show "Select a subject"
  }
}

function removeSubject(subjectId) {
  const updatedSubjects = props.selectedSubjects.filter(sub => sub.id !== subjectId);
  emit('update:selectedSubjects', updatedSubjects);
}
</script>

<style>
.input-containers {
  position: relative;
}

.select-field {
  width: 100%;
  background: transparent;
  outline: none;
  padding: 0 0 0.5rem 0.5rem;
}

.input-label {
  position: absolute;
  bottom: -15px;
  left: 0;
  height: 3rem;
  pointer-events: none;
  padding-left: 0.5rem;
  transform-origin: left;
  transition: all 0.3s ease;
}

.input-label.active {
  transform: translateY(-1.3rem);
  font-weight: 600;
  font-size: 0.8rem;
  color: rgb(3, 3, 3);
}

.subject-tag {
  white-space: normal;
  overflow: visible;
}
</style>
