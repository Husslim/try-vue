<script setup lang="ts">  
</script>
<template>
    <FormKit
      type="text"
      label="Name"
      prefix-icon="avatarMan"
      validation="required"
    />
    <FormKit
      type="email"
      label="Email"
      prefix-icon="email"
      validation="required|email"
    />
    
  </template>