<template>
  <div class="bg-white p-4">
    <div class="collapse rounded-box collapse-plus mb-3">
      <input type="checkbox" checked>
      <div class="collapse-title font-medium">
        Coupon
      </div> 
      <div class="collapse-content"> 
        <div class="form-control w-full max-w-xs mb-2">
          <label class="label">
            <span class="label-text">Background</span>
          </label>
          <div class="tabs mb-3">
            <a class="tab tab-bordered" :class="{ 'tab-active': config.coupon.bg.type == 'solid' }" @click="config.coupon.bg.type = 'solid'">Solid</a> 
            <a class="tab tab-bordered" :class="{ 'tab-active': config.coupon.bg.type == 'gradient' }" @click="config.coupon.bg.type = 'gradient'">Gradient</a>
            <a class="tab tab-bordered" :class="{ 'tab-active': config.coupon.bg.type == 'image' }" @click="config.coupon.bg.type = 'image'">Image</a> 
            <div class="flex-1 tab-bordered"></div>
          </div>
          <div class="overflow-hidden" :class="{ 'h-0': config.coupon.bg.type != 'solid' }">
            <color-picker
              :color="config.coupon.bg.solid"
              @change="config.coupon.bg.solid = $event"  />
          </div>
          <div class="overflow-hidden" :class="{ 'h-0': config.coupon.bg.type != 'gradient' }">
            <color-picker
              :color="config.coupon.bg.gradient"
              :gradient="true"
              @change="config.coupon.bg.gradient = $event" />
          </div>
          <div class="overflow-hidden" :class="{ 'h-0': config.coupon.bg.type != 'image' }">
            <div class="grid grid-cols-1 mt-5 mx-7 mb-5">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                <div class='flex items-center justify-center w-full'>
                    <label class='flex flex-col border-2 border-dashed w-full h-32 hover:bg-gray-100 hover:border-primary group'>
                        <div class='flex flex-col items-center justify-center pt-7'>
                          <svg class="w-10 h-10 text-primary group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          <p class='lowercase text-sm text-gray-400 group-hover:text-primary pt-1 tracking-wider'>Select a photo</p>
                        </div>
                      <input type='file' class="hidden" accept="image/png,image/jpg,image/svg" @change="changeImage" />
                    </label>
                </div>
            </div>
            <div class="px-2">
              <div class="form-control w-full max-w-xs mb-1">
                <label class="label">
                  <span class="label-text">Position</span>
                </label> 
                <select class="select select-bordered w-full" v-model="config.coupon.bg.image.position">
                  <option disabled="" selected="">Choose Position</option>
                  <option value="bottom">bottom</option>
                  <option value="top">top</option>
                  <option value="center">center</option>
                  <option value="left">left</option>
                  <option value="right">right</option>
                  <option value="revert">revert</option>
                </select>
              </div>
              <div class="form-control w-full max-w-xs mb-1">
                <label class="label">
                  <span class="label-text">Height</span>
                  <a class="label-text-alt">in %</a>
                </label> 
                <input type="number" min="0" max="100" placeholder="2" class="input input-bordered" v-model="config.coupon.bg.image.height">
              </div>
              <div class="form-control w-full max-w-xs mb-1">
                <label class="label">
                  <span class="label-text">Width</span>
                  <a class="label-text-alt">in %</a>
                </label> 
                <input type="number" min="0" max="100" placeholder="2" class="input input-bordered" v-model="config.coupon.bg.image.width">
              </div>
              <div class="form-control">
                <label class="cursor-pointer label">
                  <span class="label-text">Repeat</span> 
                  <input type="checkbox" class="checkbox" v-model="config.coupon.bg.image.repeat">
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="collapse rounded-box collapse-plus mb-3">
      <input type="checkbox">
      <div class="collapse-title font-medium">
        Layout
      </div> 
      <div class="collapse-content"> 
        <div class="form-control w-full max-w-xs mb-2">
          <label class="label">
            <span class="label-text">Number of Column</span>
            <a class="label-text-alt">in cm</a>
          </label> 
          <input type="number" placeholder="2" class="input input-bordered" v-model="config.layout.col">
        </div>
        <div class="form-control w-full max-w-xs mb-2">
          <label class="label">
            <span class="label-text">Number of Row</span>
            <a class="label-text-alt">in cm</a>
          </label> 
          <input type="number" placeholder="6" class="input input-bordered" v-model="config.layout.row">
        </div>
        <div class="form-control w-full max-w-xs mb-2">
          <label class="label">
            <span class="label-text">Spacing</span>
            <a class="label-text-alt">in mm</a>
          </label> 
          <input type="number" placeholder="0" class="input input-bordered" v-model="config.layout.spacing">
        </div>
      </div>
    </div>
    <div class="collapse rounded-box collapse-plus mb-3">
      <input type="checkbox">
      <div class="collapse-title font-medium">
        Paper Config
      </div> 
      <div class="collapse-content"> 
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Choose Paper Size</span>
          </label> 
          <select class="select select-bordered w-full" v-model="config.paper.size">
            <option disabled="" selected="">Choose Paper Size</option>
            <option v-for="paper in papers" :key="`options-paper-${paper.id}`" :value="paper.id">{{ paper.name }}</option>
          </select>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="cursor-pointer label">
            <span class="label-text">Landscape</span> 
            <input type="checkbox" checked="checked" class="toggle" v-model="config.paper.landscape">
          </label>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Margin :</span>
            <a class="label-text-alt">in cm</a>
          </label> 
          <div class="flex flex-row space-x-1 mb-1 pl-5 pr-1">
            <label class="flex items-center justify-start rounded text-base w-24 label-text">top</label>
            <input type="number" placeholder="1.5" class="w-full pr-16 input input-bordered" v-model="config.paper.margin.top"> 
          </div>
          <div class="flex flex-row space-x-1 mb-1 pl-5 pr-1">
            <label class="flex items-center justify-start rounded text-base w-24 label-text">right</label>
            <input type="number" placeholder="1.5" class="w-full pr-16 input input-bordered" v-model="config.paper.margin.right"> 
          </div>
          <div class="flex flex-row space-x-1 mb-1 pl-5 pr-1">
            <label class="flex items-center justify-start rounded text-base w-24 label-text">bottom</label>
            <input type="number" placeholder="1.5" class="w-full pr-16 input input-bordered" v-model="config.paper.margin.bottom"> 
          </div>
          <div class="flex flex-row space-x-1 mb-1 pl-5 pr-1">
            <label class="flex items-center justify-start rounded text-base w-24 label-text">left</label>
            <input type="number" placeholder="1.5" class="w-full pr-16 input input-bordered" v-model="config.paper.margin.left"> 
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import datas from '@lib/datas';

const ColorPicker = () => import('@components/ColorPicker.vue');

export default {
  name: 'kupon-undian-menu',
  props: ['config'],
  components:{
    ColorPicker
  },
  methods: {
    changeImage(e) {
      const file = e.target.files[0];
      this.config.coupon.bg.image.file = file ? URL.createObjectURL(file) : null;
    }
  },
  computed: {
    papers() {
      return datas.papers;
    }
  }
}
</script>