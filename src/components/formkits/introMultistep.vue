<script setup>
import StepOne from './stepOne.vue'
import StepTwo from './stepTwo.vue'
import StepThree from './stepThree.vue'
</script>
<template>
  <FormKit type="form" :actions="false">
    <FormKit type="multi-step" tab-style="tab">
      <FormKit type="step" name="personalInfo">
        <!-- component for example brevity. -->
        <StepOne />
      </FormKit>

      <FormKit type="step" name="references">
        <!-- component for example brevity. -->
        <StepTwo />
      </FormKit>

      <FormKit type="step" name="Supplemental">
        <!-- component for example brevity. -->
        <StepThree />

        <!-- using step slot for submit button-->
        <template #stepNext>
          <FormKit type="submit" />
        </template>
      </FormKit>
    </FormKit>
  </FormKit>
</template>