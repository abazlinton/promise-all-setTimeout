
let done = 0
let requested = 0

function sleep(ms) {
  return new Promise( resolve => {
    requested++
    console.log("requested", requested, "done", done)
    setTimeout(
      () => 
        { 
          done++
          resolve() 
        },
      ms)
  }).then(() => console.log("done", done))
}

let calls = 0

const sleeps = []

for (i=0;i<100;i++) {
  sleeps.push(  
      sleep(100)
  )
}

Promise.all( sleeps ).then(() => console.log("All done", done))

