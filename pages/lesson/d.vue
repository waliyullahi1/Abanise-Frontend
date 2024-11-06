<template>
    <div>
      <h2>Select Subjects</h2>
      <!-- Use SelectSubject component and bind selectedSubjects with v-model -->

        <LessonSelectSubject v-model:selectedSubjects="selectedSubjects" label="Choose a Subject" ></LessonSelectSubject>
      <!-- Display the list of selected subjects -->
     
    </div>
  </template>
  
  <script setup>

import { ref } from 'vue';
   // Adjust path as necessary
  
  // Define a reactive array to hold selected subjects in the parent
  const selectedSubjects = ref([]);
  </script>
  