// ✨ Write your code here!
class Editor {
  constructor() {
    this.head = null
    this.tail = null
  }

  static edit(text, next=null, prev=null) {
    return { text, next, prev }
  }

  toString() {
    if (this.tail === null) {
      return ''
    }
    else {
      return this.tail.text
    }
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
  }

  undo() {
    if (!this.head){
      return undefined
    }
    const last = this.tail
    this.tail = last.prev
  }

  replace(original, updated) {
    const updatedText = this.tail.text.replace(new RegExp(original, 'g'), updated)
    this.write(updatedText, true)
  }

}

module.exports = Editor
