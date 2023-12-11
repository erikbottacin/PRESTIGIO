const scroller = scrollama();

let redLine = d3.select("#line_red");
let redlinelength = redLine.node().getTotalLength();
redLine
  .attr("stroke-dasharray", redlinelength)
  .attr("stroke-dashoffset", redlinelength);

let blueLine = d3.select("#line_blue");
let bluelinelength = blueLine.node().getTotalLength();
blueLine
  .attr("stroke-dasharray", bluelinelength)
  .attr("stroke-dashoffset", bluelinelength);

let orangeLine = d3.select("#line_orange");
let orangelinelength = orangeLine.node().getTotalLength();
orangeLine
  .attr("stroke-dasharray", orangelinelength)
  .attr("stroke-dashoffset", orangelinelength);

let greenLine = d3.select("#line_green");
let greenlinelength = greenLine.node().getTotalLength();
greenLine
  .attr("stroke-dasharray", greenlinelength)
  .attr("stroke-dashoffset", greenlinelength);

function handleStepProgress(scroll) {
  console.log("prog:", scroll.progress);
  redLine.attr(
    "stroke-dashoffset",
    redlinelength - scroll.progress * redlinelength
  );
  blueLine.attr(
    "stroke-dashoffset",
    orangelinelength - scroll.progress * orangelinelength
  );
  orangeLine.attr(
    "stroke-dashoffset",
    orangelinelength - scroll.progress * orangelinelength
  );
  greenLine.attr(
    "stroke-dashoffset",
    orangelinelength - scroll.progress * orangelinelength
  );
}

function init() {
  scroller
    .setup({
      step: "#scroll",
      progress: true,
      debug: false,
      threshold: 1,
    })
    .onStepProgress(handleStepProgress);
}

init();