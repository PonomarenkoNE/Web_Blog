export default class itemView {
  constructor(itemModel) {
    this.itemModel = itemModel;
  }

  toHtml() {
    const comments = this.itemModel.comments
      .map((item) => {
        return `<div class="alert alert-info">
        ${item.text}<br>
        <b>By: Ponomarenko Nikita<br></b>
    </div>`;
      })
      .join("");

    return `<div class="alert alert-warning mt-2" id ="${this.itemModel.id}">
    <h2>${this.itemModel.title}</h2>
    ${this.itemModel.text}<br>
    <b>By: Ponomarenko Nikita<br></b>
    Comments:<br>
    ${comments}
    <div">
        <input class="comment" type="text"><br>
        <button type="submit" class="btn btn-info commentadd">Comment</button>
        <button type="submit" class="btn btn-info delete" >Delete post</button>
    </div>
</div>`;
  }
}
