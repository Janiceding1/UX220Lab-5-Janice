class XCenter extends HTMLElement {
    connectedCallback() {
        this.style.display = "block";
        this.style.textAlign = "center";
    }
}

customElements.define("x-center", XCenter);
