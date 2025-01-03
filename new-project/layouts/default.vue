<template>
    <div class="flex h-screen flex-col overflow-hidden">
      <AppBar />
  
      <section class="flex h-full w-full flex-grow">
        <aside
          class="group relative flex h-full flex-col bg-[#ffffff] w-[20%]"
        >
          <div class="flex items-center pt-4">
            <AppSideBar />
          </div>
        </aside>
        <main class="flex h-full w-full flex-grow flex-col overflow-y-auto bg-[#F5F7FA]">
          <slot />
        </main>
      </section>
    </div>
 
  </template>