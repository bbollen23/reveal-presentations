let div = d3.selectAll(".smoothing").select(".bar").call(d3.drag()
  .on("drag",function(event,d){
    let value = event.y < -15 ? -365 : (event.y > 350) ? 0 : event.y-350;
    d3.select(this).attr("y",value);
}));    





