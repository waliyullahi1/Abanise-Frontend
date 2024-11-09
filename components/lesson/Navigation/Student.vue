
<template>
    <div>
        <LessonNavigationNav  :links="coodinatorLinks"></LessonNavigationNav>
    </div>
</template>

<script setup>

 const coodinatorLinks = [
  
  {label:'Home', image:'home' },
  {label:'Students', image:'student' },
  {label:'Homework', image:'teacher' },
  {label:'Exam Board', image:'admission' },
  {label:'Enroll Subject ', image:'event' },
  {label:'Schedules', image:'schedules' },

  {label:'School Gallery', image:'photo' },

]
  

</script>