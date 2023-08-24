<template>
  <ais-instant-search indexName="medications" :search-client="searchClient">
    <ais-search-box class="mb-4">
      <template v-slot="{ currentRefinement, refine }">
        <div>
          <label for="search" class="block text-sm font-medium text-gray-700">Quick search</label>
          <div class="mt-1 relative flex items-center">
            <input type="text" name="search" id="search"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
              :value="currentRefinement" @input="refine($event.currentTarget.value)" />
            <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd
                class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                ⌘K </kbd>
            </div>
          </div>
        </div>
      </template>
    </ais-search-box>
    <ais-hits>

    <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-semibold text-gray-900">Medications</h1>
            <p class="mt-2 text-sm text-gray-700">A list of all AMO approved medications by CANAM.</p>
          </div>
          <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        </div>
    </div>

      <div class="mt-8 flex flex-col">
          <div class="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle">
              <div class="shadow-sm ring-1 ring-black ring-opacity-5">
                <table class="min-w-full border-separate" style="border-spacing: 0">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col"
                        class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                        Codes</th>
                      <th scope="col"
                        class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                        Name</th>
                      <th scope="col"
                        class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                        Max Price</th>
                      <!-- <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">
                          <span class="sr-only">Details</span>
                        </th> -->
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    <tr v-for="med in medication" :key="med.id">
                      <td class=" border-b border-gray-200 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {{ med.codes }}</td>
                      <td class=" border-b border-gray-200 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {{ med.name }}</td>
                      <td class=" border-b border-gray-200 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {{ med.max_price }}</td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ais-hits>
    <ais-pagination>
      <template v-slot="{ currentRefinement, pages, refine, createURL}">
        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div class="flex-1 flex justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
            <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
          </div>
          <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <!-- <p class="text-sm text-gray-700">
                Showing
                {{ ' ' }}
                <span class="font-medium">1</span>
                {{ ' ' }}
                to
                {{ ' ' }}
                <span class="font-medium">10</span>
                {{ ' ' }}
                of
                {{ ' ' }}
                <span class="font-medium">97</span>
                {{ ' ' }}
                results
              </p> -->
            </div>
            <div>
              <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">

                <a 
                  class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  :href="createURL(currentRefinement - 1)"
                  @click.prevent="refine(currentRefinement - 1)"
                >
                  <span class="sr-only">Previous</span>
                  <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                </a>

                <a 
                  v-for="page in pages" 
                  :key="page"
                  :href="createURL(page)"
                  :class="[page === currentRefinement ? paginationPageClass.activeClass : paginationPageClass.defaultClass]"
                  @click.prevent="refine(page)"
                >
                  {{ page + 1 }}
                </a>

                <a 
                  class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  :href="createURL(currentRefinement + 1)"
                  @click.prevent="refine(currentRefinement + 1)"
                >
                  <span class="sr-only">Next</span>
                  <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </template>
    </ais-pagination>
  </ais-instant-search>
</template>
<script setup>
import { AisInstantSearch, AisSearchBox, AisHits, AisPagination } from 'vue-instantsearch/vue3/es';
import algoliasearch from 'algoliasearch/lite';
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/24/outline'


const searchClient = algoliasearch(
  'I528IJPLS1',
  '19176d769c41dae9b912c3ea8f0619c6'
)

const paginationPageClass = {
  activeClass: 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium',
  defaultClass: 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
}

const medication = ref()

medication.value = await getMedications()

async function getMedications() {
  return await $fetch('/api/medications')
}

</script>