// ✨ Write your code here!
class Editor {
  constructor() {
    this.head = null
    this.tail = null
    this.current = this.tail
  }

  static edit(text, next=null, prev=null) {
    return { text, next, prev }
  }

  toString() {
    return (!this.current) ? '' : this.current.text
  }

  write(text, replaced=false) {
    const edited = Editor.edit(text)

    if (this.head === null) {
      this.head = edited
      this.tail = this.head
    }
    else {
      if (!replaced) {
        edited.text = this.tail.text + edited.text
      }
      this.tail.next = edited
      edited.prev = this.tail
      this.tail = edited
    }

    this.current = this.tail
  }

  undo() {
    if (!this.head) { return undefined }
    this.current = this.current.prev
  }

  redo() {
    if (this.current.next) { this.current = this.current.next }
  }

  replace(original, updated) {
    const updatedText = this.tail.text.replace(new RegExp(original, 'g'), updated)

    this.write(updatedText, true)
  }

}

module.exports = Editor
