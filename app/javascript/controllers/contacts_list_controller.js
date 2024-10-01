import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
 static targets = ["contact"]

  highlight(event) {
    this.contactTargets.forEach((contact) => {
      contact.classList.remove("active")
    });
    event.currentTarget.classList.add("active");
  }
}