class Ball {
  constructor(x, y, r, hspd, vspd) {
    this.px = x
    this.py = y
    this.x = x
    this.y = y
    this.r = r

    this.hspd = hspd
    this.vspd = vspd
  }

  render() {
    noStroke()
    fill('#FE019A')
    ellipse(this.x, this.y, this.r)
  }

  update(paddle, blocks) {
    // left and right wall check
    if (this.x < this.r/2 || this.x > W - (this.r/2)) this.hspd *= -1
    // top wall check
    if (this.y < this.r/2) this.vspd *= -1

    let is_collided = this.check_paddle_collision(paddle)

    blocks.forEach(block => {
      this.check_block_collision(block)
    })

    this.px = this.x
    this.py = this.y
    this.x += this.hspd
    this.y += this.vspd

    if (is_collided) {
      this.px = this.x
      this.py = this.y
    }
  }

  check_paddle_collision(p) {
    // if (this.x > paddle.x && this.x < paddle.x+paddle.w && this.y + (this.r/2) > paddle.y && this.y < paddle.y+paddle.h) this.vspd *= -1
    let p_edges = {
      left:   [createVector(p.x, p.y),      createVector(p.x, p.y+p.h)],
      right:  [createVector(p.x+p.w, p.y),  createVector(p.x+p.w, p.y+p.h)],
      top:    [createVector(p.x, p.y),      createVector(p.x+p.w, p.y)],
      bottom: [createVector(p.x, p.y+p.h),  createVector(p.x+p.w, p.y+p.h)],
    }

    // if (check_line_intersect(this.px, this.py, this.x, this.y, p.x, p.y, p.x, p.y+p.h)) {
    if (check_line_intersect(this.px, this.py, this.x, this.y, p_edges.left[0].x, p_edges.left[0].y, p_edges.left[1].x, p_edges.left[1].y)
    || (check_line_intersect(this.px, this.py, this.x, this.y, p_edges.right[0].x, p_edges.right[0].y, p_edges.right[1].x, p_edges.right[1].y))) {
      this.hspd *= -1
      return true
    } else if (check_line_intersect(this.px, this.py, this.x, this.y, p_edges.top[0].x, p_edges.top[0].y, p_edges.top[1].x, p_edges.top[1].y)
      || check_line_intersect(this.px, this.py, this.x, this.y, p_edges.bottom[0].x, p_edges.bottom[0].y, p_edges.bottom[1].x, p_edges.bottom[1].y)) {
      this.vspd *= -1
      return true
    }
    
    return false
  }

  check_block_collision(b) {
    if (b.broken) return

    let b_edges = {
      left:   [createVector(b.x, b.y),      createVector(b.x, b.y+b.h)],
      right:  [createVector(b.x+b.w, b.y),  createVector(b.x+b.w, b.y+b.h)],
      top:    [createVector(b.x, b.y),      createVector(b.x+b.w, b.y)],
      bottom: [createVector(b.x, b.y+b.h),  createVector(b.x+b.w, b.y+b.h)],
    }

    if (check_line_intersect(this.px, this.py, this.x, this.y, b_edges.left[0].x, b_edges.left[0].y, b_edges.left[1].x, b_edges.left[1].y)
    || (check_line_intersect(this.px, this.py, this.x, this.y, b_edges.right[0].x, b_edges.right[0].y, b_edges.right[1].x, b_edges.right[1].y))) {
      this.hspd *= -1
      b.break()
      return true
    } else if (check_line_intersect(this.px, this.py, this.x, this.y, b_edges.top[0].x, b_edges.top[0].y, b_edges.top[1].x, b_edges.top[1].y)
      || check_line_intersect(this.px, this.py, this.x, this.y, b_edges.bottom[0].x, b_edges.bottom[0].y, b_edges.bottom[1].x, b_edges.bottom[1].y)) {
      this.vspd *= -1
      b.break()
      return true
    }

    return false

    // if (this.x > b.x && this.x < b.x+b.w && this.y > b.y && this.y < b.y+b.h) {
    // }
  }
}
