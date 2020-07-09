function student() {
  var d;
  let con = document.querySelector("#table");
  var branch = document.querySelector("#branch").value;
  var batch = document.querySelector("#batch").value;
  console.log(batch);
  //   d = fetch(`./json/${branch}/batch_18_cgpi.json`)
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  // $.ajaxSetup({ cache: false });

  $("#search").keyup(get);
  //   function () {
  //     $("#state").val("");
  //     var searchField = $("#search").val();
  //     var expression = new RegExp(searchField, "i");
  //     $.getJSON(`./json/${branch}/batch_${batch}_cgpi.json`, function (data){
  //         $('.table-row').empty();
  //       $.each(data, function (key, value) {
  //         if (
  //           value.Name.search(expression) != -1 ||
  //           value.Rollno.search(expression) != -1 ||
  //           value.Branch.search(expression) != -1
  //         ) {
  //             console.log(value);
  //             let color = '';
  //             if(value.Rank == 1){
  //                 color = '#ffd701';
  //             }else if(value.Rank == 2){
  //                 color = '#c0c0c0';
  //             }else if(value.Rank == 3){
  //                 color = '#e3b778';
  //             }else{
  //                 color = '#00acbd';
  //             }
  //             console.log(color)
  //           $("#table").append(
  //             `
  //     <div class="table-row">
  //     <div class="table-cell name">
  //         <div class="head">${value.Rollno}</div>
  //         <div class="p">${value.Name}</div>
  //       </div>
  //     <div class="table-cell branch">
  //       <div class="head">Year : ${value.Year}</div>
  //       <div class="p">${value.Branch}</div>
  //     </div>
  //     <div class="table-cell cg">
  //       <div class="head">CGPA : ${value.Cgpa}</div>
  //       <div class="p">SGPA : ${value.Sgpa}</div>
  //     </div>
  //     <div class="table-cell rank">
  //     <div style="background-color: ${color}" class="r head">
  //       ${value.Rank}
  //     </div>
  //     <div class="p prank">invisible</div>
  //     </div>
  //     <hr>
  //   </div>
  //         `
  //           );
  //         }
  //       });
  //     });
  //   });

  //   $("#result").on("click", "li", function () {
  //     var click_text = $(this).text().split("|");
  //     $("#search").val($.trim(click_text));
  //     $("#result").html("");
  //   });
  //   data.map((d) => {
  //     let html = `
  //     <div class="table-row">
  //     <div class="table-cell name">
  //       <div class="head">${d.Rollno}</div>
  //       <div class="p">${d.Name}</div>
  //     </div>
  //     <div class="table-cell branch">
  //       <div class="head">Year : ${d.Year}</div>
  //       <div class="p">${d.Branch}</div>
  //     </div>
  //     <div class="table-cell cg">
  //       <div class="head">CGPA : ${d.Cgpa}</div>
  //       <div class="p">SGPA : ${d.Sgpa}</div>
  //     </div>
  //     <div class="table-cell rank">
  //     <div class="r head">
  //       ${d.Rank}
  //     </div>
  //     <div class="p prank">invisible</div>
  //     </div>
  //     <hr>
  //   </div>
  //         `;
  //     // con.insertAdjacentHTML('beforeend' , html);
  //   });
  //   return data;
  // });
}

student();

let branch, batch, c;
let con = document.querySelector("#table");

function check() {
  branch = document.querySelector("#branch").value;
  batch = document.querySelector("#batch").value;
  c = document.querySelector("#cg-sg").value;
  console.log(c);
  let branchop = document.querySelector("#branch");
  var batchop = document.querySelector("#batch");
  var cs = document.querySelector("#cg-sg");
  branchop.addEventListener("click", get());
  batchop.addEventListener("click", get());
  cs.addEventListener("click", get());
  var img = branch.split("_");
  console.log(img[0]);
  document.querySelector(
    "body"
  ).style.backgroundImage = `linear-gradient(to bottom , rgba(0, 0, 0, 0.881) , rgba(0, 0, 0, 0.885)) ,url('./images/${img[0]}.jpg')`;
}

function clear() {
  let divs = document.querySelectorAll("#table > div");

  for (var div of divs) {
    div.parentElement.removeChild(div);
  }
}

function get() {
  $("#state").val("");
  var searchField = $("#search").val();
  var expression = new RegExp(searchField, "i");
  $.getJSON(`./json/${branch}/batch_${batch}_${c}pi.json`, function (data) {
    // $('.table-row').empty();
    clear();
    $.each(data, function (key, value) {
      if (
        value.Name.search(expression) != -1 ||
        value.Rollno.search(expression) != -1 ||
        value.Branch.search(expression) != -1
      ) {
        // console.log(value);
        let color = "";
        if (value.Rank == 1) {
          color = "#ffd701";
        } else if (value.Rank == 2) {
          color = "#c0c0c0";
        } else if (value.Rank == 3) {
          color = "#e3b778";
        } else {
          color = "#00acbd";
        }
        // console.log(color)
        $("#table").append(
          `
    <div class="table-row">
    <div class="table-cell name">
        <div class="head">${value.Rollno}</div>
        <div class="p">${value.Name}</div>
      </div>
    <div class="table-cell branch">
      <div class="head">Year : ${value.Year}</div>
      <div class="p">${value.Branch}</div>
    </div>
    <div class="table-cell cg">
      <div class="head">CGPA : ${value.Cgpa}</div>
      <div class="p">SGPA : ${value.Sgpa}</div>
    </div>
    <div class="table-cell rank">
    <div style="background-color: ${color}" class="r head">
      ${value.Rank}
    </div>
    <div class="p prank">invisible</div>
    </div>
  </div>
        `
        );
      }
    });
  });
}

check();
