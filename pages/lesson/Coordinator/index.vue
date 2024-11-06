<template>
    <div class="bg-[#f4f6f6] text-[poppins]">
        <LessonNavigationCondntnav/>
    </div>
  </template>


  <script   >
  

  
  
  
  
  
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');


  .shadows {
    box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
    -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
    -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  }


/* Define keyframe for staggered sliding effect */
@keyframes staggeredSlideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.staggered-input {
  opacity: 0;
  animation: staggeredSlideIn 0.5s forwards;
}

.staggered-form .staggered-input.delay-0 {
  animation-delay: 0s;
}

.staggered-form .staggered-input.delay-1 {
  animation-delay: 0.2s;
}

.staggered-form .staggered-input.delay-2 {
  animation-delay: 0.4s;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}

.subtitle {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}


  </style>