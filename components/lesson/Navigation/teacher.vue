
<template>
    <div>
        <LessonNavigationNav  :links="coodinatorLinks"></LessonNavigationNav>
    </div>
</template>

<script setup>

 const coodinatorLinks = [
  
  {label:'Home', image:'home' },
  {label:'Students', image:'student' },
  {label:'Teachers', image:'teacher' },
  {label:'Admissions', image:'admission' },
  {label:'Events', image:'event' },
  {label:'Schedules', image:'schedules' },

  {label:'School Gallery', image:'photo' },

]
  

</script>