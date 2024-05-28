<script setup lang="ts">
</script>
<template>
    <FormKit
      type="textarea"
      label="When you multiply two terms with the same base, you can simplify the expression by?"
      validation="required"
    />
    <FormKit
      type="radio"
      label="when a base raised to a power is itself raised to another power, we (--------) the exponents while keeping the same base."
      validation="required"
      :options="[
        { label: 'add', value: 'add' },
        { label: 'subtract', value: 'subtract' },
        { label: 'multiply', value: 'multiply' },
        { label: 'divide', value: 'divide' },
      ]"
    />
  </template>