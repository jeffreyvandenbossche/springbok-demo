class BsCarousel {
  constructor({
    quote,
    name,
  }) {
    this.quote = quote;
    this.name = name;
    this.html = this.generateHtml();
  }

  generateHtml() {
    const {
      quote, name,
    } = this;

    return `<bs-story-quote text="${quote}" 
                author-image="{&quot;src&quot;:&quot;https://s7g10.scene7.com/is/image/bridgestoneeu/Turanza-6-product-pictures-bottom-center&quot;,&quot;width&quot;:640,&quot;height&quot;:930}" 
                author-name="${name}" 
                author-position=""></bs-story-quote>`;
  }
}
function trimHtmlAttributes(html) {
  const regex = /\s+([^>]+)=["']([^"']*)["']\s*/g;
  return html.replace(regex, '');
}

export default async function decorate(block) {
  const [quotation, attribution] = [...block.children].map((c) => c.firstElementChild);

  const carousel = new BsCarousel({
    quote: quotation.innerHTML.replace(/<[^>]*>/g, ''),
    name: trimHtmlAttributes(attribution.innerHTML.replace(/<[^>]*>/g, '')),
  });

  block.innerHTML = carousel.html;
}
