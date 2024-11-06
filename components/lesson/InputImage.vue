<template>
  <div class="inset-0 staggered-form mt-5">
    <div class="w-full h-full justify-center flex flex-col items-center">
      <div class="w-40 h-40 ht border shadow-md shadow-blue-700 bg-white overflow-hidden" @click="triggerFileInput">
        <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image Preview">
      </div>
      <div class="w-40">
        <LessonButton class="mt-1" @click="triggerFileInput">{{label}}</LessonButton>
      </div>
    </div>

    <!-- Hidden File Input -->
    <input ref="fileInput" type="file" accept="image/*" @change="handleFileUpload" style="display: none;">
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';


const props = defineProps({
 
  label: String,
  
 
 
});

const imageUrl = ref(null);
const fileInput = ref(null);
const emit = defineEmits(['update:modelValue']);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];

  if (!file || !file.type.startsWith("image/")) {
    alert("Only image files are allowed.");
    return;
  }

  resizeImage(file, 300, 300).then((resizedFile) => {
    imageUrl.value = URL.createObjectURL(resizedFile);
    emit('update:modelValue', resizedFile);
  });
};

const resizeImage = (file, width, height) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressImage = (quality) =>
        new Promise((res) => {
          canvas.toBlob((blob) => res(blob), file.type, quality);
        });

      const getCompressedFile = async () => {
        let quality = 1.0;
        let blob = await compressImage(quality);

        while (blob.size > 150 * 1024 && quality > 0.1) {
          quality -= 0.1;
          blob = await compressImage(quality);
        } 

        return new File([blob], file.name, { type: file.type });
      };

      getCompressedFile().then((resizedFile) => {
        resolve(resizedFile);
      });
    };
  });
};
</script>
