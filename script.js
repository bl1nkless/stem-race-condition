const printButton = document.querySelector(".print");
printButton.hidden = false;
printButton.addEventListener("click", () => window.print());

if (navigator.clipboard) {
  for (const button of document.querySelectorAll(".copy")) {
    const command = button.parentElement.querySelector("code").textContent;
    let reset;
    button.hidden = false;
    button.addEventListener("click", async () => {
      window.clearTimeout(reset);
      try {
        await navigator.clipboard.writeText(command);
        button.textContent = "Скопійовано";
      } catch {
        button.textContent = "Виділіть команду";
      }
      reset = window.setTimeout(() => {
        button.textContent = "Копіювати";
      }, 1800);
    });
  }
}
