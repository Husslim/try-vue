<script setup lang="ts">
</script>
<template>
    <FormKit
      type="radio"
      label="the power form of '3 + 3^2' is:"
      validation="required"
      :options="[
        { label: '6^2', value: '36' },
        { label: '3^2', value: '9' },
        { label: '3^3', value: '27' },
        { label: '2^2 x 3', value: '12' },
      ]"
    />
  </template>