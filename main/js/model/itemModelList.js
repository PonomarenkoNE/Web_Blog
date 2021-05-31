export default class itemModelList {
  constructor() {
    this.items = [];
    this.onChangeCallBack = null;
  }
  add(item) {
    item.onChangeCallBack = this.onChangeCallBack;
    this.items.push(item);
  }
  delete(itemId) {
    const itemIndex = this.items.findIndex((item) => item.id == itemId);

    this.items.splice(itemIndex, 1);
  }
  addComment(itemId, comment) {
    const itemIndex = this.items.findIndex((item) => item.id === itemId);
    this.items[itemIndex].addComment(comment);
  }

  setOnChangeCallback(funcCallback) {
    this.onChangeCallBack = funcCallback;
  }
}
