let timer;
function searchBackend(){
  console.log("request sent to bd")
}

function debouncedSearch(){
  clearTimeout(timer)
  timer=setTimeout(searchBackend,50)
}

debouncedSearch()
debouncedSearch()
debouncedSearch()
debouncedSearch()
debouncedSearch()
debouncedSearch()