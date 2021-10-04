<template>
  <drawer class="min-h-screen" :class="{ 'absolute w-screen top-0': is_full }" name="drawer-kupon">
    <template v-slot:menu>
      <menu-drawer :config="config" />
    </template>

    <template>
      <div class="py-3">
        <div class="tabs tabs-boxed">
          <div class="flex-none md:flex-1 pl-5"></div>
          <a class="tab" :class="{ 'tab-active': view.tab === 'paper' }" @click="view.tab = 'paper'">Paper View</a>
          <a class="tab" :class="{ 'tab-active': view.tab === 'coupon' }" @click="view.tab = 'coupon'">Coupon View</a>
          <div class="flex-1 flex flex-row justify-end pr-5">
            <button class="btn btn-square btn-sm" @click="is_full = !is_full">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path v-if="is_full" d="M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z" fill="currentColor"/>
                <path v-else d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z" fill="currentColor"/>
              </svg>
            </button>
            <div class="flex-none lg:hidden">
              <label for="drawer-kupon" class="btn btn-square btn-sm ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" fill="currentColor"/>
                </svg>
              </label>
            </div>
          </div>
        </div>

        <div class="w-full" v-if="view.tab == 'paper'">
          <div class="mx-auto w-max p-10">
            <paper
              :size="config.paper.size"
              :margin="config.paper.margin"
              :orientation="config.paper.landscape ? 'landscape' : 'potrait'"
              :preview="true">
              <div class="w-full h-full flex flex-col flex-1">
                <div class="flex flex-row flex-1" v-for="r in config.layout.row" :key="`row-${r}`">
                  <div
                    v-for="c in config.layout.col"
                    :key="`col-${r}-${c}`"
                    class="flex-1 relative"
                    :style="boxCouponStyle(r, c)">
                    <kupon :config="config" />
                  </div>
                </div>
              </div>
            </paper>
          </div>
        </div>
      </div>
    </template>
  </drawer>
</template>

<script>
import getData, { saveConfig } from './datas';

const MenuDrawer = () => import('./Menu.vue');
const Kupon = () => import('./Kupon.vue');
const Paper = () => import('@components/Paper.vue');

export default {
  name: 'kupon-undian',
  components: {
    Kupon,
    MenuDrawer,
    Paper
  },
  data: () => getData(),
  methods: {
    boxCouponStyle(r, c) {
      const spacing = `calc(${this.config.layout.spacing}mm / 2)`;
      return (
        (r > 1 ? `padding-top: ${spacing};` : '') +
        (r < this.config.layout.row ? `padding-bottom: ${spacing};` : '') +
        (c > 1 ? `padding-left: ${spacing};` : '') +
        (c < this.config.layout.col ? `padding-right: ${spacing};` : '')
      )
    }
  },
  watch: {
    config: {
      handler(value) {
        saveConfig(value)
      },
      deep: true
    }
  }
}
</script>