const ChecklistApp = {
    data() {
    return {
        items: [
            { text: 'Item 1', visible: false },
            { text: 'Item 2', visible: false },
            { text: 'Item 3', visible: false },
            // ... more items
        ]
    };
},
mounted() {
    this.showItemsWithDelay();
},
methods: {
    showItemsWithDelay() {
        this.items.forEach((item, index) => {
            setTimeout(() => {
                item.id = index;
		item.visible = true;
            }, index * 500); // 500ms delay between each item
        });
    }
},
    template: `
      <form id="checklist-wrapper">
        <div v-for="item in items" :key="item.id" class="checklist-item">
          <label :for="'item-' + item.id" class="w-checkbox checklist-item-label">
	          <input class="w-checkbox-input" type="checkbox" v-model="item.checked" :id="'item-' + item.id">
  	        <span class="checklist-item-label-text w-form-label">{{ item.text }}</span>
          </label>
        </div>
      </form>
    `
  };

  const app = Vue.createApp(ChecklistApp);
  app.mount('#checklist-items');
