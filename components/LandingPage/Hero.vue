<script setup lang="ts"></script>

<template>
  <section>
    <div class="grid place-items-center gap-8 mx-auto py-10 md:py-16">
      <div class="text-center space-y-8">
        <Badge value="Give your memory a break"></Badge>

        <div class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold">
          <h1>
            Experience the
            <span class="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Shadcn/Vue </span>
            landing page
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          We're more than just a tool, we're a community of passionate creators. Get access to exclusive resources,
          tutorials, and support.
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <Button
            as="router-link"
            to="/auth/login"
            severity="contrast"
            variant="outlined"
            label="Get Started"
            icon="pi pi-arrow-right"
            icon-pos="right"
          />
        </div>
      </div>
    </div>
  </section>
</template>
