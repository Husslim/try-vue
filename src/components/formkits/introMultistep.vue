<script setup>
import StepOne from './stepOne.vue'
import StepTwo from './stepTwo.vue'
import StepThree from './stepThree.vue'
import StepFour from './StepFour.vue'
</script>
<template>
  <FormKit type="form" :actions="false">
    <FormKit type="multi-step" tab-style="tab">
      <FormKit type="step" name="personalInfo">
        <!-- component for example brevity. -->
        <StepOne />
      </FormKit>

      <FormKit type="step" name="condition">
        <!-- component for example brevity. -->
        <StepTwo />
      </FormKit>

      <FormKit type="step" name="Rules">
        <!-- component for example brevity. -->
        <StepThree />
      </FormKit>

      <FormKit type="step" name="Misconception">
        <!-- component for example brevity. -->
        <StepFour />
      

        <!-- using step slot for submit button-->
        <template #stepNext>
          <FormKit type="submit" />
        </template>
      </FormKit>
    </FormKit>
  </FormKit>
</template>