let div = d3.selectAll(".smoothing").select(".bar").call(d3.drag()
  .on("drag",function(event,d){
    let value = event.y < 15 ? -435 : (event.y > 550) ? 100 : event.y-450;
    d3.select(this).attr("y",value);
}));    





