<template>
  <div class="min-h-screen flex flex-col bg-surface text-text-primary font-sans">
    <LandingNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>
