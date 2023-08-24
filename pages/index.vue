<template>
  <Head title="AMO Medication Search" />
  <div class="min-h-full">

      <div class="pb-32" style="background-color: #45469D">
          <Disclosure as="nav" class="bg-brand-indigo border-b border-indigo-300 border-opacity-25 lg:border-none">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div class="relative h-20 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
          <div class="px-2 flex items-center lg:px-0">
            <div class="flex-shrink-0">
              <!-- <img class="inline-block h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg" alt="Workflow" />
              <span class="inline-block h-8 w-auto ml-2 text-white font-bold text-2xl">kɛnɛya fura</span> -->
              <img class="block lg:hidden h-8 w-auto" src="../assets/images/logomark-white.svg" alt="Workflow" />
              <img class="hidden lg:block h-10 w-auto" src="../assets/images/logo-white.svg" alt="Workflow" />
            </div>
            <div class="hidden lg:block lg:ml-10">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-indigo-500 bg-opacity-75 text-white' : 'text-white hover:bg-indigo-500 hover:bg-opacity-75', 'rounded-md py-2 px-3 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>     
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-indigo-700 text-white' : 'text-white hover:bg-indigo-500 hover:bg-opacity-75', 'block rounded-md py-2 px-3 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
            {{ item.name }}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <header class="py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-white">AMO Medication Search</h1>
      </div>
    </header>
      </div>

      <main class="-mt-32">
    <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
        <AlgoliaSearch/>
     </div>
      <!-- /End replace -->
    </div>
  </main>
  </div>
  <TheFooter />

</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import AlgoliaSearch from "../src/components/AlgoliaSearch";
import TheFooter from "../src/components/TheFooter.vue"

const navigation = [
{ name: 'Platorm', href: '#', current: false },
{ name: 'Features', href: '#', current: false },
{ name: 'AMO Search Tool', href: '#', current: true },
{ name: 'Company', href: '#', current: false },
]

</script>



