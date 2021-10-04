const datas = {
  papers: {
    A4: { id: 'A4', name: 'A4', class: 'A4' },
    A3: { id: 'A3', name: 'A3', class: 'A3' },
    A5: { id: 'A5', name: 'A5', class: 'A5' },
  },
  tools: {
    kuponundian: {
      id: 'kuponundian',
      name: 'Raffle Coupon',
      component: () => import('@views/tools/kupon-undian/Index.vue'),
      category: 'printing',
      description: `Tool for designing and printing raffle coupons with consecutive numbers`
    }
  },
  categories: {
    printing: 'Printing'
  }
}

export default datas;