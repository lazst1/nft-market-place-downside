<template>
  <label :for="id" class="block h-79 relative overflow-hidden">
    <input
      :id="id"
      type="file"
      :multiple="multiple"
      @change="handleUpload"
    />
    <div
      :class="`overlayed border-dash bg-tertiary-700`"
    >
      <div class="text-center">
        <slot>
          <div class="font-ibm-bold text-2xl pt-24">
            <div>
              <font-awesome-icon :icon="['fas', 'cloud-upload-alt']" class="text-5xl" />
            </div>
            <div class="mt-7 leading-9">
              Drag & drop file
            </div>
            <div class="text-sm">
              or browse media on your device
            </div>
          </div>
        </slot>

        <small v-if="files.length" :class="`text-border-black bg-tertiary-700 block`">
          <slot name="file" :files="files" :uploadInfo="uploadInfo">
            {{ uploadInfo }}
          </slot>
        </small>
      </div>
    </div>
  </label>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  // props seem best defined in the Object API style as we're used to
  props: {
    id: { type: String, default: 'drag-and-drop-input' },
    multiple: { type: Boolean, default: false },
  },
  // Everything else goes in a setup function
  setup(props, { emit }) {
    // keep up with the files state (think data)
    const files = ref([])

    // display the uploaded file names (think computed)
    const uploadInfo = computed(() => {
      return files.value.length === 1
        ? files.value[0].name
        : `${files.value.length} files selected`
    })

    // handle the file upload event (think methods)
    const handleUpload = (e) => {
      files.value = Array.from(e.target.files) || []
      emit('input', files)
    }

    return { files, uploadInfo, handleUpload }
  },
}
</script>

<style scoped>
/* Finally we use Tailwind CSS to create our overlayed class */
.overlayed {
  @apply absolute top-0 left-0 right-0 bottom-0 w-full block;
}
.border-dash {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23000' stroke-width='6' stroke-dasharray='6%2c 14' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e");
}
</style>