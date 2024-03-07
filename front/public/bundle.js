(() => {
  class e {
    constructor(e, t, n, a, r, i, s) {
      (this.title = e),
        (this.year = t),
        (this.director = n),
        (this.duration = a),
        (this.genre = r),
        (this.rate = i),
        (this.poster = s);
    }
  }
  const t = new (class {
    constructor() {
      this.moviesDB = [];
    }
    getAllMovies() {
      return this.moviesDB;
    }
    createMovie({
      title: t,
      year: n,
      director: a,
      duration: r,
      genre: i,
      rate: s,
      poster: o,
    }) {
      const c = new e(t, n, a, r, i, s, o);
      this.moviesDB.push(c);
    }
  })();
  function n(e) {
    const {
        title: t,
        year: n,
        director: a,
        duration: r,
        genre: i,
        rate: s,
        poster: o,
      } = e,
      c = document.createElement("h3"),
      l = document.createElement("p"),
      d = document.createElement("p"),
      m = document.createElement("p"),
      p = document.createElement("p"),
      h = document.createElement("p"),
      u = document.createElement("img"),
      C = document.createElement("div");
    (c.className = "title"),
      (l.className = "year"),
      (d.className = "director"),
      (m.className = "duration"),
      (p.className = "genre"),
      (h.className = "rate"),
      (u.className = "poster");
    let v = i.join(", ") + ".";
    return (
      (c.textContent = `${t}`),
      (l.textContent = `Year: ${n}`),
      (d.textContent = `Directed by: ${a}`),
      (m.textContent = `Duration: ${r}.`),
      (p.textContent = `Genre: ${v}`),
      (h.innerHTML = `Rating: <i>${s}/10</i>`),
      (u.src = o),
      (u.alt = `${t}`),
      C.appendChild(c),
      C.appendChild(u),
      C.appendChild(l),
      C.appendChild(d),
      C.appendChild(m),
      C.appendChild(p),
      C.appendChild(h),
      (C.className = "movie"),
      C
    );
  }
  $.get("https://students-api.2.us-1.fl0.io/movies", (e) =>
    ((e) => {
      e.forEach((e) => t.createMovie(e)),
        (function () {
          const e = document.getElementById("movies");
          (e.innerHTML = ""),
            t
              .getAllMovies()
              .map(n)
              .forEach((t) => e.appendChild(t));
        })();
    })(e)
  );
})();
