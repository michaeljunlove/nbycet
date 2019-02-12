export default (text = "Hello world56") => {
    const element = document.createElement("div");
    element.innerHTML = text;
  
    return element;
  };