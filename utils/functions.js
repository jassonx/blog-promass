export const DinamicColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const ExtractFormData = (event) => {
  return Array.from(event.target.elements)
    .filter((input) => input.name)
    .reduce(
      (obj, input) => Object.assign(obj, { [input.name]: input.value }),
      {}
    );
};
