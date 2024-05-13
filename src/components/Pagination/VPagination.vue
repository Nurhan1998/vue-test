<template>
  <div class="flex flex-col items-center mb-8 md:mb-12 mt-8">
    <div class="flex flex-col items-center">
      <span class="text-sm text-gray-700 dark:text-gray-400"
        >Showing page
        <span class="font-semibold text-gray-900 dark:text-white">{{
          currentPage
        }}</span>
        of
        <span class="font-semibold text-gray-900 dark:text-white">
          {{ totalPages }}
        </span>
        Pages</span
      >
      <div class="inline-flex mt-2 xs:mt-0">
        <button
          class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed"
          disabled
          @click="previewPage"
        >
          Prev
        </button>
        <button
          class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed"
          @click="nextPage"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
