<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar">
    <div class="logo">Pine House</div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/book">Book Now</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/account">Account</router-link>
    </div>
  </nav>
</template>

<script setup>
// no logic needed for now
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #2c3e50;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links a {
  color: white;
  margin-left: 1.5rem;
  text-decoration: none;
}

.nav-links a.router-link-active,
.nav-links a.active {
  color: #e67e22;
  font-weight: bold;
  border-bottom: 2px solid #e67e22;
}
</style>