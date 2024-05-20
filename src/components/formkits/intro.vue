<script setup lang="ts">
import stepOne from "./components/formkits/stepOne.vue"
import stepTwo from "./components/formkits/stepTwo.vue"
import stepThree from "./components/formkits/stepThree.vue"

</script>
<template>
    <FormKit type="form" :actions="false">
      <FormKit type="multi-step" tab-style="tab">
        <FormKit type="step" name="personalInfo">
          <!-- component for example brevity. -->
          <stepOne />
        </FormKit>
  
        <FormKit type="step" name="references">
          <!-- component for example brevity. -->
          <stepTwo />
        </FormKit>
  
        <FormKit type="step" name="Supplemental">
          <!-- component for example brevity. -->
          <stepThree />
  
          <!-- using step slot for submit button-->
          <template #stepNext>
            <FormKit type="submit" />
          </template>
        </FormKit>
      </FormKit>
      </FormKit>
  </template>