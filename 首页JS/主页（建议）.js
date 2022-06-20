function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("result").innerHTML =
        this.responseText;
      }
      // window.alert("发送成功");
    };
    xhttp.open("GET", "Form存储.txt", true);
    xhttp.send();
  }
