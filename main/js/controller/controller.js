import itemModel from "../model/itemModel.js";

export default class controller {
  constructor(itemModelList, itemViewList) {
    this.itemModelList = itemModelList;
    this.itemViewList = itemViewList;
    this.itemViewList.setAddController(this.addItem);
    this.itemViewList.setDelController(this.delItem);
    this.onModelChange();
    this.itemModelList.setOnChangeCallback(() => this.onChangeCallback());
  }

  onChangeCallback() {
    this.itemViewList.toHtml();
  }
  addItem(title, text) {
    const item = new itemModel(title, text);
    this.itemModelList.add(item);
  }
  delItem(itemId) {
    this.itemModelList.delete(itemId);
  }
  onModelChange() {
    const handler = {
      set: (obj, prop, val) => {
        obj[prop] = val;
        this.itemViewList.toHtml();
        return true;
      },
    };
    this.itemModelList.items = new Proxy(this.itemModelList.items, handler);
  }
}
