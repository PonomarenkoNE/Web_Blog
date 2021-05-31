import itemView from "../view/itemView.js";

export default class itemViewList {
  constructor(itemModelList) {
    this.itemModelList = itemModelList;
    this.addController = null;
    this.delController = null;
    document.querySelector("body").addEventListener("click", (e) => {
      if (e.target.id == "add") {
        const title = prompt("Input Title:");
        const text = prompt("Input Text:");
        this.addController(title, text);
      }
    });
    document.querySelector(".content").addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
        const id = e.target.parentNode.parentNode.id;
        this.delController(id);
      }
    });
    document.querySelector(".content").addEventListener("click", (e) => {
      if (e.target.classList.contains("commentadd")) {
        const text = document.querySelector(".comment").value;
        if (text != "") {
          this.itemModelList.addComment(
            e.target.parentNode.parentNode.id,
            text
          );
        } else {
          alert("Input comment text");
        }
      }
    });
  }

  setAddController(add) {
    this.addController = add;
  }
  setDelController(del) {
    this.delController = del;
  }
  toHtml() {
    const items = this.itemModelList.items
      .map((item) => {
        const ItemView = new itemView(item);
        return ItemView.toHtml();
      })
      .join("");

    document.querySelector(".content").innerHTML = items;
  }
}
