const datas = {
  tools: {
    kuponundian: {
      id: 'kuponundian',
      name: 'Kupon Undian',
      component: () => import('@views/Home.vue'),
      category: 'printing',
      description: `Alat untuk mendesign dan memncetak kupon undian dengan nomor yang berurutan`
    }
  },
  categories: {
    printing: 'Printing'
  }
}

export default datas;