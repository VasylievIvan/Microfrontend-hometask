import { LoremIpsum } from "lorem-ipsum";

const Text = (element) => {
  const lorem = new LoremIpsum();
  element.innerHTML = lorem.generateParagraphs(10);
}

export default Text;