function u() {
  return {
    validate: (n) => {
      const r = Array.from(n, Number);
      let a = 0;
      for (let t = 0; t <= r.length - 1; t++) {
        let e = r[t];
        t % 2 === 0 && (e *= 2, e > 9 && (e -= 9)), a += e;
      }
      return a % 10 === 0;
    }
  };
}
export {
  u as default
};
