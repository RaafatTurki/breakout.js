class Block {
  constructor(x, y, w, h, t) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.t = t
    this.broken = false
    
    this.colors = [ '#C7CEEA', '#B5EAD7', '#E2F0CB', '#FFDAC1', '#FFB7B2', '#FF9AA2' ]
  }

  render() {
    if (!this.broken) {
      noStroke()
      fill(this.colors[this.t])
      rect(this.x, this.y, this.w, this.h)
    }
  }

  update() {
  }

  break() {
    this.t--

    if (this.t == 0) {
      this.broken = true
      if (random() < 0.1) {
        powerups.push(new Powerup(this.x, this.y, 20))
      }
    } 
  }
}
