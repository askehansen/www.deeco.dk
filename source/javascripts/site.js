// This is where it all goes :)

function fps (val) {
  return Math.round(1000 / val)
}

window.onload = setInterval(function () {
  window.requestAnimationFrame(function () {
    document.querySelector('.scene-layer-back').style.transform = 'translateY(' + Math.round(window.scrollY / 4) + 'px)'
    document.querySelector('.scene-layer-front').style.transform = 'translateY(-' + Math.round(window.scrollY / 3) + 'px)'
  })
}, fps(120))

<script type="text/javascript">   
window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};   
heap.load("1053373017"); 
</script>