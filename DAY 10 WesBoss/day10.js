const inputs = documents.querySelectorAll(".controls input");

function handleUpdate() {
  console.log(this.value);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mouseMove", handleUpdate));
