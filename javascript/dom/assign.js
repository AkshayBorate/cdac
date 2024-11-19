document.getElementById("btn1").onclick = function () {
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;
  var data3 = document.getElementById("x3").value;
  //   console.log(typeof data1);
  console.log(isNaN(data1));

  console.log(data1);

  var msg = "";
  if (data1 == "" || data2 == "" || data3 == "") {
    msg = "Please enter all the values";
  } else if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
    msg = "All the values should be numbers";
  } else if (data1 < 0 || data2 < 0 || data3 < 0) {
    msg = "All the values should be positive";
  } else {
    var p = Number(data1);
    var r = parseFloat(data2);
    var n = parseInt(data3);
    var SI = (p * r * n) / 100;
    var interest = SI;
    var finalamt = p + SI;

    SI = Math.round(SI);
    interest = Math.round(interest);
    finalamt = Math.round(finalamt);

    document.getElementById("y1").innerHTML = p;
    document.getElementById("y2").innerHTML = interest;
    document.getElementById("y3").innerHTML = finalamt;
    

    Highcharts.chart("container", {
      chart: {
        type: "pie",
      },
      title: {
        text: "Egg Yolk Composition",
      },
      tooltip: {
        valueSuffix: "%",
      },
      subtitle: {
        text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: [
            {
              enabled: true,
              distance: 20,
            },
            {
              enabled: true,
              distance: -40,
              format: "{point.percentage:.1f}%",
              style: {
                fontSize: "1.2em",
                textOutline: "none",
                opacity: 0.7,
              },
              filter: {
                operator: ">",
                property: "percentage",
                value: 10,
              },
            },
          ],
        },
      },
      series: [
        {
          name: "Percentage",
          colorByPoint: true,
          data: [
            {
              name: "Interest",
              y: finalamt,
            },
            {
              name: "Loan Amount",
              sliced: true,
              selected: true,
              y: p,
            },
          ],
        },
      ],
    });
  }
  document.getElementById("result").innerHTML = msg;
};
