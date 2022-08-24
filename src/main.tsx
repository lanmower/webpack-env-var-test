const p = (typeof process === 'undefined' ? null : process)
console.log({
  process: p,
  env: p?.env,
  var: p?.env?.VITE_TEST_VAR,
})
