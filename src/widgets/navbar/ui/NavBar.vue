<template>
  <nav :class="$style.navbar">
    <div :class="$style.logo">
      <span>FlyFlat</span>
    </div>
    <div :class="$style.navLinks">
      <ul :class="$style.navLinks">
        <li><a href="#" :class="$style.navLink">How It Works</a></li>
        <li><a href="#" :class="$style.navLink">FAQ</a></li>
        <li><a href="#" :class="$style.navLink">Pricing</a></li>
        <li><a href="#" :class="$style.navLink">Flight Deal Examples</a></li>
      </ul>
    </div>
    <div :class="$style.actions">
      <button :class="$style.clientPortal">Client Portal</button>
      <button :class="$style.getStarted">Get Started</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style module>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e293b;
  padding: 15px 30px;
  color: white;
}

.logo {
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

.navLinks {
  display: flex;
  gap: 20px;
}

.navLinks > ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.navLink {
  text-decoration: none;
  color: white;
  font-size: 16px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.clientPortal {
  background-color: #1e293b;
  border: 1px solid #fbbf24;
  color: #fbbf24;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
}

.getStarted {
  background-color: white;
  color: #1e293b;
  padding: 5px 15px;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.getStarted:hover {
  background-color: #f3f4f6;
}
</style>
