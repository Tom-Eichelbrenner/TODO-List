export function trash() {
    this.parentNode.remove();
}

export function check() {
    this.innerHTML = this.innerHTML === '✔️' ? '♻' : '✔️'
}