<template>
  <div class="wrapper">
    <BaseHeader />
    <main class="main">
      <SideBar />
      <div class="content">
        <slot />
      </div>
    </main>
    <BaseFooter />
  </div>
</template>