  const ChecklistApp = {
    data() {
      return {
        items: [
          { id: 1, text: 'Item 1', checked: false },
          { id: 2, text: 'Item 2', checked: false },
          // ... add more items as needed
        ]
      };
    },
    template: `
      <form id="checklist-wrapper">
        <div v-for="item in items" :key="item.id" class="checklist-item">
          <label :for="'item-' + item.id">
	          <input type="checkbox" v-model="item.checked" :id="'item-' + item.id">
  	        <span>{{ item.text }}</span>
          </label>
        </div>
      </form>
    `
  };

  const app = Vue.createApp(ChecklistApp);
  app.mount('#checklist-items');
